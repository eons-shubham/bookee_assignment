import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyShifts from "./components/MyShifts";
import AvailableShifts from "./components/AvailableShifts";
import { ShiftProvider } from "./context/ShiftContext";

function App() {
  return (
    <ShiftProvider>
      <Router>
        <nav>
          <ul>
            <li>
              <a href="/">My Shifts</a>
            </li>
            <li>
              <a href="/available">Available Shifts</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<MyShifts />} />
          <Route path="/available" element={<AvailableShifts />} />
        </Routes>
      </Router>
    </ShiftProvider>
  );
}

export default App;
