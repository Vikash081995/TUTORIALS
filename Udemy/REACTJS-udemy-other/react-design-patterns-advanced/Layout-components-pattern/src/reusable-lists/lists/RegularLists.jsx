export const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => {
        return <ItemComponent key={i} {...{ [sourceName]: item }} />;
      })}
    </>
  );
};
