import { CiCircleAlert } from "react-icons/ci";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import axios from "axios";

export default function Modals({
  changeVisibleDeleteModal,
  isVisibleDeleteModal,
  idProducts,
}) {
  function deleteProductsApiResponse(idProducts) {
    axios
      .delete(`http://localhost:3000/api/products/productID/${idProducts}`)
      .then((res) => {
        console.log(res);
      });
  }
  function deleteProductsHandler() {
    console.log(idProducts);
    deleteProductsApiResponse(idProducts);

    changeVisibleDeleteModal((prevShow) => {
      !prevShow;
    });
  }
  function closeDeleteModalHandler() {
    changeVisibleDeleteModal((prevShow) => {
      !prevShow;
    });
  }
  return (
    <>
      {createPortal(
        <div
          className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
            isVisibleDeleteModal ? "opacity-100 visible" : "opacity-0 invisible"
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
                onClick={closeDeleteModalHandler}
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
  isVisibleDeleteModal: PropTypes.bool,
  changeVisibleDeleteModal: PropTypes.func,
  idProducts: PropTypes.string,
};
