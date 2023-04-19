import Image from "next/image";
import React from "react";
import { Formik, Form, Field } from "formik";
import { ValidationSchemaSignUp } from "./ValidationSchema";
import LoginErrorMessage from "./LoginErrorMessage";
import axios from "axios";

interface Values {
  profile: string;
  fullname: string;
  dd: string;
  mm: string;
  yyyy: string;
  religion: string;
  motherTongue: string;
  username: string;
  password: string;
}

const signUpHandler = async (formValues: Values) => {
  console.log("sign up form values", formValues);
  await axios
    .post("http://localhost:5000/api/user/signup", {
      profile_for: formValues.profile,
      name: formValues.fullname,
      dob: `${formValues.yyyy}-${formValues.mm}-${formValues.dd}T00:00:00.000+00:00`,
      //"2014-01-22T14:56:59.301Z",

      religion: formValues.religion,
      mother_tongue: formValues.motherTongue,
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

const SignUp = () => {
  return (
    <div className=" container-xl  pb-0 self-center flex">
      <div className="relative">
        <Image
          src="/images/matrimony-banner1.jpg"
          alt="Banjara Matrimony"
          width={1350}
          height={750}
        />
      </div>
      <div className="absolute ml-[50%] my-4 border border-solid bg-white rounded-md">
        <Formik
          initialValues={{
            profile: "",
            fullname: "",
            dd: "",
            mm: "",
            yyyy: "",
            religion: "",
            motherTongue: "",
            username: "",
            password: "",
          }}
          validationSchema={ValidationSchemaSignUp}
          onSubmit={(values, actions) => {
            console.log("form values", values, actions);
            signUpHandler(values);
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
                  id="profile"
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
                  errorVal={touched.profile}
                  errorMsg={errors.profile}
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
                  errorVal={touched.fullname}
                  errorMsg={errors.fullname}
                />
              </div>
              <div className="w-full flex mb-2 items-center ">
                <label className="w-[30%] mr-2 text-md" htmlFor="dob">
                  Date of birth
                </label>
                <Field
                  className="w-[10%]  p-1 border-2 border-solid rounded border-gray-400 text-sm mr-1"
                  as="select"
                  id="dd"
                  name="dd"
                >
                  <option value="dd">dd</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </Field>
                <LoginErrorMessage errorVal={touched.dd} errorMsg={errors.dd} />
                <Field
                  className="w-[10%]  p-1 border-2 border-solid rounded border-gray-400 text-sm mr-1"
                  as="select"
                  id="mm"
                  name="mm"
                >
                  <option value="mm">mm</option>
                  <option value="03">03</option>
                  <option value="05">05</option>
                  <option value="12">12</option>
                </Field>
                <LoginErrorMessage errorVal={touched.mm} errorMsg={errors.mm} />
                <Field
                  className="w-[13%]  p-1 border-2 border-solid rounded border-gray-400 text-sm mr-1"
                  as="select"
                  id="yyyy"
                  name="yyyy"
                >
                  <option value="yyyy">yyyy</option>
                  <option value="1990">1990</option>
                  <option value="1993">1993</option>
                  <option value="1995">1995</option>
                </Field>
                <LoginErrorMessage
                  errorVal={touched.yyyy}
                  errorMsg={errors.yyyy}
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
                  <option value="hindu">hindu</option>
                  <option value="muslim">muslim</option>
                </Field>
                <LoginErrorMessage
                  errorVal={touched.religion}
                  errorMsg={errors.religion}
                />
              </div>
              <div className="w-full flex mb-2 items-center">
                <label className="w-[30%] mr-2 text-md" htmlFor="mother-tongue">
                  Religion
                </label>
                <Field
                  className="w-[40%]  p-1 border-2 border-solid rounded border-gray-400 text-sm"
                  as="select"
                  id="motherTongue"
                  name="motherTongue"
                >
                  <option value="dd">mother-tongue</option>
                  <option value="telugu">Telugu</option>
                  <option value="tamil">Tamil</option>
                </Field>
                <LoginErrorMessage
                  errorVal={touched.motherTongue}
                  errorMsg={errors.motherTongue}
                />
              </div>
              <div className="w-full flex mb-2 items-center">
                <label className="w-[30%] mr-2 text-md" htmlFor="email">
                  Email
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
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
