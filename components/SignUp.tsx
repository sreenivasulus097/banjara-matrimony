import Image from "next/image";
import React from "react";
import { Formik, Form, Field } from "formik";

type Props = {};

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
      <div className="absolute ml-[50%] my-4 border border-solid bg-white">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, actions) => {
            console.log("form values", values, actions);
          }}
        >
          <Form className="w-[3/12] p-5">
            <div className="text-2xl w-[65%] mx-auto text-center">
              Your partner search begins with a FREE REGISTRATION!
            </div>
            <div>
              <label htmlFor="profile" className="">
                Profile for
              </label>
              <Field as="select" name="profile">
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
            </div>
            <div>
              <label className="" htmlFor="fullname">
                Name
              </label>
              <Field type="text" id="fullname" name="fullname" />
            </div>
            <div>
              <label className="" htmlFor="dob">
                Date of birth
              </label>
              <Field as="select" id="dob" name="dob">
                <option value="dd">dd</option>
              </Field>
              <Field as="select" id="dob" name="dob">
                <option value="mm">mm</option>
              </Field>
              <Field as="select" id="dob" name="dob">
                <option value="yy">yy</option>
              </Field>
            </div>
            <div>
              <label className="" htmlFor="religion">
                Religion
              </label>
              <Field as="select" id="religion" name="religion">
                <option value="dd">religion</option>
              </Field>
            </div>
            <div>
              <label className="" htmlFor="mother-tongue">
                Religion
              </label>
              <Field as="select" id="mother-tongue" name="mother-tongue">
                <option value="dd">mother-tongue</option>
              </Field>
            </div>
            <div>
              <label className="" htmlFor="email">
                Email
              </label>
              <Field type="email" id="email" name="email"></Field>
            </div>
            <div>
              <label className="" htmlFor="password">
                Password
              </label>
              <Field type="password" id="password" name="password"></Field>
            </div>
            <button className="flex py-1.5 px-2 bg-primaryColor" type="submit">
              Log In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
