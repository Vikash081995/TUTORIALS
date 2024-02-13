import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div>
      <h4>Add Car</h4>
      <form oNSubmit={handleSubmit}>
        <div>
          <div>
            <label>Name</label>
            <input value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Cost</label>
            <input value={cost || ""} onChange={handleCostChange} />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
