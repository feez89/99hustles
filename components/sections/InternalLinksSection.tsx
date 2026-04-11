import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function InternalLinksSection() {
  const links = [
    {
      id: 1,
      title: 'Side Hustles for Beginners',
      description: 'No experience needed',
      href: '/side-hustles-for-beginners'
    },
    {
      id: 2,
      title: 'Online Side Hustles',
      description: 'Work from anywhere',
      href: '/online-side-hustles'
    },
    {
      id: 3,
      title: 'Make $1,000/Month',
      description: 'Realistic income targets',
      href: '/side-hustles-that-make-1000-a-month'
    },
    {
      id: 4,
      title: 'Low-Cost Hustles',
      description: 'Start with minimal investment',
      href: '/low-cost-side-hustles'
    },
    {
      id: 5,
      title: 'Best AI Side Hustles',
      description: 'Leverage automation tools',
      href: '/best-ai-side-hustles'
    },
    {
      id: 6,
      title: 'Creative Side Hustles',
      description: 'Turn your talents into income',
      href: '/creative-side-hustles'
    },
    {
      id: 7,
      title: 'Content & Media Hustles',
      description: 'Build audiences and monetize',
      href: '/hustles?category=content-media'
    },
    {
      id: 8,
      title: 'E-Commerce Hustles',
      description: 'Sell products and services',
      href: '/hustles?category=e-commerce'
    }
  ];

  return (
    <section className="section-y bg-brand-subtle">
      <div className="container-main">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="eyebrow text-white/60">Browse by Goal</span>
        </div>

        {/* Headline */}
        <h2 className="heading-lg text-white text-center mb-12 max-w-2xl mx-auto">
          Find the Right Hustle for You
        </h2>

        {/* Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="card-dark group p-6 flex flex-col transition-all duration-300 hover:border-white/20"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="heading-md text-white flex-1 group-hover:text-white transition-colors">
                  {link.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/70 transition-colors ml-2 flex-shrink-0 mt-0.5" />
              </div>
              <p className="text-white/60 text-sm font-sans">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
