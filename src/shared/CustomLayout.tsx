import { useNavigate } from "react-router-dom";
import CustomImage from "../atoms/CustomImage";
import Logo from "../assets/images/logo.png";
import FooterDetails from "../molecules/CustomFooter";
import HotelSearchBar from "../molecules/HotelSearchBar";
import "../styles/Layout.scss";

type Props = {
  isSearchBarRequired?: boolean;
  children: React.ReactNode;
};

const CustomLayout = (props: Props) => {
  const { isSearchBarRequired = false, children } = props;
  const navigate = useNavigate();
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
          <CustomImage
            source={Logo}
            width="50"
            onClickHandler={navigateToHome}
          />
        </div>
        <div className="pi pi-user login-btn">Login</div>
      </div>
      <div className="layout-body">
        {isSearchBarRequired && <HotelSearchBar />}
        {children}
      </div>
      <FooterDetails />
    </div>
  );
};

export default CustomLayout;
