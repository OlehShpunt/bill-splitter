import ItemState from "@/utils/ItemState";
import Person from "./Person";
import PersonState from "@/utils/PersonState";

export default function Item({
  name = "Not specified",
  value = "0.00",
  state = ItemState.NORMAL,
  people = [], // ["person1", "person2", "person3" ...]
  onClick = () => {},
  children,
}) {
  const initializePeopleComponents = () => {
    return people.map((person) => {
      let personState;
      if (state === ItemState.ACTIVATED) {
        personState = PersonState.CONTAINERIZED.ACTIVE;
      } else {
        personState = PersonState.CONTAINERIZED.INACTIVE;
      }
      return <Person name={person} state={personState} key={person}></Person>;
    });
  };

  return (
    <div
      className={`m-auto max-w-100 w-297/316 min-h-16 rounded-[10] box-border ${state}`}
      onClick={onClick}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between min-h-14">
          <span className="truncate pl-4">{name}</span>
          <div className="flex items-center gap-2">
            {initializePeopleComponents?.()}
            <span className="text-right pr-4">{Number(value).toFixed(2)}</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
