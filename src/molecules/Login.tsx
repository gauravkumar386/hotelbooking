import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import CustomInput from "../atoms/CustomInput";
import CustomButton from "../atoms/CustomButton";
import "../styles/Login.scss";
import IconLabel from "../atoms/IconLabel";

type LoginForm = {
  userEmail: string;
  userPassword: string;
};

const Login = ({ onClose }: { onClose: () => void }) => {
  const [loginDetails, setLoginDetails] = useState<LoginForm>({
    userEmail: "",
    userPassword: "",
  });

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        onClose(); // Call the onClose function to close the form
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="login-overlay" ref={overlayRef}>
      <IconLabel fontSize={30} classname="pi-times" onClickHandler={onClose} />
      <h2>Login</h2>
      <Formik
        initialValues={{ userEmail: "", userPassword: "" }}
        validate={(values) => {
          const errors: Partial<LoginForm> = {};
          if (!values.userEmail) {
            errors.userEmail = "Email address is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.userEmail)
          ) {
            errors.userEmail = "Invalid email address";
          }
          if (!values.userPassword) {
            errors.userPassword = "Password is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setLoginDetails(values);
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
            <CustomInput
              name="userEmail"
              type="email"
              placeholder="Enter your email"
              setInputValue={handleChange}
              value={values.userEmail}
              onBlur={handleBlur}
            />
            {errors.userEmail && touched.userEmail && (
              <div style={{ color: "red" }}>{errors.userEmail}</div>
            )}
            <CustomInput
              name="userPassword"
              type="password"
              placeholder="Enter your password"
              setInputValue={handleChange}
              value={values.userPassword}
              onBlur={handleBlur}
            />
            {errors.userPassword && touched.userPassword && (
              <div style={{ color: "red" }}>{errors.userPassword}</div>
            )}
            <CustomButton disabled={isSubmitting} label="Submit" />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
