import CustomImage from "../atoms/CustomImage";
import CustomMenu from "../atoms/CustomMenu";
import Logo from "../assets/images/logo.png";
import "../styles/CustomHeader.scss";
import CustomDivider from "../atoms/Divider";
import IconLabel from "../atoms/IconLabel";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { items } from "../shared/util/headerOptions";
import Login from "./Login";

const CustomHeader = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoginVisible, setIsLoginVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const onMouseOverHandler = () => {
    setIsVisible(true);
  };

  const onMouseOutHandler = () => {
    setIsVisible(false);
  };

  const onBookHandler = () => {
    navigate("/booking");
  };

  const profileClickHandler = () => {
    navigate("/profile");
  };

  const loginClickHandler = () => {
    setIsLoginVisible((prev) => !prev);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      if (isLoginVisible) {
        body.style.overflow = "hidden"; // Disable scrolling
      } else {
        body.style.overflow = ""; // Re-enable scrolling
      }
    }
    return () => {
      if (body) {
        body.style.overflow = ""; // Ensure scrolling is re-enabled on cleanup
      }
    };
  }, [isLoginVisible]);

  return (
    <div className="header-component">
      <div className="header-top">
        <div className="logo-name">Villa Verona</div>
        <div className="logo-image">
          <CustomImage source={Logo} width="60" />
        </div>
        <div className="header-top-right">
          <IconLabel
            label="Profile"
            classname="pi-user"
            onClickHandler={profileClickHandler}
          />
          <IconLabel
            label="Login"
            classname="pi-sign-in"
            onClickHandler={loginClickHandler}
          />
        </div>
      </div>
      <CustomDivider />
      <CustomMenu items={items} />
      {isLoginVisible && (
        <>
          <div
            className="background-overlay"
            onClick={() => setIsLoginVisible(false)}
          ></div>
          <Login onClose={() => setIsLoginVisible(false)} />
        </>
      )}
    </div>
  );
};

export default CustomHeader;
