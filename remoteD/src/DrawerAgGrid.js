import React, { useMemo } from "react";
import SharedDrawer from "shared/components/SharedDrawer";
import { AgGridReact } from "ag-grid-react";
import { ColDef, GridOptions } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "antd/dist/reset.css"; // antd v5 baseline

const DrawerAgGrid = ({ open, onClose, title = "AG Grid in Drawer" }) => {
  const columnDefs = useMemo(
    () => [{ field: "make" }, { field: "model" }, { field: "price" }],
    []
  );

  const rowData = useMemo(
    () => [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxster", price: 72000 },
    ],
    []
  );

  return (
    <SharedDrawer open={open} onClose={onClose} title={title}>
      <div className="ag-theme-alpine" style={{ height: 300, width: "100%" }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </SharedDrawer>
  );
};

export default DrawerAgGrid;
