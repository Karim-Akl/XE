import React from "react";
import Link from "next/link";
import "./not-found.css"; // إذا كنت تريد استخدام CSS مخصص

const NotFoundPage = () => {

  return (
    <div>
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
