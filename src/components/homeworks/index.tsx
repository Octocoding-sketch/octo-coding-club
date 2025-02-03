import  { ReactNode } from "react";
import Homework1 from "./homework_1";

type THomeWork = {
  Component?: ReactNode
  key: number;
};

export const HomeworkItems: THomeWork[] = [
  {
    Component: <Homework1 />,
    key: 1,
  },
];
