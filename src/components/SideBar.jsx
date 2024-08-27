import { AiOutlineProduct } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { FaUsersViewfinder } from "react-icons/fa6";
import { IoBasketOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";

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
              className="w-auto h-full inline-flex items-center gap-1 text-white text-2xl  pr-4 active:bg-blue-700"
              href="#"
            >
              <IoHomeOutline />
              صفحه اصلی
            </a>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <a
              className="h-full w-auto text-white text-2xl inline-flex items-center pr-4 active:bg-violet-900 gap-1"
              href="#"
            >
              <AiOutlineProduct />
              محصولات
            </a>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <a
              className="h-full w-auto text-white text-2xl inline-flex items-center pr-4 active:bg-violet-900 gap-1"
              href="#"
            >
              <AiOutlineComment />
              کامنت ها
            </a>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <a
              className="h-full w-auto text-white text-2xl inline-flex items-center pr-4 active:bg-violet-900 gap-1"
              href="#"
            >
              <FaUsersViewfinder />
              کاربران
            </a>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <a
              className="h-full w-auto text-white text-2xl inline-flex items-center pr-4 active:bg-violet-900 gap-1"
              href="#"
            >
              <IoBasketOutline />
              سفارشات
            </a>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <a
              className="h-full w-auto text-white text-2xl inline-flex items-center pr-4 active:bg-violet-900 gap-1"
              href="#"
            >
              <MdOutlineLocalOffer />
              تخفیف ها
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
