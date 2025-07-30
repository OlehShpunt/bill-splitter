import AppColor from "../../utils/AppColor";
import Border from "../../utils/Border";
import plusImage from "../../../public/plus.png";

export default function PersonSelector({
  text = null,
  backgroundColor = AppColor.background.WHITE,
  borderColor = AppColor.border.LIGHT,
  borderWidth = Border.PASSIVE,
  textColor = AppColor.text.REGULAR,
  children = null,
}) {
  return (
    <span className="inline-flex items-center gap-2 align-middle">
      <span
        className={`inline-flex items-center justify-center mx-1 my-2 rounded-full text-3xl h-18 w-18 ${backgroundColor} ${borderColor} ${borderWidth} ${textColor}`}
      >
        {text}
        {children}
      </span>
    </span>
  );
}
