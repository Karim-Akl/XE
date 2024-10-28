"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./services.css";

const Services = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Define the base URL for the images
  const imageBaseUrl = "https://xealkhalej-backend.alwajez.com/";

  useEffect(() => {
    fetch("https://xealkhalej-backend.alwajez.com/api/user/services")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setData(data || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the FAQ data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container m-auto px-4">
      <section className="flex justify-center items-center text-center mt-10 mb-10">
        {isLoading ? (
          <div className="flex justify-center w-full">
            <img src="/assets/images/loader.gif" alt="Loading..." width={50} />
          </div>
        ) : Data.length === 0 ? (
          <p>No services available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Data.map((service) => (
              <div key={service.id} className="relative">
                <Link href={`services/${service.id}`}>
                  <Image
                    src={`${imageBaseUrl}${service.image}`}
                    alt={service.title}
                    width={600}
                    height={413}
                    className="w-full h-auto"
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Services;
