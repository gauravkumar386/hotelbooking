import CustomHeader from "../molecules/CustomHeader";
import BackgroundVideo from "../assets/images/homepage_background_hd.mp4";
import FooterDetails from "../molecules/CustomFooter";
import HotelSearchBar from "../molecules/HotelSearchBar";
import "../styles/HomePage.scss";
import CustomRating from "../atoms/CustomRating";
import CustomSpinner from "../atoms/CustomSpinner";

const HomePage = () => {
  return (
    <>
    {/* <CustomSpinner fillColor="rgba(0, 0, 0, 0)"/> */}
      <CustomHeader />
      <div className="homepage-custom-body">
        <video width="100%" className="videoTag" autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="homepage-body-content">
          <div className="brand-rating">
            <CustomRating ratingValue={5} readOnly={true}/>
          </div>
          <span>Where Luxury Meets Excellence</span>
          <span>The Ultimate Luxury Hotel Experience in Italy</span>
          <span>
            Indulge in Italian sophistication. Elegant rooms, gourmet cuisine,
            and unforgettable views—crafted for travelers who expect more.
          </span>
        </div>
        <div>
          <HotelSearchBar />
        </div>
      </div>
      <FooterDetails />
    </>
  );
};

export default HomePage;
