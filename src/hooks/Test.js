import { useEffect } from "react";
import { globalTheme } from "../App";

export function Test() {
  useEffect(() => {
    console.log(globalTheme);
  });
}