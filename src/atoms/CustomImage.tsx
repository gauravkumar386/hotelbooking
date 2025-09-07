import { Image } from "primereact/image";

type Props = {
  source: string;
  alt?: string;
  width: string;
};

const CustomImage = (props: Props) => {
  const { source, alt, width } = props;

  return <Image src={source} alt={alt} width={width} />;
};

export default CustomImage;
