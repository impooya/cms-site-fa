import { CiCircleAlert } from "react-icons/ci";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

export default function Modals({ changeVisibleModal, isVisibleModal }) {
  function deleteProductsHandler() {
    changeVisibleModal((prevShow) => {
      !prevShow;
    });
  }
  return (
    <>
      {createPortal(
        <div
          className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
            isVisibleModal ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-all `}
        >
          <div className="w-[500px] bg-white  flex flex-col justify-center items-center gap-y-6 pb-7 rounded-xl ">
            <CiCircleAlert className="size-36 text-red-600" />
            <h1 className="text-4xl">ایا میخواهید آن را حذف کنید؟</h1>
            <div className="flex justify-center items-center gap-x-5 w-full">
              <button
                type="button"
                className=" bg-red-600 text-white w-24 h-10 text-2xl rounded-xl"
                onClick={deleteProductsHandler}
              >
                بله
              </button>
              <button
                type="button"
                className=" bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
                onClick={deleteProductsHandler}
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

Modals.propTypes = {
  isVisibleModal: PropTypes.bool.isRequired,
  changeVisibleModal: PropTypes.func.isRequired,
};
