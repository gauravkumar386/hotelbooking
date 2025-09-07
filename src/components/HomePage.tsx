import CustomHeader from "../molecules/CustomHeader";
import BackgroundVideo from "../assets/images/homepage_background_hd.mp4";
import FooterDetails from "../molecules/CustomFooter";

const HomePage = () => {
  return (
    <>
      <CustomHeader />
      <video width="100%" className="videoTag" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <FooterDetails />
    </>
  );
};

export default HomePage;
