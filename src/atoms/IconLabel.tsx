type Props = {
  label?: string;
  classname: string;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  onClickHandler?: () => void;
};

const IconLabel = (props: Props) => {
  const {
    label,
    classname,
    onMouseOverHandler,
    onMouseOutHandler,
    onClickHandler,
  } = props;
  return (
    <span
      className={classname}
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "20px",
        cursor: "pointer",
      }}
      tabIndex={0}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      onClick={onClickHandler}
    >
      {label}
    </span>
  );
};

export default IconLabel;
