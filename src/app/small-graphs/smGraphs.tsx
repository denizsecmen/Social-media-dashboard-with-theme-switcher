"use client";
import styles from './smGraphs.module.css';
import fbicon from '../images/icon-facebook.svg';
import twicon from '../images/icon-twitter.svg';
import igicon from '../images/icon-instagram.svg';
import yticon from '../images/icon-youtube.svg';
import Image from 'next/image';
import { useContext } from 'react';
import { MyContext } from '../context/context';
export default function SmGraphs() {
  const data = useContext(MyContext);
  const mode = data.modes;
  return (
    <div className={mode=="dark"?styles.dark:styles.light}>
      <div className={`${styles.facebook} ${mode ? mode : ''}`} id="fb">
        <div><Image className={styles.icon} src={fbicon} alt={''}/>@nathanf</div>
      <div> 1987</div>
      <div>  Followers</div>
      <div>  12 Today</div>
      </div>
      <div className={`${styles.twitter} ${mode}`} id="tw">
      <div><Image className={styles.icon} src={twicon} alt={''}/> @nathanf</div>
      <div> 1044</div>
      <div> Followers</div>
      <div>  99 Today</div>
      </div>
      <div className={`${styles.instagram} ${mode}`}id="ig">
        <div><Image className={styles.icon} src={igicon} alt={''}/>@realnathanf</div>
        <div>11k</div>
        <div>Followers</div>
        <div>1099 Today</div>
      </div>
      <div className={`${styles.youtube} ${mode}`} id="yt">
        <div><Image className={styles.icon} src={ yticon} alt={''}/>Nathan F.</div>
        <div>  8239</div>
        <div>  Subscribers</div>
        <div>  144 Today</div>
      </div>
  </div>);
}