import {
  UpcomingEvents,
  Footer
} from '../components';
import HomeSection from '../components/HomeSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] overflow-hidden">
      <HomeSection />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}
