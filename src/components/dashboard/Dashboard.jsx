import { Card, List, ListItem } from "@material-tailwind/react";
import { IoExitOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { PiCirclesFour } from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function Dashboard() {
  return (
    <div className="w-full flex">
      <Card className="h-screen border w-full p-3 pt-[30px] rounded-none shadow-none max-w-[263px] border-[#EEE]">
        <Link to={"/"} className="mb-14"></Link>
        <List className="">
          <Link to={"/arizalar"}>
            <ListItem className="gap-[6px] hover:bg-blue-400 rounded hover:text-white duration-200 font-['Inter'] text-sm font-normal not-italic tracking-[-0.14px]">
              <FaRegUserCircle />
              Barcha Arizalar
            </ListItem>
          </Link>
          <Link to={"/panel/userorganization"}>
            <ListItem className="gap-[6px] font-['Inter'] hover:bg-blue-400 rounded hover:text-white duration-200 mb-6 text-sm font-normal not-italic tracking-[-0.14px]">
              <PiCirclesFour />
              Yangi Ariza yaratish
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
          <h1 className="text-[#111] font-['Inter'] text-xl not-italic font-medium tracking-[-0.2px]">
            Barcha Arizalar
          </h1>
          <Menu>
            <MenuHandler>
              <Button className="text-black flex items-center gap-1">
                <FaRegUserCircle />
                Mening profilim
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
