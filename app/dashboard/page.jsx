"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [appliedCount, setAppliedCount] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      try {
        // 👉 Get User Data
        const resUser = await fetch("/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = await resUser.json();
        setUser(userData);

        // 👉 Get Applied Companies Count
        const resCount = await fetch("/api/applications/count", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const countData = await resCount.json();
        setAppliedCount(countData.count);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome, {user.name} 👋
      </h1>

      <div className="mt-6 space-y-4">
        <div className="p-4 bg-gray-100 rounded">
          <h2>Applied Companies</h2>
          <p>{appliedCount}</p>
        </div>

        <div className="p-4 bg-gray-100 rounded">
          <h2>Resume Status</h2>
          <p>{user.resume ? "Uploaded ✅" : "Not Uploaded ❌"}</p>
        </div>
      </div>
    </div>
  );
}