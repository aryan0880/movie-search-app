import { motion } from 'framer-motion'

function SkeletonCard() {
  return (
    <motion.div
      className="rounded-[10px] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full aspect-[2/3] bg-[#151515] relative overflow-hidden rounded-[10px]">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-[#202020] to-transparent" />
      </div>
      <div className="pt-2 space-y-2">
        <div className="h-[12px] w-[70%] bg-[#151515] rounded relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-[#202020] to-transparent" />
        </div>
        <div className="h-[10px] w-[40%] bg-[#151515] rounded relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-[#202020] to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export default SkeletonCard
