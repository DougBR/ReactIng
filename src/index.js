import React from "react";
import ReactDOM from "react-dom";

class FontChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: "true",
      size: props.size,
      style: { fontWeight: "normal", fontSize: props.size + "pt" }
    };
    console.log("Construiu o FontChooser");
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          id="boldCheckbox"
          hidden={this.state.isHidden}
          onChange={this.handleBold.bind(this)}
        />
        <button
          id="decreaseButton"
          hidden={this.state.isHidden}
          onClick={this.handleDecrease.bind(this)}
        >
          -
        </button>
        <span id="fontSizeSpan" hidden={this.state.isHidden}>
          {this.state.size + " "}
        </span>
        <button
          id="increaseButton"
          hidden={this.state.isHidden}
          onClick={this.handleIncrease.bind(this)}
        >
          +
        </button>
        <span
          id="textSpan"
          style={this.state.style}
          onClick={this.handleClick.bind(this)}
        >
          {this.props.text}
        </span>
        <div />
      </div>
    );
  }

  handleClick() {
    var hidden = this.state.isHidden;
    if (hidden == "true") hidden = "";
    else hidden = "true";
    console.log(typeof hidden + " " + hidden);
    this.setState({ isHidden: hidden });
  }

  handleIncrease() {
    var newSize = Number(this.state.size) + 1;
    newSize = newSize > this.props.max ? this.props.max : newSize;
    this.setState({ size: newSize, style: { fontSize: newSize + "pt" } });
  }

  handleDecrease() {
    var newSize = Number(this.state.size) - 1;
    if (newSize < this.props.min || newSize < 1) return;
    this.setState({ size: newSize, style: { fontSize: newSize + "pt" } });
  }

  handleBold(e) {
    if (e.target.checked) this.setState({ style: { fontWeight: "bold" } });
    else
      this.setState({
        style: { fontWeight: "normal", fontSize: this.state.size }
      });
  }
}

const rootElement = document.getElementById("container");
ReactDOM.render(
  <div>
    <FontChooser
      min="4"
      max="40"
      size="16"
      text="Fun with React!"
      bold="false"
    />
  </div>,
  document.getElementById("container")
);
