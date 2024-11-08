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
    <div>
      <div className="bg-background w-full h-40 relative flex m-auto py-1 nav-route">
        <div className="flex gap-5 p-5 rounded-xl container items-end justify-between">
          <div className="flex mb-3">
            <h2 className="text-white text-4xl font-bold"> الخدمات </h2>
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
                    الخدمات
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
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
    </div>

  );
};

export default Services;
