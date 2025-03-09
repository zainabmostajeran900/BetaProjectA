export const HotMagazine: React.FC = () => {
  return (
    <div className=" w-full bg-gray-100  px-8">
      <h1 className="flex flex-col items-start justify-start font-bold text-xl pb-7 pt-2 px-2 ">
        مجله های داغ و محبوب اماکن تاریخی
      </h1>
      <div className="flex flex-col items-center gap-y-4 justify-center lg:flex-row lg:justify-between  lg:items-center gap-x-3 ">
        <div className=" flex flex-col item-center justify-center lg:flex-row lg:items-start lg:justify-center lg:gap-x-3 gap-x-5 rounded-lg">
          <div>
            <img className="md:w-[800px] md:h-[800px] lg:h-[400px] lg:w-[500px]" src="/public/Group 1833.png" alt="" />
          </div>
          <div className="flex flex-col gap-y-5 text-gray-400 text-xl lg:text-base font-bold lg:p-0 pt-4">
            <p className="border-r-2 h-12 flex items-center p-6 lg:p-2 hover:animate-bounce">گردش خنک تابستانی</p>
            <p className="border-r-2 h-12 flex items-center p-6 lg:p-2 hover:animate-bounce" >هفت خان رستم تهران کجاست</p>
            <div className="border-r-2 border-r-[#4156D9] h-12 flex items-center p-4 lg:p-2 hover:animate-bounce">
            <p className="text-[#4156D9] bg-gray-200  p-2 rounded-lg hover:animate-bounce">
              سفربا خودروی شخصی در جزیره کیش
            </p>
            </div>
            <p className="border-r-2 h-12 flex items-center p-6 lg:p-2 hover:animate-bounce">ارتاریخچه جنگل</p>
            <p className="border-r-2 h-12 flex items-center p-6 lg:p-2 hover:animate-bounce">سفربا وسایل نقلیه عمومی به کجا</p>
            <p className="border-r-2 h-12 flex items-center p-6 lg:p-2 hover:animate-bounce">چرا به جنگل ابرباید رفت؟</p>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col gap-y-4 items-center justify-center">
          <div className="border-r-4 border-r-[#4156D9] p-1  rounded-xs  hover:bg-gray-300 cursor-pointer">
            <div className="bg-white p-3 rounded-lg flex gap-x-3 w-[450px]">
              <img src="/public/Group 1850.png" alt="" />
              <div className="flex flex-col gap-y-2">
                <h3 className="text-[#4156D9] font-bold">نشانی جدید جنگل ابر کجاست؟</h3>
                <p className="text-gray-400 font-bold">از زیباترین مناطق ایران در جنگل ابرکه </p>
              </div>
            </div>
          </div>
          <div className="border-r-4 border-gray-300 p-1 rounded-xs  hover:bg-gray-300 cursor-pointer">
            <div className="bg-white p-3 rounded-lg flex gap-x-3 w-[450px]">
              <img src="/public/Group 1850.png" alt="" />
              <div className="flex flex-col gap-y-2">
                <h3 className="font-bold">نشانی جدید جنگل ابر کجاست؟</h3>
                <p className="text-gray-400 font-bold">از زیباترین مناطق ایران در جنگل ابرکه </p>
              </div>
            </div>
          </div>
          <div className="border-r-4 border-r-gray-300 p-1 rounded-xs hover:bg-gray-300 cursor-pointer">
            <div className="bg-white p-3 rounded-lg flex gap-x-3 w-[450px]">
              <img src="/public/Group 1845.png" alt="" />
              <div className="flex flex-col gap-y-2">
                <h3 className="font-bold">نشانی جدید جنگل ابر کجاست؟</h3>
                <p className="text-gray-400 font-bold">از زیباترین مناطق ایران در جنگل ابرکه </p>
              </div>
            </div>
          </div>
          <div className="border-r-4 border-r-gray-300 p-1 rounded-xs hover:bg-gray-300 cursor-pointer">
            <div className="bg-white p-3 rounded-lg flex gap-x-3 w-[450px]">
            <img src="/public/Group 1784.png" alt="" />
              <div className="flex flex-col gap-y-2">
                <h3 className="font-bold">نشانی جدید جنگل ابر کجاست؟</h3>
                <p className="text-gray-400 font-bold">از زیباترین مناطق ایران در جنگل ابرکه </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
