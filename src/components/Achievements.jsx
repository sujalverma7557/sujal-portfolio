import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Problem Solving & Recognition
        </p>
        <h2 className={styles.sectionHeadText}>
          Achievements.
        </h2>
      </motion.div>

      <motion.ul
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 list-disc ml-5 space-y-4 text-secondary max-w-3xl"
      >
        <li>
          Solved <span className="text-white font-medium">1000+</span> Data Structures
          and Algorithms problems across LeetCode, GeeksforGeeks, and Codeforces.
        </li>
        <li>
          Achieved a <span className="text-white font-medium">LeetCode contest rating of 1665+</span>
          with consistent participation in rated contests.
        </li>
        <li>
          Ranked among the <span className="text-white font-medium">top 50 students</span> on
          GeeksforGeeks at Bennett University.
        </li>
        <li>
          Awarded the <span className="text-white font-medium">Dean’s List of Academic Excellence</span>
          for outstanding academic performance (3rd & 5th semesters).
        </li>
      </motion.ul>
    </>
  );
};

export default SectionWrapper(Achievements, "");
