export default function DifferentiationSection() {
  const features = [
    {
      id: 1,
      icon: 'ð°',
      title: 'Startup Costs',
      description: 'Exactly how much it costs to start, from $0 to funded.'
    },
    {
      id: 2,
      icon: 'â±',
      title: 'Time to First Dollar',
      description: 'How long before you actually make money.'
    },
    {
      id: 3,
      icon: 'ð',
      title: 'Realistic Income Range',
      description: 'Not best case â median operator income.'
    },
    {
      id: 4,
      icon: 'ð ',
      title: 'Tools & Platforms',
      description: 'What you actually need to run the hustle.'
    },
    {
      id: 5,
      icon: 'â',
      title: 'Step-by-Step Playbooks',
      description: 'Documented breakdowns from real operators.'
    },
    {
      id: 6,
      icon: 'ð',
      title: 'Podcast Deep Dives',
      description: 'Extended interviews with people doing it.'
    }
  ];

  return (
    <section className="section-y bg-brand-dark">
      <div className="container-main">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="eyebrow text-white/60">Why 99 Hustles</span>
        </div>

        {/* Headline */}
        <h2 className="heading-lg text-white text-center mb-4 max-w-3xl mx-auto">
          Not Inspiration. Information.
        </h2>

        {/* Subheadline */}
        <p className="text-white/70 text-center max-w-2xl mx-auto mb-16 font-sans">
          Every hustle we document includes the real numbers â startup cost, realistic income ranges, tools used, and what actually trips people up.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="card-dark p-6 flex flex-col"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="heading-md text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm font-sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
