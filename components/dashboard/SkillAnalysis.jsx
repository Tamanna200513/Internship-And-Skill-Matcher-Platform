import styles from "@/app/dashboard/dashboard.module.css";

export default function SkillAnalysis() {
  return (
    <div className={styles.card}>
      <h3>Skill Analysis & Suggestions</h3>

      <p>🔥 <strong>Top Demanded Skill:</strong> JavaScript</p>
      <p>💡 Suggested Skill: SQL</p>

      <div style={{marginTop:"10px", background:"#fef3c7", padding:"10px", borderRadius:"8px"}}>
        Missing Skill: SQL (Learning this can increase matches)
      </div>
    </div>
  );
}