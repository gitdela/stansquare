import CoreBenefits from '../components/corebenefits/corebenefits';
import Empower from '../components/empower/empower';
import FAQ from '../components/faqs/faqs';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';
import Testimonials from '../components/testimonials/testimonials';

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <CoreBenefits />
      </section>
      <section>
        <Empower />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <FAQ />
      </section>
    </main>
  );
}
