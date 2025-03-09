export const HotMagazine: React.FC = () => {
  return (
    <div className=" w-full bg-gray-100  px-8">
      <h1 className="block  font-bold text-xl pb-5">
        مجله های داغ و محبوب اماکن تاریخی
      </h1>
      <div className=" block lg:flex justify-between gap-x-3 ">
        <div className=" block md:flex items-center justify-center md:gap-x-3 gap-x-5 rounded-lg">
          <div>
            <img src="/public/Group 1833.png" alt="" />
          </div>
          <div className="flex flex-col  gap-y-4 text-gray-400 font-bold md:p-0 pt-4">
            <p className="border-r-2 h-12 flex items-center p-2">گردش خنک تابستانی</p>
            <p className="border-r-2 h-12 flex items-center p-2" >هفت خان رستم تهران کجاست</p>
            <div className="border-r-2 border-r-[#4156D9] h-12 flex items-center p-2">
            <p className="text-[#4156D9] bg-gray-200 p-3 rounded-lg ">
              سفربا خودروی شخصی در جزیره کیش
            </p>
            </div>
            <p className="border-r-2 h-12 flex items-center p-2">ارتاریخچه جنگل</p>
            <p className="border-r-2 h-12 flex items-center p-2">سفربا وسایل نقلیه عمومی به کجا</p>
            <p className="border-r-2 h-12 flex items-center p-2">چرا به جنگل ابرباید رفت؟</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 items-start justify-start md:pt-5 p-0">
          <div className="border-r-4 border-r-[#4156D9] p-1 rounded-xs ">
            <div className="bg-white p-3 rounded-lg flex gap-x-3 w-[450px]">
              <img src="/public/Group 1850.png" alt="" />
              <div className="flex flex-col gap-y-2">
                <h3 className="text-[#4156D9] font-bold">نشانی جدید جنگل ابر کجاست؟</h3>
                <p className="text-gray-400 font-bold">از زیباترین مناطق ایران در جنگل ابرکه </p>
              </div>
            </div>
          </div>
          <div className="border-r-4 border-gray-300 p-1 rounded-xs">
            <div className="bg-white p-3 rounded-lg flex gap-x-3 w-[450px]">
              <img src="/public/Group 1850.png" alt="" />
              <div className="flex flex-col gap-y-2">
                <h3 className="font-bold">نشانی جدید جنگل ابر کجاست؟</h3>
                <p className="text-gray-400 font-bold">از زیباترین مناطق ایران در جنگل ابرکه </p>
              </div>
            </div>
          </div>
          <div className="border-r-4 border-r-gray-300 p-1 rounded-xs">
            <div className="bg-white p-3 rounded-lg flex gap-x-3 w-[450px]">
              <img src="/public/Group 1845.png" alt="" />
              <div className="flex flex-col gap-y-2">
                <h3 className="font-bold">نشانی جدید جنگل ابر کجاست؟</h3>
                <p className="text-gray-400 font-bold">از زیباترین مناطق ایران در جنگل ابرکه </p>
              </div>
            </div>
          </div>
          <div className="border-r-4 border-r-gray-300 p-1 rounded-xs">
            <div className="bg-white p-3 rounded-lg flex gap-x-3 w-[450px]">
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
