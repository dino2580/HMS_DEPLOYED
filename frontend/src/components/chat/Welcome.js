import React, { useState } from "react";

export default function Welcome() {
  const userName = "JAY";

  return (
    <div className="flex justify-center items-center flex-col text-white" style={{ height: "91vh" }}>
      <img src={""} alt="" className="h-80" />
      <h1>
        Welcome, <span className="text-blue-500">{userName}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </div>
  );
}
