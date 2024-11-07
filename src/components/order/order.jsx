"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import _orderLoding from "./_orderLoding";
import _OrderSummary from "./_OrderSummary";
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
  const [isModalOpen, setisModalOpen] = useState(false);
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
        localStorage.setItem("label", formattedOptions[0].label);
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

    // التحقق من صحة البيانات
    if (!selectedService) {
      toast.error("يجب أختيار خدمة");
      setIsSubmitting(false);
      return;
    }

    if (!formData.client_name || formData.client_name.trim().length < 3) {
      toast.error("يرجى إدخال اسم صالح");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.client_email)) {
      toast.error("يرجى إدخال بريد إلكتروني صالح");
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^[0-9]{10}$/; // تأكد من أن الجوال مكون من 10 أرقام فقط
    if (!phoneRegex.test(formData.client_phone)) {
      toast.error("يرجى إدخال رقم هاتف صالح");
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
      console.log("Booking ID:", booking_id);

      if (paymentMethod === "mada" && router) {
        localStorage.setItem("booking_id", booking_id);
        router.push("/PaymentPage");
      }

      localStorage.setItem("client_name", formData.client_name);
      localStorage.setItem("client_email", formData.client_email);
      localStorage.setItem("client_phone", formData.client_phone);
      localStorage.setItem("notes", formData.notes);
      localStorage.setItem("selectedService", formData.selected_service);
      localStorage.setItem("price", price);

      setisModalOpen(true);
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
    } finally {
      // التأكد من إعادة حالة الإرسال
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
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
                            fontSize: "1rem",
                            width: "100%",
                            backgroundColor: "hsl(206.67deg 33.33% 94.71%)",
                            borderColor: "hsl(206.67deg 33.33% 94.71%)",
                            padding: "0px 8px",
                            borderRadius: "8px", // لضبط الحواف بشكل أفضل
                            ":hover": {
                              borderColor: "hsl(206.67deg 33.33% 94.71%)",
                            },
                          }),
                          option: (base) => ({
                            ...base,
                            fontSize: "1rem",
                            padding: "8px 12px",
                          }),
                          dropdownIndicator: (base) => ({
                            ...base,
                            padding: "5px", // ضبط المساحة حول المؤشر
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
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>تم إرسال الطلب بنجاح</h2>
            <p>تفاصيل الطلب:</p>
            <ul>
              <li>الاسم: {localStorage.getItem("client_name")}</li>
              <li>البريد الإلكتروني: {localStorage.getItem("client_email")}</li>
              <li>الهاتف: {localStorage.getItem("client_phone")}</li>
              <li>الخدمة: {localStorage.getItem("label")}</li>
              <li>السعر: {localStorage.getItem("price")} SAR</li>
              <li>
                طريقة الدفع: {paymentMethod === "cash" ? "نقداً" : "فيزا"}
              </li>
            </ul>
            <button onClick={handlePrint}>طباعة</button>
            <button onClick={() => setisModalOpen(false)}>إغلاق</button>
          </div>
        </div>
      )}
      {/* <_OrderSummary /> */}
    </div>
  );
}

export default Order;
