import React from "react";
import { Drawer } from "antd";

const SharedDrawer = ({
  open,
  onClose,
  title = "Shared Drawer",
  // make full-screen by default for right placement
  width = "100%",
  placement = "right",
  destroyOnClose = true,
  maskClosable = false,
  children,
}) => {
  return (
    <Drawer
      title={title}
      placement={placement}
      width={width}
      open={open}
      onClose={onClose}
      closable
      destroyOnClose={destroyOnClose}
      maskClosable={maskClosable}
    >
      {children}
    </Drawer>
  );
};

export default SharedDrawer;
