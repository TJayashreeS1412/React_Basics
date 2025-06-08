# React_Basics

/\*\*

- Header
- -logo
- -navItems
- Body
- -search
- -cards contaienr
-      -restaurant card
-        -img
-        -restaurant name
-        -cuisine
-        - stars
-        -delivery timeline
- Footer
- -copyright
- -links
- -address
- -contact
- \*/

/\*
useEffect

//if no dependency array, will be called on initial render and every rerendered based on state changes.
useEffect(() => {
console.log("rendered everytime");
});

//if empty dependency array, will be called only on initial component render only
useEffect(() => {
console.log("rendered only once []");
}, []);

//if btnNameReact in dependency array, will be called on initial render and everytime btnNameReact is updated.
useEffect(() => {
console.log();
}, [btnNameReact]);

useEffect(() => {
const timer = setInterval(() => {
console.log("TIMERRR ");
}, 1000);

    // called before the component unmonts, perform clean up here.
    return () => {
      clearInterval(timer);
    };

});

\*/

/\*
React class lifecycle

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
// this.state.count !== prevState.count ||
// this.state.count1 !== prevState.count1 // dependency array [] OR
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
// this.props.name + "child component will unmount",
// performance.now()
// );
// this helps clean up this before we unmount or move away from this component
// clearInterval(this.timer);
}

\*/
