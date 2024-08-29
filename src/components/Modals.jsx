import { CiCircleAlert } from "react-icons/ci";
import { createPortal } from "react-dom";
export default function Modals() {
  return (
    <>
      {createPortal(
        <div className="w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center opacity-0 invisible">
          <div className="w-[500px] bg-white  flex flex-col justify-center items-center gap-y-6 pb-7 rounded-xl ">
            <CiCircleAlert className="size-36 text-red-600" />
            <h1 className="text-4xl">ایا میخواهید آن را حذف کنید؟</h1>
            <div className="flex justify-center items-center gap-x-5 w-full">
              <button
                type="button"
                className=" bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
              >
                بله
              </button>
              <button
                type="button"
                className=" bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
              >
                خیر
              </button>
            </div>
          </div>
        </div>,
        document.querySelector("#modals-parent")
      )}
    </>
  );
}
