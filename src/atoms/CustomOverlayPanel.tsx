import {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import CustomCard from "./CustomCard";
import "../styles/OverlayPanel.scss";

type Props = {
  children: ReactNode;
  selectedViewChildren?: ReactNode;
};

export type ChildRef = {
  childMethod: () => void;
};

const CustomOverlayPanel = forwardRef((props: Props, ref) => {
  const { children, selectedViewChildren } = props;
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClick = () => {
    setIsOverlayOpen((prev) => !prev);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      overlayRef.current &&
      !overlayRef.current.contains(event.target as Node)
    ) {
      setIsOverlayOpen(false);
    }
  };

  const childMethod = () => {
    handleClick();
  };
  useImperativeHandle(ref, () => ({
    childMethod,
  }));
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={overlayRef} className="overlay-panel">
      <div
        onClick={handleClick}
        role="button"
        aria-expanded={isOverlayOpen}
        className="overlay-trigger"
      >
        {selectedViewChildren}
      </div>
      {isOverlayOpen && (
        <CustomCard className="custom-card">{children}</CustomCard>
      )}
    </div>
  );
});

export default CustomOverlayPanel;
