// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//code
import React from "react";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold">Pallavi Gudipati</h1>
      <p className="text-lg text-gray-700 mt-2">Product Manager | UX Designer | Data Enthusiast</p>

      <div className="flex gap-4 mt-4">
        <a href="https://www.linkedin.com/in/gudipatipallavi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 text-3xl" />
        </a>
        <a href="https://github.com/gudipatipallavi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-800 text-3xl" />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope className="text-red-600 text-3xl" />
        </a>
      </div>

      <div className="mt-6">
        <a href="/projects" className="bg-blue-600 text-white px-4 py-2 rounded-lg m-2">Projects</a>
        <a href="/about" className="bg-gray-800 text-white px-4 py-2 rounded-lg m-2">About Me</a>
      </div>
    </div>
  );
}
