'use client'

interface Props {
  layout?: 'stacked' | 'row'
}

export default function NewsletterInlineForm({ layout = 'stacked' }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  if (layout === 'row') {
    return (
      <form
        className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50"
        />
        <button type="submit" className="btn-primary text-xs whitespace-nowrap">
          Subscribe
        </button>
      </form>
    )
  }

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Your email address"
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/50"
      />
      <button type="submit" className="btn-primary w-full justify-center text-xs">
        Subscribe Free
      </button>
    </form>
  )
}
