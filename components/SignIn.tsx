import { Formik, Form, Field } from "formik";
import React from "react";

interface Values {
  username: string;
  password: string;
}

const SignIn = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values, actions) => {
        console.log("form values", values, actions);
      }}
    >
      <Form className="flex w-full justify-start  mt-3 ">
        <Field
          className="w-1/3 max-w-xs mr-5 p-1.5 rounded-md border border-gray-300"
          id="usrname"
          name="usrname"
          placeholder="Matrimony ID / Mobile No. / E-mail"
        />
        <Field
          className="w-full max-w-xs mr-5 p-1.5 rounded-md border border-gray-300"
          id="password"
          name="password"
          placeholder="Password"
        />
        <button className="flex py-1.5 px-2 bg-primaryColor" type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default SignIn;
