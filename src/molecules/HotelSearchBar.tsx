import { useMemo, useState } from "react";
import CustomDropdown from "../atoms/CustomDropdown";
import { hotelsDetails } from "../shared/util/hotelDetails";
import CustomRoomsSelection from "../atoms/CustomRoomsSelection";
import CustomButton from "../atoms/CustomButton";
import CustomCalendar from "../atoms/Calendar";
import { useNavigate } from "react-router-dom";
import "../styles/HotelSearchBar.scss";

type SelectedHotel = {
  selectedValueName: string;
  selectedValueCode: string;
};

type RoomsGuests = {
  rooms: number;
  adults: number;
  children: number;
};

const hotelList = hotelsDetails[0]?.hotels.map((hotel: any) => {
  return {
    selectedValueName: hotel.hotel_address.city,
    selectedValueCode: hotel.hotel_id,
  };
});

const HotelSearchBar = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState<SelectedHotel | null>(
    hotelList[0]
  );
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [roomsGuests, setRoomsGuests] = useState<RoomsGuests>({
    rooms: 1,
    adults: 2,
    children: 0,
  });

  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const bookingHandler = () => {
    navigate("/hotels/hotels-list", {
      state: {
        selectedHotel,
        checkInDate,
        checkOutDate,
        roomsGuests,
      },
    });
  };

  console.log(
    "consoleeee",
    selectedHotel,
    checkInDate,
    checkOutDate,
    roomsGuests
  );

  return (
    <div className="hotel-search-bar">
      <CustomDropdown
        label="City/Area"
        selectedOptionIconName="pi-building"
        listOptionIconName="pi-map-marker"
        dropdownData={hotelList}
        placeholder={hotelList[0].selectedValueName}
        value={selectedHotel}
        onChange={setSelectedHotel}
      />
      <CustomCalendar
        label="Check-in"
        classname="pi-calendar"
        minDate={now}
        value={checkInDate}
        onChange={setCheckInDate}
      />

      <CustomCalendar
        label="Check-out"
        classname="pi-calendar"
        minDate={tomorrow}
        value={checkOutDate}
        onChange={setCheckOutDate}
      />

      <CustomRoomsSelection
        label="Rooms and Guests"
        value={roomsGuests}
        onChange={setRoomsGuests}
      />

      <CustomButton
        label="Check Availability"
        rounded={true}
        classname="search-button"
        onClick={bookingHandler}
        disabled={!checkInDate || !checkOutDate}
      />
    </div>
  );
};

export default HotelSearchBar;
