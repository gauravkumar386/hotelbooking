import { useMemo, useState } from "react";
import CustomDropdown from "../atoms/CustomDropdown";
import { hotelsDetails } from "../shared/util/hotelDetails";
import CustomRoomsSelection from "../atoms/CustomRoomsSelection";
import CustomButton from "../atoms/CustomButton";
import CustomCalendar from "../atoms/Calendar";
import { useNavigate } from "react-router-dom";

type SelectedHotel = {
  selectedValueName: string;
  selectedValueCode: string;
};

const HotelSearchBar = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState<SelectedHotel | null>(
    null
  );

  const hotelList = useMemo(() => {
    return hotelsDetails[0]?.hotels.map((hotel: any) => {
      return {
        selectedValueName: hotel.hotel_address.city,
        selectedValueCode: hotel.hotel_id,
      };
    });
  }, []);

  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const bookingHandler = () => {
    navigate("/booking");
  };

  return (
    <div className="hotel-search-bar">
      <CustomDropdown
        label="Select a City"
        selectedOptionIconName="pi-building"
        listOptionIconName="pi-map-marker"
        dropdownData={hotelList}
        placeholder={hotelList[0].selectedValueName}
        value={selectedHotel}
        onChange={setSelectedHotel}
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
        onClick={bookingHandler}
      />
    </div>
  );
};

export default HotelSearchBar;
