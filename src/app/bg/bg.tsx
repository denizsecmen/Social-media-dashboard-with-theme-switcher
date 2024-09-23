import "./bg.css";
import { useContext } from "react";
import { MyContext } from "../context/context";


export default function BG() {
  const contx = useContext(MyContext);
  
  return (
    <div className={contx.modes === "dark" ? "dark-body" : "light-body"}>
      <div id="long">
      </div>
      <div id="wave">
      </div>
    </div>
  );
}
