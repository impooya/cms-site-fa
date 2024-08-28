import { AiOutlineProduct } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { FaUsersViewfinder } from "react-icons/fa6";
import { IoBasketOutline } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <nav className="flex flex-col divide-y-2 divide-violet-400 bg-indigo-700 h-screen fixed  bottom-0 ">
        <h1 className="text-[22.4px] inline-block text-white p-4 text-center">
          به داشبورد خوش آمدید
        </h1>
        <ul className="flex flex-col items-start justify-center pt-5 gap-6">
          <li className="w-full  h-16 flex justify-start items-center hover:bg-blue-700 transition-all ">
            <NavLink
              className={({ isActive }) =>
                `w-full h-full inline-flex items-center gap-1 text-white text-2xl pr-4  ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
              to="/"
            >
              <IoHomeOutline />
              صفحه اصلی
            </NavLink>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <NavLink
              className={({ isActive }) =>
                `w-full h-full inline-flex items-center gap-1 text-white text-2xl pr-4  ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
              to="/products"
            >
              <AiOutlineProduct />
              محصولات
            </NavLink>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <NavLink
              className={({ isActive }) =>
                `w-full h-full inline-flex items-center gap-1 text-white text-2xl pr-4  ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
              to="/comments"
            >
              <AiOutlineComment />
              کامنت ها
            </NavLink>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <NavLink
              className={({ isActive }) =>
                `w-full h-full inline-flex items-center gap-1 text-white text-2xl pr-4  ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
              to="/users"
            >
              <FaUsersViewfinder />
              کاربران
            </NavLink>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <NavLink
              className={({ isActive }) =>
                `w-full h-full inline-flex items-center gap-1 text-white text-2xl pr-4  ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
              to="/orders"
            >
              <IoBasketOutline />
              سفارشات
            </NavLink>
          </li>
          <li className="w-full h-16 flex justify-start items-center hover:bg-violet-900 transition-all ">
            <NavLink
              className={({ isActive }) =>
                `w-full h-full inline-flex items-center gap-1 text-white text-2xl pr-4  ${
                  isActive ? "bg-blue-700" : ""
                }`
              }
              to="/offers"
            >
              <MdOutlineLocalOffer />
              تخفیف ها
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
