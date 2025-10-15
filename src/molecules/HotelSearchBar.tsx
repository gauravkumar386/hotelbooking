import { useMemo, useState } from "react";
import CustomDropdown from "../atoms/CustomDropdown";
import { hotelsDetails } from "../shared/util/hotelDetails";
import CustomDateRangeSelector from "../atoms/CustomDateRangeSelector";
import CustomRoomsSelection from "../atoms/CustomRoomsSelection";
import CustomButton from "../atoms/CustomButton";
import CustomCalendar from "../atoms/Calendar";

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
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    <div className="hotel-search-bar">
      <CustomDropdown
        label="Select a City"
        selectedOptionIconName="pi-building"
        listOptionIconName="pi-map-marker"
        dropdownData={hotelList}
        selectDropdownHandler={dropdownHandler}
      />
      <CustomCalendar label="Check-in" classname="pi-calendar" minDate={now} />
      <CustomCalendar
        label="Check-out"
        classname="pi-calendar"
        minDate={tomorrow}
      />
      <CustomRoomsSelection label="Rooms and Guests" />
      <CustomButton
        label="Check Availability"
        rounded={true}
        classname="search-button"
      />
    </div>
  );
};

export default HotelSearchBar;
