import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  axios.defaults.withCredentials = true; // Enable credentials for all requests

  const apiUrl = import.meta.env.VITE_BACKVER;

  const login = async (inputs) => {
    try {
      // Make the POST request to the login API
      const res = await axios.post(`${apiUrl}/api/auth/login`, inputs, {
        withCredentials: true, // Include cookies in the request (if needed)
      });

      // Set the current user with the response data
      setCurrentUser(res.data);

      console.log("Login successful:", res.data); // Log success message
    } catch (error) {
      // Handle errors (e.g., show a notification or alert)
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      // You can also set an error state here to display it in the UI if necessary
    }
  };

  const logout = async (inputs) => {
    await axios.post(`${apiUrl}/api/auth/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
