import { FaConnectdevelop } from "react-icons/fa6";
export default function MainPage() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <span className="flex flex-col justify-center items-center gap-y-4">
          <FaConnectdevelop className="h-52 w-52 text-blue-700 animate-pulse" />
          <h1 className="text-5xl text-zinc-600">
            به پنل مدیریتی فارسی سایت خوش آمدید
          </h1>
        </span>
      </div>
    </>
  );
}
