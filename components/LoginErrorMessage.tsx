import React from "react";

interface Props {
  errorVal: boolean | undefined;
  errorMsg: String | undefined;
}

const LoginErrorMessage = (props: Props) => {
  return (
    <>
      {props.errorVal && props.errorMsg && (
        <span className=" inline-block text-red-500 font-semibold text-xs mt-1 text-left ">
          {props.errorMsg}
        </span>
      )}
    </>
  );
};

export default LoginErrorMessage;
