"use client";

import { useContext } from "react";
import Header from "@/components/shared/Header";
import ListOfItems from "@/components/shared/ListOfItems";
import { SelectionsContext } from "@/contexts/bill-context";
import { ItemsContext } from "@/contexts/items-context";
import SplitBillService from "@/services/split-bill.service";
import SelectionsToJsxConverterService from "@/services/selections-to-jsx-converter.service";
import ItemState from "@/utils/ItemState";

export default function BillSummaryPage() {
  const { selections, setSelections } = useContext(SelectionsContext);
  const { items, setItems } = useContext(ItemsContext);

  const fullSelections = SplitBillService.execute(selections, items);
  const peopleItems = SelectionsToJsxConverterService.execute(fullSelections);

  return (
    <>
      <Header
        heading="Split bill summary"
        description="Click Export to copy the summary to clipboard"
      ></Header>
      <ListOfItems
        items={peopleItems}
        staticItemsState={ItemState.PERSON_AS_ITEM}
      ></ListOfItems>
    </>
  );
}
