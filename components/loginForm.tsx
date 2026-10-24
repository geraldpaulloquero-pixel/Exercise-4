"use client";
import { isValueExpired } from "next/dist/client/components/segment-cache/cache-map";
import { useState } from "react";

export default function LoginForm () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState("");

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (email == "") {
    setError("Email is required");
  return;
  }
  setError("");
  alert("Form submitted!");
}
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="flex flex-col items-center justify-center text-x1 font-bold">Login</h1>
          <h2 className="flex flex-col items-center justify-center text-x1 font-bold">This is a login form</h2>
          <p className="flex flex-col items-center justify-center text-x1 font-bold">Email</p>
          <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <p className="flex flex-col items-center justify-center text-x1 font-bold">Password</p>
          <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
