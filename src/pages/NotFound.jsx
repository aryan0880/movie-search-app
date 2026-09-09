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

      <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 relative z-[1]">
        <motion.div
          className="flex flex-col items-center gap-5 text-center glass-card p-14 max-w-lg"
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Animated 404 number */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <span className="text-8xl font-extrabold font-sans gradient-text leading-none">
              404
            </span>
            <motion.div
              className="absolute -inset-4 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(245, 197, 24, 0.08), transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.p
            className="text-[var(--gold)] font-mono text-[0.72rem] uppercase tracking-[0.3em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Page not found
          </motion.p>

          <motion.h1
            className="text-[var(--text)] text-3xl font-bold font-sans tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            This scene doesn't exist.
          </motion.h1>

          <motion.p
            className="text-[var(--muted2)] font-mono text-sm max-w-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The page you're looking for was cut from production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link to="/" className="btn-gold mt-2">
              Back to Home <span className="text-base">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </PageWrapper>
  )
}

export default NotFound
