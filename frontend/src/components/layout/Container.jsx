import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10">
      {children}
    </div>
  );
};

export default Container;