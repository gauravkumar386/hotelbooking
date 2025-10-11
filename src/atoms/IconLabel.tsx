type Props = {
  key?: number;
  label?: string;
  classname: string;
  fontSize?: number;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  onClickHandler?: () => void;
};

const IconLabel = (props: Props) => {
  const {
    key,
    label,
    classname,
    onMouseOverHandler,
    onMouseOutHandler,
    onClickHandler,
    fontSize = 15,
  } = props;
  return (
    <span
      className={`pi ${classname}`}
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: `{${fontSize} px}`,
        cursor: "pointer",
      }}
      tabIndex={0}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      onClick={onClickHandler}
      key={key}
    >
      {label}
    </span>
  );
};

export default IconLabel;
