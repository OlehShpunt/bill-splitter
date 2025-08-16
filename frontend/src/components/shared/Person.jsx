import AppColor from "../../utils/AppColor";
import Border from "../../utils/Border";
import PersonState from "../../utils/PersonState";

export default function Person({
  name = "",
  state = PersonState.NORMAL,
  children = null,
  onClick = () => {},
}) {
  return (
    <span
      className="inline-flex items-center gap-2 align-middle"
      onClick={onClick}
    >
      <span
        className={`${state} inline-flex items-center justify-center mx-1 my-2 rounded-full ${
          state !== PersonState.CONTAINERIZED.ACTIVE &&
          state !== PersonState.CONTAINERIZED.INACTIVE
            ? "text-3xl h-18 w-18"
            : ""
        }`}
      >
        {name.slice(0, 1).toUpperCase()}
        {children}
      </span>
    </span>
  );
}

export function PlusPerson({ onClick = () => {} }) {
  return (
    <Person
      backgroundColor={AppColor.background.WHITE}
      borderColor={AppColor.border.LIGHT + " border-dashed"}
      textColor={AppColor.text.LIGHT + " text-5xl font-light"}
      onClick={onClick}
    >
      <span className="-translate-y-0.5">+</span>
    </Person>
  );
}
