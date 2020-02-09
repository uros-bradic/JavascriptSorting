import React from "react";

export default class ArraySort extends React.Component {
  state = {
    inputArrayText: null,
    numberToInsert: null
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputArrayText} />
      </div>
    );
  }
}
