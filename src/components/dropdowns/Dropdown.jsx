import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export default function Dropdown() {
  return (
    <Menu>
      <MenuHandler>
        <Button className="text-black bg-transparent text-['Inter'] font-medium flex items-center gap-1">
          <FaRegUserCircle />
          Mening profilim
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-1">
          <IoSettingsOutline />
          Sozlamar
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
