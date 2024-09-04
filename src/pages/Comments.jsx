import ErorrMessage from "../components/ErorrMessage";
import ClipLoader from "react-spinners/ClipLoader";
import { useGetAllCommenstResponse } from "../api/apiConfigurations";
import { useContext, useEffect, useState } from "react";
import { ModalsContext } from "../context/ModalContext";
import { useLoaderData } from "react-router-dom";
import DetailsModal from "../components/DetailsModal";
import DeleteModals from "../components/DeleteModal";

export default function Comments() {
  const [showDatailsModalForComments, setShowDetailsModalForComments] =
    useState(false);
  const [showDeleteModalForComments, setShowDeleteModalForComments] =
    useState(false);
  const [whichPage, setWhichPage] = useContext(ModalsContext);
  const whichPageName = useLoaderData();
  const [commnetId, setCommentId] = useState(null);
  useEffect(() => {
    setWhichPage(whichPageName);
  }),
    [whichPage, whichPageName];
  const {
    data: comments,
    error,
    isLoading,
    isError,
  } = useGetAllCommenstResponse();

  function commentDetailsHandler(id) {
    setCommentId(id);
    setShowDetailsModalForComments((prevShow) => !prevShow);
  }
  function commentDeleteHandler(id) {
    setCommentId(id);
    setShowDeleteModalForComments((prevShow) => !prevShow);
  }
  if (isLoading) {
    return <ClipLoader color="rgba(0, 0, 255, 1)" />;
  }

  if (isError) {
    return <h1 className="bg-red-600 text-white w-full">{error.message}</h1>;
  }
  return (
    <>
      {comments?.length !== 0 ? (
        <section className="w-full bg-white mt-4 rounded-2xl shadow-2xl pt-4 ">
          <table className="w-full divide-y-2 divide-zinc-700">
            <thead className="h-20 text-center text-2xl">
              <tr>
                <th>اسم کاربر</th>
                <th>محصول</th>
                <th>کامنت</th>
                <th>تاریخ</th>
                <th>ساعت</th>
              </tr>
            </thead>
            <tbody className="text-center divide-y-2">
              {comments?.map((comment) => (
                <tr className="child:w-56 child:text-xl" key={comment.id}>
                  <td>{comment.userID}</td>
                  <td>{comment.productID}</td>

                  <td className="child:ml-5 child:bg-blue-700 child:w-20 child:h-14 child:rounded-2xl child:text-white">
                    <button
                      type="button"
                      onClick={() => commentDetailsHandler(comment.id)}
                    >
                      دیدن متن
                    </button>
                  </td>
                  <td>{comment.date}</td>
                  <td>{comment.hour}</td>

                  <td className="child:ml-5 child:bg-blue-700 child:w-20 child:h-14 child:rounded-2xl child:text-white  space-y-4">
                    <button type="button">تایید</button>
                    <button
                      type="button"
                      onClick={() => {
                        commentDeleteHandler(comment.id);
                        console.log(comment.id);
                      }}
                    >
                      حذف
                    </button>
                    <button type="button">ویرایش</button>
                    <button type="button">پاسخ</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : (
        <ErorrMessage msg={"هیچ پیامی یافت نشد"} />
      )}
      <DetailsModal
        isVisibleDetailsModalForComments={showDatailsModalForComments}
        changeVisibleDetailsModalForComments={setShowDetailsModalForComments}
        idCommentsDetails={commnetId}
        allComments={comments}
      />
      <DeleteModals
        isVisibleDeleteModalForComments={showDeleteModalForComments}
        changeVisibleDeleteModalForComments={setShowDeleteModalForComments}
        idCommentsDelete={commnetId}
      />
    </>
  );
}
