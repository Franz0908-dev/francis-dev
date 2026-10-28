import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-[#050816] px-4 text-white">
          <div className="max-w-lg rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl">
            <AlertTriangle className="mx-auto text-amber-300" size={40} />
            <h1 className="mt-5 text-2xl font-bold">Something went wrong</h1>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              The page encountered an unexpected error. Refresh the application to try again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-violet-600 px-5 text-sm font-semibold transition hover:bg-violet-500"
            >
              <RefreshCw size={16} />
              Refresh page
            </button>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}
