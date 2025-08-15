"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import ListOfItems from "@/components/shared/ListOfItems";
import { ItemsContext } from "@/contexts/items-context";

export default function BillSplitPage() {
  const { items, setItems } = useContext(ItemsContext);
  const router = useRouter();

  // Go to bill split summary
  const onButtonClick = () => {
    if (items) {
      router.push("/bill/summary");
    }
  };

  return (
    <>
      <Header heading="People" description="Add people here"></Header>
      <ListOfItems items={items}></ListOfItems>
      <div onClick={onButtonClick}>
        <Button text="Confirm"></Button>
      </div>
    </>
  );
}
