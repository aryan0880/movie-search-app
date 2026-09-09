import { useEffect, useRef } from 'react'

function FloatingParticles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particleCount = 18
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 3 + 1
      const x = Math.random() * 100
      const duration = Math.random() * 20 + 15
      const delay = Math.random() * 15
      const opacity = Math.random() * 0.25 + 0.05

      particle.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(245, 197, 24, ${opacity}) 0%, transparent 70%);
        border-radius: 50%;
        left: ${x}%;
        bottom: -10px;
        pointer-events: none;
        z-index: 0;
        animation: floatUp ${duration}s ${delay}s linear infinite;
      `
      container.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
}

export default FloatingParticles
