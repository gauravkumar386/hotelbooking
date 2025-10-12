import CustomOverlayPanel from "./CustomOverlayPanel";
import IconLabel from "./IconLabel";

type Props = {
  label: string;
  selectedNoOfGuests: number;
  openSection: string;
  setOpenSection: (section: string) => void;
};
const CustomGuestsSelection = (props: Props) => {
  const { label, selectedNoOfGuests = 2, openSection, setOpenSection } = props;
  return (
    <></>
    // <div className="card flex" style={{ minWidth: "12rem", position: "relative" }}>
    //   <div className="label">{label}</div>
    //   <CustomOverlayPanel
    //     selectedSection="guest-selection"
    //     openSection={openSection}
    //     setOpenSection={setOpenSection}
    //     selectedViewChildren={
    //       <div
    //         style={{
    //           display: "flex",
    //           gap: "10px",
    //           justifyContent: "space-between",
    //           padding: "12px 12px 12px 0",
    //           cursor: "pointer",
    //         }}
    //       >
    //         <IconLabel fontSize={20} classname="pi-users" />
    //         <span style={{ fontSize: "18px", opacity: "0.5" }}>
    //           {selectedNoOfGuests < 10 ? "0" : ""}
    //           {selectedNoOfGuests} Guest{`${selectedNoOfGuests > 1 ? "s" : ""}`}
    //         </span>
    //         <IconLabel fontSize={20} classname="pi-angle-down" />
    //       </div>
    //     }
    //   >
    //     <span>
    //       <IconLabel classname="pi-users" />
    //     </span>
    //     <span>
    //       {selectedNoOfGuests < 10 ? "0" : ""}
    //       {selectedNoOfGuests} Guest{`${selectedNoOfGuests > 1 ? "s" : ""}`}
    //     </span>
    //     <span></span>
    //   </CustomOverlayPanel>
    // </div>
  );
};

export default CustomGuestsSelection;
