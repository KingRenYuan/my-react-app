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

import React from 'react';

// Sample data
const name = 'John Doe';
const age = 25;
const isStudent = true;
const hobbies = ['Reading', 'Coding', 'Traveling'];
const address = {
  city: 'Anytown',
  country: 'Wonderland',
};

const App = () => {
  return (
    <div>
      {/* String */}
      <h1>{name}</h1>

      {/* Number */}
      <p>Age: {age}</p>

      {/* Boolean */}
      <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>

      {/* Array */}
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      {/* Object */}
      <p>
        Address: {address.city}, {address.country}
      </p>
    </div>
  );
};

export default App;

