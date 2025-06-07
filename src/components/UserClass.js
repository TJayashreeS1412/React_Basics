import { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
      count2: 2,
    };
    console.log(this.props.name + "child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "child component did mount");
  }

  componentDidCatch() {
    console.log("child component did catch");
  }

  componentWillUnmount() {
    // called when we navigate to another page/component, first parent unmounts, then child unmounts

    console.log(
      this.props.name + "child component will unmount",
      performance.now()
    );
  }

  componentDidUpdate() {
    // whenevr state variable updates and after compoenent rerenders
    console.log(this.props.name + "child compoenent did update");
  }

  render() {
    const { name, location } = this.props;
    const { count, count1, count2 } = this.state;
    console.log(this.props.name + "child render ");

    return (
      <div className="user-card">
        <h4>name: {name}</h4>
        <p>location: {location}</p>
        <p>contact: @jayahsree1412</p>
        <p>count: {count}</p>
        <p>count1: {count1}</p>
        <p>count2: {count2}</p>
        <button
          onClick={() =>
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: count - 1,
              count1: count1 - 1,
            })
          }
        >
          -
        </button>
        <button
          onClick={() => {
            this.setState({
              count: 0,
              count1: 1,
            });
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 + 1,
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
}
