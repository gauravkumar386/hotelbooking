import { useMemo } from "react";
import AutoCompleteInput from "../atoms/AutoComplete";
import CustomDropdown from "../atoms/CustomDropdown";
import { hotelsDetails } from "../shared/util/hotelDetails";
import CustomDateRangeSelector from "../atoms/CustomDateRangeSelector";
import CustomRoomsSelection from "../atoms/CustomRoomsSelection";

type Hotel = {
  hotelName: string;
  hotelCode: string;
};

const HotelSearchBar = () => {
  const hotelList = useMemo(() => {
    return hotelsDetails[0].hotels.map((hotel: any, index: number) => {
      return {
        selectedValueName: hotel.hotel_address.city,
        selectedValueCode: hotel.hotel_id,
      };
    });
  }, []);
  const dropdownHandler = () => {};
  return (
    <div className="hotel-search-bar">
      <CustomDropdown
        label="Select a City"
        selectedOptionIconName="pi-building"
        listOptionIconName="pi-map-marker"
        dropdownData={hotelList}
        selectDropdownHandler={dropdownHandler}
      />
      <CustomDateRangeSelector
        label="Check-in/Check-out"
        classname="pi-calendar"
      />
      <CustomRoomsSelection label="Rooms" />
    </div>
  );
};

export default HotelSearchBar;
