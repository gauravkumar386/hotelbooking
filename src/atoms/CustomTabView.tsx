import { TabPanel, TabView } from "primereact/tabview";

type Props = {
  tabList: any[];
};

const CustomTabView = (props: Props) => {
  const { tabList = [] } = props;
  return (
    <>
      <TabView>
        {tabList.map((tab, index) => {
          return <TabPanel header={tab.header}>{tab.component}</TabPanel>;
        })}
      </TabView>
    </>
  );
};

export default CustomTabView;
