"use client";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="w-full h-auto relative bottom-0 mt-24">
      <div className="footer-class relative h-auto flex items-center justify-center text-center w-full flex-col align-center gap-4">
        <div
          style={{ transform: "translateY(-35%)" }} 
          className="scale top-0 flex z-20 rounded-xl overflow-hidden absolute flex-col items-center justify-evenly h-64 align-center gap-1 bg-background md:flex-row md:w-[70%]  w-[85%] "
        >
          <div className="absolute right-0 md:relative md:w-1/3  w-full opacity-0.5 z-0 h-[100%] img-class-footer">
            <img
              className="object-cover"
              src="/assets/images/bg4-1.webp"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="md:w-1/3 flex flex-col gap-4   ">
            <h2 className="textCont md:text-3xl text-xl font-bold text-textCont">
              هل لديك سؤال او استفسار؟
            </h2>
            <p className=" md:text-xl  text-white">
              تواصل مع خدمة العملاء الان
            </p>
          </div>
          <div className="md:w-1/3 z-10 w-full mb-4">
            <button
              onClick={() => {
                window.open("https://wa.me/966559999999", "_blank");
              }}
              style={{ transition: "0.2s" }}
              className="bg-white text-textCont rounded-xl hover:bg-iconHover hover:text-text font-bold"
            >
              اتصل بنا
            </button>
          </div>
        </div>

        <div className="w-full rotate-180 top-0 absolute h-46">
          <img
            src="/assets/images/divider.svg"
            alt=""
            className="footer-divider"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="w-full flex flex-col gap-6 mt-20 justify-center align-items-center items-center m-auto text-center">
          <div className="w-[100] justify-center align-items-center items-center m-auto text-center">
            <img
              src="/assets/images/logo-l.webp"
              alt=""
              style={{ width: "100%", maxWidth: "300px", height: "auto" }}
            />
          </div>
          <h2 className="text-xl text-white font-bold md:text-3xl">
            جسركم نحوا
            <span className="text-text text-xl font-bold md:text-3xl mr-1">
              استقدام آمن وسريع
            </span>
          </h2>
        </div>
      </div>

      <div className="footer-text flex flex-col items-center justify-around text-center w-full align-center gap-4 bg-secondary h-30 md:flex-row py-3">
        <div className="flex gap-2 p-2">
          <img
            src="/assets/images/mail.png"
            alt=""
            style={{ width: "30px", height: "auto" }}
          />
          <h2 className="text-white md:text-2xl text-xl">
            <span className="text-text text-xl"> الهاتف:</span> 920028066
          </h2>
        </div>
        <div className="flex gap-2 p-2">
          <img
            src="/assets/images/mail.png"
            alt=""
            style={{ width: "30px", height: "auto" }}
          />
          <h2 className="text-white md:text-2xl text-xl">
            <span className="text-text text-xl">موقعنا:</span>
            <span>طريق أبو بكر الصديق، حي الإسكان، بريدة</span>
          </h2>
        </div>
      </div>

      <div className="footer-text flex flex-col items-center justify-center text-center w-full m-auto align-center gap-4 bg-primary h-30 py-3">
        <h2 className="text-text text-xl">
          © جميع الحقوق محفوظة لشركة إكسي الخليج للإستقدام ٢٠٢٤
        </h2>
        <h2 className="text-white text-xs">
          تصميم وتطوير كريم عقل للتسويق الإلكتروني
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
