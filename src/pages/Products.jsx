// import ErorrMessage from "../components/ErorrMessage";
import { useState } from "react";
import AddProducts from "../components/AddProducts";
import Modals from "../components/DeleteModal";
import TableProducts from "../components/TableProducts";

export default function Products() {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  return (
    <>
      {/* <ErorrMessage msg={"هیج محصولی یافت نشد"} /> */}
      <AddProducts />
      <TableProducts
        changeVisibleModal={setShowRemoveModal}
        isVisibleModal={showRemoveModal}
      />
      <Modals
        changeVisibleModal={setShowRemoveModal}
        isVisibleModal={showRemoveModal}
      />
    </>
  );
}
