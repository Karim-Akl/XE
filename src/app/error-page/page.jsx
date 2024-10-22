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
                <h2 className="mr-h1">{t("notfound.ErrorPage")}</h2>
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
                      {t("notfound.ErrorPage")}
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
          <p className="error-message">{t("notfound.Error Page-1")}</p>
          {/* استخدام الدالة لتحديث الصفحة */}
          <a href="/" onClick={handleReload} className="error-link">
            {t("notfound.back-home-error")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
