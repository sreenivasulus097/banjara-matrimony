import React from "react";
import * as Yup from "yup";
type Props = {};

export const ValidationSchemaSignIn = (props: Props) => {
  return Yup.object().shape({
    username: Yup.string()
      .min(4, "Too Short!")
      .max(70, "Too Long!")
      .required("Please enter username"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must contain 8 Chars(atleast one upper, lower, number and special chars)"
      ),
  });
};

export const ValidationSchemaSignUp = (props: Props) => {
  return Yup.object().shape({
    profile: Yup.string().required("Please select profile"),
    fullname: Yup.string()
      .min(2, "Too Short !")
      .max(50, "Too Long!")
      .required("Please enter your name"),
    dd: Yup.string().required("dd "),
    mm: Yup.string().required("mm"),
    yyyy: Yup.string().required("yyyy"),
    religion: Yup.string().required("Please select religion"),
    motherTongue: Yup.string().required("Please select mother tongue"),
    username: Yup.string()
      .min(4, "Too Short!")
      .max(70, "Too Long!")
      .required("Please enter username"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must contain 8 Chars(atleast one upper, lower, number and special chars)"
      ),
  });
};
