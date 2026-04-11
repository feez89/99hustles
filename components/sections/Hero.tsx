import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Mic } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-black pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Grid texture background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Gold radial gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
      />

      <div className="container-main relative z-10">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <span className="eyebrow text-white/60">The #1 Platform for Side Hustle Discovery</span>
        </div>

        {/* Headline */}
        <h1 className="heading-xl text-white text-center mb-6 max-w-4xl mx-auto">
          Find a Side Hustle That Actually Makes Money
        </h1>

        {/* Subheadline */}
        <p className="text-white/70 text-center text-lg max-w-2xl mx-auto mb-12 font-sans">
          Explore real income streams broken down with startup costs, time to first dollar, income potential, and honest operator playbooks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link href="/hustles" className="btn-primary">
            Explore Hustles
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/quiz" className="btn-secondary">
            Take the Hustle Quiz
          </Link>
        </div>

        {/* Trust Strip */}
        <div className="text-center text-white/50 text-sm mb-16 font-sans">
          <p>99+ hustles documented Â· Real episodes with real numbers Â· Built for operators, not gurus</p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-brand-border">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-white/80" />
            </div>
            <p className="text-white text-lg font-display font-semibold">99+ Hustles Documented</p>
            <p className="text-white/50 text-sm mt-2 font-sans">Real income streams with real numbers</p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Mic className="w-8 h-8 text-white/80" />
            </div>
            <p className="text-white text-lg font-display font-semibold">50+ Real Episodes</p>
            <p className="text-white/50 text-sm mt-2 font-sans">Deep dives with operators making money</p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-white/80" />
            </div>
            <p className="text-white text-lg font-display font-semibold">10K+ Builders</p>
            <p className="text-white/50 text-sm mt-2 font-sans">Community of hustlers finding their fit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
