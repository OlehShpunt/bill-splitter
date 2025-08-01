import ListItem from "./ListItem";

export default function ItemList({ items = [] }) {
  let i = 0;
  const listItems = items.map((item) => {
    return (
      <ListItem
        key={item.key ? item.key : i++}
        name={item.name}
        value={item.value}
        backgroundColor={item.backgroundColor}
        borderColor={item.borderColor}
        borderWidth={item.borderWidth}
        textColor={item.textColor}
      ></ListItem>
    );
  });
  return listItems;
}
