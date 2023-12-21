import React from "react";

export default function Cards() {
  const data = [
    { name: "Iqtisodiy", all: 38, bg: "bg-blue-500", cl: "text-white" },
    { name: "Iqtisodiy", all: 38, bg: "bg-blue-500", cl: "text-white" },
    { name: "Iqtisodiy", all: 38, bg: "bg-blue-500", cl: "text-white" },
    { name: "Iqtisodiy", all: 38, bg: "bg-blue-500", cl: "text-white" },
  ];
  return (
    <div className="mt-10">
      <h1 className="font-['Inter'] font-medium">Bo'limlar miqiyosida</h1>
      <div className="flex items-center gap-5 mt-4">
        {data.map((item) => (
          <div className="border p-1 rounded-lg">
            <div
              className={`${item.bg} ${item.cl} py-4 px-4 rounded-lg w-[200px] min-h-[200px] flex items-center justify-center`}
            >
              <h1 className="font-['Inter'] text-2xl">{item.name}</h1>
            </div>
            <div className="flex items-center justify-between px-1 py-2">
              <h1>Jami:</h1>
              <h1>{item.all}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
