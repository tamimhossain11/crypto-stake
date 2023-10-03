import React from "react";

const sizeClasses = {
  txtJosefinSansRomanBold30: "font-bold font-josefinsans",
  txtJosefinSansRomanMedium22: "font-josefinsans font-medium",
  txtJosefinSansRomanBold22: "font-bold font-josefinsans",
  txtJosefinSansRomanBold48: "font-bold font-josefinsans",
  txtJosefinSansRomanRegular22Gray500: "font-josefinsans font-normal",
  txtJosefinSansRomanRegular28: "font-josefinsans font-normal",
  txtJosefinSansRomanRegular48: "font-josefinsans font-normal",
  txtJosefinSansRomanSemiBold28: "font-josefinsans font-semibold",
  txtJosefinSansRomanBold38: "font-bold font-josefinsans",
  txtJosefinSansRomanMedium28: "font-josefinsans font-medium",
  txtJosefinSansRomanSemiBold38: "font-josefinsans font-semibold",
  txtJosefinSansRomanBold28: "font-bold font-josefinsans",
  txtJosefinSansRomanRegular20: "font-josefinsans font-normal",
  txtJosefinSansRomanRegular22: "font-josefinsans font-normal",
  txtMetropolisBlack40: "font-black font-metropolis",
  txtJosefinSansRomanSemiBold22: "font-josefinsans font-semibold",
  txtJosefinSansRomanRegular30: "font-josefinsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
