import React, { useState } from "react";
import DatePicker from "react-datepicker";
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
  return (
    <div className="flex items-start gap-5 flex-wrap">
      <input
        type="text"
        onChange={(e) =>
          setCredentials((c) => ({ ...c, registerNumber: e.target.value }))
        }
        placeholder="registerNumber"
        className="border px-3 py-3 rounded-md outline-none "
      />
      <input
        type="text"
        placeholder="title"
        onChange={(e) =>
          setCredentials((c) => ({ ...c, title: e.target.value }))
        }
        className="border px-3 py-3 rounded-md outline-none "
      />
      <select
        name=""
        id=""
        className="outline-none bg-transparent border px-1 w-[200px] py-4 rounded-md"
      >
        <option value="">department</option>
      </select>
      <input
        type="text"
        onChange={(e) =>
          setCredentials((c) => ({ ...c, fulltext: e.target.value }))
        }
        placeholder="fulltext"
        className="border px-3 py-3 roun  ded-md outline-none "
      />
      <select
        name=""
        id=""
        className="outline-none bg-transparent border px-1 w-[200px] py-4 rounded-md"
      >
        <option value="">process</option>
        <option value="">completed</option>
      </select>
      <input
        type="date"
        className="outline-none bg-transparent border px-1 w-[200px] py-4 rounded-md"
        onChange={(e) =>
          setCredentials((c) => ({ ...c, date: e.target.value }))
        }
      />
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
