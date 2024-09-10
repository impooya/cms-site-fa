import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { useGetAllProductsResponse } from "../api/apiConfigurations";
import { useContext } from "react";
import { ModalsContext } from "../context/ModalContext";

export default function DetailsModal({
  isVisibleDetailsModalForProducts,
  changeVisibleDetailsModalForProducts,
  idProductsDetails,
  isVisibleDetailsModalForComments,
  changeVisibleDetailsModalForComments,
  idCommentsDetails,
  allComments,
  isVisibleDetailsModalForUsers,
  changeVisibleDeleteModalForUsers,
  usersIdDetail,
  allUsers,
}) {
  const [whichPage] = useContext(ModalsContext);

  const { data: detailsProduct } = useGetAllProductsResponse();
  function closeDetailsModalForProductsHandler() {
    changeVisibleDetailsModalForProducts((prevShow) => {
      !prevShow;
    });
  }
  function closeDetailsModalForCommentsHandler() {
    changeVisibleDetailsModalForComments((prevShow) => {
      !prevShow;
    });
  }
  function closeDetailsModalForUsersHandler() {
    changeVisibleDeleteModalForUsers((prevShow) => !prevShow);
  }

  return (
    <>
      {whichPage === "products"
        ? createPortal(
            <div
              className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
                isVisibleDetailsModalForProducts
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-all `}
            >
              <section className="bg-white w-1/6 rounded-2xl flex flex-col mb-3">
                <button
                  type="button"
                  className="mr-3 mt-3 child:size-6 child:text-red-600 w-6"
                  onClick={closeDetailsModalForProductsHandler}
                >
                  <IoCloseCircleOutline />
                </button>
                <table className="w-full table-fixed mt-5">
                  <thead className="text-center">
                    <tr>
                      <th>اسم</th>
                      <th>قیمت</th>
                      <th>محبوبیت</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {detailsProduct?.map((item) => (
                      <tr key={item.id}>
                        <td>
                          {item.id === Number(idProductsDetails) && item.title}
                        </td>
                        <td>
                          {item.id === Number(idProductsDetails) && item.price}
                        </td>
                        <td>
                          {item.id === Number(idProductsDetails) &&
                            item.popularity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>,
            document.querySelector("#modals-parent")
          )
        : whichPage === "comments"
        ? createPortal(
            <div
              className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
                isVisibleDetailsModalForComments
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-all `}
            >
              <section className="bg-white w-1/6 rounded-2xl flex flex-col mb-3">
                <button
                  type="button"
                  className="mr-3 mt-3 child:size-6 child:text-red-600 w-6"
                  onClick={closeDetailsModalForCommentsHandler}
                >
                  <IoCloseCircleOutline />
                </button>
                <table className="w-full table-fixed mt-5">
                  <thead className="text-center">
                    <tr>
                      <th>متن</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {allComments?.map((comment) => (
                      <tr key={comment.id}>
                        <td>
                          {comment.id === idCommentsDetails && comment.body}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>,
            document.querySelector("#modals-parent")
          )
        : whichPage === "users"
        ? createPortal(
            <div
              className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
                isVisibleDetailsModalForUsers
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              } transition-all `}
            >
              <section className="bg-white w-1/3 rounded-2xl flex flex-col mb-3">
                <button
                  type="button"
                  className="mr-3 mt-3 child:size-6 child:text-red-600 w-6"
                  onClick={closeDetailsModalForUsersHandler}
                >
                  <IoCloseCircleOutline />
                </button>
                <table className="w-full table-fixed mt-5">
                  <thead className="text-center">
                    <tr>
                      <th>شهر</th>
                      <th>آدرس</th>
                      <th>امتیاز</th>
                      <th>میزان خرید</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {allUsers?.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id === usersIdDetail && item.city}</td>
                        <td>{item.id === usersIdDetail && item.address}</td>
                        <td>{item.id === usersIdDetail && item.score}</td>
                        <td>{item.id === usersIdDetail && item.buy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>,
            document.querySelector("#modals-parent")
          )
        : null}
    </>
  );
}
DetailsModal.propTypes = {
  changeVisibleDetailsModalForProducts: PropTypes.func,
  isVisibleDetailsModalForProducts: PropTypes.bool,
  idProductsDetails: PropTypes.string,
  datasProducts: PropTypes.array,
  isVisibleDetailsModalForComments: PropTypes.bool,
  changeVisibleDetailsModalForComments: PropTypes.func,
  idCommentsDetails: PropTypes.number,
  allComments: PropTypes.array,
  isVisibleDetailsModalForUsers: PropTypes.bool,
  changeVisibleDeleteModalForUsers: PropTypes.func,
  usersIdDetail: PropTypes.number,
  allUsers: PropTypes.array,
};
