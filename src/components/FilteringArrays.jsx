import React from "react";
import { people } from "./data";

export default function FilteringArrays() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const physicists = people.filter(
    (person) => person.profession === "physicist"
  );

  const listchemists = chemists.map((person) => (
    <li>
      <p>{person.name}</p>
    </li>
  ));
  const listphysicists = physicists.map((person) => (
    <li>
      <p>{person.name}</p>
    </li>
  ));

  return (
    <div>
      <h1>Filtering Arrays of Items</h1>
      <h2>Chemists</h2>
      <ul>{listchemists}</ul>
      <h2>Physists</h2>
      <ul>{listphysicists}</ul>
    </div>
  );
}
