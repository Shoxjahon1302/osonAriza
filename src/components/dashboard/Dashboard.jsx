import { Card, List, ListItem } from "@material-tailwind/react";
import { IoExitOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { FaBuildingColumns } from "react-icons/fa6";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const routePath = location.pathname.split("/").pop();
  const routeHeadings = {
    arizalar: "Arizalar",
    part: "Bo'limlar",
    create1: "Yangi bo'lim yaratish",
    create: "Yangi ariza yaratish",
  };
  const heading = routeHeadings[routePath];
  return (
    <div className="w-full flex">
      <Card className="h-screen border w-full p-3 pt-[30px] rounded-none shadow-none max-w-[263px] border-[#EEE]">
        <Link to={"/"} className="flex items-center gap-1 border-b pb-4">
          <img src={logo} alt="" className="w-[50px] ml-5 cursor-pointer" />
          <h1 className="font-['Inter'] font-medium">MOTD.UZ</h1>
        </Link>
        <List className="mt-5 ">
          <Link to={"/arizalar"} className="border rounded">
            <ListItem className="gap-[6px] rounded duration-200 font-['Inter'] text-sm font-normal not-italic tracking-[-0.14px]">
              <FaRegUserCircle />
              Arizalar
            </ListItem>
          </Link>
        </List>
        <List className="">
          <Link to={"/part"} className="border rounded">
            <ListItem className="gap-[6px] rounded duration-200 font-['Inter'] text-sm font-normal not-italic tracking-[-0.14px]">
              <FaBuildingColumns />
              Bo'limlar
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
            Chiqish
          </ListItem>
        </Link>
      </Card>
      <div className="w-full">
        <div className="flex border-b items-center justify-between p-[18px_20px]">
          <h1 className="text-[#111] font-['Inter'] text-xl not-italic font-medium tracking-[-0.2px] w-full">
            {heading}
          </h1>
        </div>
        <div className="m-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
