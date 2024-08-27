import { AiOutlineNotification } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <header className="w-full h-auto">
        <section className="flex items-center justify-between w-7/12 text-zinc-700">
          <div className="flex justify-center items-center gap-x-3 shrink-0">
            <img
              className="size-12 rounded-full"
              alt="profile"
              src="/image/diamond.png"
              loading="lazy"
            ></img>
            <div className="flex flex-col justify-center items-start">
              <span>پویا ثمرکار</span>
              <span>توسعه دهنده فرانت اند</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-x-5">
            <div className="flex justify-between items-center bg-white pr-5 pb-5 pt-5 pl-1 rounded-xl  outline-none border-none w-[400px] h-11">
              <input
                className="focus:outline-none"
                type="text"
                placeholder="جست و جو بکنید..."
              />
              <button className="flex items-center justify-center text-lg w-32 h-10 bg-blue-700 text-white rounded-xl active:shadow-lg">
                جست و جو
              </button>
            </div>
            <button className="bg-blue-700 h-8 w-8 rounded-xl flex items-center justify-center text-white active:border-black active:border-2">
              <AiOutlineNotification />
            </button>
          </div>
        </section>
      </header>
    </>
  );
}
