import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';

export default function Register(props) {

  const initialValues = {
    fullname:'',
    email: '',
    contact:'',
    password: ''
  };

  const regexNum = /^(\+977)?[9][6-9]\d{8}$/;

  const validationSchema = Yup.object({
    fullname:Yup.string().required("Required field."),
    email:Yup.string().email("Invalid email address.").required("Required field."),
    contact:Yup.string().matches(regexNum,"Invalid phone number.").required("Required field."),
    password:Yup.string().required("Required field.")

  })

  const onSubmit = (values) => {
    console.log('values', formik.values)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <div className="container w-50 my-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="fullname">
          <label className="form-label" style={{color:props.color}}>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your fullname"
            name='fullname'
           {...formik.getFieldProps('fullname')}
          />
        </div>
        {formik.touched.fullname && formik.errors.fullname ? <div className="my-2" style={{color:'red'}}>{formik.errors.fullname}</div> :null}
        <div className="E-mail my-2">
          <label className="form-label" style={{color:props.color}}>E-mail</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email address"
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email ? <div className="my-2" style={{color:'red'}}>{formik.errors.email}</div> :null}
        <div className="Contact">
        <label className="form-label" style={{color:props.color}}>Contact</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your contact"
          name='contact'
          value={formik.values.contact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </div>
        {formik.touched.contact && formik.errors.contact ? <div className="my-2" style={{color:'red'}}>{formik.errors.contact}</div> :null}
        <div className="Password my-2">
        <label className="form-label" style={{color:props.color}}>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </div>
        {formik.touched.password && formik.errors.password ? <div className="my-2" style={{color:'red'}}>{formik.errors.password}</div> :null}
        <button type="submit" className="btn btn-warning my-3">Register</button>
      </form>
    </div>
  );
}
