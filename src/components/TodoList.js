import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    let { name, status, id } = this.props.item;
    status = !status;
    let newItem = { name, status, id };
    this.props.updateList(newItem);
    console.log(this.props.item);
  }

  render() {
    const finish = {
      backgroundColor: "#FFFA9D",
      color: "#FF9A3C",
      textDecoration: "line-through"
    };
    const unfinish = {
      backgroundColor: "#DFFCB5",
      color: "#2EB872"
    };
    return (
      <li>
        <input
          type="checkbox"
          defaultChecked={this.props.item.status}
          onChange={this.handleChange}
        />
        <span style={this.props.item.status ? finish : unfinish}>
          {+this.props.item.status}
          {this.props.item.name}
        </span>
      </li>
    );
  }
}
export default TodoList;
