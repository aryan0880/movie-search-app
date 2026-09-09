import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

function NotFound() {
  return (
    <PageWrapper>
      <Helmet>
        <title>FlixMovies — Page Not Found</title>
      </Helmet>

      <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-gold font-mono text-[0.75rem] uppercase tracking-widest">
            404 — Page not found
          </p>
          <h1 className="text-white text-4xl font-bold font-sans tracking-tight">
            This scene doesn't exist.
          </h1>
          <p className="text-[#444] font-mono text-sm max-w-sm">
            The page you're looking for was cut from production.
          </p>
          <Link
            to="/"
            className="mt-2 text-[0.8rem] font-mono text-gold border border-gold px-5 py-2 rounded hover:bg-gold hover:text-black transition-all duration-200"
          >
            Back to Home →
          </Link>
        </motion.div>
      </main>
    </PageWrapper>
  )
}

export default NotFound
