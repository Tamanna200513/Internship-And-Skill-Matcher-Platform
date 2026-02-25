import styles from "@/app/dashboard/dashboard.module.css";

export default function MatchedCompanies() {
  return (
    <div className={styles.card}>
      <h3>Matched Companies</h3>

      <div style={{marginBottom:"15px"}}>
        <h4>Tech Solutions</h4>
        <p>Frontend Developer</p>
        <p>Skills: React, JavaScript</p>
        <button className={styles.button}>Apply Now</button>
      </div>

      <div style={{marginBottom:"15px"}}>
        <h4>Innovatech</h4>
        <p>Data Analyst Intern</p>
        <p>Skills: Python, SQL</p>
        <button className={styles.button}>Apply Now</button>
      </div>

      <div>
        <h4>GlobalSoft</h4>
        <p>Backend Developer</p>
        <p>Skills: Node.js, MongoDB</p>
        <button className={styles.button}>Apply Now</button>
      </div>
    </div>
  );
}