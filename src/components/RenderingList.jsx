import React from "react";
import FilteringArrays from "./FilteringArrays";
import { people } from "./data";
import Tool from "./AlertButton";
import EventPropagation from "./EventPropagation";
import Toolbar from "./StopPropagation";
import StateEx from "./StateEx";




function RenderingList() {
  const listPeople = people.map((person) => <li>{person.name}</li>);
  return (
    <div>
      <h1>Rendering Data from Arrays</h1>
      <ul>{listPeople}</ul>
      <FilteringArrays />
      <Tool/>
      <EventPropagation/>
      <Toolbar/>
      <StateEx/>
    </div>
  );
}

export default RenderingList;
