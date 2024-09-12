
import styles from "./page.module.css";
import Layout from "./layout/layout";
import SmGraphs from "./small-graphs/smGraphs";
export default function Home() {
  return (
    <div className={styles.main}>
      <Layout />
      <SmGraphs/>
    </div>
  );
}
