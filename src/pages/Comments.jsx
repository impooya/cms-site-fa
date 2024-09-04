import ErorrMessage from "../components/ErorrMessage";
import ClipLoader from "react-spinners/ClipLoader";
import {
  useGetAllCommenstResponse,
  useUpdateComments,
} from "../api/apiConfigurations";
import { useContext, useEffect, useState } from "react";
import { ModalsContext } from "../context/ModalContext";
import { useLoaderData } from "react-router-dom";
import DetailsModal from "../components/DetailsModal";
import DeleteModals from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import { MdOutlineFiberNew } from "react-icons/md";

export default function Comments() {
  const [showDatailsModalForComments, setShowDetailsModalForComments] =
    useState(false);
  const [showDeleteModalForComments, setShowDeleteModalForComments] =
    useState(false);
  const [whichPage, setWhichPage] = useContext(ModalsContext);
  const whichPageName = useLoaderData();
  const [commnetId, setCommentId] = useState(null);
  const [newCommentContent, setNewCommentContent] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
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
  useEffect(() => {
    const comment = comments?.find((item) => {
      return item.id === commnetId;
    });

    if (comment) {
      setNewCommentContent(comment.body);
    }
  }, [comments, commnetId]);
  const { mutate: editComment } = useUpdateComments(commnetId);
  function editCommentHandler() {
    const newCommentInfo = {
      body: newCommentContent,
    };
    editComment(newCommentInfo);
    setShowEditModal((prevShow) => !prevShow);
  }

  function commentDetailsHandler(id) {
    setCommentId(id);
    setShowDetailsModalForComments((prevShow) => !prevShow);
  }
  function commentDeleteHandler(id) {
    console.log(id);
    setCommentId(id);
    setShowDeleteModalForComments((prevShow) => !prevShow);
  }
  function commentEditHandler(id) {
    setCommentId(id);
    setShowEditModal((prevShow) => !prevShow);
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
                      }}
                    >
                      حذف
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        commentEditHandler(comment.id);
                      }}
                    >
                      ویرایش
                    </button>
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
                value={newCommentContent}
                onChange={(e) => {
                  setNewCommentContent(e.target.value);
                }}
                required
              />
            </span>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              type="submit"
              className="bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
              onClick={editCommentHandler}
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
  );
}
