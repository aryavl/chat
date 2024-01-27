"use client";
import { setUser } from "@/lib/features/userSlice";
import { useAppDispatch } from "@/lib/hooks";
import { AppDispatch } from "@/lib/store";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface UserInputProps {
  name: string | undefined;
  email: string | undefined;
}
const LoginForm = () => {
  const dispatch = useAppDispatch<AppDispatch>()
  const router = useRouter();
  const [inputs, setInputs] = useState<UserInputProps>({
    name: "",
    email: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputs.name?.trim() || !inputs.email?.trim()) {
      setError("All fields are required");
      return;
    }
    try {
      const response = await fetch("http://localhost:3003/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputs.name,
          email: inputs.email,
        }),
      });
      console.log(response); 
      
      if (response.ok) {
        const result = await response.json();
        dispatch(setUser(result));
        let user = JSON.stringify(result);
        localStorage.setItem("user", user);
        router.push("/chat");
        console.log(result);
      } else if (response.status === 404) {
        const result = await response.json();
        setError(result.message);
      } else if (response.status === 500) {
        // Handle the 500 error case
        console.error("Internal Server Error:", response.statusText);
      } else {
        // Handle other HTTP statuses if needed
        console.error(`Unexpected HTTP status: ${response.status}`);
      }
    } catch (error: any) {
      // Handle other errors
      console.error("An error occurred:", error);
    }
  };
  
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
      <div className="flex flex-col xl:flex-row gap-5">
        <div className="form-control w-full">
          <label htmlFor="" className="label label-text text-lg">
            What is your name?
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Username"
          />
          {error && <div className="text-red-600 text-lg">{error}</div>}
        </div>
        <div className="form-control w-full">
          <label htmlFor="" className="label label-text text-lg">
            Put your email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="email"
          />
          {error && <div className="text-red-600 text-lg">{error}</div>}
        </div>
      </div>
      <button type="submit" className="btn bordered border-gray-600 text-white">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
