import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { FaRegUserCircle } from "react-icons/fa";

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
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}
