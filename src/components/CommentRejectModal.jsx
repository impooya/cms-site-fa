/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { CiCircleQuestion } from "react-icons/ci";
import { useRejectComment } from "../api/apiConfigurations";
export default function CommentRejectModal({
  isVisibleRejectModalForComments,
  changeVisibleRejectModalForComments,
  idCommentsReject,
}) {
  const { mutate: rejectComment } = useRejectComment();
  function rejectCommentModalHandler() {
    rejectComment(idCommentsReject);
    changeVisibleRejectModalForComments((prevShow) => !prevShow);
  }
  function closeRejectCommentModalHandler() {
    changeVisibleRejectModalForComments((prevShow) => !prevShow);
  }
  return (
    <>
      {createPortal(
        <div
          className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center ${
            isVisibleRejectModalForComments
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } transition-all `}
          aria-live="assertive"
        >
          <div className="w-[550px] bg-white flex flex-col justify-center items-center gap-y-6 pb-7 rounded-xl">
            <CiCircleQuestion className="size-36 text-red-600" />
            <h1 className="text-4xl">ایا میخواهید پیام موردنظر را رد کنید؟</h1>
            <div className="flex justify-center items-center gap-x-5 w-full">
              <button
                type="button"
                className="bg-red-600 text-white w-24 h-10 text-2xl rounded-xl"
                onClick={() => {
                  rejectCommentModalHandler(idCommentsReject);
                }}
              >
                بله
              </button>
              <button
                type="button"
                className="bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
                onClick={closeRejectCommentModalHandler}
              >
                خیر
              </button>
            </div>
          </div>
        </div>,
        document.querySelector("#modals-parent")
      )}
    </>
  );
}
