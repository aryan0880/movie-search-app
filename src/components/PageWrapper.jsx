import { motion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.99,
    filter: 'blur(3px)',
    transition: {
      duration: 0.3,
      ease: [0.55, 0, 1, 0.45],
    },
  },
}

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ position: 'relative', zIndex: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default PageWrapper
