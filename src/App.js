import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div>
      <p>React here!</p>
      <h2> things happened here!</h2>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));