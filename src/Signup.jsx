import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import "./App.css";
import { auth } from "./utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = (props) => {
  const [error, setError] = useState("");
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
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
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        contact.email,
        contact.password
      );
      console.log("Signed up");
      navigate("/login");
    } catch (err) {
      setError(`Error signing up: ${err.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[darkgreen] flex flex-col items-center justify-center p-[1cm] text-center"
    >
      <Input
        name="firstname"
        type="text"
        placeholder="firstname"
        onChange={handleChange}
        value={contact.firstname}
      />
      <br />
      <Input
        name="lastname"
        type="text"
        placeholder="lastname"
        onChange={handleChange}
        value={contact.lastname}
      />
      <br />
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
      <Button type="submit" text="Signup" />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <br />
      <Link to="/login">
        <p className="text-black">Login</p>
      </Link>
    </form>
  );
};

export default Signup;
