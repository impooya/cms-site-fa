export default function TableProducts() {
  return (
    <>
      <section>
        <table>
          <thead>
            <tr>
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="../image/headphone.jpeg"></img>
              </td>
              <td>هنذفری بلوتوثی</td>
              <td>200000 تومان</td>
              <td>134</td>
              <td>
                <button>جزِییات</button>
                <button>حذف</button>
                <button>ویرایش</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="../image/head.jpeg"></img>
              </td>
              <td>هنذفری بلوتوثی</td>
              <td>200000 تومان</td>
              <td>134</td>
              <td>
                <button>جزِییات</button>
                <button>حذف</button>
                <button>ویرایش</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="../image/charger.jpeg"></img>
              </td>
              <td>هنذفری بلوتوثی</td>
              <td>200000 تومان</td>
              <td>134</td>
              <td>
                <button>جزِییات</button>
                <button>حذف</button>
                <button>ویرایش</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
