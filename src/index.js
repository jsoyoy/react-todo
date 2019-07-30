import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./components/AddTodo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AddTodo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
