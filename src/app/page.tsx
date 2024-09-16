
import styles from "./page.module.css";
import Layout from "./layout/layout";
import SmGraphs from "./small-graphs/smGraphs";
import TinyGraph from "./tiny-graph/tiny-graph";
export default function Home() {
  return (
    <div className={styles.main}>
      <Layout />
      <SmGraphs />
      <TinyGraph/>
    </div>
  );
}
