import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  fill: {
    deep_purple_500_67: "bg-deep_purple-500_67",
    deep_purple_500_6c: "bg-deep_purple-500_6c",
    deep_purple_500: "bg-deep_purple-500 text-white-A700",
  },
};
const sizes = {
  xs: "p-2.5",
  sm: "p-4",
  md: "p-[21px] sm:px-5",
  lg: "p-6 sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "deep_purple_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_purple_500_67",
    "deep_purple_500_6c",
    "deep_purple_500",
  ]),
};

export { Button };
