import { createPortal } from "react-dom";
export default function Modals() {
  return (
    <>
      {createPortal(
        <div>
          <div>
            <h1>ایا میخواهید حذف کنید؟</h1>
            <div>
              <button>بله</button>
              <button>خیر</button>
            </div>
          </div>
        </div>,
        document.querySelector("#modals-parent")
      )}
    </>
  );
}
