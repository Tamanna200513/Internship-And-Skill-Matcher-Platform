import styles from "@/app/dashboard/dashboard.module.css";

export default function RecentApplications() {
  return (
    <div className={styles.card}>
      <h3>Recent Applications</h3>

      <p><strong>3</strong> Total Applications</p>
      <p>Tech Solutions - Pending</p>
      <p>SkillSphere - Selected</p>
      <p>DataWorks - Rejected</p>

      <button className={styles.button}>View All Applications</button>
    </div>
  );
}