import React from "react";
import { Tables } from "../../components/tables/Tables";
import YangiBulim from "./YangiBulim";
export default function Bulimlar() {
  return (
    <div className="mt-4 px-3 flex flex-col gap-3">
      <YangiBulim />
      <Tables />
    </div>
  );
}
