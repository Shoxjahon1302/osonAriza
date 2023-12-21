import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function YangiAriza() {
  const [credentials, setCredentials] = useState({
    registerNumber: "",
    title: "",
    department: "",
    fulltext: "",
    status: "",
    date: "",
  });
  console.log(credentials);
  return (
    <div className="flex items-start gap-5 flex-wrap">
      <div className="p-1 flex flex-col gap-2">
        <p>Registratsiya raqami</p>
        <input
          type="text"
          onChange={(e) =>
            setCredentials((c) => ({ ...c, registerNumber: e.target.value }))
          }
          placeholder="0112"
          className="border px-3 py-3 rounded-md outline-none "
        />
      </div>
      <div className="p-1 flex flex-col gap-2">
        <p>Bo'lim</p>
        <select
          name=""
          onChange={(e) =>
            setCredentials((c) => ({ ...c, department: e.target.value }))
          }
          id=""
          className="outline-none bg-transparent border px-1 w-[200px] py-4 rounded-md"
        >
          <option value={"ijtimoiy"}>Ijtimoiy</option>
          <option value={"qurilish"}>Qurilish</option>
          <option value={"qurilish"}>Xotin-qizlar</option>
          <option value={"qurilish"}>Voyaga yetmaganlar</option>
          <option value={"qurilish"}>Din ishlari</option>
          <option value={"qurilish"}>Iqtisod</option>
          <option value={"qurilish"}>Invistetsiya</option>
        </select>
      </div>
      <div className="p-1 flex flex-col gap-2">
        <p>Holati</p>
        <select
          onChange={(e) =>
            setCredentials((c) => ({ ...c, status: e.target.value }))
          }
          name=""
          id=""
          className="outline-none bg-transparent border px-1 w-[200px] py-4 rounded-md"
        >
          <option value={"process"}>Jarayonda</option>
          <option value={"completed"}>Yakunlangan</option>
        </select>
      </div>
      <div className="p-1 flex flex-col gap-2">
        <p>Vaqti</p>
        <input
          type="date"
          className="outline-none bg-transparent border px-2 w-[200px] py-3 rounded-md"
          onChange={(e) =>
            setCredentials((c) => ({ ...c, date: e.target.value }))
          }
        />
      </div>
      <div className="w-full p-1 flex flex-col gap-2">
        <p>Qisqacha mazmun</p>
        <input
          type="text"
          placeholder="qisqacha mazmun"
          onChange={(e) =>
            setCredentials((c) => ({ ...c, title: e.target.value }))
          }
          className="border px-3 py-3 rounded-md outline-none w-full"
        />
      </div>
      <div className="w-full">
        <p>Ba'tafsil mazmuni</p>
        <textarea
          type="text"
          onChange={(e) =>
            setCredentials((c) => ({ ...c, fulltext: e.target.value }))
          }
          placeholder="ba'tafsil mazmuni"
          className="border border-green-200 px-3 py-3 rounded-md outline-none w-full h-56"
        />
      </div>
      <button className="bg-green-600 text-white p-[12px_24px] rounded-md font-['Inter'] hover:bg-green-700">
        Yaratish
      </button>
    </div>
  );
}
// {
//   registerNumber: {
//    type: String,
//    required: true,
//   },
//   title: {
//    type: String,
//    required: true,
//   },
//   department: [
//    {
//     type: Schema.Types.ObjectId,
//     ref: 'Department',
//    },
//   ],
//   fulltext: {
//    type: String,
//    required: true,
//   },
//   cancelled: {
//    status: { type: Boolean },
//    reason: { type: String },
//    date: { type: Date },
//   },
//   status: {
//    type: [String], // 4 ta rolni saqlash uchun
//    enum: ['process', 'completed'], // Masofaviy rolni almashtirib qo'ying
//    default: ['process'], // Agar rol ko'rsatilmagan bo'lsa, role1 ni o'rnating
//   },
//   expireDate: { type: Number },
//  },
