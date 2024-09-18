import Form from 'react-bootstrap/Form';
import styles from './layout.module.css';
export default function Layout() {

  return (
    <div className={styles.layout}>
      <div className={styles.text}>
        <div className={styles.main}>Social Media Dashboard</div>
        <div className={styles.data}>Total Followers: 23,004</div> 
      </div>
          <Form.Check className={styles.switch}
          type="switch"
        />
    </div>
  );
}