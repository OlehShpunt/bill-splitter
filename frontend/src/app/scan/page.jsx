"use client";

import NavigationBar from "../../components/shared/NavigationBar";
import { useState } from "react";
import "../globals.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  function handleOnCapture(file) {
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setImagePreviewUrl(url);
    }
  }

  function handleUploadBtnClick() {
    if (!imagePreviewUrl) {
      alert("Please capture an image first.");
      return;
    }

    router.push("/bill/items");
  }

  return (
    <>
      {/* To fix the navigation movement due to next element's margin */}
      <div className="h-0.5"></div>

      <img
        src={imagePreviewUrl}
        className="block m-auto mt-20 w-80 h-120 bg-gray-200 object-cover"
      ></img>
      <input
        className="block m-auto mt-10 p-7 w-50 bg-amber-200 rounded-2xl"
        type="file"
        id="picture"
        name="picture"
        accept="image/*"
        capture="environment"
        // onAbortCapture={handleOnCapture(null)}
        onChangeCapture={(e) => {
          const file = e.target.files[0];
          handleOnCapture(file);
        }}
      />

      <button
        className="block m-auto mt-5 w-50 rounded-2xl"
        onClick={() => handleUploadBtnClick()}
      >
        Upload
      </button>
    </>
  );
}
