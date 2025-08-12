import React, { useState } from "react";
import SharedComponent from "shared/components/SharedComponent";
const RemoteButtonA = React.lazy(() => import("remoteA/Button"));
const RemoteBapp = React.lazy(() => import("remoteB/App"));
const RemoteDrawerAgGrid = React.lazy(() => import("remoteD/DrawerAgGrid"));

export default function App() {
  const [showDrawer, setShowDrawer] = useState(false);

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
        <button onClick={() => setShowDrawer(true)}>
          shared Drawer with AG Grid
        </button>
        <RemoteDrawerAgGrid
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
        />
      </React.Suspense>
    </div>
  );
}
