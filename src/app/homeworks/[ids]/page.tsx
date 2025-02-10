import React from "react";
import { HomeworkItems } from "@/components/homeworks";

// interface Params {
//   ids: string; // Adjust this according to the actual structure of params
// }

export type paramsType = Promise<{ ids: string }>;

const index = async (props: { params: paramsType }) => {
  // const idParam = await params?.ids;
  const { ids } = await props.params;
  return (
    <div>
      {HomeworkItems?.find((item) => item.key === parseInt(ids??0))
        ?.Component ?? `Хоосон байна`}
    </div>
  );
};

export default index;
