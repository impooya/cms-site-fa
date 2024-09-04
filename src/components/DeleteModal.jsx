import { CiCircleAlert } from "react-icons/ci";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useRemoveProducts } from "../api/apiConfigurations";
export default function DeleteModals({
  changeVisibleDeleteModal,
  isVisibleDeleteModal,
  idProducts,
}) {
  const { mutate: removeProduct } = useRemoveProducts(idProducts);

  function deleteProductsHandler() {
    removeProduct(idProducts);

    changeVisibleDeleteModal((prevShow) => !prevShow);
  }

  function closeDeleteModalHandler() {
    changeVisibleDeleteModal((prevShow) => !prevShow);
  }

  return (
    <>
      {createPortal(
        <div
          className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
            isVisibleDeleteModal ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-all `}
          aria-live="assertive"
        >
          <div className="w-[500px] bg-white flex flex-col justify-center items-center gap-y-6 pb-7 rounded-xl">
            <CiCircleAlert className="size-36 text-red-600" />
            <h1 className="text-4xl">ایا میخواهید آن را حذف کنید؟</h1>
            <div className="flex justify-center items-center gap-x-5 w-full">
              <button
                type="button"
                className="bg-red-600 text-white w-24 h-10 text-2xl rounded-xl"
                onClick={deleteProductsHandler}
                disabled={removeProduct.isLoading} // Disable button while loading
              >
                {removeProduct.isLoading ? "در حال حذف..." : "بله"}
              </button>
              <button
                type="button"
                className="bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
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

DeleteModals.propTypes = {
  isVisibleDeleteModal: PropTypes.bool.isRequired,
  changeVisibleDeleteModal: PropTypes.func.isRequired,
  idProducts: PropTypes.string.isRequired,
};
