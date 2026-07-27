import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center gap-5 px-6 text-center"
      style={{ paddingTop: '80px' }}
    >
      {/* Big decorative number */}
      <div
        className="font-bold select-none"
        style={{
          fontSize: 'clamp(6rem, 20vw, 12rem)',
          lineHeight: 1,
          background: 'linear-gradient(135deg, rgba(245,197,24,0.15) 0%, rgba(245,197,24,0.04) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        404
      </div>

      <div className="fade-up">
        <p className="text-[#F5C518] text-[0.72rem] font-mono uppercase tracking-[0.18em] mb-3">
          Scene Not Found
        </p>
        <h1 className="text-[var(--text)] font-bold text-3xl md:text-4xl tracking-tight">
          This scene doesn't exist.
        </h1>
        <p className="text-[var(--muted)] font-mono text-sm mt-3 max-w-sm mx-auto leading-relaxed">
          The page you're looking for was cut from production.
        </p>
      </div>

      <Link
        to="/"
        id="not-found-home"
        className="no-underline mt-2 text-[0.82rem] font-mono text-[#F5C518] px-6 py-3 rounded-full font-medium transition-all duration-200 fade-up"
        style={{
          border: '1.5px solid #F5C518',
          background: 'rgba(245,197,24,0.06)',
          animationDelay: '0.1s',
        }}
        onMouseOver={e => { e.currentTarget.style.background = '#F5C518'; e.currentTarget.style.color = '#000' }}
        onMouseOut={e => { e.currentTarget.style.background = 'rgba(245,197,24,0.06)'; e.currentTarget.style.color = '#F5C518' }}
      >
        ← Back to Home
      </Link>
    </main>
  )
}

export default NotFound
