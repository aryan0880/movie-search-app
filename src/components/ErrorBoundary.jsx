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
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="text-5xl">💥</p>
          <h1 className="text-white text-2xl font-bold font-sans">
            Something broke.
          </h1>
          <p className="text-[#444] font-mono text-sm max-w-sm">
            An unexpected error occurred. Please refresh the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 text-[0.8rem] font-mono text-gold border border-gold px-5 py-2 rounded hover:bg-gold hover:text-black transition-all duration-200"
          >
            Refresh Page
          </button>
        </main>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
