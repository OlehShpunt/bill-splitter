import Item from "@/components/shared/Item";
import ListOfItems from "@/components/shared/ListOfItems";
import ItemState from "@/utils/ItemState";
import React from "react";

export default class SelectionsToJsxConverterService {
  static execute(fullSelections) {
    const peopleItems = [];

    // Replace
    Object.entries(fullSelections).forEach(([person, itemsArray]) => {
      // Calculate total price per person
      let totalPrice = 0;
      for (const item of itemsArray) {
        totalPrice += item.value;
      }

      // Prepare a ListOfItems that contains the Items the person is responsible to pay for
      const itemsOfThisPerson = React.createElement(ListOfItems, {
        items: itemsArray,
        // Ensure the Items can not change appearance on click
        staticItemsState: ItemState.NORMAL,
      });

      // Push the itemsOfThisPerson as a child of the person Item
      // peopleItems array is later passed to a ListOfItems (as an Item),
      // where the Person is rendered together with its Items
      peopleItems.push({
        name: person,
        value: totalPrice,
        key: person,
        children: itemsOfThisPerson,
      });
    });

    return peopleItems;
  }
}
