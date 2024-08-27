export default function SideBar() {
  return (
    <>
      <nav className="flex flex-col divide-y-2 divide-violet-400 bg-indigo-700 h-screen fixed  bottom-0 ">
        <h1 className="text-[22.4px] inline-block text-white p-4 text-center">
          به داشبورد خوش آمدید
        </h1>
        <ul className="flex flex-col items-start justify-center pt-5 gap-6">
          <li className="w-full  h-16 flex justify-start items-center hover:bg-blue-700 transition-all ">
            <a
              className="w-auto h-full inline-flex items-center text-white text-2xl  pr-4 active:bg-blue-700"
              href="#"
            >
              صفحه اصلی
            </a>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <a
              className="h-full w-auto text-white text-2xl inline-flex items-center pr-4 active:bg-violet-900"
              href="#"
            >
              محصولات
            </a>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <a
              className="h-full w-auto text-white text-2xl inline-flex items-center pr-4 active:bg-violet-900"
              href="#"
            >
              کامنت ها
            </a>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <a
              className="h-full w-auto text-white text-2xl inline-flex items-center pr-4 active:bg-violet-900"
              href="#"
            >
              کاربران
            </a>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <a
              className="h-full w-auto text-white text-2xl inline-flex items-center pr-4 active:bg-violet-900"
              href="#"
            >
              سفارشات
            </a>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <a
              className="h-full w-auto text-white text-2xl inline-flex items-center pr-4 active:bg-violet-900"
              href="#"
            >
              تخفیف ها
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
