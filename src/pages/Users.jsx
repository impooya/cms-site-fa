import ErorrMessage from "../components/ErorrMessage";

export default function Users() {
  return (
    <>
      <section className="w-full bg-white mt-4 rounded-2xl shadow-2xl pt-4 ">
        <table className="w-full divide-y-2 divide-zinc-700">
          <thead className="h-20 text-center text-2xl">
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>یوزرنیم</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
            </tr>
          </thead>
          <tbody className="text-center divide-y-2">
            <tr className="child:w-72 child:text-xl">
              <td>{"حسینی نژاد"}</td>
              <td>{"ali_hsyni"}</td>
              <td>{"ali_9991"}</td>
              <td>{"9158798712"}</td>
              <td>{"ali@gmail.com"}</td>
              <td className="child:ml-5 child:bg-blue-700 child:w-20 child:h-14 child:rounded-2xl child:text-white space-y-5">
                <button type="button">جزییات</button>
                <button type="button">حذف</button>
                <button type="button">ویرایش</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <ErorrMessage msg={"هیچ کاربری پیدا نشد"} />
    </>
  );
}
