import React from "react";

export default function About() {
  //React fragment is a ghost div when you don't need to render in the VDOM
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList app v1. it is part of a React crash course</p>
    </React.Fragment>
  );
}
