import AppColor from "../../utils/AppColor";
import Border from "../../utils/Border";

export default function Person({
  name = "",
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
        {name.slice(0, 1).toUpperCase()}
        {children}
      </span>
    </span>
  );
}

export function PlusPerson() {
  return (
    <Person
      backgroundColor={AppColor.background.WHITE}
      borderColor={AppColor.border.LIGHT + " border-dashed"}
      textColor={AppColor.text.LIGHT + " text-5xl font-light"}
    >
      <span className="-translate-y-0.5">+</span>
    </Person>
  );
}
