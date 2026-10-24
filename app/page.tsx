"use client"
import LoginForm from "@/components/loginForm";
import { useState } from "react";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100">
      <div className="bg-red p-6 rounded purple">
        <h1 className="flex flex-col items-center justify-center text-x1 font-bold">Hello World!</h1>
        <p className="flex flex-col items-center justify-center mt-2 text-gray-600 font-bold">Welcome to my Next.js app.</p>

        {isLoggedIn ? (<button>Logout</button>) : (
          <LoginForm/>
        )}
      </div>
    </div>
  );
}
