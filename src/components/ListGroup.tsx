import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; //like onClick
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //let items = ["New York", "California", "Baguio", "City"];

  //Hook: useState is built in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 && <p>No Items Found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map(
          (
            item,
            index // , index is just added which automatically gives index nuymber 0 based
          ) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
