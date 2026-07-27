function SkeletonCard() {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
    >
      {/* Poster area */}
      <div className="skeleton-shimmer rounded-t-xl" style={{ aspectRatio: '2/3' }} />

      {/* Footer */}
      <div className="px-3 py-2.5 space-y-2">
        <div className="skeleton-shimmer h-[13px] w-[75%] rounded-md" />
        <div className="skeleton-shimmer h-[10px] w-[40%] rounded-md" />
      </div>
    </div>
  )
}

export default SkeletonCard
