import { useState } from "react";
import Item from "./Item";
import ItemState from "@/utils/ItemState";

export default function ListOfItems({ items = [], currentPerson = null }) {
  const [selections, setSelections] = useState({});

  // Changes item state when clicked
  const onItemClicked = (itemKey) => {
    if (!currentPerson) {
      return;
    }

    setSelections((previousSelections) => {
      const currentSelectedItemsArray = previousSelections[currentPerson] || [];
      const index = currentSelectedItemsArray.indexOf(itemKey);
      if (index > -1) {
        // Already selected, so remove it
        // NOTE: currentSelectedItemsArray can't be mutated, so simply currentSelectedItemsArray.splice(itemKey, 1) won't work
        const newCurrentSelectedItemsArray = [
          ...currentSelectedItemsArray.slice(0, index),
          ...currentSelectedItemsArray.slice(index + 1),
        ];
        return {
          ...previousSelections,
          [currentPerson]: newCurrentSelectedItemsArray,
        };
      } else {
        // Not selected, so add it
        // NOTE: currentSelectedItemsArray can't be mutated, so simply currentSelectedItemsArray.push(itemKey) won't work
        const newCurrentSelectedItemsArray = [
          ...currentSelectedItemsArray,
          itemKey,
        ];
        return {
          ...previousSelections,
          [currentPerson]: newCurrentSelectedItemsArray,
        };
      }
    });
  };

  const listItems = items.map((item) => {
    let itemState;
    // If the item is selected by the current person, set it to activated
    if (selections[currentPerson]?.includes(item.key)) {
      itemState = ItemState.ACTIVATED;
    }
    // If the item is selected by any other person, set it to deactivated
    else if (
      Object.values(selections).some((array) => array.includes(item.key))
    ) {
      itemState = ItemState.DEACTIVATED;
    }
    // If the item is not selected by anyone, set it to normal
    else {
      itemState = ItemState.NORMAL;
    }

    return (
      <Item
        key={item.key}
        name={item.name}
        value={item.value}
        onClick={() => onItemClicked(item.key)}
        state={itemState}
      ></Item>
    );
  });

  return listItems;
}
