import styles from './layout.module.css';
import { Switch } from '@chakra-ui/react'
export default function Layout() {

  return (
    <div className={styles.layout}>
      <div className={styles.text}>
        <div className={styles.main}>Social Media Dashboard</div>
        <div className={styles.data}>Total Followers: 23,004</div> 
      </div>
      <Switch id="theme-switcher" minLength={700} colorScheme='teal' ></Switch>
    </div>
  );
}