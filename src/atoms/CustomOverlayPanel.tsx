import { OverlayPanel } from "primereact/overlaypanel";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  selectedViewChildren: ReactNode;
};

const CustomOverlayPanel = (props: Props) => {
  const { children, selectedViewChildren } = props;
  const op = useRef<OverlayPanel | null>(null);
  return (
    <>
      <div onClick={(e) => op.current?.toggle(e)}>{selectedViewChildren}</div>
      <OverlayPanel ref={op}>{children}</OverlayPanel>
    </>
  );
};

export default CustomOverlayPanel;
