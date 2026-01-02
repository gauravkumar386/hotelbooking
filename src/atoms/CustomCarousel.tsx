import { Carousel } from "primereact/carousel";
import { useEffect, useState } from "react";

type Props = {
  carouselDataTemplate: (product:any) => void;
};

const CustomCarousel = (props: Props) => {
  const {carouselDataTemplate} = props;
  const [carouselData, setCarouselData] = useState<any>([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  // useEffect(() => {
  //   setCarouselData(carouselData.slice(0, 9));
  // }, [carouselData]);

  // const carouselDataTemplate = (carouselData: any) => {
  //   return <div>Product</div>;
  // };

  return (
    <div className="card">
      <Carousel
        value={carouselData}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        // itemTemplate={carouselDataTemplate}
      />
    </div>
  );
};

export default CustomCarousel;
