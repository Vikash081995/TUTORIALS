import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 5 }
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name
    },
    {
      label: "Color",
      render: (fruit) => fruit.color
    },
    {
      label: "Score",
      header: () => <th className="bg-red-500">Score</th>,
      render: (fruit) =>fruit.score,
      sortValue: (fruit) => fruit.score
    }
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      {/* <Table data={data} config={config} key={keyFn} /> */}
      <SortableTable data={data} config={config} key={keyFn} />
    </div>
  );
}

export default TablePage;
