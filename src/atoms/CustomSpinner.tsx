import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect } from "react";

type Props = {
  height?: number;
  width?: number;
  strokeWidth?: string;
  fillColor: string;
  animationDuration?: string;
};

const CustomSpinner = (props: Props) => {
  const { height, width, strokeWidth, fillColor, animationDuration } = props;
  useEffect(() => {
    const originalOverFlow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverFlow;
    };
  }, []);
  return (
    <div
      className="card flex justify-content-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProgressSpinner
        style={{ width: `${width}px`, height: `${height}px` }}
        strokeWidth={strokeWidth}
        fill={fillColor}
        animationDuration={animationDuration}
      />
    </div>
  );
};

export default CustomSpinner;
