import { useNavigate } from "react-router-dom";
import CustomTabView from "../atoms/CustomTabView";
import "../styles/Layout.scss";
import { Steps } from "primereact/steps";
import HotelSelection from "../components/HotelSelection";
import GuestRoomCount from "../molecules/GuestRoomCount";
import DateSelection from "../molecules/DateSelection";

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
  const tablist = [
    {
      header: "Select Hotel",
      component: <HotelSelection />,
    },
    {
      header: "Select Rooms & Guests",
      component: <GuestRoomCount />,
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
        <div className="logo">Villa Verona</div>
        <div className="pi pi-user login-btn">Login</div>
      </div>
      <Steps readOnly model={items} />
      <CustomTabView tabList={tablist} />
    </div>
  );
};

export default CustomLayout;
