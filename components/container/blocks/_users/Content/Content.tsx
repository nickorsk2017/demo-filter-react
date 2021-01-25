import {Filter, List} from "..";
import {Hr} from "@ui";
import styles from './Content.module.css';

export function Content() {
    return (
      <div className={styles.container}>
          <Hr style={{margin: "0"}}/>
          <Filter/>
          <div className={styles.textBlock}>
            <div className={styles.h1}>Root Canal doctors in New York, NY</div>
            <div className={styles.h2}><img src="./info.svg" className={styles.icon}/> The average price of a procedure in New York is $300</div>
          </div>
          <List/>
      </div>
    )
  }
  