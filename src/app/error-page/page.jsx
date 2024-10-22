"use client";
import React from "react";
import "./error-page.css"; // تأكد من إنشاء ملف CSS بنفس الاسم

const ErrorPage = () => {

  // دالة لإعادة تحميل الصفحة
  const handleReload = (e) => {
    e.preventDefault(); // منع السلوك الافتراضي للرابط
    window.location.href = "/"; // الانتقال إلى الصفحة الرئيسية
  };

  return (
    <div>
      <div>
        <nav>
          <div className="pt-bredwrap">
            <div className="container">
              <div className="ptboutr">
                <h2 className="mr-h1">sfd</h2>
                <ol className="breadcrumb">
                  <li>
                    <a aria-label="Home" href="/" className="fa fa-home" />
                  </li>
                  <li>
                    <a aria-label="" href="/">
ssf
                    </a>
                  </li>
                  <li>
                    <a aria-label="" href="/">
sfd
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-title">OOPS!</h1>
          <p className="error-message">sfdfsd</p>
          {/* استخدام الدالة لتحديث الصفحة */}
          <a href="/" onClick={handleReload} className="error-link">
sdffsd
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
