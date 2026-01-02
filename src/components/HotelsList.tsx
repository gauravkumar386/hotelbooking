import FilterCard from "../molecules/FilterCard";
import HotelCard from "../molecules/HotelCard";
import CustomLayout from "../shared/CustomLayout";
import { hotelsDetails } from "../shared/util/hotelDetails";
import "../styles/HotelsList.scss";

const hotelList = hotelsDetails[0].hotels;

const HotelsList = () => {
  return (
    <CustomLayout isSearchBarRequired>
      <div className="hotels-list-page">
        <div className="hotels-filters">
          <FilterCard />
        </div>
        <div className="hotels-list">
          <HotelCard hotelList={hotelList} />
        </div>
      </div>
    </CustomLayout>
  );
};

export default HotelsList;
