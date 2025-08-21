"use client";

import Button from "@/components/shared/Button";
import AppColor from "@/utils/AppColor";
import Border from "@/utils/Border";
import { useState } from "react";
import { ImageContext } from "@/contexts/image-context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);
  const { image, setImage } = useContext(ImageContext);

  // File from input
  const onFileChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
      setIsSelected(true);
    }
  };

  // Go to scan confirmation
  const onButtonClick = () => {
    if (isSelected && image) {
      router.push("/scan/confirm");
    }
  };

  return (
    <>
      <div
        className={`m-auto mt-30 p-10 justify-center w-8/10 max-w-100 h-100 rounded-xl border-dotted ${
          Border.THICKEST + " " + AppColor.border.LIGHT
        }`}
      >
        <img
          src="assets/images/Upload.png"
          alt="Upload Image"
          className="w-23 m-auto mt-10"
        ></img>
        <p className={`text-center text-2xl mt-10 ${AppColor.text.REGULAR}`}>
          Choose a file or drag & drop it here
        </p>
        <p className={`text-center text-2xl mt-5 ${AppColor.text.LIGHT}`}>
          JPEG, JPG or PNG
        </p>
        <div className="flex justify-center">
          <input
            className={`w-33 text-center text-2xl mt-5 ${AppColor.text.LIGHT}`}
            type="file"
            onChange={onFileChange}
            accept=".jpg, .jpeg, .png"
          />
        </div>
      </div>

      <div
        className={
          isSelected
            ? `text-center m-auto w-fit mt-8 text-xl max-w-100 ${AppColor.text.DARK}`
            : "hidden"
        }
      >
        File Name: {image.name}
      </div>

      <Button text="Upload" onClick={onButtonClick}></Button>
    </>
  );
}
