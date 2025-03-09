export const TopHeader: React.FC = () => {
  return (
    <div className=" bg-gray-200 h-18 px-5  shadow shadow-gray-300 flex  items-center justify-center gap-x-4 md:gap-x-8">
      <div className="flex items-center justify-center md:gap-x-4">
        <button className="bg-white  rounded-lg p-2 ">
          <img src="/public/arrow-square-lft.png" alt="arrowRight" />
        </button>
        <span className="text-gray-400 hidden md:block">|</span>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-x-5">
        <button className=" font-bold bg-white md:px-4 md:py-2 py-2 px-3 text-sm text-nowrap rounded-lg">
          دانستنی های سفر{" "}
        </button>
        <span className="text-gray-400">|</span>
      </div>
      <div className=" hidden lg:flex items-center justify-center gap-x-5">
        <button className=" font-bold bg-white md:px-4 md:py-2 py-2 px-3 text-sm text-nowrap rounded-lg ">
          جاذبه های گردشگری
        </button>
        <span className="text-gray-400">|</span>
      </div>
      <div className="hidden lg:flex items-center justify-center gap-x-5">
        <button className=" font-bold bg-white  md:px-4 md:py-2 py-2 px-3 text-sm text-nowrap rounded-lg ">
          سفرهای ایمن
        </button>
        <span className="text-gray-400">|</span>
      </div>
      <div className="flex items-center justify-center gap-x-5">
        <button className=" font-bold bg-[#4156D9] px-4 py-2  text-nowrap rounded-lg text-white">
          اماکن تفریحی
        </button>
        <span className="text-gray-400 hidden md:block">|</span>
      </div>
      <div className="flex items-center justify-center gap-x-5">
        <button className=" font-bold bg-white px-4 py-2   text-nowrap rounded-lg ">
          اماکن توریستی
        </button>
        <span className="text-gray-400 hidden md:block">|</span>
      </div>
      <div className="flex items-center justify-center gap-x-5">
        <button className=" font-bold bg-white px-4 py-2   text-nowrap rounded-lg ">
          همه مقالات
        </button>
        <span className="text-gray-400 hidden md:block">|</span>
      </div>
      <button className=" font-bold bg-white p-2   rounded-lg ">
        <img src="/public/arrow-square-left.png" alt="arrowLeft" />
      </button>
    </div>
    
  );
};
