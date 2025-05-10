import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost/PriceTracker/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error connecting to server.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 border border-gray-200 rounded-lg shadow-lg bg-white mt-[17%]">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

      <input
        type="text"
        placeholder="New Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSignup}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition duration-200"
      >
        Sign Up
      </button>

      {message && (
        <p className="mt-4 text-center text-sm text-red-600">{message}</p>
      )}

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-600">Already have an account? </span>
        <Link to="/login" className="text-blue-600 hover:underline font-medium">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
