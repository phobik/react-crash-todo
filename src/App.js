/* eslint-disable no-lone-blocks */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
//import uuid from "uuid";
import axios from "axios";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }
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
  //filter out all the todos that match the id
  //the spread operator <...> makes a copy
  /*   delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
 */
  delTodo = id => {
    axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  //add todo
  debugger;
  addTodo = title => {
    axios
      .post("http://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  {" "}
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
