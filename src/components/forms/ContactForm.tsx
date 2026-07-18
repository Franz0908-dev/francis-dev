import { Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-slate-400">Name</span>
          <input
            name="name"
            required
            className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-400/50"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-slate-400">Email</span>
          <input
            type="email"
            name="email"
            required
            className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-400/50"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm text-slate-400">Subject</span>
        <input
          name="subject"
          required
          className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-400/50"
          placeholder="Project or opportunity"
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm text-slate-400">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-violet-400/50"
          placeholder="Tell me about the opportunity..."
        />
      </label>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 sm:w-auto rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500"
      >
        Send Message
        <Send size={17} />
      </button>

      {submitted && (
        <p className="text-sm text-emerald-300">
          Form UI is working. Email integration will be connected later.
        </p>
      )}
    </form>
  )
}