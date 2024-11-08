"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./style.css";

export default function MoyasarPaymentForm() {
  const [amount, setAmount] = useState(null); // لتخزين المبلغ من الـ API
  const [bookingId, setBookingId] = useState(null); // لتخزين booking_id ديناميكياً

  useEffect(() => {
    // جلب booking_id من LocalStorage
    const storedBookingId = localStorage.getItem("booking_id");
    if (storedBookingId) {
      setBookingId(storedBookingId);
    }

    // جلب مبلغ الخدمة من API
    async function fetchAmount() {
      try {
        const response = await fetch(
          "https://xealkhalej-backend.alwajez.com/api/user/services"
        );
        const data = await response.json();

        // الحصول على أول خدمة كمثال
        const serviceAmount = data[0]?.price * 100; // تحويل المبلغ إلى هللات
        setAmount(serviceAmount);
      } catch (error) {
        console.error("Error fetching amount:", error);
      }
    }

    fetchAmount();
  }, []);

  useEffect(() => {
    // تهيئة نموذج الدفع باستخدام Moyasar
    if (amount && bookingId && window.Moyasar) {
      window.Moyasar.init({
        element: ".mysr-form",
        amount: amount,
        currency: "SAR",
        description: `طلب خدمة #${bookingId}`,
        publishable_api_key: "pk_test_cGYZbwKBYQup1MQagNvea8uAg51Am9Zez2ZUwXGa",
        methods: ["creditcard"],
        callback_url: "http://localhost:3001/request-service", // Replace with your callback URL

        // Callback called when payment is successfully completed
        onCompleted: async (payment) => {
          const paymentId = payment.id;
          const paymentStatus =
            payment.status === "paid" ? "success" : "failed";
          const receivedAmount = payment.amount / 100;

          try {
            const response = await fetch(
              "https://xealkhalej-backend.alwajez.com/api/user/add-transaction",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  booking_id: bookingId,
                  amount: receivedAmount,
                  payment_status: paymentStatus,
                  payment_method: "mada",
                  transaction_id: paymentId,
                }),
              }
            );

            const responseData = await response.json();
            if (response.ok) {
              console.log("Transaction successfully recorded");

              // تخزين بيانات الدفع في localStorage
              localStorage.setItem(
                "paymentDetails",
                JSON.stringify({
                  paymentId,
                  status: paymentStatus,
                  amount: receivedAmount,
                  method: "mada",
                })
              );
            } else {
              console.error("Failed to record transaction", responseData);
            }
          } catch (error) {
            console.error("Error recording transaction:", error);
          }
        },

        onFailed: (error) => {
          console.error("Payment failed:", error);
        },
      });
    }
  }, [amount, bookingId]);

  return (
    <section>
      <div className="bg-background w-full h-40 relative flex m-auto py-1 nav-route">
        <div className="flex gap-5 p-5 rounded-xl container items-end justify-between">
          <div className="flex mb-3">
            <h2 className="text-white text-4xl font-bold"> الدفع فيزا </h2>
          </div>
          <div className="flex mb-3 ">
            <nav aria-label="Breadcrumb" class="flex">
              <ol class="flex overflow-hidden rounded-lg  ">
                <li class="flex items-center">
                  <Link
                    href="/"
                    class="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>

                    <span class="ms-1.5 text-xs font-medium"> الرئيسية </span>
                  </Link>
                </li>

                <li class="relative flex items-center">
                  <span class="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rotate-180"></span>

                  <a
                    href="#"
                    class="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                  >
                    الدفع
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="mysr-form"></div>;
    </section>
  );
}
