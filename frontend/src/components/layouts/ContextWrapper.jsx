"use client";
import { useState } from "react";

import { ImageContext } from "@/contexts/image-context";

export default function ContextWrapper({ children }) {
  const [image, setImage] = useState("");
  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
}
