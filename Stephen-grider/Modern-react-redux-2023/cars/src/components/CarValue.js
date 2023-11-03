import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => {
        return acc + car.cost;
      }, 0);
  });

  return <div>Total Cost: ${totalCost}</div>;
}

export default CarValue;
