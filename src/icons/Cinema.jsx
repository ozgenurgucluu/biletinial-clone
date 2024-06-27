import React from "react";

const Cinema = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 64 64"
      width="28"
      height="28"
      style={{ enableBackground: "new 0 0 64 64" }}
      xmlSpace="preserve"
    >
      <style>
        {`
        .st0 {
          fill: none;
          stroke: #444444;
          strokeWidth: 3;
          strokeLinecap: square;
          strokeMiterlimit: 10;
        }
        
        .st1 {
          fill: none;
          stroke: #444444;
          strokeWidth: 3;
          strokeMiterlimit: 10;
        }
        `}
      </style>
      <g transform="translate(0.5, 0.5)">
        <polygon className="st0" points="25,32 43,42 25,52" />
        <line className="st1" x1="51.5" y1="14" x2="43.5" y2="5.4" />
        <line className="st1" x1="39.8" y1="16.4" x2="31.8" y2="7.9" />
        <line className="st1" x1="28" y1="18.9" x2="20.1" y2="10.4" />
        <line className="st1" x1="16.3" y1="21.4" x2="8.3" y2="12.9" />
        <polyline
          className="st1"
          points="4,24 57.6,12.7 55.3,2.9 1.9,14.2 4,24 4,60 60,60 60,24 4,24"
        />
      </g>
    </svg>
  );
};

export default Cinema;
