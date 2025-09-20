import { MegaMenu } from "primereact/megamenu";

type Orientation = "horizontal" | "vertical";

type Props = {
  classname?: string;
  items?: any[];
  orientation?: Orientation;
};

const CustomMenu = (props: Props) => {
  const { classname, items, orientation = "horizontal" } = props;
  return (
    <div className="card">
      <MegaMenu
        model={items}
        breakpoint="960px"
        className={classname}
        orientation={orientation}
      />
    </div>
  );
};

export default CustomMenu;
