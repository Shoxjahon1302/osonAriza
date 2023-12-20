import React from "react";

export default function Cards() {
  const data = [
    { number: 38, title: "Jami arizalar soni" },
    { number: 17, title: "Kurib chiqilayotgan arizalar" },
    { number: 12, title: "Kurib chiqilgan arizalar" },
    { number: 9, title: "Vaqti tugagan arizalar" },
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="rounded-md bg-[#f8f8f8] shadow-md odd:bg-green-50 py-3 w-[200px] min-h-[150px] text-center p-4 flex items-center flex-col justify-center"
        >
          <h1 className="text-4xl font-['Inter'] font-medium">{item.number}</h1>
          <h1 className="text-md font-['Inter'] font-medium pt-2">
            {item.title}
          </h1>
        </div>
      ))}
    </div>
  );
}
