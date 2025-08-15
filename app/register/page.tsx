"use client";
import { useState } from "react";

export default function Register() {

  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="my-[0px] flex items-center justify-center bg-gray-100 h-[850px]">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form className="flex flex-col gap-4 items-center w-full max-w-sm mx-auto">
          <label className="w-32 h-32 rounded-full border-2 border-gray-300 cursor-pointer overflow-hidden flex items-center justify-center">
            {preview ? (
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400 text-center">เลือกรูป</span>
            )}
            <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          </label>
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-gray-300 rounded-lg p-2 w-full"
          />

          <button
            type="submit"
            className="bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 w-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}