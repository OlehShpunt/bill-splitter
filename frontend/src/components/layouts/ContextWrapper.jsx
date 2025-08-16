"use client";
import { useState } from "react";

import { ImageContext } from "@/contexts/image-context";
import { ItemsContext } from "@/contexts/items-context";
import { SelectionsContext } from "@/contexts/bill-context";

export default function ContextWrapper({ children }) {
  const [image, setImage] = useState("");
  const [items, setItems] = useState([]);
  const [selections, setSelections] = useState({});
  return (
    <ImageContext.Provider value={{ image, setImage }}>
      <ItemsContext.Provider value={{ items, setItems }}>
        <SelectionsContext.Provider value={{ selections, setSelections }}>
          {children}
        </SelectionsContext.Provider>
      </ItemsContext.Provider>
    </ImageContext.Provider>
  );
}
