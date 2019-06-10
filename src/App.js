import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

global.jQuery = require("jquery");
require("bootstrap");

class App extends React.Component {
  render() {
    return <div className="App">Hello Pomodoro Project</div>;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
