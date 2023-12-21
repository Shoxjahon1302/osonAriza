import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Table1 from "../../components/tables/Table1";
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
      <Table1 />
    </div>
  );
}
