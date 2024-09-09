import { CiCircleAlert } from "react-icons/ci";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  useRemoveComments,
  useRemoveProducts,
  useRemoveUsers,
} from "../api/apiConfigurations";
import { useContext } from "react";
import { ModalsContext } from "../context/ModalContext";

export default function DeleteModals({
  changeVisibleDeleteModalForProducts,
  isVisibleDeleteModalForProducts,
  isVisibleDeleteModalForComments,
  changeVisibleDeleteModalForComments,
  isVisibleDeleteModalForUsers,
  changeVisibleDeleteModalForUsers,
  userIdDelete,
  idCommentsDelete,
  idProducts,
}) {
  const [whichPage] = useContext(ModalsContext);

  const { mutate: removeProduct } = useRemoveProducts(idProducts);
  const { mutate: removeComments } = useRemoveComments(idCommentsDelete);
  const { mutate: removeUsers } = useRemoveUsers();

  function deleteProductsHandler() {
    removeProduct(idProducts);

    changeVisibleDeleteModalForProducts((prevShow) => !prevShow);
  }

  function closeDeleteModalHandlerForProducts() {
    changeVisibleDeleteModalForProducts((prevShow) => !prevShow);
  }

  function deleteCommentsHandler() {
    removeComments(idCommentsDelete);
    changeVisibleDeleteModalForComments((prevShow) => !prevShow);
  }
  function closeDeleteModalHandlerForComments() {
    changeVisibleDeleteModalForComments((prevShow) => {
      !prevShow;
    });
  }

  function deleteUserHandler() {
    removeUsers(userIdDelete);
    changeVisibleDeleteModalForUsers((prevShow) => !prevShow);
  }

  function closeDeleteModalHandlerForUsers() {
    changeVisibleDeleteModalForUsers((prevShow) => !prevShow);
  }
  return (
    <>
      {whichPage === "products"
        ? createPortal(
            <div
              className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
                isVisibleDeleteModalForProducts
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
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
                    onClick={closeDeleteModalHandlerForProducts}
                  >
                    خیر
                  </button>
                </div>
              </div>
            </div>,
            document.querySelector("#modals-parent")
          )
        : whichPage === "comments"
        ? createPortal(
            <div
              className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
                isVisibleDeleteModalForComments
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
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
                    onClick={deleteCommentsHandler}
                    disabled={removeComments.isLoading} // Disable button while loading
                  >
                    {removeComments.isLoading ? "در حال حذف..." : "بله"}
                  </button>
                  <button
                    type="button"
                    className="bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
                    onClick={closeDeleteModalHandlerForComments}
                  >
                    خیر
                  </button>
                </div>
              </div>
            </div>,
            document.querySelector("#modals-parent")
          )
        : whichPage === "users"
        ? createPortal(
            <div
              className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
                isVisibleDeleteModalForUsers
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-all `}
              aria-live="assertive"
            >
              <div className="w-[500px] bg-white flex flex-col justify-center items-center gap-y-6 pb-7 rounded-xl">
                <CiCircleAlert className="size-36 text-red-600" />
                <h1 className="text-4xl">
                  ایا میخواهید کاربر مورد نظر را حذف کنید؟
                </h1>
                <div className="flex justify-center items-center gap-x-5 w-full">
                  <button
                    type="button"
                    className="bg-red-600 text-white w-24 h-10 text-2xl rounded-xl"
                    onClick={deleteUserHandler}
                    disabled={removeComments.isLoading} // Disable button while loading
                  >
                    {removeComments.isLoading ? "در حال حذف..." : "بله"}
                  </button>
                  <button
                    type="button"
                    className="bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
                    onClick={closeDeleteModalHandlerForUsers}
                  >
                    خیر
                  </button>
                </div>
              </div>
            </div>,
            document.querySelector("#modals-parent")
          )
        : null}
    </>
  );
}

DeleteModals.propTypes = {
  isVisibleDeleteModalForProducts: PropTypes.bool,
  changeVisibleDeleteModalForProducts: PropTypes.func,
  idProducts: PropTypes.string,
  isVisibleDeleteModalForComments: PropTypes.bool,
  changeVisibleDeleteModalForComments: PropTypes.func,
  idCommentsDelete: PropTypes.number,
  isVisibleDeleteModalForUsers: PropTypes.bool,
  changeVisibleDeleteModalForUsers: PropTypes.func,
  userIdDelete: PropTypes.number,
};
