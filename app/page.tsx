import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import DifferentiationSection from '@/components/sections/DifferentiationSection';
import FeaturedHustles from '@/components/sections/FeaturedHustles';
import QuizPromoSection from '@/components/sections/QuizPromoSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import LatestEpisodes from '@/components/sections/LatestEpisodes';
import InternalLinksSection from '@/components/sections/InternalLinksSection';
import EmailCaptureSection from '@/components/sections/EmailCaptureSection';

export const metadata: Metadata = {
  title: 'Find a Side Hustle That Actually Makes Money | 99 Hustles',
  description: 'Explore 99+ real income streams with startup costs, time to first dollar, and honest operator breakdowns. Find the perfect side hustle for your time and budget.',
  keywords: [
    'side hustles',
    'make money online',
    'side hustle ideas',
    'passive income',
    'income streams',
    'how to make money',
    'side hustle for beginners'
  ],
  openGraph: {
    title: 'Find a Side Hustle That Actually Makes Money | 99 Hustles',
    description: 'Explore 99+ real income streams with startup costs, time to first dollar, and honest operator breakdowns.',
    url: 'https://99hustles.com',
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DifferentiationSection />
      <FeaturedHustles />
      <QuizPromoSection />
      <CategoriesSection />
      <LatestEpisodes />
      <InternalLinksSection />
      <EmailCaptureSection variant="dark" headline="Get one real hustle breakdown every week." subheadline="One real income stream, documented with honest numbers and real operator insights, delivered weekly. Free forever." ctaText="Join Free" />
    </>
  );
}
