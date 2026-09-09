import { motion } from 'framer-motion'

function SkeletonCard({ index = 0 }) {
  return (
    <motion.div
      className="rounded-[12px] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      {/* Poster skeleton */}
      <div className="w-full aspect-[2/3] bg-[#0e0e14] relative overflow-hidden rounded-[12px]">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-[#1a1a24] to-transparent" />
        {/* Fake rating badge */}
        <div className="absolute top-2.5 left-2.5 w-12 h-4 bg-[#1a1a24] rounded-md" />
        {/* Fake fav button */}
        <div className="absolute top-2.5 right-2.5 w-[34px] h-[34px] bg-[#1a1a24] rounded-full" />
      </div>

      {/* Text skeletons */}
      <div className="pt-3 space-y-2 px-0.5">
        <div className="h-[13px] w-[75%] bg-[#0e0e14] rounded-md relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite_0.2s] bg-gradient-to-r from-transparent via-[#1a1a24] to-transparent" />
        </div>
        <div className="h-[11px] w-[45%] bg-[#0e0e14] rounded-md relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite_0.4s] bg-gradient-to-r from-transparent via-[#1a1a24] to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export default SkeletonCard
