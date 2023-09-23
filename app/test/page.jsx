"use client";
import { useEffect, useRef, useState } from "react";

const page = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(2);
  }, [value]);

  return (
    <>
      <button
        onClick={() => {
          setValue(value + 1);
          console.log(1);
        }}
      >
        onlick
      </button>
    </>
  );
};

export default page;
