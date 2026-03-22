export function extractSkills(text) {
  const skillsList = ["React", "JavaScript", "Node.js", "DSA", "Java"];

  return skillsList.filter(skill =>
    text.toLowerCase().includes(skill.toLowerCase())
  );
}