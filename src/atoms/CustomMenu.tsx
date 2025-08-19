import { MegaMenu } from "primereact/megamenu";

const CustomMenu = () => {
  const items = [
    {
      label: "Hotels",
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
  ];
  return (
    <div className="card">
      <MegaMenu model={items} breakpoint="960px" />
    </div>
  );
};

export default CustomMenu;
