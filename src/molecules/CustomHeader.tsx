import CustomImage from "../atoms/CustomImage";
import CustomMenu from "../atoms/CustomMenu";
import Logo from "../assets/images/logo.jpg";
import "../styles/CustomHeader.scss";
import CustomDivider from "../atoms/Divider";
import CustomButton from "../atoms/CustomButton";
import IconLabel from "../atoms/IconLabel";
import CustomInput from "../atoms/CustomInput";
import { useState } from "react";
import AutoCompleteInput from "../atoms/AutoComplete";
import { useNavigate } from "react-router-dom";

const CustomHeader = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();
  const items = [
    {
      label: "Hotels & Resorts",
      items: [
        [
          {
            label: "By Destination",
            items: [
              { label: "Beachfront Hotels" },
              { label: "Mountain Retreats" },
              { label: "City Escapes" },
              { label: "Island Resorts" },
            ],
          },
        ],
        [
          {
            label: "By Experience",
            items: [
              { label: "Luxury Stays" },
              { label: "Budget-Friendly" },
              { label: "Boutique Hotels" },
              { label: "Family-Friendly" },
            ],
          },
        ],
      ],
    },
    {
      label: "Dining",
      items: [
        [
          {
            label: "By Cuisine",
            items: [
              { label: "Fine Dining" },
              { label: "Buffet & Brunch" },
              { label: "Local Cuisine" },
              { label: "International Menus" },
            ],
          },
        ],
        [
          {
            label: "By Setting",
            items: [
              { label: "Rooftop Dining" },
              { label: "Poolside Restaurants" },
              { label: "Private Dining" },
            ],
          },
        ],
      ],
    },
    {
      label: "Packages",
      items: [
        [
          {
            label: "Popular Packages",
            items: [
              { label: "Romantic Getaways" },
              { label: "Family Vacations" },
              { label: "Adventure Trips" },
              { label: "Weekend Escapes" },
            ],
          },
        ],
        [
          {
            label: "Special Offers",
            items: [
              { label: "Early Bird Discounts" },
              { label: "Last Minute Packages" },
            ],
          },
        ],
      ],
    },
    {
      label: "Exclusive Offers",
      items: [
        [
          {
            label: "Current Deals",
            items: [
              { label: "Flash Sales" },
              { label: "Limited Time Offers" },
              { label: "Partner Discounts" },
            ],
          },
        ],
        [
          {
            label: "Seasonal Specials",
            items: [
              { label: "Winter Getaways" },
              { label: "Summer Escapes" },
              { label: "Holiday Packages" },
            ],
          },
        ],
      ],
    },
    {
      label: "Loyalty & Rewards",
      items: [
        [
          {
            label: "My Account",
            items: [
              { label: "Sign In / Register" },
              { label: "View My Points" },
              { label: "Redeem Rewards" },
            ],
          },
        ],
        [
          {
            label: "Program Benefits",
            items: [
              { label: "Member Discounts" },
              { label: "Free Night Stays" },
              { label: "Referral Bonuses" },
            ],
          },
        ],
      ],
    },
    {
      label: "Events",
      items: [
        [
          {
            label: "Plan an Event",
            items: [
              { label: "Weddings" },
              { label: "Corporate Meetings" },
              { label: "Private Parties" },
            ],
          },
        ],
      ],
    },
  ];

  const onMouseOverHandler = () => {
    setIsVisible(true);
  };

  const onMouseOutHandler = () => {
    setIsVisible(false);
  };

  const onBookHandler = () => {
    navigate("/booking");
  };

  console.log("logggggg", searchValue !== "", isVisible);
  return (
    <div className="header-component">
      <div className="header-top">
        <div className="search-bar">
          {/* <IconLabel
          classname="pi pi-search"
          onMouseOverHandler={onMouseOverHandler}
          onMouseOutHandler={onMouseOutHandler}
        /> */}
          {/* {searchValue ||
            (isVisible && (
              <CustomInput
                onMouseOverHandler={onMouseOverHandler}
                onMouseOutHandler={onMouseOutHandler}
                setInputValue={setSearchValue}
                value={searchValue}
              />
            ))} */}
          {/* <CustomInput
            onMouseOverHandler={onMouseOverHandler}
            onMouseOutHandler={onMouseOutHandler}
            setInputValue={setSearchValue}
            value={searchValue}
          /> */}
          <AutoCompleteInput />
        </div>
        <div className="logo-name">Villa Verona</div>
        <div className="header-top-right">
          <IconLabel label="Profile" classname="pi pi-user" />
          <IconLabel label="Login" classname="pi pi-sign-in" />
          <span>
            <CustomButton label="Book" onClick={onBookHandler} />
          </span>
        </div>
      </div>
      <CustomDivider />
      <CustomMenu items={items} />
    </div>
  );
};

export default CustomHeader;
