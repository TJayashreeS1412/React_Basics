// import React from "react";
// import ReactDOM from "react-dom/client";

/**
 * ReactElement(object) => HTML (Browser Understands)
 */

// this is core of react, but we use JSX instead of this to make it easy
const parent = React.createElement("div", {id:"parent",}, [
    React.createElement(
        "div", 
        {id:"child1"}, 
        [ 
            React.createElement("h1", {}, "I'm an h1 tag"), 
            React.createElement("h2", {}, "I'm an h2 tag")
        ]//two elemenrts as children, create an array
    ),
    React.createElement(
        "div", 
        {id:"child2"}, 
        [ 
            React.createElement("h1", {}, "I'm an h1 tag"), 
            React.createElement("h2", {}, "I'm an h2 tag")
        ]//two elemenrts as children, create an array
    )
]); 

//document.createElement -JavaScript
const heading = React.createElement("h1", { //props are attributes to the tag
    id:"title", 
    className: "class",
    style: "",
    hello: "word" 
}, "Namaste Everyone!"); //tag, object, what to put in the tag (type, props, children)

// const heading1 = React.createElement("h1", {
//     id:"title",
// }, "Heading 1");
// const heading2 = React.createElement("h2", {
//     id:"title",
// }, "Heading 2");
// const container = React.createElement("div",{
//     id: "container",
// },[heading1,heading2]);

// console.log(heading1);

// get the root // React only works in the place where you insert it so it can be used for any part in the project.
const root = ReactDOM.createRoot(document.getElementById("root"));  //where I want the root to insert

// put the element into the root
root.render(parent);