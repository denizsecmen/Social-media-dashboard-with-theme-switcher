import styles from './tiny-graph.module.css';
import Image from 'next/image';
import fbicon from '../images/icon-facebook.svg';
import twicon from '../images/icon-twitter.svg';
import igicon from '../images/icon-instagram.svg';
import yticon from '../images/icon-youtube.svg';
export default function TinyGraph() {
  return (
    <div className={styles.main}>
    <div className={styles.row}>
    <div className={styles.box}>
      <div className={styles.title}>Page views <Image src={fbicon} alt=''/></div>
    </div>
    <div className={styles.box}>
      <div className={styles.title}>Likes <Image src={fbicon} alt=''/></div>
    </div>
    <div className={styles.box}>
      <div className={styles.title}>Likes <Image src={igicon} alt=''/></div>
    </div>
    <div className={styles.box}>
      <div className={styles.title}>Profile Views <Image src={igicon} alt=''/></div>    
    </div>
    </div>
    <div className={styles.row}>
    <div className={styles.box}>
      <div className={styles.title}>Retweets<Image src={twicon} alt=''/></div>  
    </div>  
    <div className={styles.box}>
      <div className={styles.title}>Likes<Image src={twicon} alt=''/></div>
    </div>
    <div className={styles.box}>
      <div className={styles.title}>Likes<Image src={yticon} alt=''/></div>  
    </div>
    <div className={styles.box}>
      <div className={styles.title}>Total Views<Image src={yticon} alt=''/></div>
    </div>
    </div>
    </div>)
} 