import React from "react";
import Counter from "./Counter";
import Greeting from "./Greeting";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Counter />
      <hr />
      <Greeting name="Alice" />
      <Greeting />
    </div>
  );
}

export default App;
