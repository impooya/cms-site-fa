// import ErorrMessage from "../components/ErorrMessage";

import AddProducts from "../components/AddProducts";
import Modals from "../components/Modals";
import TableProducts from "../components/TableProducts";

export default function Products() {
  return (
    <>
      {/* <ErorrMessage msg={"هیج محصولی یافت نشد"} /> */}
      <AddProducts />
      <TableProducts />
      <Modals />
    </>
  );
}
