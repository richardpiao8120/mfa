import React from "react";
import { createRoot } from "react-dom/client";
import DrawerAgGrid from "./DrawerAgGrid";

const App = () => <DrawerAgGrid />;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
