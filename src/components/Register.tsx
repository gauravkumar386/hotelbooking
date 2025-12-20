import { Formik } from "formik";
import CustomLayout from "../shared/CustomLayout";
import CustomInput from "../atoms/CustomInput";
import CustomButton from "../atoms/CustomButton";
import CustomDropdown from "../atoms/CustomDropdown";
import {
  countryDetails,
  countryPhoneDetails,
} from "../shared/util/countryDetails";
import "../styles/Register.scss";

type RegisterForm = {
  userEmail: string;
  userPassword: string;
  userFirstName: string;
  userLastName: string;
  userCountryOfResidence: string;
  userCountryCode: string;
  userPhoneNumber: string;
};

const countryList = countryDetails;
const countryCodeList = countryPhoneDetails.map((countryData, index) => {
  return {
    selectedValueName:
      countryData.selectedValueName + " " + countryData.selectedValueCode,
    selectedValueCode: countryData.selectedValueCode,
  };
});

const Register = () => {
  return (
    <CustomLayout>
      <div className="form-overlay register-page">
        <div className="form-content">
          <h2>Register into your Verona Membership Account</h2>
          <Formik
            initialValues={{
              userEmail: "",
              userPassword: "",
              userFirstName: "",
              userLastName: "",
              userCountryOfResidence: "",
              userCountryCode: "",
              userPhoneNumber: "",
            }}
            validate={(values) => {
              const errors: Partial<RegisterForm> = {};
              if (!values.userEmail) {
                errors.userEmail = "Email address is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  values.userEmail
                )
              ) {
                errors.userEmail = "Invalid email address";
              }
              if (!values.userPassword) {
                errors.userPassword = "Password is required";
              } else if (
                !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{1,7}$/.test(
                  values.userPassword
                )
              ) {
                errors.userPassword =
                  "Password must contain 1 uppercase, 1 lowercase, 1 number, 1 symbol and max 7 characters";
              }
              if (!values.userFirstName) {
                errors.userFirstName = "First Name is required";
              } else if (!/^[A-Za-z]+$/.test(values.userFirstName)) {
                errors.userFirstName = "First Name should contain only letters";
              }
              if (!values.userLastName) {
                errors.userLastName = "Last Name is required";
              } else if (!/^[A-Za-z]+$/.test(values.userLastName)) {
                errors.userLastName = "Last Name should contain only letters";
              }
              if (!values.userCountryOfResidence) {
                errors.userCountryOfResidence = "Country is required";
              }
              if (!values.userCountryCode) {
                errors.userCountryCode = "Country Code is required";
              }
              if (!values.userPhoneNumber) {
                errors.userPhoneNumber = "Phone Number is required";
              } else if (!/^\d{1,10}$/.test(values.userPhoneNumber)) {
                errors.userPhoneNumber =
                  "Phone Number must be numeric and max 10 digits";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              setTimeout(() => {
                console.log("Login Details:", values);
                alert(JSON.stringify(values, null, 2));
                resetForm();
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
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <CustomInput
                    name="userEmail"
                    type="email"
                    placeholder="Email Address"
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
                    placeholder="Password"
                    value={values.userPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onClear={() => setFieldValue("userPassword", "")}
                  />
                  {errors.userPassword && touched.userPassword && (
                    <div className="error-message">{errors.userPassword}</div>
                  )}
                </div>
                {/* <div className="input-group">
                  <CustomPassword
                    name="userPassword"
                    placeholder="Enter your password"
                    value={values.userPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onClear={() => setFieldValue("userPassword", "")}
                  />
                  {errors.userPassword && touched.userPassword && (
                    <div className="error-message">{errors.userPassword}</div>
                  )}
                </div> */}
                <div className="input-group">
                  <CustomInput
                    name="userFirstName"
                    type="text"
                    placeholder="First Name"
                    value={values.userFirstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onClear={() => setFieldValue("userFirstName", "")}
                  />
                  {errors.userFirstName && touched.userFirstName && (
                    <div className="error-message">{errors.userFirstName}</div>
                  )}
                </div>
                <div className="input-group">
                  <CustomInput
                    name="userLastName"
                    type="text"
                    placeholder="Last Name"
                    value={values.userLastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onClear={() => setFieldValue("userLastName", "")}
                  />
                  {errors.userLastName && touched.userLastName && (
                    <div className="error-message">{errors.userLastName}</div>
                  )}
                </div>
                <div className="input-group">
                  <CustomDropdown
                    dropdownData={countryList}
                    value={
                      countryList.find(
                        (c) =>
                          c.selectedValueName === values.userCountryOfResidence
                      ) || null
                    }
                    onChange={(value) =>
                      setFieldValue(
                        "userCountryOfResidence",
                        value?.selectedValueName ?? ""
                      )
                    }
                    customClassname="custom-dropdown"
                    placeholder="Country"
                  />
                  {errors.userCountryOfResidence &&
                    touched.userCountryOfResidence && (
                      <div className="error-message">
                        {errors.userCountryOfResidence}
                      </div>
                    )}
                </div>
                <div className="input-group custom-phone-group">
                  <div>
                    <CustomDropdown
                      dropdownData={countryCodeList}
                      value={
                        countryCodeList.find(
                          (c) => c.selectedValueCode === values.userCountryCode
                        ) || null
                      }
                      onChange={(value) =>
                        setFieldValue("userCountryCode", value?.selectedValueCode ?? "")
                      }
                      customClassname="custom-dropdown"
                      placeholder="Code"
                    />
                    {errors.userCountryCode && touched.userCountryCode && (
                      <div className="error-message">
                        {errors.userCountryCode}
                      </div>
                    )}
                  </div>
                  <div className="custom-group">
                    <CustomInput
                      name="userPhoneNumber"
                      type="tel"
                      placeholder="Phone Number"
                      value={values.userPhoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onClear={() => setFieldValue("userPhoneNumber", "")}
                    />
                    {errors.userPhoneNumber && touched.userPhoneNumber && (
                      <div className="error-message">
                        {errors.userPhoneNumber}
                      </div>
                    )}
                  </div>
                </div>
                <div className="custom-btn-group">
                  <CustomButton disabled={isSubmitting} label="Register" />
                </div>
              </form>
            )}
          </Formik>
          <h2>Join today to unlock privileges of Verona Hotel Membership</h2>
        </div>
      </div>
    </CustomLayout>
  );
};

export default Register;
