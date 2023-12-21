import { Card, List, ListItem } from "@material-tailwind/react";
import { IoExitOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { PiCirclesFour } from "react-icons/pi";
import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="w-full flex">
      <Card className="h-screen border w-full p-3 pt-[30px] rounded-none shadow-none max-w-[263px] border-[#EEE]">
        <Link to={"/"}>
          <img
            src="https://www.smartgov.tech/wp-content/uploads/2022/01/smart-gov.png"
            alt=""
            className="w-[120px] ml-5 cursor-pointer mb-3"
          />
        </Link>
        <List className="">
          <Link to={"/arizalar"}>
            <ListItem className="gap-[6px] rounded duration-200 font-['Inter'] text-sm font-normal not-italic tracking-[-0.14px]">
              <FaRegUserCircle />
              Arizalar
            </ListItem>
          </Link>
        </List>
        <Link
          to={"/login"}
          className="mt-auto mb-1 text-[#404040] flex items-center gap-1 border-t"
        >
          <ListItem className="gap-[6px] mt-6 font-['Inter'] text-sm font-normal not-italic tracking-[-0.14px]">
            <span className="rotate-180">
              <IoExitOutline />
            </span>
            Выйти
          </ListItem>
        </Link>
      </Card>
      <div className="w-full">
        <div className="flex border-b items-center justify-between p-[18px_20px]">
          <h1 className="text-[#111] font-['Inter'] text-xl not-italic font-medium tracking-[-0.2px] w-full">
            Barcha Arizalar
          </h1>
          <div className="flex items-end justify-end w-full">
            <Link to={"/create"}>
              <Button className="bg-green-500 font-['Inter'] font-medium">
                Yangi ariza yaratish
              </Button>
            </Link>
          </div>
        </div>
        <div className="m-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
