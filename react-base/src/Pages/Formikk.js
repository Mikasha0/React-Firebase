import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useContext,useEffect } from "react";
import { AppContext } from "../App";
import Axios from 'axios';

export default function Formikk(props) {

  const { catFact,setUserName,setCatFact } = useContext(AppContext);

  useEffect(() => {
    handleClick()
  },[])

  const initialValues = {
    fullname: "",
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Required field."),
  });

  const onSubmit = (values) => {
    setUserName(values.fullname);
  };

  const handleClick = () => {
    Axios.get("https://catfact.ninja/fact").then((res)=> 
      {
        setCatFact(res.data?.fact)
      })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="container w-50 my-3">
          <div className="field1">
            <label className="form-label" style={{ color: props.color }}>
              Full Name
            </label>
            <Field
              type="text"
              name="fullname"
              className="form-control"
              placeholder="Enter your fullname"
            />
            <div className="Error" style={{ color: "red" }}>
              <ErrorMessage name="fullname" />
            </div>
          </div>
          <div className="input-group">
            <button type="submit" className="btn btn-warning my-3">
              Validate
            </button>
            <button className="btn btn-danger my-3 mx-2"type='button' onClick={handleClick}>
              Generate cat-fact
            </button>
          </div>
          <div>{catFact}</div>
        </div>
      </Form>
    </Formik>
  );
}
