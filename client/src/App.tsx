import { MotionConfig } from "motion/react";
import Portfolio from "@/pages/Portfolio";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Portfolio />
    </MotionConfig>
  );
}
