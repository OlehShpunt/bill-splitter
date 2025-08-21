"use client";

import Button from "@/components/shared/Button";
import Header from "@/components/shared/Header";
import ListOfItems from "@/components/shared/ListOfItems";
import { ImageContext } from "@/contexts/image-context";
import { ItemsContext } from "@/contexts/items-context";
import { useContext, useState, useEffect } from "react";
import extractItemsService from "@/services/extract-items.service";
import { useRouter } from "next/navigation";
import AppColor from "@/utils/AppColor";

export default function ScanConfirmPage() {
  const router = useRouter();
  const { image, setImage } = useContext(ImageContext);
  const { items, setItems } = useContext(ItemsContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const fetchData = async () => {
      try {
        const data = await extractItemsService(image);
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
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

      {/* Info container */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ${AppColor.text.REGULAR}`}
      >
        {/* Loading info */}
        <div className={`${!isLoading && "hidden"}`}>
          <img
            className="h-15 w-15 m-auto"
            src="/assets/loading-gif.gif"
            alt="Extracting the items..."
          />
          Extracting the items...
        </div>

        {/* Error info */}
        <div className={`${!isError && "hidden"} w-100`}>
          An error occurred. Please try again.
        </div>
      </div>
      <Button text="Confirm" onClick={onButtonClick}></Button>
    </>
  );
}
