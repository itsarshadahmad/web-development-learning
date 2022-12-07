import React, { useState } from "react";

export default function StateComp() {
  const [comp, setComp] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setComp(e.target.value)}
        value={comp}
      />
      <h1>Hello! {comp}</h1>
    </div>
  );
}
