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

// src/App.js
import React from 'react';
import Calculator from './Calculator';
import './App.css'; // Optional: for global styles
import Caraousel from './Caraousel';
import Accordian from './Accordian';
import ShimmerUI from './ShimmerUI';
import DisplayShimmer from './DisplayShimmer';
import CommentsContainer from './CommentContainer';
import PollManager from './PollManager';
import Counter from './FECoding/Counter';
import HolyGrail from './FECoding/HolyGrail';
import ToDoList from './FECoding/ToDoList';
import './traffic.css'
import TrafficLight from './FECoding/TrafficLight';

const items = [
  {
      title: 'Section 1',
      content: 'Content for section 1.'
  },
  {
      title: 'Section 2',
      content: 'Content for section 2.'
  },
  {
      title: 'Section 3',
      content: 'Content for section 3.'
  }
];

const trafficStates = {
  red :{
    duration: 4000,
    backgroundColor: "red",
    next: "green"

  },
  yellow :
  {
    duration: 500,
    backgroundColor: "yellow",
    next: "red"
  },
  green: {
    duration: 3000,
    backgroundColor: "green",
    next: "yellow"
  }
}

const App = () => {
  return (
    <div className="App">
      {/* <h1>Basic Calculator</h1>
      <Calculator />
      <Caraousel />
      <Accordian items={items} />
      <DisplayShimmer />
      <CommentsContainer />
      <PollManager />
      <Counter /> */}
      {/* <HolyGrail/> */}
      {/* <ToDoList /> */}
      <TrafficLight trafficStates = {trafficStates} />
    </div>
  );
};

export default App;
