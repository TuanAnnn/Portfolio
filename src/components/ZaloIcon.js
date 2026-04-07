import React from "react";

function ZaloIcon({ size = "1em" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M24 4C13 4 4 13 4 24c0 5.5 2.2 10.5 5.8 14.1L8 44l6.2-1.6C17.5 44 20.6 44.8 24 44.8 35 44.8 44 35.8 44 24S35 4 24 4zm-7.2 14.2h9.6l-9.8 11h9.8v2.6H15.8v-2l9.8-11h-8.8v-2.6zm14.4 13.6h-2.8V24c0-1.4-.6-2.2-1.8-2.2-1 0-1.8.8-1.8 2v7.8h-2.8V19.4h2.8v1.2c.6-.9 1.6-1.4 2.8-1.4 2.2 0 3.6 1.5 3.6 4v8.6z" />
    </svg>
  );
}

export default ZaloIcon;
