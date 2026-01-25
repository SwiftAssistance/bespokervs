import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import ContactModal from '../components/ContactModal';

const About = () => {
  const { company } = siteConfig;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-primary-dark pt-32">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary-dark to-primary-darker"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent-gold"></div>
              <span className="text-white/50 text-[11px] uppercase tracking-[0.5em] font-bold">
                Our Story
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6">
              About <br />
              <span className="text-accent-gold font-serif italic font-light">the Workshop</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 md:py-28 px-8 bg-white">
        <div className="max-w-[900px] mx-auto">
          <p className="text-2xl md:text-3xl text-primary-dark font-light leading-relaxed mb-10">
            RVS Bespoke operates from a workshop at 3 Riverway on Barry Avenue in Windsor.
            We design and build fitted furniture for clients across Berkshire.
          </p>

          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
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
              and designed office spaces in new-builds. Each project is different.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Visual */}
      <section className="px-8 bg-white pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center border border-gray-100">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-gold/10 flex items-center justify-center">
                <span className="text-accent-gold text-3xl font-serif italic">W</span>
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">Workshop</p>
              <p className="text-gray-300 text-xs mt-2">Barry Avenue, Windsor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 bg-primary-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '100%', label: 'Bespoke Design' },
              { value: '5 Star', label: 'Customer Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28 px-8 bg-background-light">
        <div className="max-w-[900px] mx-auto">
          <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark tracking-tight mb-10">
            How It Works
          </h2>

          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
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

      {/* Values Grid */}
      <section className="py-20 md:py-28 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark tracking-tight">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Quality First',
                description: 'We use premium materials and traditional techniques. Every piece is built to last.',
              },
              {
                title: 'Made Locally',
                description: 'Everything is designed and built in our Windsor workshop by our own team.',
              },
              {
                title: 'Clear Communication',
                description: 'We keep you informed at every stage. No surprises, no hidden costs.',
              },
              {
                title: 'Sustainable Practice',
                description: 'We source materials responsibly and minimise waste in our workshop.',
              },
            ].map((value, i) => (
              <div key={i} className="p-8 border border-gray-100 hover:border-accent-gold/30 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-primary-dark mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-8 bg-primary-dark">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
            We're happy to visit, take measurements, and provide a quote.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 bg-accent-gold text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-primary-dark transition-all"
          >
            Get in Touch <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default About;
