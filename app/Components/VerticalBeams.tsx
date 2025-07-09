"use client";

import React from "react";

const VerticalBeams: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div className="relative w-full h-full overflow-hidden">
        {/* Beam 1 */}
        <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-20 left-1/6 animate-laser-down"></div>

        {/* Beam 2 */}
        <div
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-20 left-2/6 animate-laser-down"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Beam 3 */}
        <div
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-20 left-3/6 animate-laser-down"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Beam 4 */}
        <div
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-20 left-4/6 animate-laser-down"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Beam 5 */}
        <div
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent opacity-20 left-5/6 animate-laser-down"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Embedded Styles for Animation */}
      <style jsx>{`
        @keyframes laser-down {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .animate-laser-down {
          /* Changed animation duration from 3s to 5s */
          animation: laser-down 5s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default VerticalBeams;
