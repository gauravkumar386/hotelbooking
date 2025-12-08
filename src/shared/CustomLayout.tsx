import { useNavigate } from "react-router-dom";
import CustomImage from "../atoms/CustomImage";
import Logo from "../assets/images/logo.png";
import FooterDetails from "../molecules/CustomFooter";
import "../styles/Layout.scss";

type Props = {
  children: React.ReactNode;
};

const CustomLayout = (props: Props) => {
  const { children } = props;
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
            width="60"
            onClickHandler={navigateToHome}
          />
        </div>
        <div className="pi pi-user login-btn">Login</div>
      </div>
      {children}
      <FooterDetails />
    </div>
  );
};

export default CustomLayout;
