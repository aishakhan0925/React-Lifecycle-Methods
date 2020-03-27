import React, { Component } from "react";
import Marks from "./Marks";
class App extends Component {
  constructor(props) {
    console.log(" App constructor called");
    super(props);
    this.state = {
      roll: 101
    };
  }
  handle = () => {
    console.log("button clicked");
    this.setState({
      roll: this.state.roll + 1
    });
  };
  componentDidMount() {
    console.log("app mounted");
  }
  componentWillUnmount() {
    console.log("app unmounted");
  }
  render() {
    console.log("App Renderd");
    return (
      <div>
        <h1>Hello from app</h1>
        <Marks roll={this.state.roll} />
        <button onClick={this.handle}>Change</button>
      </div>
    );
  }
}
export default App;
