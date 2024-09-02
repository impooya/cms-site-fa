import PropTypes from "prop-types";

export default function TableProducts({
  changeVisibleDeleteModal,
  isVisibleDeleteModal,
  isVisibleDetailsModal,
  changeVisibleDetailsModal,
  changeVisibleEditModal,
  isVisibleEditModal,
  datasProducts,
  productsIdsget,
  productsIdsForGetDetails,
}) {
  function showDeleteModalHandler(e) {
    productsIdsget(e.target.getAttribute("data-productsid"));
    if (isVisibleDeleteModal) {
      changeVisibleDeleteModal(false);
    } else {
      changeVisibleDeleteModal(true);
    }
  }

  function showDetailsModalHandler(e) {
    productsIdsForGetDetails(e.target.getAttribute("data-products-details-id"));
    if (isVisibleDetailsModal) {
      changeVisibleDetailsModal(false);
    } else {
      changeVisibleDetailsModal(true);
    }
  }

  function showEditModalHandler() {
    if (isVisibleEditModal) {
      changeVisibleEditModal(false);
    } else {
      changeVisibleEditModal(true);
    }
  }

  return (
    <>
      <section className="w-full bg-white mt-4 rounded-2xl shadow-2xl pt-4 ">
        <table className="w-full divide-y-2 divide-zinc-700">
          <thead className="h-20 text-center text-2xl">
            <tr>
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody className="text-center divide-y-2">
            {datasProducts?.map((items) => (
              <tr className="child:w-56 child:text-xl" key={items.id}>
                <td>
                  <img src={`../${items.img}`} className="size-64" />
                </td>
                <td>{items.title}</td>
                <td>{items.price}</td>
                <td>{items.count}</td>
                <td className="child:ml-5 child:bg-blue-700 child:w-20 child:h-14 child:rounded-2xl child:text-white">
                  <button
                    type="button"
                    onClick={(event) => {
                      showDetailsModalHandler(event);
                    }}
                    data-products-details-id={items.id}
                  >
                    جزییات
                  </button>
                  <button
                    type="button"
                    onClick={(event) => showDeleteModalHandler(event)}
                    data-productsid={items.id}
                  >
                    حذف
                  </button>
                  <button type="button" onClick={showEditModalHandler}>
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

TableProducts.propTypes = {
  changeVisibleDeleteModal: PropTypes.func,
  isVisibleDeleteModal: PropTypes.bool,
  changeVisibleDetailsModal: PropTypes.func,
  isVisibleDetailsModal: PropTypes.bool,
  changeVisibleEditModal: PropTypes.func,
  isVisibleEditModal: PropTypes.bool,
  productsIdsget: PropTypes.func,
  datasProducts: PropTypes.array,
  productsIdsForGetDetails: PropTypes.func,
};
