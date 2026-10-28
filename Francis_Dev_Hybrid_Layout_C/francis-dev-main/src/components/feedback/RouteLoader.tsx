export default function RouteLoader() {
  return (
    <div
      className="flex min-h-[55vh] items-center justify-center px-4 pt-20"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-violet-400" />
        <span className="text-sm text-slate-400">Loading page…</span>
      </div>
    </div>
  )
}
