import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "../css/Items.css";
import CardComponent from "./CardComponent";

// list of items
const list = [
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
  { name: <CardComponent /> },
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el,key) => {
    const { name } = el;

    return <MenuItem text={name} key={key} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "item1"; //here

class Items extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default Items;
