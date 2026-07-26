import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
      <p className="text-gold font-mono text-[0.75rem] uppercase tracking-widest">
        404 — Page not found
      </p>
      <h1 className="text-white text-4xl font-bold font-sans tracking-tight text-center">
        This scene doesn't exist.
      </h1>
      <p className="text-[#444] font-mono text-sm text-center max-w-sm">
        The page you're looking for was cut from production.
      </p>
      <Link
        to="/"
        className="mt-4 text-[0.8rem] font-mono text-gold border border-gold px-5 py-2 rounded hover:bg-gold hover:text-black transition-all duration-200"
      >
        Back to Home →
      </Link>
    </main>
  )
}

export default NotFound
