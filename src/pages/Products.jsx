// import ErorrMessage from "../components/ErorrMessage";
import { useState } from "react";
import AddProducts from "../components/AddProducts";
import Modals from "../components/DeleteModal";
import TableProducts from "../components/TableProducts";
import DetailsModal from "../components/DetailsModal";

export default function Products() {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <>
      {/* <ErorrMessage msg={"هیج محصولی یافت نشد"} /> */}
      <AddProducts />
      <TableProducts
        changeVisibleDeleteModal={setShowRemoveModal}
        isVisibleDeleteModal={showRemoveModal}
        changeVisibleDetailsModal={setShowDetailsModal}
        isVisibleDetailsModal={showDetailsModal}
      />
      <Modals
        changeVisibleDeleteModal={setShowRemoveModal}
        isVisibleDeleteModal={showRemoveModal}
      />
      <DetailsModal
        changeVisibleDetailsModal={setShowDetailsModal}
        isVisibleDetailsModal={showDetailsModal}
      />
    </>
  );
}
