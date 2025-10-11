import { Image } from "primereact/image";

type Props = {
  source: string;
  alt?: string;
  width: string;
  onClickHandler?: () => void;
};

const CustomImage = (props: Props) => {
  const { source, alt, width, onClickHandler } = props;

  return (
    <Image src={source} alt={alt} width={width} onClick={onClickHandler} />
  );
};

export default CustomImage;
