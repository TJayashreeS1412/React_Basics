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
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log(" NAMASTE REACT OP");
    }, 500);
    //API Call
    const data = await fetch("https://api.github.com/users/TJayashreeS1412");
    const json = await data.json();
    console.log("json", json);

    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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
