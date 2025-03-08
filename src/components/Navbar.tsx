import React from "react";

export const Navbar: React.FC = () => {
  return (
    <section className="w-full bg-white shadow shadow-gray-400 py-2 px-8 font-bold fixed z-50 top-0">
      <div className="gap-x-4 px-2 py-1  max-w-[1600px] mx-auto font-bold hidden md:flex item-center justify-between">
        <div className="w-[140px] flex items-center justify-center">
          <img src="/HAJIIJA.png" alt="" />
        </div>
        <div className="bg-gray-200 flex gap-x-10 items-center justify-center py-2 px-10 shadow shadow-gray-400  rounded-lg">
          <div className="flex items-center justify-center gap-x-4">
            <button>
              صفحه اصلی
            </button>
            <span className="text-gray-400">|</span>
          </div>
          <button>اقامتگاه</button>
          <button className="bg-[#4156D9] px-5 py-1.5 rounded-lg text-white">
            مقالات
          </button>
          <div className="flex items-center justify-center gap-x-2">
            <button>راه های ارتباطی</button>
            <img className="w-[30px]" src="/public/Group 1895.png" alt="" />
          </div>
        </div>
        <div className="flex gap-x-4 items-center justify-center">
          <button className="py-1.5 px-4 bg-[#4156D9] text-white rounded-lg">
            ورود کاربر خریدار
          </button>
        </div>
      </div>
    </section>
  );
};
