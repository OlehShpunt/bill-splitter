import Person, { PlusPerson } from "./Person";
import { CurrentPersonContext, PeopleContext } from "@/contexts/bill-context";
import PersonState from "@/utils/PersonState";
import { useContext } from "react";

export default function ListOfPeople({ people = [] }) {
  const { currentPerson, setCurrentPerson } = useContext(CurrentPersonContext);

  const onPersonClick = (name) => {
    if (name === currentPerson) {
      setCurrentPerson(null);
    } else {
      setCurrentPerson(name);
    }
  };

  const onPlusPersonClick = () => {
    console.log("Plus person clicked");

    // // Form or something here

    // setPeople((previousPeople) => [
    //   ...previousPeople,
    //   // new person
    // )
  };

  const listOfPeople = people.map((name) => {
    let personState;

    if (name === currentPerson) {
      personState = PersonState.SELECTED;
    } else {
      personState = PersonState.NORMAL;
    }

    return (
      <Person
        name={name}
        key={name}
        onClick={() => onPersonClick(name)}
        state={personState}
      ></Person>
    );
  });

  const plusPerson = (
    <PlusPerson key="plus" onClick={onPlusPersonClick}></PlusPerson>
  );

  return [...listOfPeople, plusPerson];
}
