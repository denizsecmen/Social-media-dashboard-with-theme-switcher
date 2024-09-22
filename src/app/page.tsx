"use client";
import styles from "./page.module.css";
import Layout from "./layout/layout";
import SmGraphs from "./small-graphs/smGraphs";
import TinyGraph from "./tiny-graph/tiny-graph";
import { useContext, useRef } from "react";
import { MyContext } from "./context/context";
import BG from "./bg/bg";

const Home: React.FC = () => {
  const refi = useRef<HTMLDivElement>(null);
  const data = useContext(MyContext);

  return (
    <div ref={refi} className={data.modes === "dark" ? styles.main : styles.mainLight}>
      <BG upperElementRef={refi} />
      <Layout />
      <SmGraphs />
      <TinyGraph />
    </div>
  );
};

export default Home;
