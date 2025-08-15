import Item from "./Item";

export default function ListOfItems({ items = [] }) {
  let i = 0;
  const listItems = items.map((item) => {
    return (
      <Item
        key={item.key ? item.key : i++}
        name={item.name}
        value={item.value}
        backgroundColor={item.backgroundColor}
        borderColor={item.borderColor}
        borderWidth={item.borderWidth}
        textColor={item.textColor}
      ></Item>
    );
  });
  return listItems;
}
