"use client";
import { useEffect, useState } from "react";

export default function OrderSummary() {
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    // استرجاع بيانات الدفع من localStorage
    const storedPaymentDetails = localStorage.getItem("paymentDetails");
    if (storedPaymentDetails) {
      setPaymentDetails(JSON.parse(storedPaymentDetails));
    }
  }, []);

  if (!paymentDetails) {
    return <p>لم يتم العثور على تفاصيل الدفع بعد.</p>;
  }

  const { paymentId, status, amount, method } = paymentDetails;

  return (
    <div className="order-summary">
      <h2>تفاصيل الدفع</h2>
      <p><strong>رقم المعاملة:</strong> {paymentId}</p>
      <p><strong>الحالة:</strong> {status === "success" ? "تم الدفع بنجاح" : "فشل الدفع"}</p>
      <p><strong>المبلغ:</strong> {amount} ريال سعودي</p>
      <p><strong>طريقة الدفع:</strong> {method}</p>
    </div>
  );
}
