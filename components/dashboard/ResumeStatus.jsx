import styles from "@/app/dashboard/dashboard.module.css";

export default function ResumeStatus() {
  return (
    <div className={styles.card}>
      <h3>Resume Status</h3>
      <p>✅ Resume Uploaded</p>
      <p>Skills Extracted: 8</p>
      <p>Last Updated: April 24, 2024</p>
      <button className={styles.button}>Update Resume</button>
    </div>
  );
}