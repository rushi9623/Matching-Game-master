import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroScreen from "./Components/IntroScreen";
import IntroScreenTwo from "./Components/IntroScreenTwo";
import Instruction from "./Components/Instruction";
import ActivityScreen from "./Components/ActivityScreen";
import Background from "./Components/Background";
import Homepage from "./Components/Homepage";


function App() {
  return (
    <div className="App">
      <Background />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/introscreen" element={<IntroScreen />} />
          <Route path="/introscreentwo" element={<IntroScreenTwo />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/activityscreen" element={<ActivityScreen />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

