import React from "react";

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <>
      <div className="form-control w-1/3 max-w-xs mr-5">
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
      <div className="w-1/3 max-w-xs mr-5 flex justify-self-auto space-x-3">
        <span className="">
          <a className="link text-blue-500 cursor-pointer  hover:underline decoration-solid">
            Forgot password?
          </a>
        </span>
        <span className="">|</span>
        <span>
          <a className="link text-blue-500 cursor-pointer  hover:underline decoration-solid">
            Login Via OTP
          </a>
        </span>
      </div>
    </>
  );
};

export default ForgotPassword;
