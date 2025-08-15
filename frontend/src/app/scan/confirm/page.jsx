"use client";

import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import ListOfItems from "@/components/shared/ListOfItems";
import { ImageContext } from "@/contexts/image-context";
import { useContext, useState, useEffect } from "react";
import extractItemsService from "@/services/extract-items.service";

export default function ScanConfirmPage() {
  const { image, setImage } = useContext(ImageContext);
  const [isLoading, setIsLoading] = useState(true);
  const [itemListData, setItemListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await extractItemsService(image);
        setItemListData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (image) {
      fetchData();
    }
  }, [image]); // NOTE: The useEffect hook will run when the component mounts and whenever the `image` changes.


  return (
    <>
      <Header
        heading="Confirm item list"
        description="Click an item to correct price or name"
      ></Header>
      <ListOfItems items={items}></ListOfItems>
        <Button text="Confirm"></Button>
    </>
  );
}
