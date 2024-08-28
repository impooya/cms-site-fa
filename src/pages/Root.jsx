import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
export default function Root() {
  return (
    <>
      <section className="flex items-center">
        <SideBar />
        <Outlet />
      </section>
    </>
  );
}
