"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFileSignature,
  faShieldAlt,
  faHandsHelping,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import "./sub-service.css";
const SubService = () => {
  return (
    <div>
      <div className=" mx-auto p-8">
        {/* Section: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ">
          <div className="bg-white rounded-lg shadow-md p-8 text-center box">
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-600 text-3xl mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              مكتب معتمد ومرخص
            </h3>
            <p className="text-gray-600">
              خبرتنا منذ عام 2016 في مجال توظيف العمالة المنزلية، وترخيص رسمي من
              وزارة الموارد البشرية والتنمية الاجتماعية برقم (60).
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center box">
            <FontAwesomeIcon
              icon={faFileSignature}
              className="text-yellow-600 text-3xl mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              العقود الإلكترونية
            </h3>
            <p className="text-gray-600">
              عقودنا الإلكترونية الموثقة عبر منصة مساند تضمن حقوقكم وتوفر عملية
              استخدام سلسة وسريعة مع الالتزام بالشروط والقوانين.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center box">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-yellow-600 text-3xl mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">الضمان</h3>
            <p className="text-gray-600">
              نقدم ضمانًا يتيح لكم تجربة العمالة المنزلية لمدة تصل إلى 90 يومًا،
              مما يمنحكم الفرصة للتأكد من كفاءتهم وسلوكهم.
            </p>
          </div>
        </div>

        {/* Section: Header with Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-600 mb-4 ">
            استقبال طلبات من جميع أنحاء المملكة
          </h2>
          <p className="text-gray-700 text-lg ">
            يسعدنا استقبال طلباتكم من كافة أنحاء المملكة العربية السعودية،
            <p>
              مع التزامنا بتقديم خدمة استثنائية ومتابعة دقيقة طوال مدة العقد .
            </p>
          </p>
        </div>

        {/* Section: More Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-8 text-center box">
            <FontAwesomeIcon
              icon={faHandsHelping}
              className="text-yellow-600 text-3xl mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              دعم متواصل
            </h3>
            <p className="text-gray-600">
              فريقنا المتخصص مستعد لمساعدتكم في كافة الخطوات، من البداية وحتى
              اختيار العمالة المناسبة.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center box">
            <FontAwesomeIcon
              icon={faClipboardList}
              className="text-yellow-600 text-3xl mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              الوثائق المطلوبة
            </h3>
            <p className="text-gray-600">
              تسهيل عملية استقدام العمالة المنزلية يتطلب من عملائنا إصدار تأشيرة
              استقدام وإحضار الوثائق المطلوبة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubService;
