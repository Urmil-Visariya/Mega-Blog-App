import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <svg 
      width={width} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          .logo-path {
            stroke: #2c3e50; /* A dark slate color */
            transition: stroke 0.3s ease;
          }
          .logo-circle {
            fill: #42b883; /* A vibrant green color */
            transition: fill 0.3s ease;
          }
          svg:hover .logo-path {
            stroke: #3498db; /* A bright blue on hover */
          }
          svg:hover .logo-circle {
            fill: #3498db; /* A bright blue on hover */
          }
        `}
      </style>
      <path 
        className="logo-path"
        d="M8 8H16V16H8V8Z" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        className="logo-path"
        d="M8 12H4M20 12H16M12 8V4M12 20V16" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        className="logo-circle"
        cx="12" 
        cy="12" 
        r="2" 
      />
    </svg>
  );
}

export default Logo;