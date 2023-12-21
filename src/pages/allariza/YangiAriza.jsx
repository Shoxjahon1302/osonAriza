import React from "react";
import InputName from "../../components/inputs/Input";
import { Button, Textarea } from "@material-tailwind/react";
import Input2 from "../../components/inputs/Input2";

export default function YangiAriza() {
  return (
    <div className="flex items-start gap-5 flex-col">
      <div className="flex items-end justify-end w-full">
        <Button className="bg-green-500 font-['Inter'] font-medium">
          Yangi ariza yaratish
        </Button>
      </div>
      <div className="font-['Inter'] font-medium flex gap-4 w-full">
        <InputName />
        <Input2 />
        <div className="w-96">
          <Textarea label="Qanday masala bo'yicha ariza qoldirmoqchisiz" />
        </div>
      </div>
    </div>
  );
}
