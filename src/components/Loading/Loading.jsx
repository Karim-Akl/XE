// components/Loading.jsx
import React, { useEffect, useState } from "react";
import "./loading.css"; // Add your custom CSS for animation

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="logo-container">
            <img
              src="/assets/images/logo.webp" // Change to your logo path
              alt="Company Logo"
              className="logo"
            />
            <p className="company-name text-2xl font-bold">شركة إكسي الخالج للاستقدام</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loading;
