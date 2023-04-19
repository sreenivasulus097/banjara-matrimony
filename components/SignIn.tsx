import React from "react";
import { Formik, Form, Field } from "formik";
import { ValidationSchemaSignIn } from "./ValidationSchema";
import LoginErrorMessage from "./LoginErrorMessage";
import axios from "axios";

interface Values {
  username: string;
  password: string;
}

const signInHandler = async (formValues: Values) => {
  console.log("sign in form values", formValues);
  await axios
    .post("http://localhost:5000/api/user/login", {
      user_id: formValues.username,
      password: formValues.password,
    })
    .then((res) => {
      console.log("response:", res.data);
    })
    .catch((err) => {
      console.log("error in request", err);
    });
};

const SignIn = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={ValidationSchemaSignIn}
      onSubmit={(values, actions) => {
        console.log("form values", values, actions);
        signInHandler(values);
      }}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form className="md:flex w-full md:justify-start  mt-3 ">
          <div className="w-full md:w-1/3 mb-2 md:mb-0 md:mr-5">
            <Field
              className="w-[100%] h-10 max-w-xs p-1.5 rounded-md border border-gray-300"
              id="username"
              name="username"
              placeholder="Matrimony ID / Mobile No. / E-mail"
            />
            <LoginErrorMessage
              errorVal={touched.username}
              errorMsg={errors.username}
            />
          </div>
          <div className="w-full md:w-1/3 md: mr-5">
            <Field
              className="w-[100%] h-10 max-w-xs mr-5 p-1.5 rounded-md border border-gray-300"
              id="password"
              name="password"
              placeholder="Password"
            />
            <LoginErrorMessage
              errorVal={touched.password}
              errorMsg={errors.password}
            />
          </div>

          <div className="block md:hidden form-control w-full max-w-xs mr-5">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs baseline align-middle"
              />
              <span className="label-text baseline ml-1 align-middle">
                Keep me logged in
              </span>
            </label>
          </div>

          <button
            className="mt-3 md:mt-0 ml-[30%] md:ml-0 h-10 w-1.5/12  w-[30%] md:w-[12%] bg-primaryColor  rounded items-center px-5 font-bold"
            type="submit"
          >
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
