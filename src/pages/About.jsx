import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

const About = () => {
  const { images, company } = siteConfig;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-primary-dark pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="RVS Workshop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              About <br />
              <span className="text-accent-gold font-serif italic font-light">the Workshop</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[900px] mx-auto">
          <p className="text-2xl md:text-3xl text-primary-dark font-light leading-relaxed mb-12">
            RVS Bespoke operates from a workshop at 3 Riverway on Barry Avenue in Windsor.
            We design and build fitted furniture — kitchens, wardrobes, home offices —
            for clients across Berkshire.
          </p>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              The business started with a straightforward idea: furniture should be made to fit the space,
              not the other way around. Off-the-shelf units rarely work perfectly in older properties
              or rooms with awkward dimensions. Custom joinery solves that problem.
            </p>
            <p>
              We handle everything in-house — initial measurements, design drawings, cabinet construction,
              finishing, and installation. This means we can adjust details as the project develops
              rather than being locked into decisions made weeks earlier.
            </p>
            <p>
              Most of our work comes from Windsor, Ascot, Maidenhead, and the surrounding areas.
              We've fitted kitchens in Victorian terraces, built library walls in Edwardian homes,
              and designed office spaces in new-builds. Each project is different, which keeps
              the work interesting.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Image */}
      <section className="px-8 bg-white pb-24">
        <div className="max-w-[1200px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1540633596541-692790937a09?auto=format&fit=crop&q=80&w=1600"
            alt="Workshop"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-8 bg-background-light">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tighter mb-12">
            How it works
          </h2>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Projects typically begin with a site visit. We measure the space, discuss what you're
              looking for, and talk through materials and finishes. There's no charge for this.
            </p>
            <p>
              After that, we put together drawings and a quote. For kitchens and larger projects,
              we often produce 3D renders so you can see how things will look before any wood is cut.
            </p>
            <p>
              Construction happens at the workshop. We use solid timber and quality sheet materials,
              with traditional joinery methods where they make sense. Timescales depend on the project —
              a set of wardrobes might take four to six weeks, a full kitchen eight to twelve.
            </p>
            <p>
              Installation is carried out by the same people who built the furniture.
              We don't subcontract fitting work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-primary-dark">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-6">
            If you have a project in mind, get in touch.
          </h2>
          <p className="text-white/60 text-lg mb-10">
            We're happy to visit, take measurements, and provide a quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent-gold text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-primary-dark transition-all"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
