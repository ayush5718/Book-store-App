import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      window.location.reload();
      localStorage.removeItem("Users");
      setTimeout(() => {
        toast.success("Logout Successfully");
      }, 1000);
    } catch (error) {
      setTimeout(() => {}, 3000);
      toast.error("Error: ", error.message);
    }
  };
  return (
    <div>
      <button
        className={`px-3 py-2 ${
          scroll ? "bg-black" : "bg-red-500"
        }  text-white rounded-md cursor-pointer`}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
