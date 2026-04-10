import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-brand-black flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Number */}
        <p className="font-display font-bold text-[120px] md:text-[160px] leading-none text-white/[0.06] select-none">
          404
        </p>

        <div className="-mt-8 relative z-10">
          <h1 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
            This page doesn't exist.
          </h1>
          <p className="text-white/50 text-base leading-relaxed mb-10">
            It may have moved, been removed, or you might have the wrong URL.
            Either way — let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <Link href="/hustles" className="btn-secondary">
              Browse hustles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
