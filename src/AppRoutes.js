import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Top } from "./Top";
import { SendMoney } from "./SendMoney";
import { SelectMoney } from "./SelectMoney";
import { SelectMoney2 } from "./SelectMoney2";
import { Comp } from "./Comp";

export const router = createBrowserRouter([
  { path: "/", element: <Top /> },
  { path: "SendMoney", element: <SendMoney /> },
  { path: "SelectMoney", element: <SelectMoney /> },
  { path: "Comp", element: <Comp /> },
]);