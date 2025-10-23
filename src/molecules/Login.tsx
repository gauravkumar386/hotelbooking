import { Formik } from "formik";
import { useState } from "react";

type loginForm = {
  userEmail: string;
  userPassword: string;
};

const Login = () => {
  const [loginDetails, setLoginDetails] = useState<loginForm>({
    userEmail: "",
    userPassword: "",
  });

  const setLoginHandler = () => {};
  return (
    <Formik
      initialValues={{ userEmail: "", userPassword: "" }}
      validate={(values) => {
        const errors: loginForm = {
          userEmail: "",
          userPassword: "",
        };
        if (!values.userEmail) {
          errors.userEmail = "Email address is Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userEmail)
        ) {
          errors.userEmail = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userEmail}
          />
          {errors.userEmail && touched.userEmail && errors.userEmail}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.userPassword}
          />
          {errors.userPassword && touched.userPassword && errors.userPassword}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Login;
