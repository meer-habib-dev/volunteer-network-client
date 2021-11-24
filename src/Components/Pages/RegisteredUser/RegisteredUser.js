import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./RegisteredUser.css";
import UserInfo from "./UserInfo";
const RegisteredUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/userInfo/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    //
    //
    //
    <div className="bg-gray-200">
      <div className="register-header h-20 w-screen bg-white"></div>
      <div className="flex">
        <div className="register-nav h-screen w-3/12  bg-white pt-20 px-8">
          <Link to="/">
            <span className="flex">
              {" "}
              <img
                width="25px"
                src="https://i.ibb.co/WxfnKvg/users-alt-1.png"
                alt=""
              />{" "}
              Volunteer Register List
            </span>
          </Link>
          <span className="flex">
            <img
              width="20px"
              src="https://i.ibb.co/pfy15Jg/plus-1.png"
              alt=""
            />
            Add Event
          </span>
        </div>
        <div className="w-full h-screen m-10 bg-white p-10">
          {users.map((user) => (
            <UserInfo key={user._id} user={user}></UserInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisteredUser;
