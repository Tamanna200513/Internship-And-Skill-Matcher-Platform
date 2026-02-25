import styles from "./dashboard.module.css";
import ResumeStatus from "@/components/Dashboard/ResumeStatus";
import SkillAnalysis from "@/components/Dashboard/SkillAnalysis";
import MatchedCompanies from "@/components/Dashboard/MatchedCompanies";
import RecentApplications from "@/components/Dashboard/RecentApplications";
import Deadlines from "@/components/Dashboard/Deadlines";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome,Himanshi👋
      </h1>
      <p className={styles.subtitle}>
        Here is your internship and placement overview
      </p>

      <div className={styles.grid}>
        <div className={styles.left}>
          <ResumeStatus />
          <SkillAnalysis />
        </div>

        <div className={styles.center}>
          <MatchedCompanies />
        </div>

        <div className={styles.right}>
          <RecentApplications />
          <Deadlines />
        </div>
      </div>
    </div>
  );
}