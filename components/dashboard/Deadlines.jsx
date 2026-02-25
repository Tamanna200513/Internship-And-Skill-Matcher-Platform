import styles from "@/app/dashboard/dashboard.module.css";

export default function Deadlines() {
  return (
    <div className={styles.card}>
      <h3>Upcoming Deadlines</h3>

      <p>Innovatech - May 10, 2024</p>
      <p>Creative Minds - May 25, 2024</p>
      <p>CodeWave - May 30, 2024</p>

      <button className={styles.button}>View All Deadlines</button>
    </div>
  );
}