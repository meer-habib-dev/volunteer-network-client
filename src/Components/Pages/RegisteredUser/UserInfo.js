import React from "react";

const UserInfo = (user) => {
  //   const [name, email, des, date] = user;
  const { _id, name, email, des, date, books } = user.user;
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/userInfo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
        }
      });
  };
  return (
    <div className="">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{name}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{email}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{date}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {des}
        </td>
        <td
          className="
                  px-6
                  py-4
                  whitespace-nowrap
                  text-right text-sm
                  font-medium
                  "
        >
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="text-indigo-600 hover:text-indigo-900"
          >
            <i className=" fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
      {/* ------------------------------------ */}

      {/* <div className="flex justify-s text-right">
        <div>
          <p className="">{name}</p>
        </div>
        <div>
          <p>{email}</p>
        </div>
        <div>
          <p>{date}</p>
        </div>
        <div>
          <p>{books}</p>
        </div>
        <div>
          <button className="text-red-600">
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default UserInfo;
