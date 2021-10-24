import Styles from "../../types/Styles";
import COLORS from "./colors";
import _VAR from "./styleVariables";

export const button = (): Styles => {
  return {
    textTransform: "uppercase",
    background: COLORS.primary5,
    color: COLORS.primary9,
    padding: "0.375rem 0.75rem",
    letterSpacing: _VAR.spacing,
    display: "inline-block",
    fontWeight: "700",
    webkitTransition: _VAR.transition,
    oTransition: _VAR.transition,
    transition: _VAR.transition,
    fontSize: "0.875rem",
    border: "2px solid transparent",
    cursor: "pointer",
    webkitBoxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
    borderRadius: _VAR.radius,
  };
};

export const section = (): Styles => {
  return {
    padding: "5rem 0",
  };
};

export const sectionCenter = (): Styles => {
  return {
    width: "90vw",
    margin: "0 auto",
    maxWidth: "1170px",
  };
};

export const underline = (): Styles => {
  return {
    width: "5rem",
    height: "0.25rem",
    marginBottom: "1.25rem",
    background: COLORS.primary5,
    marginLeft: "auto",
    marginRight: "auto",
  };
};
