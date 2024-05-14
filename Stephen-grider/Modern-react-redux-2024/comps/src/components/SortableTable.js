import Table from "./Table";
import { useState } from "react";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, handleClick } = useSort(config, data);

  //sort data if sortOrder && sortBy are not null
  //make copy of data prop
  //find the correct sortValue function and use it for sorting

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      )
    };
  });
  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return "show both icons ";
  } else if (sortOrder === "asc") {
    return "show up icon";
  } else if (sortOrder === "desc") {
    return "show down icon";
  }
}
export default SortableTable;
