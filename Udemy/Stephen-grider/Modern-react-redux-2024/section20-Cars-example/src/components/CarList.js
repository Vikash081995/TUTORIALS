import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  return (
    <div>
      {cars.map((car) => {
        return (
          <div key={car.id}>
            <p>
              {car.name}-${car.cost}
            </p>
            <button onClick={() => handleCarDelete(car)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default CarList;
