import { Hero } from '../components/Hero';
import { ActionButtons } from '../components/ActionButtons';
import { HowItWorks } from '../components/HowItWorks';
import { PopularProducts } from '../components/PopularProducts';
import { Testimonials } from '../components/Testimonials';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ActionButtons />
      <HowItWorks />
      <PopularProducts />
      <Testimonials />
    </>
  );
}; 