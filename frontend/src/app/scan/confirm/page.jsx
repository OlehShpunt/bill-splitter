"use client";

import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import ListOfItems from "@/components/shared/ListOfItems";
import { ImageContext } from "@/contexts/image-context";
import { ItemsContext } from "@/contexts/items-context";
import { useContext, useState, useEffect } from "react";
import extractItemsService from "@/services/extract-items.service";
import { useRouter } from "next/navigation";

export default function ScanConfirmPage() {
  const router = useRouter();
  const { image, setImage } = useContext(ImageContext);
  const { items, setItems } = useContext(ItemsContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await extractItemsService(image);
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (image) {
      fetchData();
    }
  }, [image]); // NOTE: The useEffect hook will run when the component mounts and whenever the `image` changes.

  // Go to scan confirmation
  const onButtonClick = () => {
    if (items) {
      router.push("/bill/split");
    }
  };

  return (
    <>
      <Header
        heading="Confirm item list"
        description="Click an item to correct price or name"
      ></Header>
      <ListOfItems items={items}></ListOfItems>
      <div onClick={onButtonClick}>
        <Button text="Confirm"></Button>
      </div>
    </>
  );
}
