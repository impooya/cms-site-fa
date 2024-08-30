import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";

export default function DetailsModal({
  isVisibleDetailsModal,
  changeVisibleDetailsModal,
}) {
  function closeDetailsModalHandler() {
    changeVisibleDetailsModal((prevShow) => {
      !prevShow;
    });
  }
  return (
    <>
      {createPortal(
        <div
          className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
            isVisibleDetailsModal
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } transition-all `}
        >
          <section className="bg-white w-1/6 rounded-2xl flex flex-col mb-3">
            <button
              type="button"
              className="mr-3 mt-3 child:size-6 child:text-red-600"
              onClick={closeDetailsModalHandler}
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
                <tr>
                  <td>لپ تاپ</td>
                  <td>22000000</td>
                  <td>91%</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>,
        document.querySelector("#modals-parent")
      )}
    </>
  );
}
DetailsModal.propTypes = {
  changeVisibleDetailsModal: PropTypes.func.isRequired,
  isVisibleDetailsModal: PropTypes.bool.isRequired,
};
