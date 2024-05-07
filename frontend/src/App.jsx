import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Allbooks from "./pages/Allbooks";
import SignUp from "./components/SignUp";
import { Toaster } from "react-hot-toast";
import LoginModal from "./components/LoginModal";
import About from "./pages/About";
import { useAuth } from "./context/AuthProvider";
import Contact from "./pages/Contact";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home bookData={data} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/course"
            element={
              authUser ? <Allbooks bookData={data} /> : <Navigate to="/login" />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LoginModal />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
