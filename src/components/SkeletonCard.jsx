function SkeletonCard() {
  return (
    <div className="rounded-[10px] overflow-hidden bg-[#111]">
      <div className="w-full pb-[150%] bg-[#151515] animate-pulse" />
      <div className="p-3 space-y-2">
        <div className="h-[13px] w-[70%] bg-[#1a1a1a] rounded animate-pulse" />
        <div className="h-[11px] w-[40%] bg-[#1a1a1a] rounded animate-pulse" />
      </div>
    </div>
  )
}

export default SkeletonCard
