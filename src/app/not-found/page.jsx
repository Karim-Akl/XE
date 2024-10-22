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
              <h2 className="mr-h1"> {t("notfound.notfoundpage")}</h2>
              <ol className="breadcrumb">
                <li>
                  <a aria-label="Home" href="/" className="fa fa-home" />
                </li>
                <li>
                  <a aria-label="" href="/">
                    {t("header.home")}
                  </a>
                </li>
                <li>
                  <a aria-label="" href="/">
                    {t("notfound.notfoundpage")}
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      <div className="not-found-container">
        <div>
          <img
            src="/404-error-page-not-found-600nw-1815888590.webp"
            alt=""
            className="not-found-img"
          />
        </div>
        <Link href="/" className="not-found-link">
          {t("notfound.back-home-error")}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
