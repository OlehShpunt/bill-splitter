"use client";

import Button from "@/components/shared/Button";
import AppColor from "@/utils/AppColor";
import Border from "@/utils/Border";
import { useState } from "react";

export default function ScanPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {};

  const fileData = () => {
    if (selectedFile) {
      return (
        <div
          className={`text-center m-auto w-fit mt-8 text-xl max-w-100 ${AppColor.text.DARK}`}
        >
          File Name: {selectedFile.name}
        </div>
      );
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
      {fileData()}
      <div onClick={onFileUpload}>
        <Button text="Upload"></Button>
      </div>
    </>
  );
}
