import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditting: false };
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.headelEdit = this.headelEdit.bind(this);
    this.headelDelt = this.headelDelt.bind(this);
  }
  handleChangeStatus() {
    // let { name, status, id } = this.props.item;
    // status = status === 0 ? 1 : 0;
    // let newItem = { name, status, id };
    this.props.item.status = this.props.item.status === 0 ? 1 : 0;
    this.props.updateList(this.props.item.status);
  }
  handleChangeName(event) {
    this.props.item.name = event.target.value;
  }
  headelEdit() {
    this.setState(pre => ({ isEditting: !pre.isEditting }));
    if (this.state.isEditting) {
      this.props.updateList(this.props.item);
    }
  }
  headelDelt() {
    this.props.updateList(this.props.item, 1);
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
          defaultChecked={this.props.item.status === 1}
          onChange={this.handleChangeStatus}
        />
        {this.state.isEditting ? (
          <input
            type="input"
            defaultValue={this.props.item.name}
            onChange={this.handleChangeName}
          />
        ) : (
          <span style={this.props.item.status === 1 ? finish : unfinish}>
            {this.props.item.name}
          </span>
        )}
        <button onClick={this.headelEdit}>编辑</button>
        <button onClick={this.headelDelt}>删除</button>
      </li>
    );
  }
}
export default TodoList;
