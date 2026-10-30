import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack / MERN Developer",
          "React.js & React Native Specialist",
          "Next.js & TypeScript Architect",
          "Backend, REST APIs & Socket.IO",
          "AWS Cloud & CI/CD Engineer",
          "AIR 3 in Codekaze | 400+ DSA Solved",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 50,
      }}
    />
  );
}

export default Type;
