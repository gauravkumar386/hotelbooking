import { Rating } from "primereact/rating";

type Props = {
  disabled?: boolean;
  cancelButton?: boolean;
  ratingValue: number;
  readOnly: boolean;
};

const CustomRating = (props: Props) => {
  const { disabled, cancelButton = false, ratingValue, readOnly } = props;
  return (
    <div className="card flex justify-content-center">
      <Rating value={ratingValue} disabled={disabled} cancel={cancelButton} readOnly={readOnly}/>
    </div>
  );
};

export default CustomRating;
