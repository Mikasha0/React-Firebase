import React from "react";
import { auth, provider } from "../Config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
  const navigate = useNavigate();

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username Empty."),
    password: Yup.string().required("Password Empty."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h6 className="text-center my-2">Login Page</h6>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container w-25 my-3">
          <input
            type="text"
            className="form-control my-3"
            placeholder="username"
            {...register("username")}
          />
          <p className="text-center" style={{color:'red'}}>{errors.username?.message}</p>
          <input
            type="password"
            className="form-control my-3"
            placeholder="password"
            {...register("password")}
          />
          <p className="text-center" style={{color:'red'}}>{errors.password?.message}</p>
        </div>
        <div className="text-center">
          <button className="btn btn-primary mx-2">
            Login
          </button>
          <button className="btn btn-warning" onClick={signIn}>
            Sign In With Google
          </button>
        </div>
      </form>
    </>
  );
}
