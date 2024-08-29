export default function TableProducts() {
  return (
    <>
      <section className="w-full bg-white mt-4 rounded-2xl shadow-2xl pt-4 pr-8">
        <table className="w-full">
          <thead className="h-20 text-right text-2xl">
            <tr>
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            <tr className="child:w-56 child:text-xl">
              <td>
                <img src="../image/headphone.jpeg" className="size-64" />
              </td>
              <td>هنذفری بلوتوثی</td>
              <td>200000 تومان</td>
              <td>134</td>
              <td className="child:ml-5 child:bg-blue-700 child:w-20 child:h-14 child:rounded-2xl child:text-white">
                <button type="button">جزییات</button>
                <button type="button">حذف</button>
                <button type="button">ویرایش</button>
              </td>
            </tr>
            <tr className="child:w-56 child:text-lg">
              <td>
                <img src="../image/head.jpeg" className="size-64" />
              </td>
              <td>هنذفری بلوتوثی</td>
              <td>200000 تومان</td>
              <td>134</td>
              <td className="child:ml-5 child:bg-blue-700 child:w-20 child:h-14 child:rounded-2xl child:text-white">
                <button type="button">جزییات</button>
                <button type="button">حذف</button>
                <button type="button">ویرایش</button>
              </td>
            </tr>
            <tr className="child:w-56 child:text-lg">
              <td>
                <img src="../image/charger.jpeg" className="size-64" />
              </td>
              <td>هنذفری بلوتوثی</td>
              <td>200000 تومان</td>
              <td>134</td>
              <td className="child:ml-5 child:bg-blue-700 child:w-20 child:h-14 child:rounded-2xl child:text-white">
                <button type="button">جزییات</button>
                <button type="button">حذف</button>
                <button type="button">ویرایش</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
