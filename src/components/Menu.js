import React from "react";
import "./widgetStyle.css";


const Menu = (props) => {

    const menus = [
        {
            text: "Reformat PC",
            id: 1
        },
        {
            text: "Service Request",
            id: 2
        },
        {
            text: "Other Concern",
            id: 3
        },
    ];

    const popOptions = (event) => {
        props.actionProvider.Optionhandler(event.target.value);
    };

    const btnMenus = menus.map((menu) => (
        <button
        key={menu.id}
        value={menu.text}
        onClick={popOptions}
        className="option-item"
        >
            {menu.text}
        </button>
    ));

    return <div className="options-container">{btnMenus}</div>;

};

export default Menu;