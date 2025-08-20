import Person, { PlusPerson } from "./Person";
import { CurrentPersonContext, PeopleContext } from "@/contexts/bill-context";
import PersonState from "@/utils/PersonState";
import { useContext, useState } from "react";
import PromptWindow from "./PromptWindow";
import AppColor from "@/utils/AppColor";

export default function ListOfPeople({ people = [], setPeople = () => {} }) {
  const { currentPerson, setCurrentPerson } = useContext(CurrentPersonContext);
  const [windowPromptVisibility, setWindowPromptVisibility] = useState(false);

  const onPersonClick = (name) => {
    if (name === currentPerson) {
      setCurrentPerson(null);
    } else {
      setCurrentPerson(name);
    }
  };

  const onPlusPersonClick = () => {
    console.log("Plus person clicked");

    setWindowPromptVisibility(true);
    // setPeople((prev))
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

  return (
    <>
      {[...listOfPeople, plusPerson]}
      <PromptWindow
        description="Enter the person's name"
        buttonText="Add person"
        isVisible={windowPromptVisibility}
        setVisibility={setWindowPromptVisibility}
        data={people}
        setData={setPeople}
      ></PromptWindow>
      <span
        className={`fixed bottom-30 left-1/2 transform -translate-x-1/2 inline-block text-2xl font-normal ${AppColor.text.DARK}`}
      >
        {currentPerson}
      </span>
    </>
  );
}
