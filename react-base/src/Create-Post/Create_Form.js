import React from "react";
import * as Yup from "yup";
import {addDoc, collection} from 'firebase/firestore';
import { db } from "../Config/firebase"
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup';
import {auth} from '../Config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth';


export default function Create_Form() {

  const postRef = collection(db, 'posts');  

  const [user] = useAuthState(auth);

  const validationSchema = Yup.object({
    title: Yup.string().required("Please add a title"),
    description: Yup.string().required("Please add a description"),
  })

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver:yupResolver(validationSchema),
  });


  const onSubmit = async(data) =>{
    await addDoc(postRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container w-50 text-center my-5">
        <input className="form-control my-3" type="text" placeholder="title..." {...register("title")} />
        <p style={{color:'red'}}>{errors.title?.message}</p>
        <textarea className="form-control my-3" placeholder="description..." type="text" {...register("description")} />
        <p style={{color:'red'}}>{errors.description?.message}</p>
        <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
