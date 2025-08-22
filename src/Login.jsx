import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import { auth } from "./utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {
  const [error, setError] = useState("");
  const [contact, setContact] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // so the page doesn't refresh
    try {
      await signInWithEmailAndPassword(auth, contact.email, contact.password);
      console.log("Signed in");
      navigate("/");
    } catch (err) {
      setError(`Error logging in: ${err.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[darkgreen] flex flex-col items-center justify-center p-[1cm] text-center"
    >
      <Input
        name="email"
        type="email"
        placeholder="email"
        onChange={handleChange}
        value={contact.email}
      />

      <br />

      <Input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
        value={contact.password}
      />

      <br />

      <Button type="submit" text="Login" />

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <br />

      <Link to="/signup">
        <p className="text-black">Sign up instead</p>
      </Link>
    </form>
  );
};

export default Login;
