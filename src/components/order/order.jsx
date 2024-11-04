"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import _orderLoding from "./_orderLoding";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import "./order.css";

function Order() {
  const router = typeof window !== "undefined" ? useRouter() : null;
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [price, setPrice] = useState("");
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    client_phone: "",
    notes: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");

  useEffect(() => {
    fetch("https://xealkhalej-backend.alwajez.com/api/user/services")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        const formattedOptions = data.map((service) => ({
          value: service.id,
          label: service.title,
          price: service.price,
        }));
        setOptions(formattedOptions);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setIsLoading(false);
      });
  }, []);

  const handleServiceChange = (selectedOption) => {
    setSelectedService(selectedOption);
    setPrice(selectedOption ? selectedOption.price : "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!selectedService) {
      alert("Please select a service.");
      setIsSubmitting(false);
      return;
    }

    const bookingData = {
      client_name: formData.client_name,
      client_email: formData.client_email,
      client_phone: formData.client_phone,
      service_id: selectedService.value,
      payment_status: "pending",
      payment_gate: paymentMethod,
      booking_status: "pending",
      notes: formData.notes,
    };

    try {
      console.log("Sending booking data:", bookingData);

      const response = await fetch(
        "https://xealkhalej-backend.alwajez.com/api/user/add-booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      console.log("Response status:", response.status);
      if (!response.ok) throw new Error("Failed to submit booking.");

      const result = await response.json();
      console.log("Booking result:", result);

      toast.success("تم حجز الخدمة بنجاح! سنتواصل معكم قريباً.");

      const booking_id = result.booking.id;

      if (paymentMethod === "cash") {
        const transactionData = {
          booking_id,
          amount: price,
          payment_status: "success",
          payment_method: "cash",
          transaction_id: `CASH${Math.floor(Math.random() * 1000000)}`,
        };

        console.log("Sending transaction data:", transactionData);

        const transactionResponse = await fetch(
          "https://xealkhalej-backend.alwajez.com/api/user/add-transaction",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(transactionData),
          }
        );

        console.log("Transaction response status:", transactionResponse.status);
        if (!transactionResponse.ok)
          throw new Error("Failed to submit transaction.");

        toast.success("تمت إضافة المعاملة النقدية بنجاح.");
      } else if (paymentMethod === "mada" && router) {
        localStorage.setItem("booking_id", booking_id);
        router.push("/PaymentPage");
      }

      setFormData({
        client_name: "",
        client_email: "",
        client_phone: "",
        notes: "",
      });
      setSelectedService(null);
      setPrice("");
      setPaymentMethod("cash");
    } catch (error) {
      console.error("Error submitting booking or transaction:", error);
      toast.error("حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.");
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={5000} />

      <div className="bg-background w-full h-40 relative flex m-auto py-1 nav-route">
        <div className="flex gap-5 p-5 rounded-xl container items-end justify-between">
          <div>
            <h2 className="text-white text-4xl font-bold">اتصال بنا</h2>
          </div>
          <div className="flex gap-5 bg-white p-3 rounded-xl">
            <a href="/">
              <img
                src="/assets/images/icon-03.webp"
                alt=""
                width={20}
                className="object-cover"
              />
            </a>
            <p>{`>`}</p>
            <p className="text-smText font-bold">اتصال بنا</p>
          </div>
        </div>
      </div>
      <section className="order-section">
        <div className="contact">
          <div className="container">
            {isLoading ? (
              <_orderLoding />
            ) : (
              <div className="contact-form">
                <div className="form-title">
                  <h2>طلب الخدمة</h2>
                  <p>
                    يرجى الاتصال بنا باستخدام النموذج وسنقوم بالرد عليك في أقرب
                    وقت ممكن.
                  </p>
                </div>
                <div className="form-info">
                  <form onSubmit={handleSubmit}>
                    <div className="flex">
                      <input
                        type="text"
                        name="client_name"
                        placeholder="الاسم *"
                        required
                        value={formData.client_name}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="client_phone"
                        placeholder="الجوال *"
                        required
                        value={formData.client_phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex">
                      <input
                        type="email"
                        name="client_email"
                        placeholder="البريد *"
                        required
                        value={formData.client_email}
                        onChange={handleInputChange}
                      />
                      <Select
                        options={options}
                        className="select border-none w-full sm:w-32 md:w-60 lg:w-80"
                        classNamePrefix="select"
                        placeholder="نوع الخدمة *"
                        styles={{
                          control: (base) => ({
                            ...base,
                            fontSize: "0.875rem",
                            width: "100%",
                          }),
                          option: (base) => ({
                            ...base,
                            fontSize: "0.75rem",
                            padding: "4px 8px",
                          }),
                        }}
                        onChange={handleServiceChange}
                      />
                    </div>
                    <div className="flex">
                      {selectedService && (
                        <div className="mt-4 price-container flex">
                          <input
                            type="text"
                            value={`${price} SAR`}
                            readOnly
                            className="price-input"
                            placeholder="السعر"
                          />
                        </div>
                      )}
                      {selectedService && (
                        <div>
                          <div className="radio-inputs">
                            <label>
                              <input
                                className="radio-input"
                                type="radio"
                                name="paymentMethod"
                                value="cash"
                                checked={paymentMethod === "cash"}
                                onChange={handlePaymentMethodChange}
                              />
                              <span className="radio-tile">
                                <span className="radio-label">
                                  الدفع نقداً{" "}
                                </span>
                              </span>
                            </label>
                            <label>
                              <input
                                className="radio-input"
                                type="radio"
                                name="paymentMethod"
                                value="mada"
                                checked={paymentMethod === "mada"}
                                onChange={handlePaymentMethodChange}
                              />
                              <span className="radio-tile">
                                <span className="radio-label">الدفع بفيزا</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex">
                      <textarea
                        name="notes"
                        cols="20"
                        rows="10"
                        placeholder="ملاحظاتك"
                        value={formData.notes}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex but-form relative ">
                      <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <span>جاري الإرسال...</span>
                        ) : (
                          <span>ارسل الطلب</span>
                        )}
                        <span className="semicircle absolute"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
