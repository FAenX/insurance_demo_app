import React from "react";
import { Spinner } from "react-bootstrap";
import "./LoaderButton.css";

export default function Spin({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <div
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Spinner animation="border" />}
      {props.children}
    </div>
  );
}