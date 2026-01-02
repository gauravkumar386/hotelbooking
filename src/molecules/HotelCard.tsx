import { Tag } from "primereact/tag";
import CustomCard from "../atoms/CustomCard";
import CustomCarousel from "../atoms/CustomCarousel";
import { Button } from "primereact/button";
import "../styles/HotelCard.scss";

type Product = {
  name: string;
  price: number;
  image: string;
  inventoryStatus: string;
};

type Props = {
  hotelList: any[];
};

const HotelCard = (props: Props) => {
  const { hotelList } = props;
  const productTemplate = (product: any) => {
    return <>Carousel Image</>;
  };
  return (
    <>
      {hotelList.map((hotel: any) => {
        return (
          <CustomCard>
            <div className="hotel-card">
              <div className="hotel-card-details">
                <div>
                  <CustomCarousel carouselDataTemplate={productTemplate} />;
                </div>
                <div className="hotel-details">
                  <p>name</p>
                  <p>address</p>
                  <p>amenties</p>
                  <p>offers</p>
                  <p>description</p>
                </div>
              </div>
              <div className="price-details">
                <p>ratings</p>
                <p>price</p>
                <p>taxes</p>
                <p>Booking button</p>
              </div>
            </div>
          </CustomCard>
        );
      })}
    </>
  );
};

export default HotelCard;
