import React from "react";
import "../../components/icons/icons";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
const Page = () => {
  return (
    <div>
      <Header />
      <section className="services-details container mt-10 mb-10 h-auto">
        <div className=" flex justify-center items-start  text-start w-full m-auto gap-10 justify-between">
          <div className="w-1/2 flex justify-right items-right">
            <img
              src="/assets/images/bg4-1.webp "
              alt=""
              width={"100%"}
              className="object-contain"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-5 items-start justify-start">
            <div className="gap-4 flex-col md:flex-row flex w-full">
              <span className="text-5xl  text-textCont  font-bold">
                استقدام
              </span>{" "}
              <span className="text-5xl  text-text font-bold border-b-4 border-text pb-3 w-max">
                عاملة منزلية{" "}
              </span>
            </div>
            <div>
              <p className="text-xl  text-textCont  mt-4">
                {`              في شركة إكسي الخليج للاستقدام، نفهم أهمية وجود عاملة منزلية موثوقة
              وماهرة تساهم في راحة بيتك وسعادة أسرتك. نحن ملتزمون بتوفير أفضل
              الكوادر المدربة والمؤهلة لتلبية جميع احتياجاتكم المنزلية، نستقدم
              من جميع الدول المصرح بها ونخدم جميع مناطق المملكة.`}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-4xl  text-textCont  font-bold">{`لماذا تختار خدمتنا؟`}</h2>
            </div>
            <div className="w-full flex flex-col  gap-4">
              <div className="flex gap-5 mt-4 w-full">
                <div className="flex gap-5 mt-4 w-full">
                  <div className="flex gap-3 w-full">
                    <div className="mt-2">
                      <svg
                        class="w-6 h-6 stroke-[2px] stroke-[#c2a05b] hover:scale-125 hover:stroke-black transition-colors duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2z"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl  text-textCont">جودة مضمونة</h2>
                      <p className="text-sl  text-textCont"> 
                        عمالة مدربة من دول مختارة بعناية لتوفير أعلى مستويات
                        الجودة
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-4 w-full">
                  <div className="flex gap-3 w-full">
                    <div className="mt-2">
                      <svg
                        class="w-6 h-6 stroke-[2px] stroke-[#c2a05b] hover:scale-125 hover:stroke-black transition-colors duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2z"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl  text-textCont">جودة مضمونة</h2>
                      <p className="text-sl  text-textCont"> 
                        عمالة مدربة من دول مختارة بعناية لتوفير أعلى مستويات
                        الجودة
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 mt-4 w-full">
              <div className="flex gap-5 mt-4 w-full">
                  <div className="flex gap-3 w-full">
                    <div className="mt-2">
                      <svg
                        class="w-6 h-6 stroke-[2px] stroke-[#c2a05b] hover:scale-125 hover:stroke-black transition-colors duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2z"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl  text-textCont">جودة مضمونة</h2>
                      <p className="text-sl  text-textCont"> 
                        عمالة مدربة من دول مختارة بعناية لتوفير أعلى مستويات
                        الجودة
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 mt-4 w-full">
                  <div className="flex gap-3 w-full">
                    <div className="mt-2">
                      <svg
                        class="w-6 h-6 stroke-[2px] stroke-[#c2a05b] hover:scale-125 hover:stroke-black transition-colors duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2z"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl  text-textCont">جودة مضمونة</h2>
                      <p className="text-sl  text-textCont"> 
                        عمالة مدربة من دول مختارة بعناية لتوفير أعلى مستويات
                        الجودة
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  class="relative bg-[var(--text)] text-white py-4 px-10 rounded-xl transition-all duration-300 ease-in-out cursor-pointer text-[15px] font-bold uppercase border-transparent hover:bg-[var(--primary)]"
                >
                  <span>إرسال</span>
                  <span class="semicircle absolute top-1 left-[95px] w-[11px] h-[35px] overflow-hidden">
                    <span class="block absolute w-[35px] h-[35px] border-2 border-white rounded-full"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
