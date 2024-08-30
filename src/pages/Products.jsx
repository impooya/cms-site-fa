// import ErorrMessage from "../components/ErorrMessage";
import { useState } from "react";
import AddProducts from "../components/AddProducts";
import Modals from "../components/DeleteModal";
import TableProducts from "../components/TableProducts";
import DetailsModal from "../components/DetailsModal";
import EditModal from "../components/EditModal";
import { MdOutlineFiberNew } from "react-icons/md";

export default function Products() {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  function editProductHandler() {
    console.log("ادیت انجام شد");
  }
  function closeEditModal() {
    setShowEditModal((prevShow) => !prevShow);
  }
  return (
    <>
      <AddProducts />
      <TableProducts
        changeVisibleDeleteModal={setShowRemoveModal}
        isVisibleDeleteModal={showRemoveModal}
        changeVisibleDetailsModal={setShowDetailsModal}
        isVisibleDetailsModal={showDetailsModal}
        changeVisibleEditModal={setShowEditModal}
        isVisibleEditModal={showEditModal}
      />
      <Modals
        changeVisibleDeleteModal={setShowRemoveModal}
        isVisibleDeleteModal={showRemoveModal}
      />
      <DetailsModal
        changeVisibleDetailsModal={setShowDetailsModal}
        isVisibleDetailsModal={showDetailsModal}
      />
      <EditModal
        onSubmitEdit={editProductHandler}
        isdiscardEdit={showEditModal}
      >
        <section className="w-full flex flex-col justify-center items-center gap-4 py-3 px-3 ">
          <h1 className="text-3xl"> مقادیر جدید را وارد کنید</h1>
          <div className="w-full flex flex-col gap-6 justify-center items-center">
            <span className=" bg-zinc-400/50 rounded-2xl  w-full  flex justify-center items-center pr-2 ">
              <MdOutlineFiberNew className="text-4xl" />

              <input
                className=" placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`اسم محصول جدید را وارد کنید`}
              />
            </span>
            <span className=" bg-zinc-400/50 rounded-2xl  w-full flex justify-center items-center pr-2 ">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className=" placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`اسم محصول جدید را وارد کنید`}
              />
            </span>
            <span className=" bg-zinc-400/50 rounded-2xl  w-full flex justify-center items-center pr-2 ">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className=" placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`اسم محصول جدید را وارد کنید`}
              />
            </span>
            <span className=" bg-zinc-400/50 rounded-2xl  w-full flex justify-center items-center pr-2 ">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className=" placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`اسم محصول جدید را وارد کنید`}
              />
            </span>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              type="submit"
              className=" bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
            >
              افزودن
            </button>
            <button
              type="submit"
              className=" bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
              onClick={closeEditModal}
            >
              انصراف
            </button>
          </div>
        </section>
      </EditModal>
    </>
  );
}
