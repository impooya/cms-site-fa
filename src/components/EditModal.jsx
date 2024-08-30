import { createPortal } from "react-dom";

// eslint-disable-next-line react/prop-types
function EditModal({ children, onSubmitEdit, isdiscardEdit }) {
  return (
    <>
      {createPortal(
        <div
          className={`w-full fixed h-dvh bg-black/75 z-99 inset-0 flex justify-center items-center  ${
            isdiscardEdit ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-all `}
        >
          <form
            className="bg-white w-[400px] rounded-2xl"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitEdit();
            }}
          >
            {children}
          </form>
        </div>,
        document.querySelector("#modals-parent")
      )}
    </>
  );
}

export default EditModal;
