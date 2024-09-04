import ErorrMessage from "../components/ErorrMessage";
import { useState, useEffect, useContext } from "react";
import AddProducts from "../components/AddProducts";
import DeleteModals from "../components/DeleteModal";
import { ModalsContext } from "../context/ModalContext";
import TableProducts from "../components/TableProducts";
import DetailsModal from "../components/DetailsModal";
import EditModal from "../components/EditModal";
import { MdOutlineFiberNew } from "react-icons/md";
import { useGetAllProductsResponse } from "../api/apiConfigurations";
import ClipLoader from "react-spinners/ClipLoader";
import { useUpdateProduct } from "../api/apiConfigurations";
import { useLoaderData } from "react-router-dom";

export default function Products() {
  const [whichPage, setWhichPage] = useContext(ModalsContext);
  const whichPageName = useLoaderData();
  useEffect(() => {
    setWhichPage(whichPageName);
  }),
    [whichPage, whichPageName];

  const [showRemoveModalForProducts, setShowRemoveModalForProducts] =
    useState(false);
  const [showDetailsModalForProducts, setShowDetailsModalForProducts] =
    useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [getIdProductsForDelete, setGetIdProductsForDelete] = useState("");
  const [getIdProductsForDetails, setGetIdProductsForDetails] = useState("");
  const [getIdProductsForEdit, setGetIdProductsForEdit] = useState("");

  // State for new product details
  const [newTitleProduct, setNewTitleProduct] = useState("");
  const [newPriceProduct, setNewPriceProduct] = useState("");
  const [newCountProduct, setNewCountProduct] = useState("");
  const [newImgProduct, setNewImgProduct] = useState("");
  const [newPopularityProduct, setNewPopularityProduct] = useState("");
  const [newSaleProduct, setNewSaleProduct] = useState("");
  const [newColorsProduct, setNewColorsProduct] = useState("");

  const {
    data: productsData,
    isLoading,
    isError,
    error,
  } = useGetAllProductsResponse();

  // Effect to populate the edit fields when a product is selected for editing
  useEffect(() => {
    const product = productsData?.find(
      (item) => String(item.id) === getIdProductsForEdit
    );
    console.log(product);
    if (product) {
      setNewTitleProduct(product.title);
      setNewPriceProduct(product.price);
      setNewCountProduct(product.count);
      setNewImgProduct(product.img);
      setNewPopularityProduct(product.popularity);
      setNewSaleProduct(product.sale);
      setNewColorsProduct(product.colors);
    }
  }, [getIdProductsForEdit, productsData]);

  const { mutate: updateProducts } = useUpdateProduct(getIdProductsForEdit);

  function editProductHandler() {
    const newInfoProducts = {
      title: newTitleProduct,
      price: newPriceProduct,
      count: newCountProduct,
      img: newImgProduct,
      popularity: newPopularityProduct,
      sale: newSaleProduct,
      colors: newColorsProduct,
    };
    if (
      newColorsProduct &&
      newCountProduct &&
      newImgProduct &&
      newPriceProduct &&
      newTitleProduct &&
      newSaleProduct &&
      newPopularityProduct
    ) {
      updateProducts(newInfoProducts);
      setShowEditModal(false); // Close the modal after editing
    }
  }

  function closeEditModal() {
    setShowEditModal(false);
  }

  if (isLoading) {
    return <ClipLoader color="rgba(0, 0, 255, 1)" />;
  }

  if (isError) {
    return <h1 className="bg-red-600 text-white w-full">{error.message}</h1>;
  }

  return (
    <>
      <AddProducts />
      {productsData?.length === 0 ? (
        <ErorrMessage msg="هیچ محصولی یافت نشد" />
      ) : (
        <>
          <TableProducts
            changeVisibleDeleteModalForProducts={setShowRemoveModalForProducts}
            isVisibleDeleteModalForProducts={showRemoveModalForProducts}
            changeVisibleDetailsModalForProducts={
              setShowDetailsModalForProducts
            }
            isVisibleDetailsModalForProducts={showDetailsModalForProducts}
            changeVisibleEditModal={setShowEditModal}
            isVisibleEditModal={showEditModal}
            datasProducts={productsData}
            productsIdsget={setGetIdProductsForDelete}
            productsIdsForGetDetails={setGetIdProductsForDetails}
            productsIdsForEdit={setGetIdProductsForEdit}
          />

          <DeleteModals
            changeVisibleDeleteModalForProducts={setShowRemoveModalForProducts}
            isVisibleDeleteModalForProducts={showRemoveModalForProducts}
            idProducts={getIdProductsForDelete}
          />
          <DetailsModal
            changeVisibleDetailsModalForProducts={
              setShowDetailsModalForProducts
            }
            isVisibleDetailsModalForProducts={showDetailsModalForProducts}
            idProductsDetails={getIdProductsForDetails}
          />
          <EditModal isdiscardEdit={showEditModal}>
            <section className="w-full flex flex-col justify-center items-center gap-4 py-3 px-3 ">
              <h1 className="text-3xl">مقادیر جدید را وارد کنید</h1>
              <div className="w-full flex flex-col gap-6 justify-center items-center">
                <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
                  <MdOutlineFiberNew className="text-4xl" />
                  <input
                    className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                    type="text"
                    placeholder={`اسم محصول جدید را وارد کنید`}
                    value={newTitleProduct}
                    onChange={(e) => setNewTitleProduct(e.target.value)}
                    required
                  />
                </span>
                <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
                  <MdOutlineFiberNew className="text-4xl" />
                  <input
                    className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                    type="text"
                    placeholder={`مبلغ جدید را وارد کنید`}
                    value={newPriceProduct}
                    onChange={(e) => setNewPriceProduct(e.target.value)}
                    required
                  />
                </span>
                <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
                  <MdOutlineFiberNew className="text-4xl" />
                  <input
                    className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                    type="text"
                    placeholder={`موجودی محصول جدید را وارد کنید`}
                    value={newCountProduct}
                    onChange={(e) => setNewCountProduct(e.target.value)}
                    required
                  />
                </span>
                <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
                  <MdOutlineFiberNew className="text-4xl" />
                  <input
                    className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                    type="text"
                    placeholder={`ادرس کاور محصول جدید را وارد کنید`}
                    value={newImgProduct}
                    onChange={(e) => setNewImgProduct(e.target.value)}
                    required
                  />
                </span>
                <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
                  <MdOutlineFiberNew className="text-4xl" />
                  <input
                    className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                    type="text"
                    placeholder={`میزان محبوبیت محصول جدید را وارد کنید`}
                    value={newPopularityProduct}
                    onChange={(e) => setNewPopularityProduct(e.target.value)}
                    required
                  />
                </span>
                <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
                  <MdOutlineFiberNew className="text-4xl" />
                  <input
                    className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                    type="text"
                    placeholder={`میزان فروش محصول جدید را وارد کنید`}
                    value={newSaleProduct}
                    onChange={(e) => setNewSaleProduct(e.target.value)}
                    required
                  />
                </span>
                <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
                  <MdOutlineFiberNew className="text-4xl" />
                  <input
                    className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                    type="text"
                    placeholder={`تعداد رنگ بندی محصول جدید را وارد کنید`}
                    value={newColorsProduct}
                    onChange={(e) => setNewColorsProduct(e.target.value)}
                    required
                  />
                </span>
              </div>
              <div className="flex justify-center items-center gap-5">
                <button
                  type="submit"
                  className="bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
                  onClick={editProductHandler}
                >
                  افزودن
                </button>
                <button
                  type="button"
                  className="bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
                  onClick={closeEditModal}
                >
                  انصراف
                </button>
              </div>
            </section>
          </EditModal>
        </>
      )}
    </>
  );
}
