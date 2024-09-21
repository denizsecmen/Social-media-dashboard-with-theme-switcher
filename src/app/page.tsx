
import styles from "./page.module.css";
import Layout from "./layout/layout";
import SmGraphs from "./small-graphs/smGraphs";
import TinyGraph from "./tiny-graph/tiny-graph";
import { useContext } from "react";
import {MyContext} from "./context/context";
export default function Home() {
  let data = useContext(MyContext);
  return (
    <div className={data.modes==="dark"?styles.main:styles.mainLight}>
      <Layout />
      <SmGraphs />
      <TinyGraph/>
    </div>
  );
}
