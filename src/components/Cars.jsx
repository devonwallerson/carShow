import React from "react";

const Cars = ({car}) => {
    return(
        <div className = "car">
            <img src = {car.imageURL} />
            <div className = "cardBody">
                <h3 className = "title">{car.make} {car.model}</h3>
                <h5 className = "trim"> {car.trim}</h5>
                <a href = {car.availableModels}>
                    <button>CarFax Avaialble Models</button>
                </a>
            </div>
        </div>
    )
}

export default Cars;