import React from "react";
import Home from "./pages/Home";
import Course from "./components/Course";
import { Route, Routes } from "react-router-dom";
import Allbooks from "./pages/Allbooks";
import SignUp from "./components/SignUp";
import LoginModal from "./components/LoginModal";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Allbooks />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
