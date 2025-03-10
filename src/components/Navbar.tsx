// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";

// export const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-md py-3 px-4 md:px-8 font-bold fixed z-50 top-0 overflow-hidden">
//       <div className="max-w-[1200px] mx-auto flex items-center justify-between py-2 md:py-0">
//         <div className="w-[140px]">
//           <img src="/HAJIIJA.png" alt="Logo" className="max-w-full h-auto" />
//         </div>

//         <div className="hidden md:flex md:max-w-[700px] md:justify-center md:items-center bg-gray-200 gap-x-3 md:gap-x-6 py-2 px-6 shadow-md rounded-lg">
//           <button className="hover:text-[#4156D9]">صفحه اصلی</button>
//           <span className="text-gray-400">|</span>
//           <button className="hover:text-[#4156D9]">اقامتگاه</button>
//           <span className="text-gray-400">|</span>
//           <button className="bg-[#4156D9] px-5 py-1.5 rounded-lg text-white">مقالات</button>
//           <span className="text-gray-400">|</span>
//           <div className="flex items-center gap-x-2">
//             <button className="hover:text-[#4156D9]">راه‌های ارتباطی</button>
//             <img className="w-[30px]" src="/Group 1895.png" alt="Contact" />
//           </div>
//         </div>

//         <div className="hidden lg:flex">
//           <button className="py-1.5 px-4 bg-[#4156D9] text-white rounded-lg">ورود کاربر خریدار</button>
//         </div>

//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden flex flex-col bg-gray-100 shadow-md py-4 px-6 mt-2 rounded-lg w-full">
//           <button className="py-2">صفحه اصلی</button>
//           <button className="py-2">اقامتگاه</button>
//           <button className="py-2 bg-[#4156D9] text-white rounded-lg">مقالات</button>
//           <button className="py-2">راه‌های ارتباطی</button>
//         </div>
//       )}
//     </nav>
//   );
// };
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md py-3 px-4 md:px-8 font-bold fixed z-50 top-0">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between py-2 md:py-0">
        <div className="md:block lg:hidden lg:p-0 pb-4">
          <div className="hidden md:flex md:w-full md:justify-center bg-gray-200 gap-x-3 md:gap-x-6 py-2 px-6 shadow-md rounded-lg md:order-1 lg:order-none">
            <button className="hover:text-[#4156D9]">صفحه اصلی</button>
            <span className="text-gray-400">|</span>
            <button className="hover:text-[#4156D9]">اقامتگاه</button>
            <span className="text-gray-400">|</span>
            <button className="bg-[#4156D9] px-5 py-1.5 rounded-lg text-white">
              مقالات
            </button>
            <span className="text-gray-400">|</span>
            <div className="flex items-center gap-x-2">
              <button className="hover:text-[#4156D9]">راه‌های ارتباطی</button>
              <img className="w-[30px]" src="/Group 1895.png" alt="Contact" />
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="w-[140px] md:w-full md:text-center md:order-2 lg:order-none">
            <img
              src="/HAJIIJA.png"
              alt="Logo"
              className="max-w-full h-auto mx-auto"
            />
          </div>
        </div>
        <div className="md:hidden lg:block">
          <div className="w-[140px] md:w-full md:text-center md:order-2 lg:order-none">
            <img
              src="/HAJIIJA.png"
              alt="Logo"
              className="max-w-full h-auto mx-auto"
            />
          </div>
        </div>
        <div className="md:hidden lg:block">
          <div className="hidden md:flex md:w-full md:justify-center bg-gray-200 gap-x-3 md:gap-x-6 py-2 px-6 shadow-md rounded-lg md:order-1 lg:order-none">
            <button className="hover:text-[#4156D9]">صفحه اصلی</button>
            <span className="text-gray-400">|</span>
            <button className="hover:text-[#4156D9]">اقامتگاه</button>
            <span className="text-gray-400">|</span>
            <button className="bg-[#4156D9] px-5 py-1.5 rounded-lg text-white">
              مقالات
            </button>
            <span className="text-gray-400">|</span>
            <div className="flex items-center gap-x-2">
              <button className="hover:text-[#4156D9]">راه‌های ارتباطی</button>
              <img className="w-[30px]" src="/Group 1895.png" alt="Contact" />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <button className="py-1.5 px-4 bg-[#4156D9] text-white rounded-lg">
            ورود کاربر خریدار
          </button>
        </div>

        <div className="md:hidden pt-3">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-100 shadow-md py-4 px-6 mt-2 rounded-lg w-full">
          <button className="py-2">صفحه اصلی</button>
          <button className="py-2">اقامتگاه</button>
          <button className="py-2 bg-[#4156D9] text-white rounded-lg">
            مقالات
          </button>
          <button className="py-2">راه‌های ارتباطی</button>
        </div>
      )}
    </nav>
  );
};
