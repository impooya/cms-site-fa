import { useGetUserRequest } from "../api/apiConfigurations";
import ErorrMessage from "../components/ErorrMessage";
import ClipLoader from "react-spinners/ClipLoader";
import { ModalsContext } from "../context/ModalContext";
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DeleteModals from "../components/DeleteModal";

export default function Users() {
  const [whichPage, setWhichPage] = useContext(ModalsContext);
  const [userId, setUserId] = useState(null);
  const [showDeleteModalForUsers, setShowDeleteModalForUsers] = useState(false);
  const whichPageName = useLoaderData();
  useEffect(() => {
    setWhichPage(whichPageName);
  }),
    [whichPage, whichPageName];

  function usersDeleteHandler(id) {
    setUserId(id);
    setShowDeleteModalForUsers((prevShow) => !prevShow);
  }
  const { data: users, isError, isLoading, error } = useGetUserRequest();
  if (isLoading) {
    return <ClipLoader color="rgba(0, 0, 255, 1)" />;
  }

  if (isError) {
    return <h1 className="bg-red-600 text-white w-full">{error.message}</h1>;
  }
  return (
    <>
      {users.length !== 0 ? (
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
              {users.map((user) => (
                <tr className="child:w-72 child:text-xl" key={user.id}>
                  <td>
                    {user.firsname}
                    &nbsp;
                    {user.lastname}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td className="child:ml-5 child:bg-blue-700 child:w-20 child:h-14 child:rounded-2xl child:text-white space-y-5">
                    <button type="button">جزییات</button>
                    <button
                      type="button"
                      onClick={() => {
                        usersDeleteHandler(user.id);
                      }}
                    >
                      حذف
                    </button>
                    <button type="button">ویرایش</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ) : (
        <ErorrMessage msg={"هیچ کاربری پیدا نشد"} />
      )}
      <DeleteModals
        isVisibleDeleteModalForUsers={showDeleteModalForUsers}
        changeVisibleDeleteModalForUsers={setShowDeleteModalForUsers}
        userIdDelete={userId}
      />
    </>
  );
}
