import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import useFirebase from "../../../../Hooks/useFirebase";
import "./Login.css";
const Login = () => {
  const { signInUsingGoogle } = useAuth();
  // const { signInUsingGoogle } = useFirebase();
  return (
    <div className="w-screen h-screen py-20  bg-gray-200 ">
      <img
        width="200px"
        className="mx-auto mb-10"
        src="https://i.ibb.co/9VSzCtj/Group-1329.png"
        alt=""
      />
      <div className="w-6/12 mx-auto flex flex-col justify-center align-middle bg-white h-96">
        <p className="text-center text-2xl font-bold mb-8">Login With</p>
        <button
          onClick={signInUsingGoogle}
          className="mx-auto rounded-full py-2 px-2 w-6/12 flex justify-between inline-block align-middle border-2"
        >
          <i class="fab fa-google text-2xl"></i>
          <span>Continue With Google</span>
          <span></span>
        </button>
        <p className="text-center pt-8">
          Dont have an account?{" "}
          <Link to="/register">
            <span className="underline text-blue-500">Create an account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
