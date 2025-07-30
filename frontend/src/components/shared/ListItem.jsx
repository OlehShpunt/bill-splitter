import AppColor from "../../utils/AppColor";
import Border from "../../utils/Border";

export default function ListItem({
  name = "Not specified",
  value = "0.00",
  backgroundColor = AppColor.background.WHITE,
  borderColor = AppColor.border.LIGHT,
  borderWidth = Border.PASSIVE,
  textColor = AppColor.text.DARK,
}) {
  return (
    <div
      className={`m-auto my-2 max-w-100 w-297/316 h-18 rounded-[10] ${backgroundColor} ${borderColor} ${borderWidth} ${textColor}`}
    >
      <div className="flex justify-between items-center px-4 h-full">
        <span id="name">{name.toString()}</span>
        <span id="value">{value.toString()}</span>
      </div>
    </div>
  );
}
