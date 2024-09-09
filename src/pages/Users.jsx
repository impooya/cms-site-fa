import { useGetUserRequest, useUpdateUser } from "../api/apiConfigurations";
import ErorrMessage from "../components/ErorrMessage";
import ClipLoader from "react-spinners/ClipLoader";
import { ModalsContext } from "../context/ModalContext";
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DeleteModals from "../components/DeleteModal";
import EditModal from "../components/EditModal";
import { MdOutlineFiberNew } from "react-icons/md";

export default function Users() {
  const [whichPage, setWhichPage] = useContext(ModalsContext);
  const [userId, setUserId] = useState(null);
  const [showDeleteModalForUsers, setShowDeleteModalForUsers] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  //new user state
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newScore, setNewScore] = useState("");
  const [newBuy, setNewBuy] = useState("");
  const whichPageName = useLoaderData("");
  const { data: users, isError, isLoading, error } = useGetUserRequest();
  const { mutate: updateUser, isPending } = useUpdateUser(userId);
  useEffect(() => {
    setWhichPage(whichPageName);
  }),
    [whichPage, whichPageName];

  useEffect(() => {
    const user = users?.find((item) => {
      return item.id === userId;
    });
    if (user) {
      setNewFirstName(user.firsname);
      setNewLastName(user.lastname);
      setNewUserName(user.username);
      setNewPassword(user.password);
      setNewPhone(user.phone);
      setNewCity(user.city);
      setNewEmail(user.email);
      setNewAddress(user.address);
      setNewScore(user.score);
      setNewBuy(user.buy);
    }
  }, [users, userId]);

  function usersDeleteHandler(id) {
    setUserId(id);
    setShowDeleteModalForUsers((prevShow) => !prevShow);
  }
  function editUserHandler(id) {
    setUserId(id);
    setShowEditModal((prevShow) => !prevShow);
  }
  function closeEditModal() {
    setShowEditModal((prevShow) => !prevShow);
  }

  function updateUserHandler() {
    const newUesrInfo = {
      firsname: newFirstName,
      lastname: newLastName,
      username: newUserName,
      password: newPassword,
      phone: newPhone,
      city: newCity,
      email: newEmail,
      address: newAddress,
      score: newScore,
      buy: newBuy,
    };
    updateUser(newUesrInfo);
    closeEditModal();
  }
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
                    <button
                      type="button"
                      onClick={() => {
                        editUserHandler(user.id);
                      }}
                      disabled={isPending}
                      className="disabled:opacity-30 disabled:cursor-progress"
                    >
                      {isPending && user.id === userId
                        ? "در حال ذخیره..."
                        : "ویرایش"}
                    </button>
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
      <EditModal isdiscardEdit={showEditModal}>
        <section className="w-full flex flex-col justify-center items-center gap-4 py-3 px-3 ">
          <h1 className="text-3xl">مقادیر جدید را وارد کنید</h1>
          <div className="w-full flex flex-col gap-6 justify-center items-center">
            <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`نام جدید کاربر را وارد کنید`}
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                required
              />
            </span>
            <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`نام خانوادگی جدید کاربر را وارد کنید`}
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                required
              />
            </span>
            <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`نام کاربری جدید کاربر را وارد کنید`}
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                required
              />
            </span>
            <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`پسورد جدید کاربر را وارد کنید`}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </span>
            <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`شماره تماس جدید کاربر را وارد کنید`}
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                required
              />
            </span>
            <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`شهر جدید کاربر را وارد کنید`}
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                required
              />
            </span>
            <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`ایمیل جدید کاربر را وارد کنید`}
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
              />
            </span>
            <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`ادرس جدید کاربر را وارد کنید`}
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                required
              />
            </span>
            <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`امتیاز جدید کاربر را وارد کنید`}
                value={newScore}
                onChange={(e) => setNewScore(e.target.value)}
                required
              />
            </span>
            <span className="bg-zinc-400/50 rounded-2xl w-full flex justify-center items-center pr-2">
              <MdOutlineFiberNew className="text-4xl" />
              <input
                className="placeholder:text-zinc-600 w-full h-11 bg-transparent outline-none border-none pr-2"
                type="text"
                placeholder={`میزان خرید کاربر را وارد کنید`}
                value={newBuy}
                onChange={(e) => setNewBuy(e.target.value)}
                required
              />
            </span>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              type="submit"
              className="bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl "
              onClick={updateUserHandler}
            >
              افزودن
            </button>
            <button
              type="button"
              className="bg-blue-700 text-white w-24 h-10 text-2xl rounded-xl"
              onClick={closeEditModal}
            >
              انصراف
            </button>
          </div>
        </section>
      </EditModal>
    </>
  );
}
