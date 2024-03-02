import React from 'react';
import Cars from './Cars';

const CarsList = ({cars}) => {
    return(
        <div className = "carsList">
            {cars.map((car,index) => (
                <Cars key = {index} car = {car} />
            ))}
        </div>
    )
}

export default CarsList;