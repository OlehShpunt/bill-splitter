import ListItemBase from "./ListItemBase";

export default function ItemList({ items = [] }) {
  const listItems = items.map((item) => {
    return (
      <ListItemBase
        key={item.key}
        name={item.name}
        value={item.value}
        backgroundColor={item.backgroundColor}
        borderColor={item.borderColor}
        borderWidth={item.borderWidth}
        textColor={item.textColor}
      ></ListItemBase>
    );
  });
  return listItems;
}
