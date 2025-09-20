import React from "react";

function Greeting({ name }) {
  return (
    <h2>
      Hello, {name ? name : "Guest"}!
    </h2>
  );
}

export default Greeting;
