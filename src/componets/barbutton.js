import React from "react";

const BarButton = (props) => {
    const activeStatus = props.isActive ? "active" : "";
    let iconClass = `${props.iconClass} large icon`;

    return (
        <button className={`ui icon ${activeStatus} teal button`} onClick={props.onClick}>
            <i className={iconClass}></i>
        </button>
    );
};

export default BarButton;