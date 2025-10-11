import CustomImage from "../atoms/CustomImage";
import CustomMenu from "../atoms/CustomMenu";
import Logo from "../assets/images/logo.png";
import "../styles/CustomHeader.scss";
import CustomDivider from "../atoms/Divider";
import CustomButton from "../atoms/CustomButton";
import IconLabel from "../atoms/IconLabel";
import CustomInput from "../atoms/CustomInput";
import { useState } from "react";
import AutoCompleteInput from "../atoms/AutoComplete";
import { useNavigate } from "react-router-dom";
import { items } from "../shared/util/headerOptions";

const CustomHeader = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
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

  console.log("logggggg", searchValue !== "", isVisible);
  return (
    <div className="header-component">
      <div className="header-top">
        <div className="logo-name">Villa Verona</div>
        <div className="logo-image">
          <CustomImage source={Logo} width="60" />
        </div>
        <div className="header-top-right">
          <IconLabel label="Profile" classname="pi-user" />
          <IconLabel label="Login" classname="pi-sign-in" />
          <span>
            <CustomButton label="Book" onClick={onBookHandler} />
          </span>
        </div>
      </div>
      <CustomDivider />
      <CustomMenu items={items} />
    </div>
  );
};

export default CustomHeader;
