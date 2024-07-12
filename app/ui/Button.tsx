"use client";

import React from "react";

const Button = () => {
  console.log(1111);

  return (
    <button
      onClick={() => alert("je maffiche sur mon navigateur")}
      className="bg-gray-500"
    >
      Naviguer
    </button>
  );
};

export default Button;
