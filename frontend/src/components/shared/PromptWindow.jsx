import AppColor from "@/utils/AppColor";
import Border from "@/utils/Border";
import { useRef } from "react";

export default function PromptWindow({
  description = "Default description",
  buttonText = "Default button text",
  data,
  setData = () => {
    console.log("default setData");
  },
  isVisible,
  setVisibility = () => {
    console.log("default setVisibility");
  },
}) {
  const inputRef = useRef();

  function hideSelf() {
    setVisibility(false);
    inputRef.current.value = "";
  }

  function onButtonClick() {
    const value = inputRef.current.value;

    if (!value) {
      alert("Name cannot be empty!");
      return;
    }

    if (data?.includes(value)) {
      alert("Duplicate names!");
      return;
    }

    hideSelf();

    setData((prev) => {
      console.log("setting this array", [...prev, inputRef.current.value]);
      return [...prev, value];
    });
  }

  return (
    <>
      <div
        className={`${
          !isVisible && "hidden"
        } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-fit rounded-[10] z-3 ${
          AppColor.background.WHITE +
          " " +
          AppColor.text.DARK +
          " " +
          AppColor.border.LIGHT +
          " " +
          Border.PASSIVE
        }`}
      >
        <div
          className={`${
            !description && "hidden"
          } w-full flex flex-col items-center`}
        >
          <div
            className="fixed top-2 right-3.5 font-normal text-3xl"
            onClick={hideSelf}
          >
            ×
          </div>
          <div className=" w-9/10 mt-4 mb-1">{description}</div>
          <input
            type="text"
            ref={inputRef}
            className={`w-9/10 h-fit border-2 rounded-[10] px-2 py-1.5 my-3 focus:outline-0 ${
              AppColor.text.DARK +
              " " +
              AppColor.border.LIGHT +
              " " +
              Border.PASSIVE
            }`}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className={`my-4 py-2 px-3 rounded-[10] ${
              AppColor.text.WHITE +
              " " +
              AppColor.background.DARK +
              " " +
              Border.NONE +
              " font-normal"
            }`}
            onClick={() => onButtonClick()}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}
