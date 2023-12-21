import React from "react";
import { Tables } from "../../components/tables/Tables";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
export default function BarchaArizalar() {
  return (
    <div className="mt-4 px-3">
      <div className="flex items-end justify-end w-full my-4">
        <Link to={"/create"}>
          <Button className="bg-green-500 font-['Inter'] font-medium">
            Yangi ariza yaratish
          </Button>
        </Link>
      </div>
      <Tables />
    </div>
  );
}
