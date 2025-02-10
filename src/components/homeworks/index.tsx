import  { ReactNode } from "react";
import Homework1 from "./homework_1";
import Homework2 from "./homework_2";
import Task3 from "./work_3/index";

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
  {
    Component: <Task3 />,
    key: 3,
  },
];
