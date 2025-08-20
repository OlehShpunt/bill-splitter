import { PeopleContext } from "@/contexts/bill-context";
import AppColor from "../../utils/AppColor";
import Border from "../../utils/Border";
import PersonState from "../../utils/PersonState";
import { useContext, useRef } from "react";

export default function Person({
  name = "",
  state = PersonState.NORMAL,
  children = null,
  onClick = () => {},
}) {
  const { people, setPeople } = useContext(PeopleContext);
  const timerRef = useRef(null);

  function handleMouseDown() {
    timerRef.current = setTimeout(() => {
      // If it is a PlusPerson component
      if (name === "+") {
        return;
      }
      setPeople((prevPeople) => prevPeople.filter((p) => p !== name));
    }, 800);
  }

  function handleMouseUp() {
    clearTimeout(timerRef.current);
  }

  return (
    <span>
      <span
        className="inline-flex items-center gap-2 align-middle"
        onClick={onClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
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
    </span>
  );
}

export function PlusPerson({ onClick = () => {} }) {
  return (
    <Person
      state={
        AppColor.background.WHITE +
        " " +
        AppColor.border.LIGHT +
        " border-dotted " +
        Border.ACTIVE +
        " " +
        AppColor.text.LIGHT +
        " text-5xl font-light"
      }
      onClick={onClick}
    >
      <span className="-translate-y-0.5">+</span>
    </Person>
  );
}
