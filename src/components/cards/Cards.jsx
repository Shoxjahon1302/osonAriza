import React from "react";

export default function Cards() {
  const data = [
    {
      number: 38,
      title: "Jami",
      bg: "bg-white",
      cl: "text-black",
      dp: "Iqtisodiy",
    },
    {
      number: 17,
      title: "Ko'rib chiqilmoqda",
      bg: "bg-gray-300",
      cl: "bg-black",
      dp: "Ijtimoiy",
    },
    {
      number: 9,
      title: "Muddati yaqin",
      bg: "bg-yellow-700",
      cl: "text-white",
      dp: "Xotin-qizlar",
    },
    { number: 12, title: "Muddati o'tgan", bg: "bg-red-500", cl: "text-white" },
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item, index) => (
        <div
          key={index}
          className={`rounded-md  ${item.bg} shadow-md py-3 w-[200px] ${item.cl} min-h-[150px] text-center p-4 flex items-center flex-col justify-center`}
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
