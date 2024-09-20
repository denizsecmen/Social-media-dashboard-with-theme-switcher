"use client"
import styles from './layout.module.css';
import { Flex, Switch } from '@chakra-ui/react';
import { useContext,useState } from 'react';
import My,{MyContext} from '../context/context';
export default function Layout() {
  const context = useContext(MyContext);
  console.log(context);
  return (
    <div className={styles.layout}>
      <div className={styles.text}>
        <div className={styles.main}>Social Media Dashboard</div>
        <div className={styles.data}>Total Followers: 23,004</div> 
      </div>
      <div className={styles.switch}>
        <div>Dark Mode</div>
        <Switch sx={{
          marginLeft: "10px",
          marginBottom:"5px",
          width: "100px",
          height:"15px",
        '& .chakra-switch__track': {
          height: '15px',
          width:'30px',// Adjust track height if needed
        },
        '& .chakra-switch__thumb': {
          width: '15px', // Adjust thumb width if needed
          height: '15px', // Adjust thumb height if needed
        },
      }}  display="Flex" colorScheme='teal' ></Switch>
      </div>  
    </div>
  );
}