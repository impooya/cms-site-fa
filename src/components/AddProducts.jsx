import { MdDriveFileRenameOutline } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FaRegImage } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";

export default function AddProducts() {
  return (
    <>
      <section className="flex flex-col justify-start items-start gap-y-6">
        <h1 className="text-3xl">افزودن محصول جدید</h1>
        <form className="w-full bg-white p-9 rounded-2xl shadow-2xl">
          <section className="w-full flex flex-col items-end gap-y-4">
            <div className="flex w-full justify-start  items-center  gap-x-4">
              <span className="flex  justify-center items-center gap-3 h-14 w-1/2 text-2xl bg-zinc-400/50 rounded-2xl pr-5">
                <MdDriveFileRenameOutline />
                <input
                  className="w-full outline-none border-none bg-transparent placeholder:text-zinc-600"
                  type="text"
                  placeholder={`اسم محصول را وارد کنید`}
                />
              </span>
              <span className="flex  justify-center items-center gap-3 h-14 w-1/2 text-2xl bg-zinc-400/50 rounded-2xl pr-5">
                <GiPriceTag />
                <input
                  className="w-full outline-none border-none bg-transparent placeholder:text-zinc-600"
                  type="text"
                  placeholder={`قیمت محصول را وارد کنید`}
                />
              </span>
            </div>
            <div className="flex w-full justify-start  items-center gap-x-4">
              <span className="flex  justify-center items-center gap-3 h-14 w-1/2 text-2xl bg-zinc-400/50 rounded-2xl pr-5">
                <LiaCartArrowDownSolid />
                <input
                  className="w-full outline-none border-none bg-transparent placeholder:text-zinc-600"
                  type="text"
                  placeholder={`موجودی محصول را بنویسید`}
                />
              </span>
              <span className="flex  justify-center items-center gap-3 h-14 w-1/2 text-2xl bg-zinc-400/50 rounded-2xl pr-5">
                <FaRegImage />
                <input
                  className="w-full outline-none border-none bg-transparent placeholder:text-zinc-600"
                  type="text"
                  placeholder={`ادرس عکس محصول را بنویسید`}
                />
              </span>
            </div>
            <div className="flex w-full justify-start  items-center gap-x-4">
              <span className="flex  justify-center items-center gap-3 h-14 w-1/2 text-2xl bg-zinc-400/50 rounded-2xl pr-5">
                <AiOutlineLike />
                <input
                  className="w-full outline-none border-none bg-transparent placeholder:text-zinc-600"
                  type="text"
                  placeholder={`میزان محبوبیت محصول را بنویسید`}
                />
              </span>
              <span className="flex  justify-center items-center gap-3 h-14 w-1/2 text-2xl bg-zinc-400/50 rounded-2xl pr-5">
                <IoAnalyticsSharp />
                <input
                  className="w-full outline-none border-none bg-transparent placeholder:text-zinc-600"
                  type="text"
                  placeholder={`میزان فروش محصول را بنویسید`}
                />
              </span>
            </div>
            <div className="flex w-full justify-start  items-center gap-x-4">
              <span className="flex  justify-center items-center gap-3 h-14 w-1/2 text-2xl bg-zinc-400/50 rounded-2xl pr-5">
                <IoColorPaletteOutline />
                <input
                  className="w-full outline-none border-none bg-transparent placeholder:text-zinc-600"
                  type="text"
                  placeholder={`تعداد رنگ بندی محصول را بنویسید`}
                />
              </span>
              <span className="w-1/2"></span>
            </div>
            <button
              type="submit"
              className="bg-blue-700 w-32 h-11 text-white rounded-lg"
            >
              ثبت محصول
            </button>
          </section>
        </form>
      </section>
    </>
  );
}
