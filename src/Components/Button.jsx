import React from "react";

function Button({
  gradientFrom,
  gradientTo,
  textColor,
  fontSize,
  fontWeight,
  children,
  width,
  height,
  lineheight,
  gap,
  padding,
  backgroundColor,
  border,
}) {
  return (
    <button
      style={{
        background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        color: textColor,
        width: width,
        height: height,
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineheight,
        gap: gap,
        backgroundColor: backgroundColor,
        padding: padding,
        border: border,
      }}
      className="rounded-lg   font-inter "
    >
      {children}
    </button>
  );
}

export default Button;
