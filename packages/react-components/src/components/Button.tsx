import React from "react";

export type ButtonProps = {
  children?: string | React.ReactElement;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};
