// import React from "react";

// export const Navbar: React.FC = () => {
//   return (
//     <section className="w-full bg-white md:shadow md:shadow-gray-400 py-2 px-8 font-bold fixed z-50 top-0">
//       <div className="gap-x-4 px-2 py-1  max-w-[1600px] mx-auto font-bold  flex item-center justify-center md:justify-between">
//         <div className="md:w-[140px] block md:flex items-center justify-center py-2">
//           <img src="/HAJIIJA.png" alt="" />
//         </div>
//         <div className="bg-gray-200 md:flex  md:gap-x-10 items-center hidden  justify-center py-2 px-10 shadow shadow-gray-400  rounded-lg">
//           <div className="flex items-center justify-center gap-x-1 md:gap-x-4">
//             <button>
//               صفحه اصلی
//             </button>
//             <span className="text-gray-400">|</span>
//           </div>
//           <button>اقامتگاه</button>
//           <button className="bg-[#4156D9] px-5 py-1.5 rounded-lg text-white">
//             مقالات
//           </button>
//           <div className="flex items-center justify-center gap-x-2">
//             <button>راه های ارتباطی</button>
//             <img className="w-[30px]" src="/public/Group 1895.png" alt="" />
//           </div>
//         </div>
//         <div className="hidden md:flex gap-x-4 items-center justify-center">
//           <button className="py-1.5 px-4 bg-[#4156D9] text-white rounded-lg">
//             ورود کاربر خریدار
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-19  bg-white shadow-md py-3 px-8 font-bold fixed z-50 top-0">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="w-[140px]">
          <img src="/HAJIIJA.png" alt="Logo" />
        </div>

        <div className="hidden  md:max-w-[700px] md:flex md:justify-center md:items-center  bg-gray-200 gap-x-3 md:gap-x-6 items-center py-2 px-6 shadow-md rounded-lg">
          <button>صفحه اصلی</button>
          <span className="text-gray-400">|</span>
          <button>اقامتگاه</button>
          <button className="bg-[#4156D9] px-5 py-1.5 rounded-lg text-white">مقالات</button>
          <div className="flex items-center gap-x-2">
            <button>راه‌های ارتباطی</button>
            <img className="w-[30px]" src="/Group 1895.png" alt="Contact" />
          </div>
        </div>

        <div className="hidden lg:flex">
          <button className="py-1.5 px-4 bg-[#4156D9] text-white rounded-lg">
            ورود کاربر خریدار
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-md py-4 px-6 mt-2 rounded-lg">
          <button className="py-2">صفحه اصلی</button>
          <button className="py-2">اقامتگاه</button>
          <button className="py-2 bg-[#4156D9] text-white rounded-lg">مقالات</button>
          <button className="py-2">راه‌های ارتباطی</button>
        </div>
      )}
    </nav>
  );
};
