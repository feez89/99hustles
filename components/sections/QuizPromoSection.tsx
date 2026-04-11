import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function QuizPromoSection() {
  return (
    <section className="relative section-y bg-white border-t border-b border-brand-border-dark">
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5" style={{ backgroundColor: '#C9A84C' }} />

      <div className="container-main pl-8 md:pl-12">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="eyebrow text-black/60">Not Sure Where to Start?</span>
        </div>

        {/* Headline */}
        <h2 className="heading-lg text-black text-center mb-4 max-w-2xl mx-auto">
          Find Your Best Hustle in 60 Seconds
        </h2>

        {/* Body */}
        <p className="text-black/70 text-center max-w-xl mx-auto mb-12 font-sans">
          Answer 6 quick questions about your time, budget, and skills. We'll match you to the top 3 hustles that fit your life.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-6">
          <Link href="/quiz" className="btn-dark">
            Take the Hustle Quiz
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Supporting note */}
        <p className="text-center text-black/50 text-sm font-sans">
          Free. No signup required.
        </p>
      </div>
    </section>
  );
}
