import React from 'react';
import {useForm} from "react-hook-form";
import * as Yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";

export default function ReactHookForm() {

    const validationSchema = Yup.object({
        fullname : Yup.string().required("Required field."),
    })

    const {register, handleSubmit,formState: { errors }}= useForm({
        resolver:yupResolver(validationSchema)
    });

    const onSubmit = (data) =>{
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container w-50 my-3">
            <div className="fullname">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your fullname" {...register("fullname")}/>
            </div>
            <p>{errors.fullname?.message}</p>
            <button className="btn btn-warning my-3" type="submit">Submit</button>
        </div>
    </form>
  )
}
