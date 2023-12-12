import React from "react";

const FilterIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
      stroke-width="1.44"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 7L20 7"
          stroke="#222222"
          stroke-linecap="round"
        ></path>{" "}
        <path d="M4 7L8 7" stroke="#222222" stroke-linecap="round"></path>{" "}
        <path d="M17 17L20 17" stroke="#222222" stroke-linecap="round"></path>{" "}
        <path d="M4 17L12 17" stroke="#222222" stroke-linecap="round"></path>{" "}
        <circle
          cx="10"
          cy="7"
          r="2"
          transform="rotate(90 10 7)"
          stroke="#222222"
          stroke-linecap="round"
        ></circle>{" "}
        <circle
          cx="15"
          cy="17"
          r="2"
          transform="rotate(90 15 17)"
          stroke="#222222"
          stroke-linecap="round"
        ></circle>{" "}
      </g>
    </svg>
  );
};

export default FilterIcon;
