import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-['Inter']">Tizimga kirish</h1>
        <input
          type="text"
          placeholder="Ismingizni kiriting"
          className="px-4 py-3 outline-none bg-[#f8f8f8] rounded-md"
        />
        <input
          type="text"
          placeholder="Parolingizni kiriting"
          className="px-4 py-3 outline-none bg-[#f8f8f8] rounded-md"
        />
        <button className="bg-blue-400 p-[12px_24px] text-white rounded w-full">
          Tizimga kirish
        </button>
      </form>
    </div>
  );
}
