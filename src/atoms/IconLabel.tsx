type Props = {
  key?: number;
  fontColor?: string;
  label?: string;
  classname: string;
  fontSize?: number;
  style?: React.CSSProperties;
  onMouseOverHandler?: () => void;
  onMouseOutHandler?: () => void;
  onClickHandler?: () => void;
};

const IconLabel = (props: Props) => {
  const {
    key,
    fontColor,
    label,
    classname,
    onMouseOverHandler,
    onMouseOutHandler,
    onClickHandler,
    fontSize = 10,
    style
  } = props;
  return (
    <span
      className={`pi ${classname}`}
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: `{${fontSize} px}`,
        cursor: "pointer",
        color: `${fontColor}`,
        ...style
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
