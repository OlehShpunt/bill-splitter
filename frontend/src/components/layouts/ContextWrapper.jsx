"use client";
import { useState } from "react";

import { ImageContext } from "@/contexts/image-context";
import { ItemsContext } from "@/contexts/items-context";

export default function ContextWrapper({ children }) {
  const [image, setImage] = useState("");
  const [items, setItems] = useState([]);
  return (
    <ImageContext.Provider value={{ image, setImage }}>
      <ItemsContext.Provider value={{ items, setItems }}>
        {children}
      </ItemsContext.Provider>
    </ImageContext.Provider>
  );
}
