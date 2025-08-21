import AppColor from "@/utils/AppColor";
import Border from "@/utils/Border";

export default function Button({ text, onClick }) {
  return (
    <div className="fixed -bottom-8 w-full h-30">
      <button
        onClick={onClick}
        className={`flex justify-center p-4 m-auto rounded-full z-1 text-xl font-normal ${
          AppColor.background.DARK +
          " " +
          AppColor.text.WHITE +
          " " +
          Border.NONE
        }`}
      >
        {text}
      </button>
    </div>
  );
}
