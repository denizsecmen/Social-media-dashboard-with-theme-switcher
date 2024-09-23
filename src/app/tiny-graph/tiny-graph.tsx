import styles from './tiny-graph.module.css';
import Image from 'next/image';
import fbicon from '../images/icon-facebook.svg';
import twicon from '../images/icon-twitter.svg';
import igicon from '../images/icon-instagram.svg';
import yticon from '../images/icon-youtube.svg';
import { useContext } from 'react';
import {MyContext} from '../context/context';
export default function TinyGraph() {
  const data = useContext(MyContext);
  return (
    <div className={styles.main}>
    <div className={styles.row}>
    <div className={data.modes!="dark"?styles.boxLight:styles.box}>
          <div className={styles.title}>Page views <Image src={fbicon} alt='' /></div>
          <div className={styles.data}>87<div className={styles.icon} id="fbdatav"></div></div>
    </div>
    <div className={data.modes!="dark"?styles.boxLight:styles.box}>
          <div className={styles.title}>Likes <Image src={fbicon} alt='' /></div>
          <div className={styles.data}>52<div className={styles.icon} id="fbdataL"></div></div>
    </div>
    <div className={data.modes!="dark"?styles.boxLight:styles.box}>
          <div className={styles.title}>Likes <Image src={igicon} alt='' /></div>
          <div className={styles.data}>5462<div className={styles.icon} id="igdataL"></div></div>
    </div>
    <div className={data.modes!="dark"?styles.boxLight:styles.box}>
          <div className={styles.title}>Profile Views <Image src={igicon} alt='' /></div>
          <div className={styles.data}>52k<div className={styles.icon} id="igdataPW"></div></div>
    </div>
    </div>
    <div className={styles.row}>
    <div className={data.modes!="dark"?styles.boxLight:styles.box}>
          <div className={styles.title}>Retweets<Image src={twicon} alt='' /></div>  
          <div className={styles.data}>117<div className={styles.icon} id="twdataRT"></div></div>
    </div>  
    <div className={data.modes!="dark"?styles.boxLight:styles.box}>
          <div className={styles.title}>Likes<Image src={twicon} alt='' /></div>
          <div className={styles.data}>507<div className={styles.icon} id="twdataL"></div></div>
    </div>
    <div className={data.modes!="dark"?styles.boxLight:styles.box}>
          <div className={styles.title}>Likes<Image src={yticon} alt='' /></div>
          <div className={styles.data}>107<div className={styles.icon} id="ytdataL"></div></div>
    </div>
    <div className={data.modes!="dark"?styles.boxLight:styles.box}>
          <div className={styles.title}>Total Views<Image src={yticon} alt='' /></div>
          <div className={styles.data}>1407<div className={styles.icon} id="ytdataPW"></div></div>
    </div>
    </div>
    </div>)
} 