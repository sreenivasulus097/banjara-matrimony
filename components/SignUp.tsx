import Image from "next/image";
import React from "react";
import { Formik, Form, Field } from "formik";
import { ValidationSchemaSignUp } from "./ValidationSchema";
import LoginErrorMessage from "./LoginErrorMessage";

type Props = {};

const signUpHandler = () => {};

const SignUp = (props: Props) => {
  return (
    <div className="container-xl  pb-0 self-center flex">
      <div className="relative">
        <Image
          src="/images/matrimony-banner.jpg"
          alt="Banjara Matrimony"
          width={1350}
          height={750}
        />
      </div>
      <div className="absolute ml-[50%] my-4 border border-solid bg-white rounded-md">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={ValidationSchemaSignUp}
          onSubmit={(values, actions) => {
            console.log("form values", values, actions);
            signUpHandler();
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className="w-[3/12] p-5">
              <div className="text-2xl w-[65%] mx-auto text-center mb-4">
                Your partner search begins with a FREE REGISTRATION!
              </div>
              <div className="w-full flex mb-2 items-center ">
                <label htmlFor="profile" className=" w-[30%] mr-2 text-md">
                  Profile for
                </label>
                <Field
                  as="select"
                  className="w-[40%]  p-1 border-2 border-solid rounded border-gray-400 text-sm"
                  name="profile"
                >
                  <option value="Religion">Select Matrimony Profile for</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim - Shia">Muslim - Shia</option>
                  <option value="Muslim - Sunni">Muslim - Sunni</option>
                  <option value="Muslim - Others">Muslim - Others</option>
                  <option value="Christian">Christian</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Jain - Digambar">Jain - Digambar</option>
                  <option value="Jain - Shwetambar">Jain - Shwetambar</option>
                  <option value="Jain - Others">Jain - Others</option>
                  <option value="Parsi">Parsi</option>
                  <option value="Buddhist">Buddhist</option>
                  <option value="Inter-Religion">Inter-Religion</option>
                </Field>
                <LoginErrorMessage
                  errorVal={touched.username}
                  errorMsg={errors.username}
                />
              </div>
              <div className="w-full flex mb-2 items-center ">
                <label className="w-[30%] mr-2 text-md" htmlFor="fullname">
                  Name
                </label>
                <Field
                  className="w-[40%]  p-1 border-2 border-solid rounded border-gray-400 text-sm"
                  type="text"
                  id="fullname"
                  name="fullname"
                />
                <LoginErrorMessage
                  errorVal={touched.username}
                  errorMsg={errors.username}
                />
              </div>
              <div className="w-full flex mb-2 items-center ">
                <label className="w-[30%] mr-2 text-md" htmlFor="dob">
                  Date of birth
                </label>
                <Field
                  className="w-[10%]  p-1 border-2 border-solid rounded border-gray-400 text-sm mr-1"
                  as="select"
                  id="dob"
                  name="dob"
                >
                  <option value="dd">dd</option>
                </Field>
                <Field
                  className="w-[10%]  p-1 border-2 border-solid rounded border-gray-400 text-sm mr-1"
                  as="select"
                  id="dob"
                  name="dob"
                >
                  <option value="mm">mm</option>
                </Field>
                <Field
                  className="w-[10%]  p-1 border-2 border-solid rounded border-gray-400 text-sm mr-1"
                  as="select"
                  id="dob"
                  name="dob"
                >
                  <option value="yy">yy</option>
                </Field>
                <LoginErrorMessage
                  errorVal={touched.username}
                  errorMsg={errors.username}
                />
              </div>
              <div className="w-full flex mb-2 items-center">
                <label className="w-[30%] mr-2 text-md" htmlFor="religion">
                  Religion
                </label>
                <Field
                  as="select"
                  id="religion"
                  name="religion"
                  className="w-[40%]  p-1 border-2 border-solid rounded border-gray-400 text-sm"
                >
                  <option value="dd">religion</option>
                </Field>
                <LoginErrorMessage
                  errorVal={touched.username}
                  errorMsg={errors.username}
                />
              </div>
              <div className="w-full flex mb-2 items-center">
                <label className="w-[30%] mr-2 text-md" htmlFor="mother-tongue">
                  Religion
                </label>
                <Field
                  className="w-[40%]  p-1 border-2 border-solid rounded border-gray-400 text-sm"
                  as="select"
                  id="mother-tongue"
                  name="mother-tongue"
                >
                  <option value="dd">mother-tongue</option>
                </Field>
                <LoginErrorMessage
                  errorVal={touched.username}
                  errorMsg={errors.username}
                />
              </div>
              <div className="w-full flex mb-2 items-center">
                <label className="w-[30%] mr-2 text-md" htmlFor="email">
                  Email
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="w-[40%]  p-1 border-2 border-solid rounded border-gray-400 text-sm"
                ></Field>
                <LoginErrorMessage
                  errorVal={touched.username}
                  errorMsg={errors.username}
                />
              </div>
              <div className="w-full flex mb-2 items-center">
                <label className="w-[30%] mr-2 text-md" htmlFor="password">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-[40%]  p-1 border-2 border-solid rounded border-gray-400 text-sm"
                ></Field>
                <LoginErrorMessage
                  errorVal={touched.username}
                  errorMsg={errors.username}
                />
              </div>
              <button
                className="flex py-1.5 px-2 bg-primaryColor font-bold rounded mx-auto"
                type="submit"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
