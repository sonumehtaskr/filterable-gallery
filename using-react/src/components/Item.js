import React from "react";

const Item = (props) => {
    const { image, name } = props;
    return (
        <div className="w-72 h-52">
            <img src={image} alt={name} className="w-full h-full object-cover border-2 border-white rounded-lg" />
        </div>
    )
}

export default Item;