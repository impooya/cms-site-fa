import { AiOutlineNotification } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <header>
        <section>
          <div>
            <img className="size-12 rounded-full" alt="profile" src=""></img>
            <div>
              <span>پویا ثمرکار</span>
              <span>توسعه دهنده فرانت اند</span>
            </div>
          </div>
          <div>
            <div>
              <input type="text" placeholder="جست و جو بکنید..." />
              <button>جست و جو</button>
            </div>
            <span>
              <AiOutlineNotification />
            </span>
          </div>
        </section>
      </header>
    </>
  );
}
