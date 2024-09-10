import { useGetOrders } from "../api/apiConfigurations";
import ErorrMessage from "../components/ErorrMessage";
import ClipLoader from "react-spinners/ClipLoader";

export default function Orders() {
  const { data: orders, isError, isLoading, error } = useGetOrders();
  if (isLoading) {
    return <ClipLoader color="rgba(0, 0, 255, 1)" />;
  }

  if (isError) {
    return <h1 className="bg-red-600 text-white w-full">{error.message}</h1>;
  }
  return (
    <>
      {orders.length !== 0 ? (
        <section className="w-full bg-white mt-4 rounded-2xl shadow-2xl pt-4 ">
          <table className="w-full divide-y-2 divide-zinc-700">
            <thead className="h-20 text-center text-2xl">
              <tr>
                <th>ایدی محصول</th>
                <th>ایدی کاربر</th>
                <th>تاریخ سفارش</th>
                <th>زمان سفارش</th>
                <th>قیمت</th>
              </tr>
            </thead>
            <tbody className="text-center divide-y-2">
              {orders?.map((order) => (
                <tr className="child:w-72 child:text-xl" key={order.id}>
                  <td>{order.productID}</td>
                  <td>{order.userID}</td>
                  <td>{order.date}</td>
                  <td>{order.hour}</td>
                  <td>{order.price}</td>
                  <td className="child:ml-5 child:bg-blue-700 child:w-20 child:h-14 child:rounded-2xl child:text-white space-y-5">
                    <button type="button">جزییات</button>
                    <button type="button">حذف</button>
                    <button type="button">ویرایش</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : (
        <ErorrMessage msg={"هیچ سفارشی پیدا نشد"} />
      )}
    </>
  );
}
