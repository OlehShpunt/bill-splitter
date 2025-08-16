import ItemState from "@/utils/ItemState";
import Person from "./Person";
import PersonState from "@/utils/PersonState";

export default function Item({
  name = "Not specified",
  value = "0.00",
  state = ItemState.NORMAL,
  people = [], // ["person1", "person2", "person3" ...]
  onClick = () => {},
}) {
  const initializePeopleComponents = () => {
    console.log("initializing, passed people are: ", people);
    return people.map((person) => {
      let personState;
      if (state === ItemState.ACTIVATED) {
        personState = PersonState.CONTAINERIZED.ACTIVE;
        console.log("Person component should be active for ", person);
      } else {
        personState = PersonState.CONTAINERIZED.INACTIVE;
        console.log("Person component should be inactive for ", person);
      }
      return <Person name={person} state={personState} key={person}></Person>;
    });
  };

  return (
    <div
      className={`m-auto my-2 max-w-100 w-297/316 h-18 rounded-[10] ${state}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center px-4 h-full">
        <span id="name">{name.toString()}</span>
        <div className="inline-block w-fit">
          <span className="mr-2">{initializePeopleComponents()}</span>
          <div className="inline-block w-max-18 text-right" id="value">
            {value.toString()}
          </div>
        </div>
      </div>
    </div>
  );
}
