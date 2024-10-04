import React from "react";
import "../../index.css";

const bars = Array(12).fill(0);

export function Spinner() {
  return (
    <div className="size-5">
      <div className="size-5 relative top-[50%] left-[50%]">
        {bars.map((_, i) => (
          <div className="bar" key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
}
