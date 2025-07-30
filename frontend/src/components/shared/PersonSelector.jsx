import AppColor from "../../utils/AppColor";
import Border from "../../utils/Border";

export default function PersonSelector({
  text = null,
  backgroundColor = AppColor.background.WHITE,
  borderColor = AppColor.border.LIGHT,
  borderWidth = Border.PASSIVE,
  textColor = AppColor.text.REGULAR,
}) {
  return (
    <span
      className={`inline-flex items-center justify-center mx-1 my-2 rounded-full text-3xl h-18 w-18 ${backgroundColor} ${borderColor} ${borderWidth} ${textColor}`}
    >
      {text}
    </span>
  );
}
