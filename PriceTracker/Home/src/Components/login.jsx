import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext"; 

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { setUser } = useContext(AuthContext); // Use context to set the logged-in user
  const navigate = useNavigate(); // Navigate to the home page after login

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost/PriceTracker/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (data.success) {
        // Set the logged-in user in the context
        setUser({ username: data.username });
        navigate("/"); // Redirect to the homepage after login
      }
    } catch (error) {
      setMessage("Error connecting to server.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 border border-gray-200 rounded-lg shadow-lg bg-white mt-[17%]">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-[#f6339b] hover:brightness-95 cursor-pointer text-white py-2 rounded font-semibold transition duration-200"
      >
        Login
      </button>

      {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-600">Don't have an account? </span>
        <Link to="/signup" className="text-blue-600 hover:underline font-medium">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;
