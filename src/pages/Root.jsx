import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
export default function Root() {
  return (
    <>
      <section className="flex items-center">
        <SideBar />
        <div className="mr-72 w-full px-6 mt-4">
          <Header />
          <Outlet />
        </div>
      </section>
    </>
  );
}
