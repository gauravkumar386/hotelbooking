import "../styles/CustomTabList.scss";
import CustomCard from "./CustomCard";

type Props = {
  tabList: any[];
};

const CustomTabList = (props: Props) => {
  const { tabList } = props;
  return (
    <CustomCard className="custom-tab-list">
      {tabList.map((tabs, index) => {
        return (
          <div className="custom-tab">
            <div className="custom-tab-header">{tabs.header}</div>
            <div className="custom-tab-component">{tabs.component}</div>
          </div>
        );
      })}
    </CustomCard>
  );
};

export default CustomTabList;
