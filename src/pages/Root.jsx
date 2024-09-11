import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { MdOutlineSystemSecurityUpdateWarning } from "react-icons/md";
import { ModalProvider } from "../context/ModalContext";
export default function Root() {
  return (
    <>
      <ModalProvider>
        <section className="lg:flex items-center h-screen hidden">
          <SideBar />
          <div className="mr-72 w-full pl-6 mt-28 flex flex-col items-center justify-center h-full">
            <Header />
            <section className="mt-7 w-full h-full">
              <Outlet />
            </section>
          </div>
        </section>
        <section className="lg:hidden flex items-center h-screen w-screen justify-center ">
          <div className="w-auto h-auto flex flex-col justify-center items-center px-3">
            <MdOutlineSystemSecurityUpdateWarning className="text-red-500 size-[100px] animate-bounce" />
            <span className="flex flex-col justify-center items-center text-zinc-900 ">
              <h1 className="text-4xl">به زودی...</h1>
              <p className="text-center">
                سایت برای موبایل و تبلت در حال توسعه است. برای تجربه بهتر از لپ
                تاپ یا کامپیوتر خانگی استفاده کنید. ممنون از شما👋
              </p>
            </span>
          </div>
        </section>
      </ModalProvider>
    </>
  );
}
