import {
  Hero,
  UpcomingEvents,
  Testimonials,
  CTASection,
  Footer
} from '../components';
import Navbar from '../components/ui/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lime-300 via-lime-200 to-white overflow-hidden">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
