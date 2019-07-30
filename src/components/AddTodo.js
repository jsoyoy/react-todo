import React, { Component } from "react";
import TodoList from "./TodoList";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoId: 0,
      addTodoValue: "",
      todoList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.updateList = this.updateList.bind(this);
  }
  handleChange(event) {
    this.setState({ addTodoValue: event.target.value });
  }

  handleAdd(event) {
    event.preventDefault();
    if (!this.state.addTodoValue) {
      alert("请输入有效信息");
      return;
    }
    this.setState(pre => ({ todoId: pre.todoId + 1 }));
    let list = this.state.todoList;
    list.push({
      id: this.state.todoId,
      name: this.state.addTodoValue,
      status: 0
    });
    this.setState({ todoList: list });
    this.setState({ addTodoValue: "" });
  }
  updateList(newItem, opType) {
    let list = this.state.todoList;
    list.forEach((item, index) => {
      if (item.id === newItem.id) {
        opType === 1 ? list.splice(index, 1) : (item = newItem);
      }
    });
    this.setState({ todoList: list });
    console.table("todoList", this.state.todoList);
  }

  render() {
    return (
      <div>
        <h1>todo</h1>
        <div>
          <input
            type="text"
            value={this.state.addTodoValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleAdd}>添加待办项</button>
        </div>
        <ul>
          {this.state.todoList.map((item, index) => (
            <TodoList
              key={index}
              item={item}
              updateList={this.updateList.bind(this)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default AddTodo;
