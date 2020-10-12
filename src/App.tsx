import React from "react";
import "./App.css";
import StackOverflowBadge from "./stack-overflow-badge/StackOverflowBadge";

function App() {
  return (
    <div className="App">
      <StackOverflowBadge id={2} card={true} logo={true} />
    </div>
  );
}

export default App;
