import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Under <br />utveckling</h1>
        <p> Handla hos oss via <a href="mailto:ann-sophie@silvermine.se">Ann-sophie@silvermine.se</a> tills vidare</p>
      </main>
    </div>
  );
}
