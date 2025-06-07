import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }

  componentDidCatch() {
    // Handle the error
    console.log("parent component did catch");
  }

  componentWillUnmount() {
    /**
     * React calls componentWillUnmount() top-down in the class lifecycle (unlike effects in functional components).
     * But it removes DOM nodes and cleans up children bottom-up.
     * So in class components, componentWillUnmount may be called on the parent first, but the actual DOM cleanup and memory deallocation happen from child to parent. */
    // called when we navigate to another page/component, first parent unmounts
    console.log("parent component will unmount", performance.now());
  }
  componentDidUpdate() {
    // whenever state changes, called after component rerenders. // TO note: every child component also rerenders and updates.
    console.log("parent compoenent did update");
  }
  render() {
    console.log("parent render");
    const { count } = this.state;

    return (
      <div>
        <h1>About</h1>
        <h2> This page belongs to the user</h2>
        <p> parent count: {count}</p>
        <button onClick={() => this.setState({ count: count - 1 })}>-</button>
        <button onClick={() => this.setState({ count: 0 })}>reset</button>
        <button onClick={() => this.setState({ count: count + 1 })}>+</button>
        <User name={"jayashree"} location={"function"} />
        <UserClass name={"1"} location={"class"} />
        <UserClass name={"2 "} location={"class1"} />
      </div>
    );
  }
}

/*
React Component lifecycle
two phases: render(virtual DOM- very fast), commit(actual DOM update- expensive)

  - parent constructor
  - parent render

  < render phase, trigger reconciliation finds the diffs and batches them, happens inside virtual DOM >
    - First constructor
    - First render

    - Second constructor
    - Second render

  < commit phase, DOM manipulation begins, happens in batch (to optimise performance of react App) >
  <DOM UPDATED - SINGLE BATCH>
    - First didmount
    - Second didmount
  - parent didmount  


*/
