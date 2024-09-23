"use client";
import styles from "./page.module.css";
import Layout from "./layout/layout";
import SmGraphs from "./small-graphs/smGraphs";
import TinyGraph from "./tiny-graph/tiny-graph";
import { useContext, useRef } from "react";
import { MyContext } from "./context/context";
import BG from "./bg/bg";

const Home: React.FC = () => {
  const data = useContext(MyContext);

  return (
    <div  className={data.modes === "dark" ? styles.main : styles.mainLight}>
      <BG />
      <Layout />
      <SmGraphs />
      <TinyGraph />
    </div>
  );
};

export default Home;
