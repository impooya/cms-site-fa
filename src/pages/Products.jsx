// import ErorrMessage from "../components/ErorrMessage";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FaRegImage } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";

export default function Products() {
  return (
    <>
      {/* <ErorrMessage msg={"هیج محصولی یافت نشد"} /> */}
      <section>
        <h1>افزودن محصول جدید</h1>
        <form>
          <div>
            <div>
              <span>
                <MdDriveFileRenameOutline />
                <input type="text" placeholder={`اسم محصول را وارد کنید`} />
              </span>
              <span>
                <GiPriceTag />
                <input type="text" placeholder={`قیمت محصول را وارد کنید`} />
              </span>
            </div>
            <div>
              <span>
                <LiaCartArrowDownSolid />
                <input type="text" placeholder={`موجودی محصول را بنویسید`} />
              </span>
              <span>
                <FaRegImage />
                <input type="text" placeholder={`ادرس عکس محصول را بنویسید`} />
              </span>
            </div>
            <div>
              <span>
                <AiOutlineLike />
                <input
                  type="text"
                  placeholder={`میزان محبوبیت محصول را بنویسید`}
                />
              </span>
              <span>
                <IoColorPaletteOutline />
                <input
                  type="text"
                  placeholder={`میزان فروش محصول را بنویسید`}
                />
              </span>
            </div>
            <div>
              <span>
                <IoAnalyticsSharp />
                <input
                  type="text"
                  placeholder={`تعداد رنگ بندی محصول را بنویسید`}
                />
              </span>
            </div>
            <button type="submit">ثبت محصول</button>
          </div>
        </form>
      </section>
    </>
  );
}
