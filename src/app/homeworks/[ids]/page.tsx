import React from "react";
import { HomeworkItems } from "@/components/homeworks";

const index = () => {
  return (
    <div>
      {HomeworkItems?.[0].Component}
    </div>
  );
};

export default index;
