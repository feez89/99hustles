import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/data/categories'

export default function CategoriesSection() {
  return (
    <section className="section-padding bg-brand-black">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">
            Browse by Category
          </p>
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight">
            How are people making money?
          </h2>
          <p className="text-white/50 mt-3 text-base max-w-xl mx-auto">
            6 categories. Dozens of documented income streams. Find what fits your skills, timeline, and goals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/hustles?category=${category.slug}`}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 overflow-hidden"
            >
              {/* Accent glow */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: category.accentColor }}
              />

              {/* Icon */}
              <span className="text-3xl mb-4 block">{category.icon}</span>

              {/* Name */}
              <h3 className="font-display font-bold text-white text-base mb-1.5">
                {category.name}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-4">
                {category.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: category.accentColor + '20', color: category.accentColor }}
                >
                  {category.hustleCount} hustles
                </span>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
