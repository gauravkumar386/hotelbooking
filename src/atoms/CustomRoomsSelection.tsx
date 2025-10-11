import CustomOverlayPanel from "./CustomOverlayPanel";
import IconLabel from "./IconLabel";

type Props = {
  label: string;
};

const CustomRoomsSelection = (props: Props) => {
  const { label } = props;
  const guestDetailsViewTemplate = () => {
    <>Guest Details View Template</>;
  };
  return (
    <div className="card flex justify-content-center">
      <div className="label">{label}</div>
      <CustomOverlayPanel
        selectedViewChildren={
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <span>
              <IconLabel classname="pi-building" />
            </span>
            <span>01 Rooms</span>
            <span>
              <IconLabel classname="pi-angle-down" fontSize={20} />
            </span>
          </div>
        }
      >
        <span>
          <IconLabel classname="pi-building" />
        </span>
        <span>01 Rooms</span>
        <span></span>
      </CustomOverlayPanel>
    </div>
  );
};

export default CustomRoomsSelection;
