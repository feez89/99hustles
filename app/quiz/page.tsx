import { QuizFlow } from '@/components/quiz/QuizFlow'

export const metadata = {
  title: 'Find Your Perfect Side Hustle | Free Quiz | 99 Hustles',
  description: 'Take our free 60-second quiz to discover the best side hustle for your time, budget, and skills. Get matched to top income streams instantly.',
}

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-brand-black pt-20">
      <div className="container-main section-y">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow mb-4 text-white/60">
              Free · 60 Seconds · No Signup Required
            </p>
            <h1 className="heading-xl mb-4 text-white">
              Find Your Perfect Side Hustle
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto">
              Answer 6 questions. Get matched to the 3 best hustles for your life.
            </p>
          </div>

          {/* Quiz Component */}
          <QuizFlow />
        </div>
      </div>
    </main>
  )
}
