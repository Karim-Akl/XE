import React from "react";
import "../order/order.css";
function _orderLoding() {
  return (
    <div className=" overflow-hidden">
      <div className="flex flex-col">
        <div className="animate-pulse bg-gray-300 w-52 h-6 rounded-full mb-2"></div>
      </div>
      <div className="flex flex-col mt-2">
        <div className="animate-pulse bg-gray-300 w-72 h-6 rounded-full mb-2"></div>
      </div>
      <div className="loading-div w-full animate-pulse h-96 items-center justify-center grid grid-cols-2  gap-2">
        <div className="flex flex-col">
          <div className="animate-pulse bg-gray-300 md:w-96 md:h-14  w-20 h-6 rounded-full mb-2"></div>
        </div>

        <div className="flex flex-col">
          <div className="animate-pulse bg-gray-300 md:w-96 md:h-14 w-20 h-6 rounded-full mb-2"></div>
        </div>

        <div className="flex flex-col translate-y-[-150%]">
          <div className="animate-pulse bg-gray-300 md:w-96 md:h-14 w-20 h-6 rounded-full mb-2"></div>
        </div>

        <div className="flex flex-col translate-y-[-150%]">
          <div className="animate-pulse bg-gray-300 md:w-96 md:h-14 w-20 h-6 rounded-full mb-2"></div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-2 translate-y-[-90%]">
        <div className="animate-pulse bg-gray-300 w-full md:h-36  h-20 rounded-full mb-2"></div>
      </div>

      <div className="flex flex-col w-full mt-2 translate-y-[-200%]">
        <div className="animate-pulse bg-gray-300 w-24 h-14 rounded-full"></div>
      </div>
    </div>
  );
}

export default _orderLoding;
