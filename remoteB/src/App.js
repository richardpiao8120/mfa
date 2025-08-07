import React from "react";
import logo from "./logo.svg";
import SharedComponent from "shared/components/SharedComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Remote App B</h2>

      <SharedComponent>This is a shared component from RemoteB</SharedComponent>
    </div>
  );
}

export default App;
