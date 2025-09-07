import { MegaMenu } from "primereact/megamenu";

type Props = {
  classname?: string;
  items?: any[];
};

const CustomMenu = (props: Props) => {
  const { classname, items } = props;
  return (
    <div className="card">
      <MegaMenu model={items} breakpoint="960px" className={classname} />
    </div>
  );
};

export default CustomMenu;
