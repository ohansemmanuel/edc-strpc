import React from "react";

export const PolymorphicText = ({ as, children }) => {
  const Component = as || "span";

  return <Component>{children}</Component>;
};
