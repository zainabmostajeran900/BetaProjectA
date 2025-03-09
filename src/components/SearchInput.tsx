export const SearchInput: React.FC = () => {
  return (
    <div className="block lg:flex items-center justify-between  bg-gray-100 px-8 py-6">
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search-input"
            className="block bg-white cursor-pointer text-right px-5  md:w-[500px] rounded-lg  py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            placeholder="دنبال چه مقاله ای میگردی؟"
          />
          {/* <div
            className="absolute left-0 inset-y-0 px-3 flex items-center pointer-events-none"
          >
            <img src="/public/input-prefix.svg" alt="" />
          </div> */}
        </div>
      <div className=" flex justify-between items-center md:justify-center gap-x-4 font-bold text-sm pt-4 lg:pt-0">
        <div className="flex justify-between  bg-white rounded-lg ">
          <div className="flex items-center justify-center pr-3 py-2 rounded-lg">
            <img src="/public/heart.png" alt="" />
            <p className="px-3">مقالاتی که ذخیره کردید</p>
          </div>
          <button className="text-white rounded-lg px-4 py-2 bg-gray-900  ">
            23
          </button>
        </div>
        <div className="flex items-center justify-center bg-white px-4 py-2 rounded-lg">
          <p className="">10,165 مقاله</p>
        </div>
      </div>
    </div>
  );
};
