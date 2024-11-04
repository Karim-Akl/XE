"use client";
import { useEffect, useState } from "react";
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
        callback_url: "http://localhost:3001/", // الصفحة الرئيسية
        methods: ["creditcard"],
      });
    }
  }, [amount, bookingId]);

  // متابعة إتمام عملية الدفع
  useEffect(() => {
    const handlePaymentResponse = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const paymentId = urlParams.get("id");
      const status = urlParams.get("status");
      const receivedAmount = urlParams.get("amount");
      const message = urlParams.get("message");

      // تحديد حالة الدفع بناءً على قيمة message
      const paymentStatus = message === "APPROVED" ? "success" : "failed";

      if (status === "paid" && paymentId && bookingId) {
        try {
          const response = await fetch(
            "https://xealkhalej-backend.alwajez.com/api/user/add-transaction",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                booking_id: bookingId,
                amount: receivedAmount / 100, // تحويل المبلغ إلى الريالات
                payment_status: paymentStatus,
                payment_method: "mada",
                transaction_id: paymentId,
              }),
            }
          );

          if (response.ok) {
            console.log("Transaction successfully recorded");
          } else {
            console.error("Failed to record transaction");
          }
        } catch (error) {
          console.error("Error recording transaction:", error);
        }
      }
    };

    handlePaymentResponse();
  }, [bookingId]);

  return <div className="mysr-form"></div>;
}
