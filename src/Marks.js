import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    console.log("Marks constructor called");
    super(props);
    this.state = {
      mRoll: this.props.roll
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" get derived called");
    if (props.roll !== state.mRoll) {
      return { mRoll: props.roll };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" should component update called");
    if (this.state.mRoll < 106) {
      return true;
    }
    return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" snapshote called");
    return 12;
  }
  componentDidUpdate(prevProps, prevState, snapshote) {
    console.log(" did update called");
  }
  componentDidMount() {
    console.log("Marks mounted");
  }
  render() {
    console.log("Marks Renderd");
    return (
      <div>
        <h1>hello from marks, your roll number is {this.state.mRoll} </h1>
      </div>
    );
  }
}
