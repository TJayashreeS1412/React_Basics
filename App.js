import React from "react";
import ReactDOM from "react-dom/client";
/**
 * React reconcilation (keys to html tags)
 * What is JSX -> uses React.createElement behind scenes-> object -> html code
 * What is Functional component -> function which returns react element
 */

//document.createElement -JavaScript
const heading = React.createElement("h1", { //props
    id:"title", 
    className: "class",
    style: "",
    hello: "word" //props can be anything
}, "Namaste Everyone!"); //tag, object, what to put in the tag (type, props, children)

const heading1 = React.createElement("h1", {
    id:"title",
    key: "h1"
}, "Heading1");  //adding key for identifying tags - reconcilation
const heading2 = React.createElement("h2", {
    id:"title",
    key:"h2"
}, "Heading2"); 
const container = React.createElement("div",{
    id: "container",
},[heading1,heading2]);
// get the root
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));  //where I want the root to insert
// put the element into the root
root.render(container);