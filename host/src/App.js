import React from "react";
import SharedComponent from "shared/components/SharedComponent";
const RemoteButtonA = React.lazy(() => import("remoteA/Button"));
const RemoteBapp = React.lazy(() => import("remoteB/App"));
const RemoteCLogo = React.lazy(() => import("remoteC/polestar_logo.png"));

export default function App() {
  return (
    <div>
      <h1>Host App</h1>

      <React.Suspense fallback={<div>Loading Remote Button...</div>}>
        <RemoteButtonA>Button from RemoteA</RemoteButtonA>
        <br />
        <RemoteBapp />
        <br />
        <SharedComponent>This is a shared component from Host</SharedComponent>
        <br />
        <RemoteCLogo>
          {(src) => <img src={src} alt="Polestar Logo" />}
        </RemoteCLogo>
      </React.Suspense>
    </div>
  );
}
