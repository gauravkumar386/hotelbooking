import { useRef } from "react";
import CustomCounter from "../molecules/CustomCounter";
import CustomButton from "./CustomButton";
import CustomOverlayPanel, { ChildRef } from "./CustomOverlayPanel";
import IconLabel from "./IconLabel";

type Props = {
  label: string;
  selectedNoOfRooms: number;
  selectedNoOfGuests: number;
};

const CustomRoomsGuestsSelection = (props: Props) => {
  const { label, selectedNoOfRooms = 1, selectedNoOfGuests = 2 } = props;
  const childRef = useRef<ChildRef>(null);
  const handleCallChild = () => {
    childRef.current?.childMethod();
  };
  return (
    <div
      className="card flex"
      style={{ minWidth: "18rem", position: "relative" }}
    >
      <div className="label">{label}</div>
      <CustomOverlayPanel
        selectedViewChildren={
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              padding: "12px 12px 12px 0",
              cursor: "pointer",
            }}
          >
            <IconLabel fontSize={20} classname="pi-building" />
            <div style={{ fontSize: "18px", opacity: "0.6" }}>
              <span style={{ fontSize: "25px" }}>
                {selectedNoOfRooms < 10 ? "0" : ""}
                {selectedNoOfRooms}
              </span>
              Room
              {`${selectedNoOfRooms > 1 ? "s" : ""}`}
              &nbsp;
              <span style={{ fontSize: "25px" }}>
                {selectedNoOfGuests < 10 ? "0" : ""}
                {selectedNoOfGuests}
              </span>
              Guest
              {`${selectedNoOfGuests > 1 ? "s" : ""}`}
            </div>
            <IconLabel fontSize={20} classname="pi-angle-down" />
          </div>
        }
        ref={childRef}
      >
        <div className="room-count">
          <div>No. of Rooms</div>
          <CustomCounter defaultCount={2} />
        </div>
        <div className="guest-count">
          <div>No. of Guests</div>
          <CustomCounter defaultCount={2} />
        </div>
        <CustomButton
          label="Apply"
          classname="apply-btn"
          onClick={handleCallChild}
        />
      </CustomOverlayPanel>
    </div>
  );
};

export default CustomRoomsGuestsSelection;
