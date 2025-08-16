"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import ListOfItems from "@/components/shared/ListOfItems";
import { ItemsContext } from "@/contexts/items-context";
import ListOfPeople from "@/components/shared/ListOfPeople";
import { CurrentPersonContext } from "@/contexts/bill-context";

export default function BillSplitPage() {
  const { items, setItems } = useContext(ItemsContext);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [people, setPeople] = useState(["Oleh", "Jay", "Prady", "Reuben"]);

  const router = useRouter();

  // Go to bill split summary
  const onButtonClick = () => {
    if (items) {
      router.push("/bill/summary");
    }
  };

  return (
    <>
      <CurrentPersonContext.Provider
        value={{ currentPerson, setCurrentPerson }}
      >
        <Header>
          <ListOfPeople people={people}></ListOfPeople>
        </Header>
        <ListOfItems items={items} currentPerson={currentPerson}></ListOfItems>
        <div onClick={onButtonClick}>
          <Button text="Confirm"></Button>
        </div>
      </CurrentPersonContext.Provider>
    </>
  );
}
