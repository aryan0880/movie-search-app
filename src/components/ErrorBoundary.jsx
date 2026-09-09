import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center relative z-[1]">
          <div className="glass-card p-14 flex flex-col items-center gap-5 max-w-md">
            <p className="text-6xl">💥</p>
            <h1 className="text-[var(--text)] text-2xl font-bold font-sans tracking-tight">
              Something broke
            </h1>
            <p className="text-[var(--muted2)] font-mono text-sm max-w-sm leading-relaxed">
              An unexpected error occurred. Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-gold mt-2"
            >
              Refresh Page
            </button>
          </div>
        </main>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
