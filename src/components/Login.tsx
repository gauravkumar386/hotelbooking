import { Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import CustomInput from "../atoms/CustomInput";
import CustomButton from "../atoms/CustomButton";
import IconLabel from "../atoms/IconLabel";
import { useNavigate } from "react-router-dom";
import ReCaptcha from "../molecules/ReCaptcha";
import "../styles/Login.scss";

type LoginForm = {
  userEmail: string;
  userPassword: string;
  recaptchaToken: string;
};

const Login = ({ onClose }: { onClose: () => void }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const navigate = useNavigate();

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

  const registerClick = () => {
    navigate("/register");
  };

  const handleReCaptchaVerify = (token: string) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="form-overlay" ref={overlayRef}>
      <IconLabel classname="pi-times custom-icon" onClickHandler={onClose} />
      <div className="form-content">
        <h2>Login into your Verona Membership Account</h2>
        <Formik
          initialValues={{
            userEmail: "",
            userPassword: "",
            recaptchaToken: "",
          }}
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
            if (!recaptchaToken) {
              errors.recaptchaToken = "Please verify the reCAPTCHA";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
              values.recaptchaToken = recaptchaToken;
              console.log("Login Details:", values);
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              onClose();
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
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <CustomInput
                  name="userEmail"
                  type="email"
                  placeholder="Enter your email"
                  value={values.userEmail}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onClear={() => setFieldValue("userEmail", "")}
                />
                {errors.userEmail && touched.userEmail && (
                  <div className="error-message">{errors.userEmail}</div>
                )}
              </div>
              <div className="input-group">
                <CustomInput
                  name="userPassword"
                  type="password"
                  placeholder="Enter your password"
                  value={values.userPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onClear={() => setFieldValue("userPassword", "")}
                />
                {errors.userPassword && touched.userPassword && (
                  <div className="error-message">{errors.userPassword}</div>
                )}
              </div>
              <a href="/" className="forgot-pwd">
                Forgot Password?
              </a>
              {/* <div style={{ marginBottom: "2rem" }}>
                <ReCaptcha
                  siteKey="6LfjbyssAAAAABPznkwfmdcMCojfw09TvxJ2cHp1"
                  onVerify={handleReCaptchaVerify}
                />
              </div>
              {errors.recaptchaToken && (
                <div className="error-message">{errors.recaptchaToken}</div>
              )} */}
              <div className="custom-btn-group">
                <CustomButton disabled={isSubmitting} label="Login In" />
                <CustomButton
                  disabled={isSubmitting}
                  label="Join Now "
                  onClick={registerClick}
                />
              </div>
            </form>
          )}
        </Formik>
        <h2>Join today to unlock privileges of Verona Hotel Membership</h2>
      </div>
    </div>
  );
};

export default Login;
