export default class SplitBillService {
  /**
   * @param {*} selections plain object of format {"personName": [itemKey, itemKey, itemKey...]}
   * @param {*} items array of format [{ name: "apple", value: 12, key: key }, { name: "banana", value: 20, key: key }]
   * @returns plain object of format {"personName": [{ name:"itemName", value:"itemPrice", key:"", count:number  }, {}, {}...]}
   */
  static execute(selections, items) {
    // Build itemKey - itemObject map
    const itemMap = {};
    for (const item of items) {
      itemMap[item.key] = item;
      // Set initial item count
      itemMap[item.key].count = 0;
    }

    // Replace itemKeys in selections with full objects
    const fullSelections = {};
    for (const person in selections) {
      fullSelections[person] = selections[person].map((key) => {
        // Increment number of item occurrences
        // NOTE: Since it doesn't update the count in previous persons, we will later have to update it altogether
        if (!itemMap[key]) {
          return;
        }
        itemMap[key].count += 1;
        return structuredClone(itemMap[key]);
      });
    }

    // Since not all counts are updated
    for (const person in fullSelections) {
      fullSelections[person].forEach((item) => {
        item.count = itemMap[item.key].count;
        // At the same time, update the price. If count is 3, it means that 3 people split the item price
        item.value = item.value / item.count;
      });
    }

    // fullSelections format is {"personName": [{ name:"itemName", value:"itemPrice", key:"", count:number  }, {}, {}]}
    return fullSelections;
  }
}
