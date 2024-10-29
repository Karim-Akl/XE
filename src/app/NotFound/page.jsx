"use client";
import React from "react";
import Link from "next/link";
import "./not-found.css"; // إذا كنت تريد استخدام CSS مخصص

const NotFoundPage = () => {

  return (
    <div>

<div className="bg-background w-full h-40 relative flex m-auto py-1 nav-route">
          <div className="flex gap-5 p-5 rounded-xl container items-end justify-between">
            <div>
              <h2 className="text-white text-4xl font-bold"> اتصال بنا</h2>
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
      <nav>
        <div className="pt-bredwrap">
          <div className="container">
            <div className="ptboutr">
              <h2 className="mr-h1"> sdggd</h2>
              <ol className="breadcrumb">
                <li>
                  <a aria-label="Home" href="/" className="fa fa-home" />
                </li>
                <li>
                  <a aria-label="" href="/">
ewg
                  </a>
                </li>
                <li>
                  <a aria-label="" href="/">
dgf
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      <div className="not-found-container">
        <div>
          {/* <img
            src="/assets/images/404.webp"
            alt=""
            className="not-found-img"
          /> */}
        </div>
        <Link href="/" className="not-found-link">
fdx
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
