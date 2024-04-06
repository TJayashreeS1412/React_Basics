import React from "react"; //refers to react inside our node modules.
import ReactDOM from "react-dom/client";

// this is core of react, but we use JSX instead of this to make it easy
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag"),
    ] //two elemenrts as children, create an array
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [
      React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag"),
    ] //two elemenrts as children, create an array
  ),
]);

// get the root // React only works in the place where you insert it so it can be used for any part in the project.
const root = ReactDOM.createRoot(document.getElementById("root")); //where I want the root to insert

// put the element into the root
root.render(parent);
