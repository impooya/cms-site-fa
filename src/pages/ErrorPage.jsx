import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <section className="w-full h-full flex justify-center items-center ">
        <div className="flex justify-center items-center flex-col">
          <img
            src="\img\—Pngtree—404 error page_2596650.png"
            className="h-[500px]"
          />
          <div className="flex flex-col justify-center items-center gap-y-4">
            <h1 dir="ltr" className="text-4xl text-zinc-700">
              ...صفحه مورد نظر پیدا نشد
            </h1>
            <Link
              to={"/"}
              className="bg-blue-700 text-white w-[220px] h-9 flex justify-center items-center hover:bg-blue-800 transition-all rounded-2xl "
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
