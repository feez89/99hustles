'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, RefreshCw } from 'lucide-react'

interface Question {
  id: number
  text: string
  options: string[]
}

interface Hustle {
  id: string
  name: string
  description: string
  bestFor: string[]
}

interface ScoredHustle {
  hustle: Hustle
  score: number
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'How much time can you dedicate each week?',
    options: ['Under 5 hours', '5â10 hours', '10â20 hours', '20+ hours'],
  },
  {
    id: 2,
    text: "What's your starting budget?",
    options: [
      '$0 â I want free to start',
      'Under $100',
      '$100â$500',
      '$500+',
    ],
  },
  {
    id: 3,
    text: 'Do you prefer online or offline work?',
    options: [
      '100% online',
      'Mix of both',
      'Prefer in-person/local',
      "Doesn't matter",
    ],
  },
  {
    id: 4,
    text: 'What describes your skill level?',
    options: [
      'Complete beginner',
      'Some business experience',
      'Skilled in a specific area',
      'Experienced operator',
    ],
  },
  {
    id: 5,
    text: 'What type of work do you prefer?',
    options: [
      'Services / helping people directly',
      'Content / creating media',
      'Products / selling things',
      'Assets / passive/recurring income',
    ],
  },
  {
    id: 6,
    text: 'How soon do you need income?',
    options: [
      'This week',
      'Within 1â3 months',
      'In 3â6 months',
      'Building long-term',
    ],
  },
]

const HUSTLES: Hustle[] = [
  {
    id: 'freelance-video-editing',
    name: 'Freelance Video Editing',
    description:
      'Edit videos for content creators, agencies, and businesses on platforms like Fiverr and Upwork.',
    bestFor: [
      'Skilled in a specific area',
      'Services / helping people directly',
      'This week',
      '100% online',
    ],
  },
  {
    id: 'newsletter-business',
    name: 'Newsletter Business',
    description:
      'Build an audience by writing and sending regular newsletters, monetize through sponsorships and subscriptions.',
    bestFor: [
      'Content / creating media',
      'Building long-term',
      '100% online',
      'Some business experience',
    ],
  },
  {
    id: 'amazon-fba',
    name: 'Amazon FBA',
    description:
      'Source products, send them to Amazon warehouses, and let them handle fulfillment and customer service.',
    bestFor: [
      'Products / selling things',
      '$500+',
      'In 3â6 months',
      'Some business experience',
    ],
  },
  {
    id: 'print-on-demand',
    name: 'Print on Demand',
    description:
      'Design and sell custom products (t-shirts, mugs, hoodies) without inventory or upfront costs.',
    bestFor: [
      'Products / selling things',
      '$0 â I want free to start',
      '100% online',
      'Skilled in a specific area',
    ],
  },
  {
    id: 'social-media-agency',
    name: 'Social Media Agency',
    description:
      'Manage social media accounts for small businesses and charge monthly retainers for your services.',
    bestFor: [
      'Services / helping people directly',
      'Some business experience',
      'Within 1â3 months',
      '100% online',
    ],
  },
  {
    id: 'faceless-youtube',
    name: 'Faceless YouTube Channel',
    description:
      'Create videos without showing your face using stock footage, voiceovers, and animations. Monetize with ads.',
    bestFor: [
      'Content / creating media',
      'Building long-term',
      '100% online',
      'Within 1â3 months',
    ],
  },
  {
    id: 'dropshipping',
    name: 'Dropshipping',
    description:
      'Partner with suppliers to sell products online without holding inventory. They ship directly to customers.',
    bestFor: [
      'Products / selling things',
      'Under $100',
      '100% online',
      'Within 1â3 months',
    ],
  },
  {
    id: 'affiliate-marketing',
    name: 'Affiliate Marketing',
    description:
      'Promote products and services online and earn commissions on every sale made through your links.',
    bestFor: [
      'Content / creating media',
      '$0 â I want free to start',
      'Building long-term',
      '100% online',
    ],
  },
  {
    id: 'fiverr-freelancing',
    name: 'Fiverr Freelancing',
    description:
      'Offer your skills (writing, design, programming, virtual assistance) and sell services starting at $5.',
    bestFor: [
      'Skilled in a specific area',
      'Services / helping people directly',
      'This week',
      '100% online',
    ],
  },
  {
    id: 'mobile-car-detailing',
    name: 'Mobile Car Detailing',
    description:
      'Provide car washing and detailing services to customers at their home or office with minimal startup costs.',
    bestFor: [
      'Complete beginner',
      'Under $100',
      'This week',
      'Prefer in-person/local',
    ],
  },
]

interface AnswerSet {
  [key: number]: number
}

export function QuizFlow() {
  const [currentStep, setCurrentStep] = useState<number | string>(0)
  const [answers, setAnswers] = useState<AnswerSet>({})
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const isQuestionStep = typeof currentStep === 'number'
  const currentQuestion = isQuestionStep ? QUESTIONS[currentStep] : null

  const handleSelectAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return

    const newAnswers = {
      ...answers,
      [currentStep as number]: selectedAnswer,
    }
    setAnswers(newAnswers)

    if ((currentStep as number) < QUESTIONS.length - 1) {
      setCurrentStep((currentStep as number) + 1)
      setSelectedAnswer(null)
    } else {
      setCurrentStep('results')
      setSelectedAnswer(null)
    }
  }

  const handleBack = () => {
    if (currentStep === 'results') {
      setCurrentStep(QUESTIONS.length - 1)
      setSelectedAnswer(
        answers[QUESTIONS.length - 1] ?? null
      )
    } else if (currentStep > 0) {
      setCurrentStep((currentStep as number) - 1)
      setSelectedAnswer(answers[currentStep as number] ?? null)
    }
  }

  const handleRetake = () => {
    setCurrentStep(0)
    setAnswers({})
    setSelectedAnswer(null)
    setEmail('')
    setEmailSubmitted(false)
  }

  // Calculate results
  const results = useMemo(() => {
    if (!isQuestionStep) {
      const answerTexts = Object.entries(answers).map(
        ([stepStr, optionIdx]) => {
          const step = parseInt(stepStr, 10)
          return QUESTIONS[step]?.options[optionIdx] ?? ''
        }
      )

      const scored: ScoredHustle[] = HUSTLES.map((hustle) => {
        let score = 0
        answerTexts.forEach((answer) => {
          if (hustle.bestFor.includes(answer)) {
            score += 1
          }
        })
        return { hustle, score }
      })

      scored.sort((a, b) => b.score - a.score)
      return scored.slice(0, 3)
    }
    return []
  }, [isQuestionStep, answers])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setEmailSubmitted(true)
      // In production, send email to backend API
      console.log('Email submitted:', email)
    }
  }

  const progressPercent = isQuestionStep
    ? ((currentStep as number) / QUESTIONS.length) * 100
    : 100

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-white/70">
            {isQuestionStep
              ? `Question ${(currentStep as number) + 1} of ${QUESTIONS.length}`
              : 'Results'}
          </span>
          <span className="text-sm font-medium text-white/70">
            {Math.round(progressPercent)}%
          </span>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Step */}
      {isQuestionStep && currentQuestion && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Question Text */}
          <div>
            <h2 className="heading-lg text-white font-display">
              {currentQuestion.text}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectAnswer(idx)}
                className={`w-full p-4 md:p-5 rounded-lg text-left transition-all duration-200 flex items-center gap-4 card-dark ${
                  selectedAnswer === idx
                    ? 'border-2 bg-brand-subtle/50'
                    : 'border border-white/10 hover:border-white/20 hover:bg-brand-subtle/25'
                }`}
                style={
                  selectedAnswer === idx
                    ? { borderColor: '#C9A84C' }
                    : undefined
                }
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    selectedAnswer === idx
                      ? 'border-white/60'
                      : 'border-white/30'
                  }`}
                  style={
                    selectedAnswer === idx
                      ? { borderColor: '#C9A84C', backgroundColor: '#C9A84C' }
                      : undefined
                  }
                >
                  {selectedAnswer === idx && (
                    <Check size={16} className="text-brand-black" />
                  )}
                </div>
                <span className="text-base md:text-lg text-white font-medium">
                  {option}
                </span>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 pt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className="px-4 py-2.5 text-white/70 hover:text-white disabled:text-white/30 transition-colors text-sm font-medium"
            >
              â Back
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`ml-auto px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                selectedAnswer === null
                  ? 'bg-white/20 text-white/50 cursor-not-allowed'
                  : 'bg-white text-brand-black hover:bg-white/90 active:scale-95'
              }`}
            >
              Next
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Results Step */}
      {currentStep === 'results' && (
        <div className="space-y-12 animate-in fade-in duration-300">
          {/* Results Headline */}
          <div className="text-center">
            <h2 className="heading-lg text-white font-display mb-3">
              Your Top 3 Matches
            </h2>
            <p className="text-white/70">
              These hustles align perfectly with your preferences
            </p>
          </div>

          {/* Result Cards */}
          <div className="space-y-4">
            {results.map((result, idx) => {
              const matchPercent = Math.round(
                (result.score / 6) * 100
              )
              return (
                <div
                  key={result.hustle.id}
                  className="card-dark p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors"
                >
                  {/* Rank and Match */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="badge-on-dark mb-2">
                        Match #{idx + 1}
                      </div>
                      <h3 className="heading-lg text-white font-display">
                        {result.hustle.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {matchPercent}%
                      </div>
                      <div className="text-xs text-white/60">match</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {result.hustle.description}
                  </p>

                  {/* Match Bar */}
                  <div className="mb-6">
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white transition-all duration-500"
                        style={{ width: `${matchPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Why This Fits */}
                  <div className="mb-6">
                    <p className="text-sm text-white/60 mb-2">
                      Why this fits you:
                    </p>
                    <ul className="space-y-1">
                      {result.hustle.bestFor
                        .slice(0, 2)
                        .map((fit, i) => (
                          <li
                            key={i}
                            className="text-sm text-white/80 flex items-start gap-2"
                          >
                            <span
                              className="inline-block w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: '#C9A84C' }}
                            />
                            {fit}
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Explore Link */}
                  <Link
                    href="/hustles"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 font-semibold text-sm transition-colors"
                  >
                    Explore This Hustle
                    <ArrowRight size={16} />
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Email Capture Section */}
          <div className="bg-brand-subtle border border-white/10 rounded-lg p-8">
            <h3 className="heading-lg text-white font-display mb-2">
              Save Your Results
            </h3>
            <p className="text-white/70 mb-6">
              Get matched hustles + weekly tips delivered to your inbox
            </p>

            {!emailSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-brand-card border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-brand-black font-semibold rounded-lg hover:bg-white/90 transition-colors active:scale-95"
                >
                  Save
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 p-4 bg-brand-card/50 rounded-lg">
                <Check size={20} className="text-white" />
                <div>
                  <p className="text-white font-medium">Thanks!</p>
                  <p className="text-sm text-white/70">
                    Check your email for your personalized hustle breakdown
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Retake Button */}
          <div className="flex justify-center">
            <button
              onClick={handleRetake}
              className="px-6 py-3 border border-white/20 rounded-lg text-white hover:bg-white/5 transition-colors font-semibold text-sm flex items-center gap-2"
            >
              <RefreshCw size={16} />
              Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
