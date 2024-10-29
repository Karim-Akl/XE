// components/ReviewsSwiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./reviews-swiper.css"
const ReviewsSwiper = () => {
  const reviews = [
    {
      name: "عبدالمجيد المنسلح",
      position: "استخدام عاملة منزلية",
      feedback:
        "والله التعامل ممتاز من الموظفين والموظفات، استخدام عاملة وكانت تجربة ما تُنسى. العاملة ماهرة وتجيد عملها بكل احترافية.",
      image: "/assets/images/icon-04.webp", // صورة رمزية Placeholder
    },
    {
      name: "عبدالمحسن العتيبي",
      position: "استخدام سائق خاص",
      feedback:
        "من أفضل شركات الاستقدام، تعامل مميز وسرعة في الإجراءات. أنصح بها بشدة.",
      image: "/assets/images/icon-04.webp", // صورة رمزية Placeholder
    },
    {
      name: "عبدالمحسن العتيبي",
      position: "استخدام سائق خاص",
      feedback:
        "من أفضل شركات الاستقدام، تعامل مميز وسرعة في الإجراءات. أنصح بها بشدة.",
      image: "/assets/images/icon-04.webp", // صورة رمزية Placeholder
    },
    {
      name: "عبدالمحسن العتيبي",
      position: "استخدام سائق خاص",
      feedback:
        "من أفضل شركات الاستقدام، تعامل مميز وسرعة في الإجراءات. أنصح بها بشدة.",
      image: "/assets/images/icon-04.webp", // صورة رمزية Placeholder
    },
    {
      name: "عبدالمحسن العتيبي",
      position: "استخدام سائق خاص",
      feedback:
        "من أفضل شركات الاستقدام، تعامل مميز وسرعة في الإجراءات. أنصح بها بشدة.",
      image: "/assets/images/icon-04.webp", // صورة رمزية Placeholder
    },
    // يمكنك إضافة المزيد من التقييمات هنا إذا أردت
  ];

  return (
    <div className="container flex flex-col items-center justify-center p-6 ">
      {/* العنوان الرئيسي */}
      <h2 className="text-yellow-600 text-2xl md:text-4xl  font-bold mb-5 pb-2 border-b-4 border-yellow-600 ">
        آراء وتقييمات عملائنا
      </h2>
      <p className="text-gray-600 text-center mb-8 md:w-[50%]">
        ما يقوله عملاؤنا عن تجربتهم مع شركة اكس الخليج للاستقدام. تقييمات حقيقية
        من عملاء راضين تعكس التزامنا بالجودة والخدمة المتميزة.
      </p>

      {/* سلايدر التقييمات */}
      <div className="w-full  ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Thumbs]}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 1.9, // يظهر جزء من الشريحة التالية على الشاشات الأكبر
            },
            0: {
              slidesPerView: 1, // يظهر شريحة واحدة فقط على الشاشات الصغيرة
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 mb-10 box rounded-lg shadow-lg flex items-center gap-4 max-w-xl h-40  mx-auto  relative">
                {/* الصورة الرمزية */}
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-200 shadow-md">
                  <img
                    src={review.image}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* تفاصيل التعليق */}
                <div className="text-right">
                  <h3 className="text-yellow-600 text-lg font-semibold">
                    {review.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-1">
                    {review.position}
                  </p>
                  <p className="text-gray-700 text-sm">{review.feedback}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSwiper;
