import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

const TABLE_HEAD = ["Ismi", "Kasbi", "Vaqti", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export default function Table1() {
  const [open, setOpen] = useState(false);
  return (
    <Card className="h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setOpen(!open)}
                      className="border rounded-full p-3"
                    >
                      <FaPen />
                    </button>
                    <button className="border rounded-full p-3">
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {open && (
        <div className="bg-black/50 fixed  w-full h-full top-0 left-0 flex items-center justify-center">
          <div className=" bg-white w-[300px] rounded-md px-3 py-4 min-h-[100px]">
            <div className="flex justify-between items-center">
              <h1 className="font-['Inter'] text-xl">Tahrirlash</h1>
              <span
                onClick={() => setOpen(!open)}
                className="p-3 bg-[#f8f8f8] rounded-full cursor-pointer h-full"
              >
                <FaXmark />
              </span>
            </div>
            <input
              type="text"
              placeholder="nomi"
              className="bg-[#f8f8f8] outline-none py-3 px-2 rounded-md w-full mt-8"
            />
            <input
              type="text"
              placeholder="nomi"
              className="bg-[#f8f8f8] outline-none py-3 px-2 rounded-md w-full mt-3"
            />
            <button className="bg-green-500 text-white p-[12px_24px] w-full rounded-md hover:bg-green-600 duration-200 mt-6">
              O'zgartirsh
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}
