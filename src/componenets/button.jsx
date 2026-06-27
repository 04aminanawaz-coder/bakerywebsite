
   import React from "react";

export default function Button({
  text = "Log in",
  href = "/",
  width = "w-28",
  
 
}) {
  return (
    <>
    <div className="btn relative ">
      <a
        href={href}
        className={`border-[#f8f0cc] border hover:border-red-700 ${width}
        text-[#f8f0cc] flex items-center cursor-pointer justify-center font2
        rounded-2xl bg-red-700 hover:bg-[#f8f0cc]
        hover:text-red-700 text-2xl p-1 `}
      >
        {text}
      </a>
    </div>
    </>
  );
}
