import { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
    // console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child component did mount");

    // this.timer = setInterval(() => {
    //   // continues to work even after we change page and when we return to this page
    //   // it creates a new one and it would be hanging and will blow up your app
    //   console.log(" NAMASTE REACT OP");
    // }, 500);
    //API Call
    const data = await fetch("https://api.github.com/users/TJayashreeS1412");
    const json = await data.json();
    console.log("json", json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // whenevr state variable updates and after compoenent rerenders
    // console.log(this.props.name + "child compoenent did update");
    // // dependency props
    // //use effect1
    // if (
    //   this.state.count !== prevState.count ||
    //   this.state.count1 !== prevState.count1 // dependency array [] OR
    // ) {
    // }
    // //use effect2
    // if (this.state.count2 !== prevState.count2) {
    // }
  }

  componentDidCatch() {
    // console.log("child component did catch");
  }

  componentWillUnmount() {
    // called when we navigate to another page/component, first parent unmounts, then child unmounts
    // console.log(
    //   this.props.name + "child component will unmount",
    //   performance.now()
    // );
    // this helps clean up this before we unmount or move away from this component
    // clearInterval(this.timer);
  }

  render() {
    const { count, count1, count2, userInfo } = this.state;
    const { name, location, company, avatar_url } = userInfo;

    // console.log(this.props.name + "child render ");

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h4>name: {name}</h4>
        <p>location: {location}</p>
        <p>company:{company}</p>
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
