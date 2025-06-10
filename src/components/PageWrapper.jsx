import { motion } from "framer-motion";

const blurVariants = {
  initial: { opacity: 0, filter: "blur(20px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.6 } },
  exit: { opacity: 0, filter: "blur(20px)", transition: { duration: 0.4 } },
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={blurVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
}
