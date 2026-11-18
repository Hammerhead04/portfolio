import { motion, type HTMLMotionProps, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
};

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/** Fades + lifts content in once when it scrolls into view. */
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: fadeUp.hidden,
        show: { ...(fadeUp.show as object), transition: { duration: 0.7, ease: EASE, delay } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = HTMLMotionProps<"div"> & { stagger?: number; as?: "div" | "ul" | "ol" };

/** Parent that staggers its <StaggerItem> children into view. */
export function Stagger({ stagger = 0.08, as = "div", children, ...rest }: StaggerProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & { as?: "div" | "li" };

export function StaggerItem({ as = "div", children, ...rest }: StaggerItemProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp variants={fadeUp} {...rest}>
      {children}
    </Comp>
  );
}
