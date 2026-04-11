import { Hustle } from '@/types'

export const hustles: Hustle[] = [
  {
    id: '1',
    slug: 'freelance-video-editing',
    title: 'Freelance Video Editing',
    tagline: 'Turn a laptop and a free trial into a $5K/month service business.',
    category: 'Creative Services',
    categorySlug: 'creative-services',
    startupCost: '$0 \u2013 $300',
    startupCostRange: [0, 300],
    timeToFirstIncome: '1\u20133 weeks',
    skillLevel: 'Beginner',
    revenuePotential: '$2K \u2013 $15K/month',
    difficulty: 'Easy',
    description:
      'Video editing is one of the most in-demand skills online right now. With content creators, brands, and businesses all racing to produce more video, skilled editors are in constant short supply.',
    whatItIs:
      'Freelance video editing means editing video content for clients \u2014 YouTubers, brands, course creators, podcasters, and businesses \u2014 on a per-project or monthly retainer basis. You work remotely, set your own rates, and build recurring income once clients love your work.',
    howItMakesMoney:
      'You charge per video (typically $100\u2013$500 depending on length and complexity) or on a retainer (typically $1,000\u2013$5,000/month for a consistent output). The real money is in landing 3\u20135 ongoing clients who send you work every week.',
    howToGetStarted: [
      'Learn the basics with DaVinci Resolve (free) or CapCut \u2014 both are industry-standard tools you can learn in 2\u20134 weeks via YouTube.',
      'Build a portfolio by editing 3\u20135 videos for free or cheap to get samples. Reach out to small YouTubers (10K\u2013100K subscribers) who post inconsistently.',
      'Create a simple offer: "I edit YouTube videos for busy creators \u2014 $150/video, delivered in 48 hours." Keep the pitch short and the promise clear.',
      'Pitch on Twitter/X, Instagram DMs, YouTube comments, and Upwork. Volume is key \u2014 send 20\u201330 pitches per week until you land your first client.',
      'Deliver exceptional work and ask for referrals. One great client becomes three through word-of-mouth alone.',
    ],
    toolsNeeded: [
      {
        name: 'DaVinci Resolve',
        description: 'Professional editing software with a robust free tier. Industry standard.',
        cost: 'Free',
        url: 'https://blackmagicdesign.com/products/davinciresolve',
      },
      {
        name: 'CapCut',
        description: 'Fast, intuitive editor. Great for short-form content and beginners.',
        cost: 'Free',
        url: 'https://capcut.com',
      },
      {
        name: 'Frame.io',
        description: 'Client review and feedback platform. Dramatically speeds up approval cycles.',
        cost: '$15/month',
        url: 'https://frame.io',
      },
      {
        name: 'Notion',
        description: 'Manage client projects, deadlines, and deliverables in one place.',
        cost: 'Free',
        url: 'https://notion.so',
      },
    ],
    mistakesToAvoid: [
      'Charging too little at the start. Low prices attract bad clients, not good ones. Price based on value, not fear.',
      'Taking every client. Niching down to one type of creator (e.g. business coaches) lets you get faster and charge more.',
      'Working without contracts. Use a simple one-page agreement for every client from day one.',
      'Ignoring retention. Getting a new client costs 5x more than keeping an existing one. Always overdeliver.',
    ],
    relatedHustleSlugs: ['social-media-agency', 'digital-products', 'newsletter-business'],
    tags: ['freelance', 'creative', 'remote', 'beginner-friendly', 'service'],
    featured: true,
    accentColor: '#EC4899',
    publishDate: '2024-03-10',
    readTime: '8 min read',
  },
  {
    id: '2',
    slug: 'newsletter-business',
    title: 'Newsletter Business',
    tagline: 'Build an audience that pays you \u2014 without an algorithm deciding your reach.',
    category: 'Content & Media',
    categorySlug: 'content-media',
    startupCost: '$0 \u2013 $50',
    startupCostRange: [0, 50],
    timeToFirstIncome: '1\u20136 months',
    skillLevel: 'Beginner',
    revenuePotential: '$500 \u2013 $50K+/month',
    difficulty: 'Medium',
    description:
      'Email newsletters are the most durable media business on the internet. No algorithm. Direct access. Owned audience. The right niche newsletter can generate significant revenue through sponsorships, paid subscriptions, or affiliate deals.',
    whatItIs:
      "A newsletter business is a regular email publication \u2014 daily, weekly, or biweekly \u2014 sent directly to subscribers' inboxes. You own your list, control your content, and build deep loyalty that no social platform can take from you. Think Morning Brew, The Hustle, or The Milk Road \u2014 but in your niche.",
    howItMakesMoney:
      'Revenue models include: sponsorships ($20\u2013$50 CPM, meaning per 1,000 subscribers), paid tiers ($5\u2013$15/month), affiliate commissions on recommended products, and selling your own products to a warm audience. A 10,000-subscriber list with 40% open rates can generate $2,000\u2013$8,000/month in sponsorships alone.',
    howToGetStarted: [
      'Pick a specific niche with an audience willing to pay attention: personal finance, local business, a specific hobby, industry news, etc.',
      "Start on Beehiiv (recommended) or ConvertKit \u2014 both have generous free tiers to grow your first 1,000 subscribers without spending a dollar.",
      'Commit to a publishing schedule and don\'t break it. Consistency builds trust. One newsletter a week is plenty to start.',
      'Grow your list: Tweet your best insights, post newsletter snippets on Instagram, use referral programs (Beehiiv has this built in), and cross-promote with other newsletters.',
      'Once you hit 1,000 subscribers, reach out to potential sponsors in your niche directly. You don\'t need 100K subscribers to land your first sponsorship deal.',
    ],
    toolsNeeded: [
      {
        name: 'Beehiiv',
        description: 'Best-in-class newsletter platform built by ex-Morning Brew team. Has referrals, monetization, and analytics built in.',
        cost: 'Free up to 2,500 subscribers',
        url: 'https://beehiiv.com',
      },
      {
        name: 'ConvertKit',
        description: 'Solid alternative with excellent automation and creator-focused features.',
        cost: 'Free up to 10,000 subscribers',
        url: 'https://convertkit.com',
      },
      {
        name: 'Typefully',
        description: 'Write and schedule Twitter/X threads to drive newsletter subscribers.',
        cost: 'Free / $12.50 per month',
        url: 'https://typefully.com',
      },
    ],
    mistakesToAvoid: [
      'Trying to be too broad. "Business news" is saturated. "What operators of $1M\u2013$10M landscaping businesses need to know" is a goldmine.',
      'Quitting before 1,000 subscribers. Growth is slow at the start and fast at the end. Most people quit during the slow part.',
      'Not collecting the email from day one. Even if your newsletter doesn\'t exist yet, start building the list.',
      'Only writing. The best newsletter writers also distribute aggressively across social channels.',
    ],
    relatedHustleSlugs: ['freelance-video-editing', 'digital-products', 'faceless-youtube-channel'],
    tags: ['content', 'writing', 'audience', 'email', 'media'],
    featured: true,
    accentColor: '#7C3AED',
    publishDate: '2024-02-20',
    readTime: '10 min read',
  },
  {
    id: '3',
    slug: 'faceless-youtube-channel',
    title: 'Faceless YouTube Channel',
    tagline: "Make money on YouTube without ever showing your face \u2014 here's the exact playbook.",
    category: 'Content & Media',
    categorySlug: 'content-media',
    startupCost: '$0 \u2013 $200',
    startupCostRange: [0, 200],
    timeToFirstIncome: '3\u20138 months',
    skillLevel: 'Intermediate',
    revenuePotential: '$1K \u2013 $30K+/month',
    difficulty: 'Medium',
    description:
      "Faceless YouTube channels are one of the fastest-growing content formats. By combining voiceovers, stock footage, and smart scripting, creators are building multi-million-view channels \u2014 and serious ad revenue \u2014 without ever appearing on camera.",
    whatItIs:
      'A faceless YouTube channel uses narration, stock footage, AI tools, and strategic topics to generate views and ad revenue without the creator appearing on screen. Popular niches include true crime, finance breakdowns, history, tech reviews, and motivational content. Channels in these niches regularly hit 100K\u20131M subscribers.',
    howItMakesMoney:
      'Primary revenue is YouTube AdSense (typically $2\u2013$8 CPM, or per 1,000 views). At 500K monthly views, that\'s $1,000\u2013$4,000/month just from ads. Add sponsorships, affiliate deals, and merchandise, and channels with engaged audiences earn significantly more. The model scales because you can batch-produce content and bring on editors.',
    howToGetStarted: [
      'Pick a niche that you can produce content in consistently: finance, history, true crime, AI news, productivity. Make sure there are successful channels already in the space \u2014 it proves the audience exists.',
      'Study the top 5 channels in your niche for 2 weeks. Note thumbnail style, video length, title formulas, and comment sections.',
      'Script your first video using a clear structure: hook (first 30 seconds must hook the viewer), story/content, and call to action.',
      'Use ElevenLabs or Murf for voiceovers. Source footage from Pexels, Pixabay, or Storyblocks. Edit in DaVinci Resolve or CapCut.',
      'Publish consistently \u2014 1\u20132 videos per week minimum. The algorithm rewards channels that post regularly. Most channels take 3\u20136 months to hit monetization (1,000 subscribers + 4,000 watch hours).',
    ],
    toolsNeeded: [
      {
        name: 'ElevenLabs',
        description: 'AI voiceover tool that generates realistic, natural-sounding narration.',
        cost: 'Free / $5\u2013$22 per month',
        url: 'https://elevenlabs.io',
      },
      {
        name: 'DaVinci Resolve',
        description: 'Free professional editing software. Used by industry pros worldwide.',
        cost: 'Free',
        url: 'https://blackmagicdesign.com',
      },
      {
        name: 'Pexels / Pixabay',
        description: 'Free stock footage libraries with thousands of HD and 4K clips.',
        cost: 'Free',
        url: 'https://pexels.com',
      },
      {
        name: 'VidIQ',
        description: 'YouTube SEO tool to find high-traffic, low-competition video topics.',
        cost: 'Free / $7.50 per month',
        url: 'https://vidiq.com',
      },
    ],
    mistakesToAvoid: [
      'Picking a niche you\'ll burn out on. You\'re making 50+ videos. Make sure you actually enjoy the topic.',
      'Weak thumbnails. On YouTube, the thumbnail is an ad for your video. Invest time here or pay a designer.',
      'Ignoring audience retention. YouTube ranks videos based on how long viewers watch. A 70%+ retention rate is excellent.',
      'Giving up at 10 videos. Most successful faceless channels found traction at video 30\u201360. Persistence wins.',
    ],
    relatedEpisodeSlug: 'bob-sharpe-youtube-income',
    relatedHustleSlugs: ['newsletter-business', 'digital-products', 'freelance-video-editing'],
    tags: ['youtube', 'content', 'passive', 'media', 'faceless'],
    featured: true,
    accentColor: '#EF4444',
    publishDate: '2024-01-15',
    readTime: '9 min read',
  },
  {
    id: '4',
    slug: 'print-on-demand',
    title: 'Print on Demand',
    tagline: 'Design once. Sell forever. No inventory, no warehouse, no risk.',
    category: 'E-Commerce',
    categorySlug: 'ecommerce',
    startupCost: '$0 \u2013 $100',
    startupCostRange: [0, 100],
    timeToFirstIncome: '2\u20138 weeks',
    skillLevel: 'Beginner',
    revenuePotential: '$500 \u2013 $20K/month',
    difficulty: 'Easy',
    description:
      'Print on demand lets you sell custom-designed merchandise \u2014 t-shirts, mugs, hoodies, phone cases, wall art \u2014 without ever touching inventory. When someone orders, a third-party company prints and ships directly to the customer.',
    whatItIs:
      'Print on demand (POD) is an e-commerce model where you upload designs to a platform (Printful, Printify, Redbubble), list them in your store or marketplace, and earn the margin between the retail price and the base print cost. When a customer orders, the POD company handles printing and shipping entirely.',
    howItMakesMoney:
      'You set your retail price above the base cost. A t-shirt that costs $12 to print and ship can sell for $28\u2013$35, netting you $16\u2013$23 per sale. Volume is the game \u2014 a store with 5 sales per day averages $2,400\u2013$3,500/month in profit. Top POD sellers on Etsy generate $10K\u2013$80K/month from well-positioned niche stores.',
    howToGetStarted: [
      'Pick a profitable niche. The key is specificity: "nurse humor," "beekeeping lifestyle," "dog mom gifts," or "small business owner quotes" all outperform generic designs.',
      'Create designs using Canva (free), Adobe Illustrator, or hire designers on Fiverr for $5\u2013$30 per design. You don\'t need to be an artist.',
      'Sign up for Printful or Printify and connect to your Etsy shop or Shopify store. List your first 10\u201320 products.',
      'Optimize your Etsy listings with strong keywords, multiple product mockups, and competitive pricing.',
      'Study best-sellers in your niche using Everbee or Marmalead to understand what designs and products are actually generating sales.',
    ],
    toolsNeeded: [
      {
        name: 'Printify',
        description: 'Best pricing and largest catalog. Connects to Etsy, Shopify, and more.',
        cost: 'Free / $29/month for Premium (recommended)',
        url: 'https://printify.com',
      },
      {
        name: 'Canva Pro',
        description: 'Design tool with thousands of templates and a simple learning curve.',
        cost: 'Free / $13/month Pro',
        url: 'https://canva.com',
      },
      {
        name: 'Everbee',
        description: 'Etsy research tool to find profitable niches and spy on competitors.',
        cost: 'Free / $8/month',
        url: 'https://everbee.io',
      },
      {
        name: 'Etsy',
        description: 'Largest marketplace for POD products with 100M+ buyers.',
        cost: '$0.20 per listing',
        url: 'https://etsy.com',
      },
    ],
    mistakesToAvoid: [
      'Creating generic designs. "Coffee lover" mugs compete with millions of listings. "ICU nurse who runs on caffeine and chaos" mugs sell.',
      'Neglecting mockup quality. Professional-looking mockups are the difference between a click and a scroll.',
      'Underpricing. Many beginners underprice and kill their margins. Research competitor pricing and price at the higher end of the range.',
      'Only listing on one platform. Cross-list to Etsy, Redbubble, and your own Shopify store to maximize exposure.',
    ],
    relatedHustleSlugs: ['digital-products', 'dropshipping', 'newsletter-business'],
    tags: ['ecommerce', 'passive', 'design', 'etsy', 'beginner-friendly'],
    featured: false,
    accentColor: '#0EA5E9',
    publishDate: '2024-01-28',
    readTime: '8 min read',
  },
  {
    id: '5',
    slug: 'social-media-agency',
    title: 'Social Media Management Agency',
    tagline: 'Small businesses are drowning in content needs. Step in and get paid.',
    category: 'Services & Consulting',
    categorySlug: 'services-consulting',
    startupCost: '$0 \u2013 $500',
    startupCostRange: [0, 500],
    timeToFirstIncome: '2\u20134 weeks',
    skillLevel: 'Intermediate',
    revenuePotential: '$3K \u2013 $30K/month',
    difficulty: 'Medium',
    description:
      'Social Media Management Agencies (SMMAs) help local businesses and brands manage their social presence. You handle the strategy, content creation, and posting \u2014 they focus on running their business.',
    whatItIs:
      'An SMMA is a service business where you manage social media accounts for clients \u2014 creating content, writing captions, scheduling posts, engaging with followers, and reporting on performance. You can start solo and scale by bringing in contractors as you grow.',
    howItMakesMoney:
      'Monthly retainers are the standard model. Entry-level packages start at $500\u2013$1,000/month. Established agencies charge $2,500\u2013$10,000+/month per client. Landing just 5 clients at $1,500/month generates $7,500/month in recurring revenue \u2014 life-changing for most people.',
    howToGetStarted: [
      'Identify your target client: local restaurants, real estate agents, dentists, gyms, and coaches all need consistent social content but rarely have the time.',
      'Build a portfolio by offering 30-day free or discounted trials to 2\u20133 local businesses. Document the results meticulously.',
      'Create tiered service packages: Basic ($500/month: 12 posts, no ads), Standard ($1,500/month: daily posting + story content), Premium ($3,000/month: full management + paid ad strategy).',
      'Reach clients through cold DMs, cold email, local networking events, LinkedIn, and asking for referrals. One good referral partner (like a web designer) can send you multiple clients per month.',
      'Use Notion or ClickUp to manage client workflows. Use Metricool or Later for scheduling and reporting.',
    ],
    toolsNeeded: [
      {
        name: 'Metricool',
        description: 'Schedule, analyze, and report on social media accounts across all platforms.',
        cost: 'Free / $18/month',
        url: 'https://metricool.com',
      },
      {
        name: 'Canva Pro',
        description: 'Create on-brand content quickly for multiple clients.',
        cost: '$13/month',
        url: 'https://canva.com',
      },
      {
        name: 'ClickUp',
        description: 'Project management for client deliverables, content calendars, and deadlines.',
        cost: 'Free',
        url: 'https://clickup.com',
      },
      {
        name: 'HubSpot CRM',
        description: 'Track leads and manage client relationships as your agency scales.',
        cost: 'Free',
        url: 'https://hubspot.com',
      },
    ],
    mistakesToAvoid: [
      'Working without contracts. A clear contract protects both you and the client. Use one every time.',
      'Undercharging. $500/month sounds like a lot until you realize managing a client takes 20+ hours/month. Price accordingly.',
      'Saying yes to every niche. Specializing in one industry (e.g., restaurants, real estate) makes you far easier to market and charge more for.',
      'Trying to manage 10 clients solo. Hire a junior content creator or virtual assistant once you hit $5K/month in recurring revenue.',
    ],
    relatedEpisodeSlug: 'jake-tilk-instagram-digital-marketing',
    relatedHustleSlugs: ['freelance-video-editing', 'newsletter-business', 'digital-products'],
    tags: ['agency', 'services', 'social media', 'client work', 'scalable'],
    featured: true,
    accentColor: '#10B981',
    publishDate: '2024-02-05',
    readTime: '9 min read',
  },
  {
    id: '6',
    slug: 'digital-products',
    title: 'Selling Digital Products',
    tagline: 'Package what you know into files that sell while you sleep.',
    category: 'Digital Products',
    categorySlug: 'digital-products',
    startupCost: '$0 \u2013 $150',
    startupCostRange: [0, 150],
    timeToFirstIncome: '1\u20134 weeks',
    skillLevel: 'Beginner',
    revenuePotential: '$1K \u2013 $100K+/month',
    difficulty: 'Easy',
    description:
      'Digital products \u2014 templates, ebooks, courses, spreadsheets, presets, and guides \u2014 are the highest-margin business model on the internet. You create them once and sell them infinitely with zero additional cost.',
    whatItIs:
      'A digital product is any file-based asset that delivers value to a buyer: a Notion template, a spreadsheet, a PDF guide, a Canva template pack, a Lightroom preset, an email swipe file. Once created, it lives in a marketplace or your own store and generates passive income with no inventory or shipping.',
    howItMakesMoney:
      'Products typically sell for $9\u2013$997+ depending on the depth and transformation offered. A $27 Notion template that generates 5 sales per day nets $3,645/month. A $297 business toolkit that sells 20 copies/month nets $5,940/month. Because margins are 95%+, even modest sales generate meaningful income.',
    howToGetStarted: [
      'Identify what you know that others want to learn or what systems/tools others want access to. Think: skills from your job, a system you built, or a process you\'ve refined.',
      'Create your first product using tools you already have: Notion, Canva, Google Sheets, or a simple PDF. Keep it focused and high-quality.',
      'List on Gumroad, Lemon Squeezy, or Etsy. Set up a simple product page with a clear value proposition, mockups, and testimonials (if available).',
      'Promote through social media, especially Twitter/X and TikTok where product creators build audiences quickly. Share behind-the-scenes, tutorials, and proof of results.',
      'Collect emails of buyers and non-buyers. Your list is the most valuable asset you own \u2014 it\'s how you launch your next product to an already warm audience.',
    ],
    toolsNeeded: [
      {
        name: 'Gumroad',
        description: 'The simplest way to sell digital products online. Zero upfront cost.',
        cost: '10% transaction fee (free plan)',
        url: 'https://gumroad.com',
      },
      {
        name: 'Lemon Squeezy',
        description: 'Handles payments, VAT, and licensing. Better for global sales.',
        cost: '5% + $0.50 per transaction',
        url: 'https://lemonsqueezy.com',
      },
      {
        name: 'Canva',
        description: 'Create professional ebooks, guide PDFs, and template packs.',
        cost: 'Free / $13/month Pro',
        url: 'https://canva.com',
      },
      {
        name: 'Notion',
        description: 'Build Notion templates and dashboards that customers duplicate into their workspaces.',
        cost: 'Free',
        url: 'https://notion.so',
      },
    ],
    mistakesToAvoid: [
      'Making products nobody asked for. Validate first \u2014 look at what people are already buying on Gumroad, Etsy, or Twitter.',
      'Underpricing. A $7 product and a $47 product take the same time to make. Price for the value delivered, not the file size.',
      'Only listing and waiting. Distribution is the business. Promote aggressively, especially at launch.',
      'Skipping the email list. Every buyer should go on your list. Your next launch will generate 30\u201350% of its revenue from existing customers.',
    ],
    relatedHustleSlugs: ['newsletter-business', 'faceless-youtube-channel', 'print-on-demand'],
    tags: ['passive income', 'digital', 'templates', 'ebook', 'beginner-friendly'],
    featured: false,
    accentColor: '#F59E0B',
    publishDate: '2024-03-01',
    readTime: '8 min read',
  },
  {
    id: '7',
    slug: 'dropshipping',
    title: 'Dropshipping',
    tagline: 'Run an e-commerce store without touching a single product.',
    category: 'E-Commerce',
    categorySlug: 'ecommerce',
    startupCost: '$200 \u2013 $1,000',
    startupCostRange: [200, 1000],
    timeToFirstIncome: '2\u20136 weeks',
    skillLevel: 'Intermediate',
    revenuePotential: '$1K \u2013 $50K+/month',
    difficulty: 'Medium',
    description:
      'Dropshipping is an e-commerce model where you sell products you never stock. When a customer orders, your supplier ships directly to them. Your job is marketing, branding, and customer experience.',
    whatItIs:
      'You build a Shopify store, source products from suppliers on DSers or AutoDS, set your retail price higher than the supplier cost, run ads or SEO to drive traffic, and keep the margin when orders roll in. The business lives or dies on your ability to find winning products and profitable marketing channels.',
    howItMakesMoney:
      'Typical margins range from 20\u201350%. A product that costs $8 from your supplier might sell for $29.99, netting $21.99 before ad spend. Once you find a winning product and nail your cost per acquisition (CPA) on Meta or TikTok ads, the business scales fast. Many dropshippers run $50K\u2013$500K/month in revenue at steady-state margins of 15\u201330%.',
    howToGetStarted: [
      'Research winning products using tools like Minea, AdSpy, or TikTok\'s Creative Center. Look for products with clear pain points, visual demonstrations, and a "wow factor."',
      'Build your Shopify store with a professional theme (Dawn is free and excellent). Brand it properly \u2014 name, logo, color palette.',
      'Source from AliExpress via DSers, or US-based warehouses via AutoDS for faster shipping.',
      'Run TikTok organic or paid ads to test products quickly. Start with $20\u2013$50/day on ads and cut fast if it\'s not working.',
      'When a product shows profitability (positive ROAS after 3\u20135 days of testing), scale your ad spend aggressively.',
    ],
    toolsNeeded: [
      {
        name: 'Shopify',
        description: 'The best e-commerce platform for dropshipping. Integrates with everything.',
        cost: '$39/month',
        url: 'https://shopify.com',
      },
      {
        name: 'DSers',
        description: 'AliExpress dropshipping tool for order automation and supplier management.',
        cost: 'Free / $19.90/month',
        url: 'https://dsers.com',
      },
      {
        name: 'Minea',
        description: 'Product and competitor ad research tool. Find winning products faster.',
        cost: '$49/month',
        url: 'https://minea.com',
      },
    ],
    mistakesToAvoid: [
      'Selling generic products with no differentiation. Branding is everything \u2014 people pay for confidence and experience, not just a product.',
      'Expecting passive income from the start. Dropshipping requires active management of ads, suppliers, and customer service.',
      'Using slow AliExpress shipping without being transparent about delivery times. This is the #1 cause of chargebacks.',
      'Not building an email list. Retargeting and email marketing are where the real margins are. Set these up from day one.',
    ],
    relatedEpisodeSlug: 'peter-pru-dropshipping-empire',
    relatedHustleSlugs: ['print-on-demand', 'digital-products', 'social-media-agency'],
    tags: ['ecommerce', 'shopify', 'ads', 'product', 'scalable'],
    featured: false,
    accentColor: '#0EA5E9',
    publishDate: '2024-02-12',
    readTime: '10 min read',
  },
  {
    id: '8',
    slug: 'amazon-fba',
    title: 'Amazon FBA',
    tagline: "Let Amazon's logistics empire work for your brand.",
    category: 'E-Commerce',
    categorySlug: 'ecommerce',
    startupCost: '$2,000 \u2013 $10,000',
    startupCostRange: [2000, 10000],
    timeToFirstIncome: '3\u20136 months',
    skillLevel: 'Advanced',
    revenuePotential: '$5K \u2013 $200K+/month',
    difficulty: 'Hard',
    description:
      "Amazon FBA (Fulfillment by Amazon) lets you sell physical products on Amazon's marketplace while Amazon handles storage, packing, and shipping. It's a higher-capital business with outsized potential returns.",
    whatItIs:
      "You source a private-label product (usually from China via Alibaba), ship inventory to Amazon's warehouses, and Amazon lists, stores, and ships the product when it sells. You manage the listing, PPC ads, reviews, and brand positioning. Amazon handles the rest.",
    howItMakesMoney:
      "Successful FBA sellers target 25\u201340% net margins. A product that retails for $35 might cost $8 to manufacture, $4 to ship to Amazon, and $7\u2013$10 in Amazon fees \u2014 leaving $13\u2013$16 in profit per unit. At 200 units sold per month, that's $2,600\u2013$3,200/month from one SKU. Scale to 5 products and you have a serious business.",
    howToGetStarted: [
      "Research products using Helium 10 or Jungle Scout. Look for products with $10K\u2013$50K/month in category sales, fewer than 300 reviews in top listings, and a potential retail price of $25\u2013$60.",
      "Find manufacturers on Alibaba. Order 3\u20135 sample units from shortlisted suppliers. Negotiate on price only after validating quality.",
      "Create your Amazon Seller Central account and your private label brand. Get a professional product logo, packaging design, and A+ content from day one.",
      "Ship your first order to an Amazon FBA warehouse. Plan for 3\u20135 months from order placement to first sale.",
      "Launch with a keyword-targeted PPC campaign and an initial review-generation strategy (email sequences via Jungle Scout). Rank, review, and repeat.",
    ],
    toolsNeeded: [
      {
        name: 'Helium 10',
        description: "All-in-one Amazon seller suite: product research, keyword tracking, listing optimization.",
        cost: "$39\u2013$229/month",
        url: "https://helium10.com",
      },
      {
        name: 'Alibaba',
        description: "Largest marketplace to find and vet Chinese manufacturers for private label products.",
        cost: "Free",
        url: "https://alibaba.com",
      },
      {
        name: 'Amazon Seller Central',
        description: "Your seller dashboard for listings, inventory, PPC campaigns, and payouts.",
        cost: "$39.99/month",
        url: "https://sellercentral.amazon.com",
      },
    ],
    mistakesToAvoid: [
      "Choosing a product you like vs. one the data supports. Emotion kills FBA businesses.",
      "Under-capitalizing. You need enough inventory to never go out of stock. Stockouts destroy rankings.",
      "Ignoring listing quality. Your title, bullets, images, and A+ content are your sales pitch to millions of shoppers.",����X���[�[���܈[�Y\ˈ[X^�ۈZ�\�MIH�Y�\��[
���H�Y\�
��ܘY�K�[�[[�\��YHX\��[��Y�ܙH[�Hܙ\�[��[�ܞK���K��[]Y\\��T�YΈ	�ܚ\�[�[���[�\�X[X^�ۋY��I���[]Y\�T�Y�Έ�����\[���	��[�[ۋY[X[�	�	�Y�][\��X���K�Y�Έ��[X^�ۉ�	٘�I�	�X��[Y\��I�	�\�X�[��X���	�Y�[��Y	�K��X]\�Y��[�K�X��[���܎�	�эNQL���X�\�]N�	̌�L�L
I���XY[YN�	�LHZ[��XY	��K����KKH�]�\�\����H�X[��\�\\��\�KKB��Y�	�I���YΈ	ܙX[Y\�]K\�[�[���]N�	ԙ[�[��\�H[��\�[����Y�[�N�	НZ[Hܝ��[�]^\�[�H]�\�H[۝�[H[�H�Y\����]Y�ܞN�	ԙX[\�]H	�[��\�[�����]Y�ܞT�YΈ	ܙX[Y\�]I���\�\����	�
KL�L�	�	���\�\����[��N��L�K�[YUњ\��[���YN�	�WL�L��[۝�����[]�[�	�[�\�YYX]I���]�[�YT�[�X[�	�R�L�L�	
L���[۝	��Y��X�[N�	�YY][I��\�ܚ\[ێ��	ԙ[�[��\�H[��\�[��\�ۙHوH�\�[�[���[XX�H]���[�[��X[[�\[�[��K�[�H�^H��\�Y\��[�[H�[�[��[���X�HY��\�[��H�]�Y[�[�\�[���YH[�^[��\�\��\����L�M[۝Y�\�[۝YX\�Y�\�YX\�����]]\΂�	ԙ[�[��\�H[��\�[��YX[��\��\�[���\�Y[�X[܈�X[��[Y\��X[��\�Y\�[��[�[��[H�[�[�ˈH[���YH�ݙ\��[�\�[ܝ�Y�H[�^[��\�[�H�\�\�\�[�\��\���ˈݙ\�[YK[�[��^H�ۈ[�\�[ܝ�Y�H�[HH��\�H\�X�X]\�L�MܙX][��\]Z]H[�H�[��Z[��\������]XZ�\�[ۙ^N��	�H��\�H�[�\�][��	K�[۝[��[��]H	K��[۝[ܝ�Y�H[�	�[�^[��\��]�	
�[۝�\���ˈ]L�X���\�Y\�]\�	
�[۝[�\��]�H[���YK�H�������]Y�H
�^K�ZX��[��Y�[�[��K�\X]
H]�[�H�X�X�HH�[YH�\][[��][\H��\�Y\��]�]�ۜ�[�H�YY[����\��ۈ^[Y[�[ۙ^K�������]�\�Y�	��\��]�\�HX��[�Έ�^HH\^܈�X[][KY�[Z[K]�H[�ۙH[�][��[�H�\�ˈ\��ݙ\��[�\�[ܝ�Y�H[�XX�\�[�H[�ܙ[���]Z[�[X[�\�ˉ��	��]�KX\�ݙY�܈H[ܝ�Y�H�Y�ܙH[�H�\����[��]��\�Y\ˈۛ��[�\��^Z[����\�[��]�[X�\���YY��ܚ��܈��]]�H�\���ˉ��	ԝ[�H�[X�\��ۈ]�\�HX[�\��]��\�Y\��\�H[۝H�[�\�]X\�IHوH\��\�H�X�H
HIH�[JH\�H]ZX���[\����	НZ[HX[N�H�X[\�]HY�[����ܚ���][��\�ܜ�H��\�H[��X�܋H�X[\�]H]ܛ�^K[�H��\�HX[�Y�\�ۘ�H[�H��[H\��L�L�H[�]ˉ��	��ۜ�Y\���\�HX[�Y�[Y[����HH�\��H���X[�Y�\�����L�L�L�Hو[۝H�[�[�\��ܝ]�\�H�\��܈[�\��[�]H[�[YH��YY�K���K���әYYY��[YN�	֚[����X[܋���I��\�ܚ\[ێ�	���\�H�X\��]�ܛ\��]�[�[\�[X]H����܈]ZX���\����[�[\�\ˉ������	ќ�YI��\��	�΋�ޚ[�˘��I��K��[YN�	�X[�X����\�ܚ\[ێ�	ԙX[\�]H[��\�Y[�[�[\�\�\�܈]ZX���\����[���H�[�[][ۜˉ������	ќ�YH�	K�NK�[۝	��\��	�΋��X[�X�˚[���K��[YN�	��\��I��\�ܚ\[ێ�	ќ�YHܝ��[��X��[��[�X���[�[�����Z[�X�Y�X�[H�܈[�ܙˉ������	ќ�YI��\��	�΋���\��K���I��K��[YN�	�\���[�[�	��\�ܚ\[ێ�	�[�[��ܙY[�[���[���X�[ۋ[�X\�HX[�Y�[Y[�]�ܛK�������	ќ�YH�܈[�ܙ���\��	�΋��\���[�[����I��K�K�Z\�Z�\��]��Y�	Н^Z[���܈\�X�X][ۈ[��XYو�\���ˈY�H��\�H�\����\������]]�H���H^HۙK[�H\�H�X�[][����[��\�[�ˉ��	���\[��[�[��ܙY[�[�ˈۙH�Y[�[��[����[ܙH[�[XY�\�[�Y�[�Y\�[�L�[۝�و�[���ܙY[�Y�ܙ\��]�[H[�Y�[K���	�[�\�\�[X][��XZ[�[�[��H���ˈ�Y�]
WL�L�L	Hو[��X[�[��܈�\Z\��[�XZ[�[�[��HL�M]�[\[����	�ݙ\�[]�\�Y�[�����\����[[���]��]X�X�[���]H�\�\��HܙX]\�H��Y�[Hܝ��[�ۙH�Y[۝�[�ܘX�ˉ��K��[]Y\\��T�YΈ	�\�[�ZZ[�\�\�X[Y\�]I���[]Y\�T�Y�Έ��[ؚ[KZ�YKZ[��\�[���	ܙX[Y\�]KY]�[�Y[�	�	�\��X�\�\�[�[	�K�Y�Έ�ܙX[\�]I�	�\��]�H[���YI�	ܙ[�[��	�[��\�[���	��\�����K��X]\�Y��YK�X��[���܎�	��M�L�I��X�\�]N�	̌�LL
I���XY[YN�	�LZ[��XY	��K�Y�	�L	���YΈ	�\��X�\�\�[�[	��]N�	�\���\��[�[�\�[�\����Y�[�N�	�\��[�\��\�L�M܈H�Y]L�M[��H[۝H�\����XX�[�K����]Y�ܞN�	ԙX[\�]H	�[��\�[�����]Y�ܞT�YΈ	ܙX[Y\�]I���\�\����	�
KL�L�	�	���\�\����[��N��L�K�[YUњ\��[���YN�	̗L�L��YZ������[]�[�	ЙY�[��\����]�[�YT�[�X[�	�
LL�L�	L���[۝	��Y��X�[N�	�X\�I��\�ܚ\[ێ��	�\��\�HZ\����و�\�ˈ[�H\�[�\��ZX�H
܈�ZX�\�HۈH]�ܛK�][�\��ۈ�]\�[�X\���[�[[���YH�[��Y\�����ˈH�\��\�]ܜ�\��H�[��H�\�[��H�ٚ]X�H\��]L�M[���[H[��H�[�Y]�\�[�\�ˉ���]]\΂�	�\��\�HY\�]�\Y\��\��\�[��X\��]X�H�\�H�ZX�H�ۙ\���[�Z\��\����\�Y�YY�Y\���HH^H܈�YZˈ[�H�][�\��ۈ�X�[��]�Z[X�[]K[�X��\�[\ˈ\��[�\�^[Y[����\��[��[��ݚY\�H�\�[[�H]�[و[��\�[��H�ݙ\�Y�K�[�\��؈\���Y\H�\���X[�]�Z[X�K[��[\�]�Y]�Y�����]XZ�\�[ۙ^N��	�H�[XX�H�Y[�\�Y]	
LL�L�
��^H�]
�	H][^�][ۈX\���	K
LL�L�K

��[۝ܛ��ˈY�\�\��	���YH
�L�L�	JK[��\�[��KXZ[�[�[��K[��X[�[��^X�	
L�L��[۝�]\��ZX�K���[H�
H�ZX�\�[�[�H\�H���[��]	�L�L�
�[۝�^\�H�ZX�\��[�X\��	MLL�L�
L�^H�]]�H��\�][^�][ۈ[�Y�\�XZ[�[�[��H�\�ˉ������]�\�Y�	�\�H�ZX�H[�H[�XYH�ۈ
܈�^HۙH�X�Y�X�[H�܈\��K�X�ۛ�^H�\��Z�H�[�H�[\�KۙH�]�X�[�][�ZH[[��HX\��H[���ۜ�\�[�HYH�Y�[X[�[���XZ[�[�[��H���ˉ��	�ܙX]HH]Z[Y\�[���]�ٙ\��[ۘ[���X��\�]H\�ܚ\[ۜ�[��X\�X��\[���X�[ۜˈ�\��[\�\��[ۜ��]�H����[���]\ˉ��	��]��\]]]�H�X�[��\�[��\��	��[�[ZX��X�[����[�Y�\�X[�X[H�\�Yۈ��[]�[���X\�ۜ�[�[X[�]\��ˉ��	�[]�\�^�\[ۘ[�Y\�^\�Y[��\Έ�X[��\����\��[][�X�][ۋ[�\��KY��YHX��\�[�\��\��L�]�Y]���]H�Z�X�ܞH�܈[�\�[�\�H\���\�Y\����	���[H�H�Z[��\�[���ٚ]�[��H�X�ۙ�ZX�Hۘ�H[�\��\��\��ۜ�\�[�H�ٚ]X�K�X[�H�\������\�]H�Y]�و
WL�L�MH�ZX�\ˉ��K���әYYY��[YN�	�\����\�ܚ\[ێ�	�H]�ܛH]�[��[�\�[����[��^[Y[�[��\�X�[��\�[��K�������	ќ�YH�\���L�L�	H]�ܛH�YI��\��	�΋��\�˘��I��K��[YN�	ђV	��\�ܚ\[ێ�	�Б��ZX�HX[[ۚ]܈][\��[�H�XZ[�[�[��H\��Y\��Y�ܙH^H�X��YH��XZ��ۜˉ������	�NK�NH]�X�H
�\	��\��	�΋�ٚ^\���I��K��[YN�	ԙ[^I��\�ܚ\[ێ�	Н\�[�\���[��[��X���[��]�X�XX���[��\��X��܈�X��[��[���YH\��ZX�K�������	ќ�YI��\��	�΋�ܙ[^Y�K���I��K�K�Z\�Z�\��]��Y�	���\[����\�[��\�[��K�\��	��[��YY��X�[ۈ\�����\�Z[��]�K�[�\��[�^X�H�]\��ݙ\�Y�Y�ܙH[�H\����	��\�[���]H^\�H�ZX�K�H^�HZ[H�]H�\�[H��\[��]\��܈��\�][^�][ۋY�\��\Z\�����[�H��\��و��[��\���]�[��H	
���\����	�Yۛܚ[���]�Y]�ˈ[�\�\���][��\�[�\�[�\�H�\�[�\���\]][ۋ�؜�\��ݙ\��Y\�^\�Y[��H���H^HۙK���	�\�[��H�ZX�H�]YX�[�X�[\��Y\ˈۙH��XZ��ۈۈH�Y\��\�[��\�[[�H�Y�]�Y]�H�Z[K[�H���]�\\��][۝�و�ٚ]���K��[]Y\\��T�YΈ	��Y�[�[X\�]X\�]\�����[]Y\�T�Y�Έ�ܙX[Y\�]K\�[�[��	�[ؚ[KZ�YKZ[��\�[���K�Y�Έ��\���	��\���	�\��]�H[���YI�	ܙ[�[	�	�\��]X�\�Y	�K��X]\�Y��[�K�X��[���܎�	��PMQNI��X�\�]N�	̌�L
LMI���XY[YN�	�Z[��XY	��K�Y�	�LI���YΈ	��X��[��X�\�[�\����]N�	��X��[���\�[�\����Y�[�N�	�ۙH�X��H�[�H�Y��۝�X��L�MH
�Y�Y�\�H��ZY��\�[�\��\��Z[���H^X�H]����]Y�ܞN�	��\��X�\�	��ۜ�[[�����]Y�ܞT�YΈ	��\��X�\�X�ۜ�[[�����\�\����	�LL�L�	
�	���\�\����[��N��L
�K�[YUњ\��[���YN�	�WL�L��[۝�����[]�[�	�[�\�YYX]I���]�[�YT�[�X[�	�
R�L�L�	����[۝	��Y��X�[N�	�\�	��\�ܚ\[ێ��	��X��[��\�ۙHوH[��[�\��]Y�\�[�\���ܝ[�]Y\�[�[Y\�X�K�H��[��H�[��ۈ��ZY�H[X[��]�\����[�H�\��Y\��[��H\�H�X��H�[�H�[[�ۙ\����[��[[ܛ�\��ܚ�][��[�HYۛܙK����]]\΂�	�H�X��[���\�[�\���\��\�[��ۙ\�[�\�]܎�[�H�ۈ܈X\�HH��[Y\��X[�X��؝Z[�[�\��ۈ]]ܚ]H
P��[X�\�K[�][��ZY��܈�\\��܈��ZY�����\�ˈ\�[�H��[K[�H\�H�]�\��Y[ܙH�X���[��[��][ۈ���H�\�]܈��\�[�\���ۙ\�L�MX[�Y�[��H�Y]�[HH�X����[�\�]H�]�[�YK�����]XZ�\�[ۙ^N��	��ۙ\�[�\�]ܜ�ܛ���	MLL�L��L�YX\�[��]�[�YK�][��	
�WL�L�LY�\�^[��\ˈYH�X�ۙ�]�\�[�H�X�ۙ�X��[�[�\��]Y��X�]�[H�X�\��[H[�\�\��ۘ[�]�[��[YH�YX�\ˈ]
H�X����][\�YY�]�\��H�[\�[��\�][ۈ�[�\�]\�	
L
�[�ܛ����]�[�YH�]MWL�L̍IH�]X\��[�ˉ������]�\�Y�	�؝Z[�[�\���[Y\��X[�]�\�	��X�[��H
�
K���Z[�[����ܘ[\��[��L�L��YZ��[����	�L�L�L���YH�\��Y\��ٙ�\�ZY��Z[�[��[�^�[��H�܈H�]�[����[Z]Y[����	��][�\��ۈ]]ܚ]N��Y�\�\��]H�P��K؝Z[�[�\�P��[X�\�[��X�\�HXX�[]H[��\�[��H
	
KL�L�L�YX\�H[��\���[��\�[��K���	њ[�[��H[�\��\���X�ˈ�]��X������	L�L�L�ML�ˈ\�Y�X����[��HX�]Z\�Y�܈	�L�L��[�\���X�X[^�H[���[Y\��X[�X��[��\]Z\Y[�L�M�YZ�[H�]���	њ[��Y���Y���ZY�����\��
U�X�������K�۝��JH[�[[�H�Z[\�X��\\��[][ۜ�\ˈ����\��Y��][�H[ݚ[��[[YYX][H�[H[�H]�[�[�\��]�ܚˉ��	��]�H�X\��[�\�H���[K��[�L�L�L�N[۝�[�\��[�[��H�\�[�\�����HH�X�[��\�[X]^�H[�\�H[�\��\���]�\����K���әYYY��[YN�	�U�Y��\�	��\�ܚ\[ێ�	�H\��\���ZY�X\��]X�K�\��[�X[�܈�[�[���Y�\�H�]��\��Y\��������	�

WL�L���[۝	��\��	�΋��]���I��K��[YN�	��Y\�X��[�
[�]�JI��\�ܚ\[ێ�	�[X��ۚX����[��]�X�H
S
H�܈�P��H��\X[��H[��Y]�X��[�ˉ������	��WL�L�

K�[۝\��X����\��	�΋����[�]�K���I��K��[YN�	�U����\�ܚ\[ێ�	��X��[��\�X�Y�X�X���[�[��[�^�\��X�H][�\��ۙ\�[�\�]܈�����Y\[�ˉ������	�
�WL�L�M�K�[۝	��\��	�΋��]�˘��I��K�K�Z\�Z�\��]��Y�	�Yۛܚ[���P��H��\X[��K�H�\�[�\��[�][ۈ�[��\�[[�[��][ً\�\��X�Hܙ\���Y�[][ۜ�\�H�ۋ[�Y��XX�K���	�[�\�X�\][^�[�ˈ�]��ۙ\�[�\�]ܜ�ٝ[�[�\�\�[X]H�Y[[��\�[��K[�XZ[�[�[��H���ˈ]�H�[۝�و�\�][��^[��\�[��\�\��K���	ԙ[Z[����[Hۈ���Y��ܙ]�\������\��Y�\�H�[�H��\��]\�X��\\��۝�X��\�H��[�H�Z[�YX�X�H[���YH[��]\�X\��[�ˉ��	���[[�����\��Y�ܙH�\�[\�^\��Y[���X����]�]��\�\�]�X���[�[��[��]�\�X[�Y�[Y[�ܙX]\��[��]\���\�X\��[�ˉ��K��[]Y\\��T�YΈ	�\��]\�Y�]\�]�X��[��Y[\\�I���[]Y\�T�Y�Έ�ܙX[Y\�]K\�[�[��	�\��X�\�\�[�[	�K�Y�Έ���X��[���	���\�X���	��	�	ٜ�ZY�	�	ٛY]	�K��X]\�Y��[�K�X��[���܎�	���
�M����X�\�]N�	̌�L
LI���XY[YN�	�LHZ[��XY	��K�Y�	�L����YΈ	٘\�[ۋ\�[[��X�\�[�\����]N�	�\��ۘ[�[[���\�[�\����Y�[�N�	�\��HܙX]^YH�܈�[H[��H�[Z][H�\��X�H[�H^H�܈[۝Y�\�[۝����]Y�ܞN�	�ܙX]]�H�\��X�\����]Y�ܞT�YΈ	�ܙX]]�K\�\��X�\����\�\����	�L�L�	
L	���\�\����[��N��
LK�[YUњ\��[���YN�	̗L�L͈�YZ������[]�[�	ЙY�[��\����]�[�YT�[�X[�	���L�L�	MR���[۝	��Y��X�[N�	�X\�I��\�ܚ\[ێ��	�\��ۘ[�[[��\�HY�]�\�Y�\�][�[ۈ�\��X�H�\�[�\��]�\]Z\�\���[��[�ܞH[�����][ۋ�Y�[�H]�H[�^YH�܈�\�[ۈ[�HX�[]H�[�\��[��]XZ�\�H\��ۈ�Y[�ۙ�Y[��Y[���[^H[�H�[L�M[��Y\��Z[���X�ˉ���]]\΂�	�H\��ۘ[�[[���\�[�\��[����\�[[���Y[���Z[Y]܈�[�ٛܛHZ\��\��ؙ\ˈ�\��X�\��[��H���HۙK][YH���]]Y]��[۝H��[���\��ۙ��[���\��ؙHX[�Y�[Y[��]Z[�\�ˈ�[\���ܚ��]^X�]]�\���Y\��]�[�\�[��\�[�]\��[�[�[ۙH�]�Y�][��HXZ�܈Y�H܈�\�Y\��[��][ۋ�����]XZ�\�[ۙ^N��	��[\��\X�[H�\��H	LL�L�
L\��\��܈�ۜ�[][ۜ�	�L�L��܈���]]Y]�[�	
LL�L��
L
��܈�[��[��X��Y�\ˈ[۝H�\��ؙHX[�Y�[Y[��]Z[�\��\�HHY�\�[]�\�Y�H[�[L�M]	
LL�L�K
L�[۝\��Y[�[�[��L�]Z[�\��Y[���[�\�]\�	
KL�L�MK[��YX�X�H[۝H�X�\��[���]�[�YK�������]�\�Y�	НZ[[�\��ۈ�\��ؙH\�[�\�ܝ��[ˈ[�\�\��ۘ[�[H\�[�\��\�[�\���\�L�M��[Y[�]؜�\��]�[Hۈ[��Yܘ[K���	�ٙ�\���YH܈\���[�Y�[[���\��[ۜ���L�L�H��Y[��܈����\����Z[\�[[ۚX[�[��Y�ܙK�Y�\��۝[����	�Y�[�H[�\��X�N�^X�]]�H�\��ؙH�ۜ�[[����Y[�[[��\�\�^�H�\�[ۋ�\�Z[�X�H��[��L�MH�X�HXZ�\�X\��][���\�[ܙHY��X�Y[����	�\��\��]��ܘ\\���Y[��[��\���X[\�]HY�[��[��ܜܘ]H�X[\����\��H�Y[�����YY�����\�Y���	�][���]Z[�\�X��Y�\�ۘ�H[�H]�H�\X]�Y[�ˈ[۝H�\��ؙHX[�Y�[Y[�\�[ܙH�ٚ]X�H[�[ܙH�X�H[�ۙK[ٙ��\��[ۜˉ��K���әYYY��[YN�	�[��Yܘ[H�Z�����\�ܚ\[ێ�	�[�\��[X\�Hܝ��[�[��Y[�X�]Z\�][ۈ�[��[���[Y[�[�\��ܚ�[��[H\��X�]�H�ۜ�\�[�K�������	ќ�YI��\��	�΋��[��Yܘ[K���I��K��[YN�	��[��I��\�ܚ\[ێ�	�ܙX]H[����\���[H�ZY\�[��Y[���؛����\��ٙ\��[ۘ[[]�\�X�\ˉ������	ќ�YH�	L��[۝����\��	�΋���[��K���I��K��[YN�	�X��Y���\�ܚ\[ێ�	��Y[�X[�Y�[Y[��\�[H�܈ۘ��\�[���۝�X��[���X�[��[�]Y\�[ۛ�Z\�\ˉ������	ќ�YH�X[�	��[۝	��\��	�΋��X��Y˘��I��K�K�Z\�Z�\��]��Y�	�[�\��\��[���X�]\�H[�H[���[[��\���H��X[��\�[�\�ˈ�[Z][H�Y[��^H�[Z][H�]\�L�M[�ٝ[��Y�\�[H\�H]X[]H�Yۘ[���	��ܚ�[���]�]H�[H]Y\�[ۛ�Z\�K�[�\��[�[��H�Y[�	��Y�\�[K��[�[��Y�]�Y�ܙH�X�[��Z\��\��ؙH�]�[��Z\ٚ\�\�[��Y�[�ˉ��	әY�X�[��[�\��ۈ��[��\�[��K�Y�[�\����X[YYXH�\����Y�X�^�[[�\�K�[�X[�Y[��]�H��]�Y[��H[�H�[�[]�\�]�܈[K���	��Z[����\��H]�\�[ۙK��X�X[^�[��[�ۙH\Hو�Y[�
^X�]]�\���Y\�Y[�	���ٙ\��[ۘ[�X\�HXZ�\��Y�\��[�[�X\��][���[X]X�[HX\�Y\����K��[]Y\\��T�YΈ	؜�X[��K]�\�KY�\�[ۋ\�[[�����[]Y\�T�Y�Έ�����X[[YYXKXY�[��I�	�Y�][\��X���K�Y�Έ�٘\�[ۉ�	��[[���	�ܙX]]�I�	��\��X�I�	��[Z][I�K��X]\�Y��[�K�X��[���܎�	��P�NI��X�\�]N�	̌�LKLMI���XY[YN�	�Z[��XY	��K�Y�	�L����YΈ	��]\�[��X�\�[�\����]N�	��]\�[���\�[�\����Y�[�N�	�\������[��[���۝�X��L�M���H�YZ�[�]�[����X�\��[���ܜܘ]HX���[�ˉ���]Y�ܞN�	��\��X�\�	��ۜ�[[�����]Y�ܞT�YΈ	��\��X�\�X�ۜ�[[�����\�\����	�KL�L�	L	���\�\����[��N��LLK�[YUњ\��[���YN�	̗L�L͈�YZ������[]�[�	�[�\�YYX]I���]�[�YT�[�X[�	���L�L�	����[۝	��Y��X�[N�	�YY][I��\�ܚ\[ێ��	��]\�[��\�H�[][ۜ�\�\�[�\���Z[ۈ^X�][ۋ��]H����Y�[]�\�]ۈ[YK[�XZ�HH]�[�Y[[ܘX�HL�M[�[�H�[�]�\��YY�Y�\�\�K��ܙ[ً[[�]���HHܙX]�]\�[��\��ܛX[��H�[�[ܙH]�[��[�[�HX\��][���[\ZYۋ����]]\΂�	�H�]\�[���\�[�\���\\�\�[��\��\�����܈]�[�Έ�Y[����ܜܘ]H[��\��\�^H\�Y\�ܘYX][ۜ��ۜ�ٚ]�[\�[�[ܙK�[�HX^H�ܚ����HH��[Y\��X[�]�[�
�[�Y܈[�\��ۊKH����X��܈H�YH�]�[�
\[�[��ۈ��[��Y�H���]��K��]�[�YH��Y\����H\�ZXY�X�[��X��Y�HX[�܈ۙ��[���ܜܘ]HX���[�ˉ����]XZ�\�[ۙ^N��	�]�[��]\�[��\X�[HX\���	�L�L�L
�\�\��ۈ\[�[��ۈY[�H��\^]H[�X\��]�HL\\��ۈ]�[�]	
L�XY�[�\�]\�	
K[��]�[�YK��ܜܘ]H[���۝�X��L�M�X�\��[���YZ�H܈Z[Hܙ\��L�M�ݚYH�YX�X�H[���YH]�[����]H�X\�[܋Y�[Z[�H�X�Hو]�[�[ۛH�\�[�\��\ˉ������]�\�Y�	ԙ\�X\��[�\���[��Y�H���[��]\�[��]�ˈ[���]\��\]Z\�HHX[\�Z][�X�[��Y��[Y\��X[�]�[�X��\��L�M�]Y�[�Y�ܙH[�HZ�H[�\��\��ZY����[�ˉ��	��\��X[�]�X��X\�]�[���[Z[H�]\�[���܈�]\[��\����Y�[�H[�\����\���X�[��[�Y[�H�]�]H�\��\�HوH\��H]�[����	�Y�[�H[�\��Yۘ]\�Hٙ�\�[�Έ��K��[���YY]\��[�X[��ܜܘ]H��[��\ˈH�X\��[[�\�HY[�]HXZ�\�X\��][��X\�Y\�[��Y�\��[�[ܙHZ�[K���	НZ[�[][ۜ�\��]]�[��[�Y\��Y[��[��\���ܜܘ]H]�[���ܙ[�]ܜ�[��ۜ�ٚ]��ܙ[�]ܜ���\�H�]\�\���Y�[\�K���	�ܙX]HY\�YX��Y�\��]�X\�\�ZXY�X�[��Z[�[][HXY��[��[��\��X�H�Y\ˈ[X�Y�[�\��X�[��ܙX]\�\�]\���X\�X��Y�\�ܙX]HX\�HX�\�[ۜˉ��K���әYYY��[YN�	��]X\�I��\�ܚ\[ێ�	��[�[ً\�[K[���X�[��[�^[Y[����\��[���܈]�[��[�\��]ˉ������	ќ�YH
����H\��[��X�[ۉ��\��	�΋���]X\�]\���I��K��[YN�	��]\�X\�I��\�ܚ\[ێ�	��]\�[��\�X�Y�X�]�[�X[�Y�[Y[��ٝ�\�H�܈][�\�Y[�\�[�]�[���\�X�ˉ������	�
WL�L�M�K�[۝	��\��	�΋���]\�X\�K���I��K��[YN�	�����H�ܚ��X�I��\�ܚ\[ێ�	�����܈Y[�\�[��۝�X���Y]��܈]�[�����[�[][ۜ��[[�\��܈��Y[[�ˉ������	�
�L�L�L��[۝	��\��	�΋���ܚ��X�K�����K���I��K�K�Z\�Z�\��]��Y�	��\�][���]�]\�Z]ˈX[\\�Y[��[�][ۜ��[��]�ۈ[�\��\�[�\��[�\�X[�[�H[XY�H[�\��\]][ۈ[�H��[X\��]���	�[�\��X�[����[��\�[�\�ˈ���X�[��]�X��Y�]��[YK��[X\��[��ܚ�]�\����]�\�]ܜˈۛ��[�\�������
\��]�L�L��IJH[��X�HX�ݙH]���	�Z�[��]�\�H]�[�\K��Y[����ܜܘ]K[��\�X[]�[���\]Z\�H��\][HY��\�[���\�X�ˈ�X�X[^�HX\�K���	ӛ���X�[��\��]ˈ�\]Z\�H�WL�L�L	H\��۝�܈[]�[�ˈ��\����[�\�[Z[�]H�[��[][ۜ�\�HH�X[�\��[�\��]���X�[�\�[YK���K��[]Y\\��T�YΈ	؜�X[�\�[�\��X�]\�[��X�\�[�\�����[]Y\�T�Y�Έ�����X[[YYXKXY�[��I�	�Y�][\��X���K�Y�Έ�ٛ��	�	��]\�[���	�]�[���	��\��X�I�	���[�\�[�\���K��X]\�Y��[�K�X��[���܎�	��M��
���X�\�]N�	̌�L
�L�	���XY[YN�	�HZ[��XY	��K�Y�	�M	���YΈ	ܙX[Y\�]KY]�[�Y[�	��]N�	ԙX[\�]H]�[�Y[�	��Y�[�N�	����^[ۙ�^Z[��L�M�Z[�[�ݘ]K[�ܙX]H�[YH���HHܛ�[�\����]Y�ܞN�	ԙX[\�]H	�[��\�[�����]Y�ܞT�YΈ	ܙX[Y\�]I���\�\����	��L�L�	L
����\�\����[��N�̌LK�[YUњ\��[���YN�	͗L�L�N[۝�����[]�[�	�Y�[��Y	���]�[�YT�[�X[�	���L�L�	
L��\��ڙX�	��Y��X�[N�	�\�	��\�ܚ\[ێ��	ԙX[\�]H]�[�Y[�\�HY�\�[]�\�Y�H^H[��X[\�]K�[�H\�H���\��^Z[��H�\�Y���[��\��]L�M[�H\�HܙX][���[YH���H�]�[�\��\��Y��\�Y\�܈[�\�][^�Y�Z[[��ˈۙH�Y�H�[��HX[�[��[�\�]H[ܙH[�[��[�HX\��[�YX\�ˉ���]]\΂�	ԙX[\�]H]�[�Y[�[����\�X�]Z\�[��[�܈\��\��Y��\�Y\�[\�ݚ[��܈�Z[[��ۈ[K[��[[��܈�[��H�\�[�܈�ٚ]܈[���YK�]�[�\���ܚ�ۈ�ڙX���[��[�����H�[��KY�[Z[H�\��][KY�[Z[H�]��ۜ��X�[ۈ���[Y\��X[�Z[ˈH�[YHܙX]Y\�HY��\�[��H�]�Y[�[�\��[���
[�
��ۜ��X�[ۈ
��[�[��[��H[�H[�X\��]�[YK�����]XZ�\�[ۙ^N��	�H�[\H�[YKXYX[L�M�^Z[��H\��\��Y\^�܈	ML�[�[��	
ۈ�[�ݘ][ۋ[��[[���܈	�LL�M�[�\�]\�	
�[��ٚ]�\��\�ܛ�[�]\]�[�Y[���[�ܙX]H	�L�L��J�[�\]Z]H\��ڙX��]�[�\��[��X\�����H�[����\]Y�ڙX��\��[�[[���YH�[H��][ۚ[���܈�]\�H�[K�������]�\�Y�	��\��]H�[\H�^X[�Y�\܈�����X[�Y�ܙH][\[��ܛ�[�]\]�[�Y[��[�\��[�[��H�ZX�[��[�[��[�����\��\�\��[�X[�Y�ܙH��[[���\��\��ڙX�ˉ��	НZ[[�\�X[N�H�X[\�]H]ܛ�^KH�[�\�[�۝�X�܋[�\��]X�
�܈\��\��ڙX��KH[�\����\��ۜ��X�[ۈ�[��[�H�X[\�]HY�[����X�X[^�\�[�[��\�Y[���\�Y\ˉ��	�[�\��[�[�\���[�ۚ[��]�ˈ�]�[��H�Z[ۈH\��[]\�Z[�\�]��[�X[�[YHL�M�ۚ[��ۛ��Y�H\�ۙHوH[��[�\�\�X�X]YY�\�[�]�[�Y[����	ԘZ\�H�\][�H\��\�[���]\��]�H[��\�ܜˈ[��X[�\�H��X�\�Y�]H]�[�\�
��X[�Y�\�H�ڙX�
H[�[Z]Y\��\��
���ݚYH�\][
H�][���ٚ]�
���܈̌���	�[�\�ܚ]H�ۜ�\��]]�[K��Z[[�HMWL�Ľ	H�۝[��[��Hۈ[�[�ݘ][ۈ[��ۜ��X�[ۈ�Y�]ˈHX[�]�Z[\�HHۙ\��\�H����ݙ\��[�HY�[�\�ܚ]K���K���әYYY��[YN�	����\�����]	��\�ܚ\[ێ�	���[Y\��X[�X[\�]H\�[��]�ܛ\��܈�[�[��]�[�Y[��]\�[���\ˉ������	ќ�YH
���]
H�	�
��[۝
���\�I��\��	�΋�����]���I��K��[YN�	����ܙI��\�ܚ\[ێ�	��ۜ��X�[ۈ�ڙX�X[�Y�[Y[�]�ܛH�܈\��\�]�[�Y[��ڙX�ˉ������	��\��H�X�[����\��	�΋�����ܙK���I��K��[YN�	�X[�X����\�ܚ\[ێ�	ԙX[\�]H[�\�ܚ][�����܈[�[^�[��]�[�Y[�X[X�ۛ�ZX�ˉ������	ќ�YH�	K�NK�[۝	��\��	�΋��X[�X�˚[���K�K�Z\�Z�\��]��Y�	�[�\�\�[X][���ۜ��X�[ۈ���ˈ�۝�X�܈�Y�\�H���^Y�X�\ˈYH�	H�۝[��[��H�]�\�H�Y�]�Y�ܙH[�H[�\�ܚ]HHX[���	�Yۛܚ[���\��Z[�����ˈ�ۜ��X�[ۈ�[��X�ܝYH[�\�\��HL�[[۝�ڙX��]	
K�[۝[��[�[��[������Y�	
��[�\��[����\�\ˉ��	НZ[[���]�]X\��]�[Y][ۋ��ۙ�\�H\�H\�[X[��܈�][�H\�H�Z[[���Y�ܙH[�H��XZ�ܛ�[��[��Y�[���]�Y]���\��YHX��ܜ[ۈ�]\ˉ��	���[��[��]�[�Y[��]�]HX[K�\�\���H����ܝ��]�]H�[XX�H��]ܛ�^K[�[�\�]�[�ܙX]X[��[\\����K��[]Y\\��T�YΈ	�KX�\��]�[]�\�X[Y\�]I���[]Y\�T�Y�Έ�ܙX[Y\�]K\�[�[��	�[ؚ[KZ�YKZ[��\�[���K�Y�Έ�ܙX[\�]I�	�]�[�Y[�	�	��ۜ��X�[ۉ�	�[��\�[���	�Y�[��Y	�K��X]\�Y��[�K�X��[���܎�	��Q
Q	��X�\�]N�	̌�L
�LL	���XY[YN�	�L�Z[��XY	��K�Y�	�MI���YΈ	�[ؚ[KZ�YKZ[��\�[����]N�	�[ؚ[H�YH[��\�[����Y�[�N�	�Hݙ\����Y�X[\�]H�X�H]�\�����\�\�[�[[��[�][��[�K����]Y�ܞN�	ԙX[\�]H	�[��\�[�����]Y�ܞT�YΈ	ܙX[Y\�]I���\�\����	�LL�L�	
L	���\�\����[��N��L
LK�[YUњ\��[���YN�	�WL�L��[۝�����[]�[�	�[�\�YYX]I���]�[�YT�[�X[�	�R�L�L�	MR���[۝	��Y��X�[N�	�YY][I��\�ܚ\[ێ��	�[ؚ[H�YH[��\�[��\�H�\�Z�\�Xܙ][��X[\�]K���\�X�]Z\�][ۈ����Y�\��\�[ۋX�\��]\���[�[�[����\�H�\�\��Z�[H�[ݙH[��Y][ۘ[�[�\��XZ�H\�H�\������]Y�H[��[��\�ܜ�ݙ\����L�M�Z\���ˉ���]]\΂�	�[ؚ[H�YH[��\�[��[����\�\��\�[��X[�Y�X�\�Y�Y\�L�MZ]\�\��[�ۙY܈[�[�[�ۙYL�M[��[�[��܈�[[��[HۈX\�K]�[�ۈ\�\ˈH\��[�ۙY[�[YX[��[�H�ۈH�YH[���X�[۝H�[��H[�[�[�ۙY
��[�[
H[�[YX[��[�H�ۈH[�H�YH�]�ۈ[���X���[�L�MH��\�[X[�Y�[Y[�Y�^ZY[\��X������]XZ�\�[ۙ^N��	�H[ؚ[H�YH\��\�Y�܈	�[��[�Y]	
��[۝�[�\�]\�H͉Hܛ����\�[ۋX�\��]\���Y�ܙH^[��\�L�M�[X]X�[H�]\��ܛZ[���Y][ۘ[�X[\�]K�H��[�[[�[
�ۚ[��[�[�H[ؚ[H�YH\��H�[�ZY[	�L�L�
��[۝\���][[����X�]�HX[�Y�[Y[���[\����\�HX\�K]�[�ۈ��X�\�\�X\���[Z][H�X�\�[��]Z[�[���YH\�[��H^[ٙ�\�[��������]�\�Y�	��YHH��XZ[�[ؚ[H�YH[��\�[��[�[Έ
JH�^K�ZX�[��[�[�]�YX[�Y\�[��YH\����
�H\��\�H܈]�[�[ؚ[H�YH\���[���X���[����	њ[�[��[�ܞHۈ�X�X����X\��]X�KܘZY��\�[ؚ[KZ�YK\�X�Y�X�]�ܛ\�Z�HR�[Y�K[��H�]�[��[ؚ[H�YH\���[�[�[���\��X[�Y�\�ˉ��	�[�^\�[��X��Y�ܙH[�H�^K�[ؚ[H�Y\��[�]�H[�\�\�H\��Y\���و�؛[\�[��P��[[��\�]\�H^[��]�H��^��]H�ٙ\��[ۘ[[��X�[ۋ���	НZ[�[][ۜ�\��]\��X[�Y�\��[��ۙ\�ˈ^Hٝ[�ۛ��و]�Z[X�H�Y\��Y�ܙH^H]HX\��][��[��X��YH�Y�\��[\��\���܈[�\�X�]Z\�][ۈ\[[�K���	��ۜ�Y\�HX\�K]�[�ۈ[�[��[[��H�YHۈHX\�K]�[�ۈYܙY[Y[�[���[�H���X�H�ۈ^[Y[��\��HH�[Z][H�X�K[�XZ[�Z[��\����\�[��H^[ٙ�\�[����K���әYYY��[YN�	�R�[Y�I��\�ܚ\[ێ�	�H\��\�[ؚ[H�YH\�[��X\��]X�H�܈�[�[��[��[�ܞK�������	ќ�YH��X\��	��\��	�΋��Z�[Y�K���I��K��[YN�	јX�X����X\��]X�I��\�ܚ\[ێ�	�^�[[���\��H�܈�[�[��\��\��Y[ؚ[H�YHX[�\�X�H���H�[\�ˉ������	ќ�YI��\��	�΋�٘X�X���˘��K�X\��]X�I��K��[YN�	��\��I��\�ܚ\[ێ�	�ܝ��[��X��[��[��[�[��X[�\ܝ[���܈[�ܙ�[��Y[��[ؚ[H�YH[��\�ܜˉ������	ќ�YI��\��	�΋���\��K���I��K�K�Z\�Z�\��]��Y�	Н^Z[���]�]Hܛ�Y�[��X�[ۋ�[�\�\�H[XY�H[���[�][ۈ\��Y\�ۈ[ؚ[H�Y\��[�\��HܙX]X[[��H[ۙ^H]ݙ\��Y����	�Yۛܚ[��\���[\�[��Y�[][ۜˈXX�[ؚ[H�YH\��\�]��ۈ�[\�X��]���[��ۈ�Y\�\�K��[�][��\�H�[��\�[[�]�X�[ۈو[�\��YK���	�ݙ\����[��]H\��Y\ˈ[ؚ[H�Y\��[�]�H��\X�]Y]H\�ܚY\ˈ[�^\��ܚ��]H]H��\[�H^\�Y[��Y[�X[�Y�X�\�Y�\�[�ˉ��	�[�\�\�[X][��H��[�\��[][ۈ�\�ˈY�[�H�ۈH�YH[��YHH\���\�[����[��[��]YY^�H[�\�[�[��[�[�ܙX\�H�X�[��Y\ˉ��K��[]Y\\��T�YΈ	ܘX�[Z\��[�^�[[ؚ[KZ�Y\����[]Y\�T�Y�Έ�ܙX[Y\�]K\�[�[��	ܙX[Y\�]KY]�[�Y[�	�K�Y�Έ��[ؚ[H�Y\��	ܙX[\�]I�	��\�����	�[��\�[���	ؙY�[��\�Y��Y[�I�K��X]\�Y��[�K�X��[���܎�	��M�L�I��X�\�]N�	̌�L
KL�����XY[YN�	�HZ[��XY	��K�Y�	�M����YΈ	�ۛ[�KY�]�\��X��X�[����]N�	�ۛ[�H�]�\����X�[����Y�[�N�	��YHۙK[ۋ[ۙH�\��[ۜ��܈��[X�H��ܘ[\�]�\��H[��Y�]ۘ�K����]Y�ܞN�	��\��X�\�	��ۜ�[[�����]Y�ܞT�YΈ	��\��X�\�X�ۜ�[[�����\�\����	�L�L�	
L	���\�\����[��N��
LK�[YUњ\��[���YN�	�WL�L��YZ������[]�[�	ЙY�[��\����]�[�YT�[�X[�	���L�L�	����[۝	��Y��X�[N�	�X\�I��\�ܚ\[ێ��	�ۛ[�H�]�\����X�[��\�HY�][]��][ۈو\��ۘ[�Z[�[�ˈ[�H�YH�[�ܘ\H[�HN�H�Z[[���܈H�ؘ[�Y[��\�H[���[X�H��ܘ[\�L�M�\��[��[ܙH[�K�[�\�][��[ܙH[���YK[��ܚ�[��ۈ[�\��ۈ��Y[K����]]\΂�	�ۛ[�H�]�\����X�[��YX[��[]�\�[���Z[�[����ܘ[\��]�][ۘ[�ZY[��KX���[�X�[]H��X�[��[��]�\����[][�]Y\���Y�Y�][�[��[Έ�Y[��[�\�[XZ[[��]�]H��[][�]Y\ˈ��X�\��[�ٙ�\�N�H�\�X[�\��[ۜ�ܛ�\��ܘ[\��[�\X�Y��\��\�܈[۝HY[X�\��\��[][�]Y\�L�M܈[��\������]XZ�\�[ۙ^N��	�N�H�\�X[��X�[���\��[ۜ�\X�[H�[�	
�WL�L����\��ܛ�\��ܘ[\�وLL�L�L�Y[��]	M�L�L��M��[۝XX��[�\�]H	KL�L�MK�[۝��[�\X�YY�][�]�\����ܘ[\��[�܈	

�L�L�
M�[��[��H���\X]YH�]��Y][ۘ[[YH[��\�Y[��[۝HY[X�\��\��[][�]Y\�]	�WL�L�M��[۝ܙX]HY�H�YX�X�H�X�\��[���]�[�YK�������]�\�Y�	�؝Z[�H�X��ۚ^�Y�]�\���\�Y�X�][ۈY�[�Hۗ	�[�XYH]�HۙN��T�KP�KT��K܈���H\�H[�\�X�Y[��[��ܜ��]�Y[��[�]�ܛ\ˉ��	�Y�[�H[�\��X�N���\�[H�]�\����[���Z[�[���܈^X�]]�\�X\�]ۈ�\�ZY�����܈�Y�[��\�ˈH�X�Y�X��[�ٛܛX][ۈ[�H[]�\�\��ܝ[ܙH[��[�\�[�]�\���ZY[��K���	НZ[[�\�]YY[��Hۈ[��Yܘ[KZ���܈[�UX�H�H�\�[����YH�[YN��ܚ��][[ۜ��][ۜ��]�][ۈ\��Y[��[�ٛܛX][ۜ�
�]\�Z\��[ۊK���	�ٙ�\�H��YH�[[��H

WL�L��^\�H܈H��X���[���X�ܞH��ܘ[H��Z[[�\��Y[��\�K�]\�\�[[ۚX[�[��ݙH[�\�Y]����H�ܚ�ˉ��	�ܘYX]H[�\��\��Y[�����HN�H[��ܛ�\��ܘ[\�ۘ�H[�\�N�H���\�H�[�ܛ�\��ܘ[\���[H[�\�[���YH�]�]��[[��[�\��\�ˉ��K���әYYY��[YN�	��YP��X�	��\�ܚ\[ێ�	���X�[��]�ܛH�܈[]�\�[��\��ۘ[^�Y�ܚ��][���X��[��[��Y[���[][�X�][ۋ�������	�NWL�L�
�K�[۝	��\��	�΋���YX��X������K��[YN�	��Z�X�I��\�ܚ\[ێ�	�[Z[�[ۙH]�ܛH�܈�[[���]�\����\��\�Y[X�\��\�[���X�[����ܘ[\ˉ������	�MWL�L��NK�[۝	��\��	�΋���Z�X�K���I��K��[YN�	֛��I��\�ܚ\[ێ�	՚Y[�]�ܛH�܈]�H��X�[���\��[ۜ�ܛ�\�\��\�[��Y[��X��Z[�ˉ������	ќ�YH�	MK�NK�[۝����\��	�΋�ޛ��K�\���K�K�Z\�Z�\��]��Y�	��^Z[���X��[�N�H�\��[ۜ��ܙ]�\��ۙK[ۋ[ۙH��X�[��\�[�[���YH�Z[[�ˈ�Z[ܛ�\��ܘ[\�[�Y�][��X�����XZ���Y�]���	�[�\��\��[���X�]\�H�]�\���Y[��X\�H��[�K�[�\�^\�\�H\�YX\��[�HXZ�[�ˈ�X�H]X��ܙ[��K���	әY�X�[��[�\�ۛ[�H�\�[��K�[�\����X[YYXH\�[�\�ܝ��[�[�[�\��[X\�HX\��][���[��[����ۜ�\�[�H܈^H��Y[ۙH�[[�H��ˉ��	���\[���Y[�ۘ��\�[�ˈHܛ�Y�[�Z�H]Y\�[ۛ�Z\�KX[\�ܞK[���[\�][�����\���YX�\�XX�[]H[��[X]X�[H[\�ݙ\��Y[��]��Y\ˉ��K��[]Y\\��T�YΈ	ݚ\�X[Y�]�\��Z[���X�܉���[]Y\�T�Y�Έ��Y�][\��X���	ۙ]��]\�X�\�[�\���K�Y�Έ�ٚ]�\���	���X�[���	�ۛ[�I�	�X[	�	���[X�I�K��X]\�Y��[�K�X��[���܎�	��P�NI��X�\�]N�	̌��L
L
I���XY[YN�	�Z[��XY	��K�Y�	�M����YΈ	�X�\�\�\	��]N�	НZ[[��HX��\�\	��Y�[�N�	ќ��HYXH���X���X�[ۈL�MH�\�]ܗ	���ZYH��Z[[��HX���\[�K����]Y�ܞN�	�X�	��\�\����]Y�ܞT�YΈ	�X�\�\�\����\�\����	�L�L�	
L	���\�\����[��N��
LK�[YUњ\��[���YN�	��L�L�N[۝�����[]�[�	�Y�[��Y	���]�[�YT�[�X[�	��[�[Z]Y	��Y��X�[N�	�\�	��\�ܚ\[ێ��	НZ[[��HX��\�\\�HY�\�\�\��Y�\�\�]�\�]ۈ\�[�\�H]�ܛK�[���Z[���YH�[�\�]HY�KX�[��[���]��Y\ˈHY��\�[��H�]�Y[�Hۙ\�]XZ�H][�Hۙ\�]ۗ	�\�[[���]�\�HYXHL�M]	��H^X�][ۋHX\��][��Y�[�H��[�\�	��X�[]H�X\���\�\�[�H��\]][ۋ����]]\΂�	�HX��\�\\�H��\[�H�Z[\��[�H�ٝ�\�H��X�\܈Y�][]�ܛH\�YۙY���[K�[�Z�HH�\��X�H�\�[�\��
�X���[\��HY[��[�JKHX���X��[��\��H�\�[��و�\��Y\���]H�[YH��H�\�HL�MXZ�[��]HY�\�[]�\�Y�H�\�[�\��[�[�[�]�ܚ�ˈ��[�\��\X�[H�Z\�H�[�\�H�\][܈�����\��ٚ]X�[]K�����]XZ�\�[ۙ^N��	�X��\�\�[ۙ]^�H��Y��XT��X��ܚ\[ۜ�
	LL�L�
L�[۝\�\�\�K��Y[Z][H\ܘY\��[��X�[ۈ�Y\�THX��\��܈X\��]X�H��[Z\��[ۜˈH�ٝ�\�H��X��]K^Z[��\�\��]	
L�[۝�[�\�]\�	
L�[۝[��X�\��[���]�[�YK�HX�ۛ�ZX��[\�ݙH�[X]X�[H�]��[H�[��HHX\��[�[���وXX��]�\�\�\��X�\��\�ˉ������]�\�Y�	�Y[�Y�HH�X[Z[��[��\]Y[��؛[HL�MYX[HۙH[�H]�H^\�Y[��Y[�\��[��H�\��\�\�\�H�Z[�H��[�\����Y\H[�\��[�H�\��Y\��X�]\�H^H�\�HH�\��Y\����	՘[Y]H�Y�ܙH[�H�Z[�[���L�L�L�[�X[\�\���Y�ܙHܚ][��H[�Hو��K�[�\��[�^X�H�]^H��[^H�܈[��K���	НZ[HZ[�[][H�XX�H��X�
U�
HL�MH�[\\��\��[ۈو[�\���X�][]�\��H�ܙH�[YK���^�H�X]\�\����\���\�H�ܙH�؈ۙK���	��]L^Z[���\��Y\���Y�ܙH[�H�Z\�H[ۙ^H܈��[K��]�[�YH\�H[��ܙYX�H��و][�H]�H��[���X�[X\��]�]���	�X�YHX\�N������\܈�Z\�K������\[���]�\�[�H�۝����[�\�H�\][�]�\�[�H�YY[��\��\��\ˈ�Z]\�\�[�]�\��[H�]\�L�M]\[��ۈ[�\�X\��][�[�\���[ˉ��K���әYYY��[YN�	НX��H��X������\�ܚ\[ێ�	ӛ�X��H]�ܛ\���Z[�[��[ۘ[\���\\��]�][��[�Y\�[���\��\��\ˉ������	��WL�L��K�[۝	��\��	�΋�؝X��K�[���K��[YN�	���\I��\�ܚ\[ێ�	�^[Y[�[���\��X�\�H�܈�X��ܚ\[ۜ�ۙK][YH\��\�\�[�X\��]X�H^[�]ˉ������	̋�IH
�	��\��[��X�[ۉ��\��	�΋����\K���I��K��[YN�	�[�X\���\�ܚ\[ێ�	���X�[�[��[�Y\�[���ڙX�X[�Y�[Y[��܈�\�[[ݚ[���\�\X[\ˉ������	ќ�YH�	�\�\��[۝	��\��	�΋��[�X\��\	��K�K�Z\�Z�\��]��Y�	НZ[[��[��X[�܈��ۙˈH[ܙH[YH[�H�[��Z[[���]�]�\��Y\��YY�X��H[ܙH[YH[�H�[��Z[[��Hܛۙ�[�ˉ��	��\�[��[��\�ܜ��Y�ܙH�[�[����X�[X\��]�]�H�\�[YH��Z\�H[ۙ^H\��[�[�Hۗ	�\�\�][H�YY]L�M�[��X�[ۈ\�[�XYH�X\����	���Y��[�\��ۙ�X�ˈY�[�H\]Z]K��\�[�X�\�[ۋ[XZ�[��]]ܚ]H[�ܚ][���Y�ܙH[�H�Z[[�][�ˈ[ܙH�\�\�YH���H��[�\�\�]\�[����H�Y��X�ˉ��	�Yۛܚ[��[�]X�ۛ�ZX�ˈH�\�\]ܛ����]��\�[ۙ^Hۈ]�\�H�\��Y\��[���\��]�H���[K�ۛ��[�\��\��Y\�X�]Z\�][ۈ���
�P�H[�Y�][YH�[YH
�HX\�K���K��[]Y\\��T�YΈ	��\�XK\\��\�\�ܝ�[Z\�	���[]Y\�T�Y�Έ��Y�][\��X���	����X[[YYXKXY�[��I�	ۙ]��]\�X�\�[�\���K�Y�Έ���\�\	�	�X�	�	��XT��	���X�	�	�Y�[��Y	�K��X]\�Y��[�K�X��[���܎�	�����QQ	��X�\�]N�	̌�LKLMI���XY[YN�	�L�Z[��XY	��K�B��^ܝ�[��[ۈ�]\�P�T�Y��YΈ��[��N�\�H[�Y�[�Y�]\��\�\˙�[�


HO���Y�OOH�Y�B�B��^ܝ�[��[ۈ�]�X]\�Y\�\�
N�\�V�H�]\��\�\˙�[\�

HO���X]\�Y
B�B��^ܝ�[��[ۈ�]�[]Y\�\��Y�Έ��[���JN�\�V�H�]\��\�\˙�[\�

HO��Y�˚[��Y\���Y�JK��X�J�B�B��^ܝ�[��[ۈ�]\�\ОP�]Y�ܞJ�]Y�ܞT�YΈ��[��N�\�V�H�]\��\�\˙�[\�

HO���]Y�ܞT�Y�OOH�]Y�ܞT�Y�B�B
