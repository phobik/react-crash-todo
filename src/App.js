/* eslint-disable no-lone-blocks */
import React from "react";
import Todos from "./components/Todos";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: true
      },
      {
        id: 2,
        title: "Meeting",
        completed: true
      },
      {
        id: 3,
        title: "Make app",
        completed: false
      }
    ]
  };
  //toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        // debugger;
        return todo;
      })
    });
  };

  //delete todo
  //filter out all the todos that match the idgit
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
