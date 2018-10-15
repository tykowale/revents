import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./testActions";
import { openModal } from "../modal/modalActions";

const mapState = (state) => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter,
  openModal
};

class TestComponent extends Component {

  state = {
    address: "",
    scriptLoaded: false
  };

  render() {
    const { incrementCounter, decrementCounter, data, openModal } = this.props;

    return (
      <div>
        <h1>Test Area</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color="green" content="Increment"/>
        <Button onClick={decrementCounter} color="red" content="Decrement"/>
        <Button onClick={() => openModal("TestModal", { data: 43 })} color="teal" content="Open Modal"/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);