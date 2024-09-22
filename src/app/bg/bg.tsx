import "./bg.css";
import { useContext } from "react";
import { MyContext } from "../context/context";

// Update the props interface
interface BGProps {
  height: number; // Use number instead of BigInteger
}

export default function BG({ height }: BGProps) {
  const contx = useContext(MyContext);
  
  return (
    <div className={contx.modes === "dark" ? "dark-body" : "light-body"}>
      <div id="long" style={{ height: `${height}px` }}>
      </div>
      <div id="wave">
      </div>
    </div>
  );
}
