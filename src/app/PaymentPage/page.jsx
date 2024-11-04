"use client";
import { useEffect } from "react";
import "./style.css";
export default function MoyasarPaymentForm() {
  useEffect(() => {
    if (window.Moyasar) {
      window.Moyasar.init({
        element: ".mysr-form",
        amount: 1000, // Adjust the amount as needed
        currency: "SAR",
        description: "Coffee Order #1",
        publishable_api_key: "pk_test_AQpxBV31a29qhkhUYFYUFjhwllaDVrxSq5ydVNui",
        callback_url: "https://moyasar.com/thanks",
        methods: ["creditcard"],
      });
    }
  }, []);
  return <div className="mysr-form "></div>;
}
