import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck, Award } from 'lucide-react';
import { siteConfig } from '../config/site';
import ContactModal from '../components/ContactModal';
import TestimonialSlider from '../components/TestimonialSlider';

const Home = () => {
  const { home, services, company } = siteConfig;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] max-h-[900px] flex items-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary-dark to-primary-darker"></div>
          {/* Abstract decorative elements instead of stock image */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-accent-gold/3 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl"></div>
          </div>
          {/* Geometric lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-32 right-32 w-px h-64 bg-gradient-to-b from-accent-gold to-transparent"></div>
            <div className="absolute bottom-32 left-1/4 w-48 h-px bg-gradient-to-r from-accent-gold to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent-gold"></div>
              <span className="text-white/50 text-[11px] uppercase tracking-[0.5em] font-bold">
                {company.established}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-10">
              {home.hero.title} <br />
              <span className="text-accent-gold font-serif italic font-light">{home.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-light max-w-xl mb-12 leading-relaxed">
              {home.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                {home.hero.cta.primary}
              </button>
              <Link to="/services" className="group btn-secondary text-white justify-center sm:justify-start">
                {home.hero.cta.secondary}{' '}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/30 text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent-gold/50 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 md:py-32 px-8 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              {/* Image placeholder with elegant design */}
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl"></div>
                <div className="relative bg-gray-100 p-6 border border-gray-100">
                  <div className="w-full h-[400px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent-gold/10 flex items-center justify-center">
                        <span className="text-accent-gold text-4xl font-serif italic">W</span>
                      </div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider">Workshop</p>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-primary-dark p-6 shadow-2xl hidden md:block">
                  <div className="text-2xl font-serif text-accent-gold italic tracking-tight">
                    Hand-Finished
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                    Barry Ave, Windsor
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="max-w-lg">
                <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
                  {home.about.sectionTitle}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-[1.1] tracking-tight mb-8">
                  {home.about.title} <br />
                  <span className="italic font-serif font-light">{home.about.titleHighlight}</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
                  {home.about.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-accent-gold">
                      <ShieldCheck size={20} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Master Joinery
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Traditional mortise and tenon joints for lifetime durability.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-accent-gold">
                      <Award size={20} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Local Heritage
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Serving Windsor and Berkshire for over a decade.
                    </p>
                  </div>
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 text-primary-dark font-bold uppercase tracking-widest text-xs border-b-2 border-accent-gold pb-2 hover:gap-4 transition-all"
                >
                  {home.about.cta} <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 md:py-32 px-8 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
                {home.services.sectionTitle}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {home.services.title}
              </h2>
            </div>
            <p className="text-white/30 text-base font-light italic max-w-xs lg:text-right">
              {home.services.quote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="group relative bg-primary-darker border border-white/10 p-8 md:p-10 hover:border-accent-gold/30 transition-all duration-500"
              >
                {/* Number */}
                <span className="text-accent-gold/20 text-6xl font-serif italic block mb-6 group-hover:text-accent-gold/40 transition-colors">
                  0{i + 1}
                </span>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed mb-8 text-sm">
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-3 text-accent-gold font-bold text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity"
                >
                  {home.services.cta} <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs border-b border-accent-gold pb-2 hover:gap-4 transition-all"
            >
              View All Services <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 px-8 bg-background-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
              {home.testimonials.sectionTitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark tracking-tight">
              {home.testimonials.title}
            </h2>
          </div>

          <TestimonialSlider testimonials={home.testimonials.items} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-8 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[900px] mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Ready to Begin Your Project?
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto mb-10 font-light">
            Let's discuss your vision and create something exceptional together.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
          >
            Start Your Commission
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
