import React from "react";
import logo from "./logo.svg";
import "./App.css";
const HostComponent = React.lazy(() => import("../../host/src/components/button.jsx"));
function App() {
  return (
    <div className="App">
      <div>
        <h2>Remote App</h2>
        <React.Suspense fallback={<div>Loading Host Component...</div>}>
          <HostComponent children={"this is from host"}/>
        </React.Suspense>
      </div>
      <h1>Hello from RemoteA</h1>
    </div>
  );
}

export default App;
