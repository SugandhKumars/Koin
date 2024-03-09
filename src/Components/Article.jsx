// import React from "react";

const Article = ({ children, className }) => {
  return (
    <div className={`w-[881px] rounded-lg p-6 bg-[#FFFFFF] ${className}`}>
      {children}
    </div>
  );
};
import React from "react";

export default Article;
