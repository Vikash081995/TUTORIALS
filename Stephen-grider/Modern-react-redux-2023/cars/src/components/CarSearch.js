import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div>
      <h3>My Cars</h3>
      <div>
        <label>Search</label>
        <input value={searchTerm} onChange={handleSearchTermChange} />
      </div>
    </div>
  );
}

export default CarSearch;
