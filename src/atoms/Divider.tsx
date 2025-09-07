import { Divider } from "primereact/divider";

type Props = {
  layout?: "vertical" | "horizontal" | undefined;
  type?: "solid" | "dashed" | "dotted" | undefined;
};

const CustomDivider = (props: Props) => {
  const { layout = "horizontal", type = "solid" } = props;
  return <Divider layout={layout} type={type} />;
};

export default CustomDivider;
