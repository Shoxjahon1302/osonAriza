import React, { useState } from "react";

export default function YangiBulim() {
  const [name, setName] = useState({
    name: "",
    username: "",
  });
  return (
    <div className="flex items-end gap-5 p-1">
      <div className="flex flex-col gap-2 ">
        <p>Nomi</p>
        <input
          type="text"
          onChange={(e) => setName((c) => ({ ...c, name: e.target.value }))}
          placeholder="nomi"
          className="bg-[#f8f8f8] outline-none py-3 px-3 rounded-md font-['Inter']"
        />
      </div>
      <button className="bg-green-500 text-white p-[12px_24px] rounded-md hover:bg-green-600 duration-150">
        Yangi bo'lim yaratish
      </button>
    </div>
  );
}
