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

const CustomHeader = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const items = [
    {
      label: "Hotels & Resorts",
      items: [
        [
          {
            label: "Living Room",
            items: [
              { label: "Accessories" },
              { label: "Armchair" },
              { label: "Coffee Table" },
              { label: "Couch" },
              { label: "TV Stand" },
            ],
          },
        ],
        [
          {
            label: "Kitchen",
            items: [
              { label: "Bar stool" },
              { label: "Chair" },
              { label: "Table" },
            ],
          },
          {
            label: "Bathroom",
            items: [{ label: "Accessories" }],
          },
        ],
      ],
    },
    {
      label: "Electronics",
      items: [
        [
          {
            label: "Computer",
            items: [
              { label: "Monitor" },
              { label: "Mouse" },
              { label: "Notebook" },
              { label: "Keyboard" },
              { label: "Printer" },
              { label: "Storage" },
            ],
          },
        ],
        [
          {
            label: "Home Theather",
            items: [
              { label: "Projector" },
              { label: "Speakers" },
              { label: "TVs" },
            ],
          },
        ],
      ],
    },
    {
      label: "Suites & Villas",
      items: [
        [
          {
            label: "Computer",
            items: [
              { label: "Monitor" },
              { label: "Mouse" },
              { label: "Notebook" },
              { label: "Keyboard" },
              { label: "Printer" },
              { label: "Storage" },
            ],
          },
        ],
        [
          {
            label: "Home Theather",
            items: [
              { label: "Projector" },
              { label: "Speakers" },
              { label: "TVs" },
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
            label: "Computer",
            items: [
              { label: "Monitor" },
              { label: "Mouse" },
              { label: "Notebook" },
              { label: "Keyboard" },
              { label: "Printer" },
              { label: "Storage" },
            ],
          },
        ],
        [
          {
            label: "Home Theather",
            items: [
              { label: "Projector" },
              { label: "Speakers" },
              { label: "TVs" },
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
            label: "Computer",
            items: [
              { label: "Monitor" },
              { label: "Mouse" },
              { label: "Notebook" },
              { label: "Keyboard" },
              { label: "Printer" },
              { label: "Storage" },
            ],
          },
        ],
        [
          {
            label: "Home Theather",
            items: [
              { label: "Projector" },
              { label: "Speakers" },
              { label: "TVs" },
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
            label: "Computer",
            items: [
              { label: "Monitor" },
              { label: "Mouse" },
              { label: "Notebook" },
              { label: "Keyboard" },
              { label: "Printer" },
              { label: "Storage" },
            ],
          },
        ],
        [
          {
            label: "Home Theather",
            items: [
              { label: "Projector" },
              { label: "Speakers" },
              { label: "TVs" },
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
            <CustomButton label="Book" />
          </span>
        </div>
      </div>
      <CustomDivider />
      <CustomMenu items={items} />
    </div>
  );
};

export default CustomHeader;
