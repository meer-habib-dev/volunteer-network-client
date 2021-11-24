import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [info, setInfo] = useState("");
  const nameRef = useRef("");
  const emailRef = useRef("");
  const dateRef = useRef("");
  const desRef = useRef("");
  const booksRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const date = dateRef.current.value;
    const des = desRef.current.value;
    const books = booksRef.current.value;
    const info = { name, email, date, des, books };
    console.log(info);
    fetch("http://localhost:5000/userInfo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    });
    alert("Event Register Successfully");
    e.target.reset();
  };
  return (
    <div className="w-screen  py-20  bg-gray-200 ">
      <img
        width="200px"
        className="mx-auto mb-10"
        src="https://i.ibb.co/9VSzCtj/Group-1329.png"
        alt=""
      />
      <div className="w-6/12 mx-auto flex flex-col justify-center align-middle bg-white">
        <p className="text-center text-2xl font-bold my-8">
          Register as a volunteer
        </p>
        <form onSubmit={handleSubmit} className="w-6/12 mx-auto">
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter Name"
            className="mb-5 border-b-2 w-96 pb-1 text-gray-900"
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter Email"
            className="mb-5 border-b-2 w-96 pb-1 text-gray-900"
          />
          <input
            ref={dateRef}
            type="date"
            placeholder="Enter Date"
            className="mb-5 border-b-2 w-96 pb-1 text-gray-900"
          />
          <input
            ref={desRef}
            type="text"
            placeholder="Enter Description"
            className="mb-5 border-b-2 w-96 pb-1 text-gray-900"
          />
          <input
            ref={booksRef}
            type="text"
            value="Organize books at the library."
            className="mb-5 border-b-2 w-96 pb-1 text-gray-900"
          />

          <input
            type="submit"
            value="Register"
            className="bg-blue-500 w-96 py-2 text-white"
          />
        </form>

        <p className="text-center py-8">
          Already have an account?{" "}
          <Link to="/login">
            <span className="underline text-blue-500">Please Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
