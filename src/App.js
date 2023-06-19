import React from "react";
import JokeList from "./JokeList";

/** App component. Renders list of jokes. */

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <JokeList />
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div className="App">
      <JokeList numJokesToGet={5} />
    </div>
  );
};

export default App;
