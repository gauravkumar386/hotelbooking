import React from "react";
import { Card } from "primereact/card";

type Props = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

const CustomCard: React.FC<Props> = ({ title, className, children }) => {
  return (
    <Card title={title} >
      {children}
    </Card>
  );
};

export default CustomCard;
