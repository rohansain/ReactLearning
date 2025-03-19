import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { user, login, logout } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <nav style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "10px" }}>
      <h1>🍽️ Restaurant App</h1>
      {user ? (
        <div>
          <span>Welcome, {user.name}! </span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login("Guest")}>Login</button>
      )}
    </nav>
  );
}

export default Navbar;
