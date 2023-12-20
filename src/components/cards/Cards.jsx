import React from "react";

export default function Cards() {
  const data = [
    { number: 38, title: "Jami arizalar soni" },
    { number: 17, title: "Kurib chiqilayotgan arizalar" },
    { number: 21, title: "Kurib chiqilgan arizalar" },
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item) => (
        <div className="rounded-md bg-[#f8f8f8] p-4 flex items-center flex-col justify-center">
          <h1 className="text-4xl font-['Inter'] font-medium">{item.number}</h1>
          <h1 className="text-md font-['Inter'] font-medium py-3">
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
}
