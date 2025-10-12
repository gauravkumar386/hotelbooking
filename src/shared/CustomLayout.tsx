import { useNavigate } from "react-router-dom";
import CustomTabView from "../atoms/CustomTabView";
import "../styles/Layout.scss";
import { Steps } from "primereact/steps";
import HotelSelection from "../components/HotelSelection";
import GuestRoomCount from "../molecules/GuestRoomCount";
import DateSelection from "../molecules/DateSelection";
import CustomTabList from "../atoms/CustomTabList";
import CustomInput from "../atoms/CustomInput";
import CustomImage from "../atoms/CustomImage";
import Logo from "../assets/images/logo.png";
import CustomCounter from "../molecules/CustomCounter";

const CustomLayout = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Destination",
    },
    {
      label: "Rooms Selection",
    },
    {
      label: "Special Requests",
    },
    {
      label: "Checkout",
    },
  ];
  const setSelectedCity = () => {};
  const tablist = [
    {
      header: "Select Hotel",
      component: (
        <CustomInput
          placeholder="Select Hotel"
          setInputValue={setSelectedCity}
          variant="filled"
        />
      ),
    },
    {
      header: "Select Rooms & Guests",
      component: <></>,
    },
    {
      header: "Select Dates",
      component: <DateSelection />,
    },
  ];
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="custom-layout">
      <div className="custom-layout-header">
        <div className="pi pi-times close-btn" onClick={navigateToHome}>
          Exit
        </div>
        <div className="logo-image">
          <CustomImage source={Logo} width="60" onClickHandler={navigateToHome}/>
        </div>
        <div className="pi pi-user login-btn">Login</div>
      </div>
      <Steps readOnly model={items} />
      <div className="custom-layout-body">
        <CustomTabList tabList={tablist} />
      </div>
    </div>
  );
};

export default CustomLayout;
