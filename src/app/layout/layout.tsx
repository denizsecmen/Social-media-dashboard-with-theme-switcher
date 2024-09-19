import styles from './layout.module.css';
import { Flex, Switch } from '@chakra-ui/react'
export default function Layout() {

  return (
    <div className={styles.layout}>
      <div className={styles.text}>
        <div className={styles.main}>Social Media Dashboard</div>
        <div className={styles.data}>Total Followers: 23,004</div> 
      </div>
      <div className={styles.switch}>
        <p>Dark Mode</p>
        <Switch className={styles.switch} display="Flex" colorScheme='teal' ></Switch>
      </div>  
    </div>
  );
}