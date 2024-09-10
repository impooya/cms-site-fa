import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { ModalProvider } from "../context/ModalContext";
export default function Root() {
  return (
    <>
      <ModalProvider>
        <section className="flex items-center h-screen">
          <SideBar />
          <div className="mr-72 w-full px-6 mt-28 flex flex-col items-center justify-center h-full">
            <Header />
            <section className="mt-7 w-full h-full">
              <Outlet />
            </section>
          </div>
        </section>
      </ModalProvider>
    </>
  );
}
