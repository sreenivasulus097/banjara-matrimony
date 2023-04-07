import React from "react";
import { Formik, Form, Field } from "formik";
import { ValidationSchemaSignIn } from "./ValidationSchema";
import LoginErrorMessage from "./LoginErrorMessage";

interface Values {
  username: string;
  password: string;
}

const signInHandler = (formValues = {}) => {
  console.log("sign in form values", formValues);
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
        <Form className="flex w-full justify-start  mt-3 ">
          <div className="w-1/3  mr-5">
            <Field
              className="w-[100%] h-10 max-w-xs p-1.5 rounded-md border border-gray-300"
              id="usrname"
              name="usrname"
              placeholder="Matrimony ID / Mobile No. / E-mail"
            />
            <LoginErrorMessage
              errorVal={touched.username}
              errorMsg={errors.username}
            />
          </div>
          <div className="w-1/3 mr-5">
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
          <button
            className="flex h-10 w-1.5/12  w-[10%] bg-primaryColor  rounded items-center px-5 font-bold"
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
