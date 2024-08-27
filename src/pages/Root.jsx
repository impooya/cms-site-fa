import SideBar from "../components/SideBar";
import MainPage from "./MainPage";
export default function Root() {
  return (
    <>
      <section className="flex items-center">
        <SideBar />
        <MainPage />
      </section>
    </>
  );
}
