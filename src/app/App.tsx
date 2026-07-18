import ErrorBoundary from '../components/feedback/ErrorBoundary'
import AppRouter from './router'

export default function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  )
}
