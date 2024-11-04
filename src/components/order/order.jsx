"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import Link from "next/link";
import "./order.css";

function Order() {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [price, setPrice] = useState("");
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    client_phone: "",
    notes: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash"); // حالة لتخزين طريقة الدفع

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

    if (!selectedService) {
      alert("Please select a service.");
      return;
    }

    const bookingData = {
      client_name: formData.client_name,
      client_email: formData.client_email,
      client_phone: formData.client_phone,
      service_id: selectedService.value,
      payment_status: "pending",
      payment_gate: paymentMethod, // استخدم طريقة الدفع المحددة
      booking_status: "pending",
      notes: formData.notes,
    };

    try {
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

      if (!response.ok) throw new Error("Failed to submit booking.");

      alert("Booking submitted successfully!");
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
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
              <div>
                <div className="flex flex-col">
                  <div className="animate-pulse bg-gray-300 w-52 h-6 rounded-full mb-2"></div>
                </div>
                <div className="flex flex-col mt-2">
                  <div className="animate-pulse bg-gray-300 w-72 h-6 rounded-full mb-2"></div>
                </div>
                <div className="loading-div w-full animate-pulse h-96 items-center justify-center grid grid-cols-2 gap-2">
                  <div className="flex flex-col">
                    <div className="animate-pulse bg-gray-300 w-96 h-14 rounded-full mb-2"></div>
                  </div>

                  <div className="flex flex-col">
                    <div className="animate-pulse bg-gray-300 w-96 h-14 rounded-full mb-2"></div>
                  </div>

                  <div className="flex flex-col">
                    <div className="animate-pulse bg-gray-300 w-96 h-14 rounded-full mb-2"></div>
                  </div>

                  <div className="flex flex-col">
                    <div className="animate-pulse bg-gray-300 w-96 h-14 rounded-full mb-2"></div>
                  </div>
                </div>

                <div className="flex flex-col w-full mt-2">
                  <div className="animate-pulse bg-gray-300 w-full h-36 rounded-full mb-2"></div>
                </div>

                <div className="flex flex-col w-full mt-2">
                  <div className="animate-pulse bg-gray-300 w-24 h-14 rounded-full"></div>
                </div>
              </div>
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
                                name="engine"
                              />
                              <span className="radio-tile">

                                <span className="radio-label">كاش </span>
                              </span>
                            </label>
                            <label>
                              <input
                                defaultChecked=""
                                className="radio-input"
                                type="radio"
                                name="engine"
                              />
                              <span className="radio-tile">
    
                                <span className="radio-label">فيزا</span>
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
                    <div className="flex but-form">
                      <button type="submit">
                        <span>ارسل الطلب</span>
                        <span className="semicircle"></span>
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
