import React from "react";

function Panel({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

export default Panel;
