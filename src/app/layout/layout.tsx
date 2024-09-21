"use client"
import styles from './layout.module.css';
import { Flex, Switch } from '@chakra-ui/react';
import { useContext,useState } from 'react';
import { MyContext } from '../context/context';
export default function Layout() {
  const context = useContext(MyContext);
  function sw()
  {
    if (context.modes == "dark")
    {
      context.setMode('ligth');
    }
    else
    {
      context.setMode('dark');
    }
  }
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
          width:'30px',
        },
        '& .chakra-switch__thumb': {
          width: '15px', 
          height: '15px', 
          },
      }} onChange={sw}  display="Flex" colorScheme='teal' ></Switch>
      </div>  
    </div>
  );
}