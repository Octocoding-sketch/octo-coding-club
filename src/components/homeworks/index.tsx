import  { ReactNode } from "react";
import Homework1 from "./homework_1";
import Homework2 from "./homework_2";

type THomeWork = {
  Component?: ReactNode
  key: number;
};

export const HomeworkItems: THomeWork[] = [
  {
    Component: <Homework1 />,
    key: 1,
  },
  {
    Component: <Homework2 />,
    key: 2,
  },
];
