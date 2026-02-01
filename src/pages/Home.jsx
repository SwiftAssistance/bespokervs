import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck, Award, Quote } from 'lucide-react';
import { siteConfig } from '../config/site';
import { imgUrl, imgSrcSet } from '../utils/image';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const { home, services, images, company } = siteConfig;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl(images.hero, 800)}
            srcSet={imgSrcSet(images.hero, [400, 800, 1200, 1920])}
            sizes="100vw"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-50 scale-105"
            alt="Bespoke fitted kitchen handcrafted by RVS Bespoke in Windsor, Berkshire"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-accent-gold"></div>
              <span className="text-white/60 text-[11px] uppercase tracking-[0.6em] font-bold">
                {company.established}
              </span>
            </div>
            <h1 className="hero-title text-white mb-12">
              {home.hero.title} <br />
              <span className="hero-title-highlight">{home.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mb-16 leading-relaxed">
              {home.hero.description}
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                {home.hero.cta.primary}
              </button>
              <Link to="/services" className="group btn-secondary text-white">
                {home.hero.cta.secondary}{' '}
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-6">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 writing-vertical">
            {home.hero.scrollHint}
          </span>
          <div className="h-20 w-px bg-gradient-to-b from-accent-gold to-transparent"></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 md:py-48 px-8 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent-gold/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 p-4 border border-gray-100 bg-white shadow-2xl">
                <img
                  src={imgUrl(images.about, 600)}
                  srcSet={imgSrcSet(images.about, [300, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="RVS Bespoke craftsmen at work in Windsor joinery workshop"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary-dark p-10 shadow-2xl z-20 hidden md:block">
                <div className="text-4xl font-serif text-accent-gold italic mb-1 tracking-tighter">
                  Hand-Finished
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-[0.4em]">
                  Barry Ave, Windsor
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="max-w-xl">
                <h2 className="section-label mb-8">{home.about.sectionTitle}</h2>
                <h3 className="text-5xl md:text-7xl font-bold text-primary-dark leading-[1.1] tracking-tighter mb-10">
                  {home.about.title} <br />
                  <span className="italic font-serif font-light">{home.about.titleHighlight}</span>
                </h3>
                <p className="text-gray-500 text-xl leading-relaxed mb-10 font-light">
                  {home.about.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-accent-gold">
                      <ShieldCheck size={20} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Master Joinery
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      We use traditional mortise and tenon joints combined with modern precision for
                      lifetime durability.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-accent-gold">
                      <Award size={20} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Local Heritage
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Serving Windsor, Ascot, and the surrounding Berkshire areas for over a decade
                      with distinction.
                    </p>
                  </div>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-4 text-primary-dark font-bold uppercase tracking-[0.3em] text-xs border-b-2 border-accent-gold pb-2 hover:gap-6 transition-all"
                >
                  {home.about.cta} <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 md:py-48 px-8 bg-primary-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 skew-x-12 translate-x-32 pointer-events-none hidden md:block"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="section-label mb-8 text-accent-gold">
                <span className="h-px w-8 bg-accent-gold mr-4 inline-block"></span>
                {home.services.sectionTitle}
              </h2>
              <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
                {home.services.title}
              </h3>
            </div>
            <p className="text-white/40 text-lg font-light italic max-w-xs md:text-right">
              {home.services.quote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {services.map((service, i) => (
              <div
                key={service.id}
                className="group service-card"
              >
                <img
                  src={imgUrl(service.image, 400)}
                  srcSet={imgSrcSet(service.image, [300, 600, 800])}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-60 group-hover:scale-110 transition-all duration-[2s]"
                  alt={`${service.title} - Bespoke furniture Windsor`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent"></div>

                <div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-700">
                  <span className="text-accent-gold text-6xl font-serif italic opacity-30 block mb-6">
                    0{i + 1}
                  </span>
                  <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-white/50 font-light leading-relaxed mb-10 max-w-xs">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-4 text-accent-gold font-bold text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity delay-100"
                  >
                    {home.services.cta} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-4 text-white font-bold uppercase tracking-[0.3em] text-xs border-b-2 border-accent-gold pb-2 hover:gap-6 transition-all"
            >
              View All Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 md:py-48 px-8 bg-background-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-label justify-center mb-8">
              {home.testimonials.sectionTitle}
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-primary-dark tracking-tighter">
              {home.testimonials.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {home.testimonials.items.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-10 shadow-xl hover:shadow-2xl transition-shadow relative group"
              >
                <Quote
                  size={40}
                  className="text-accent-gold/20 absolute top-8 right-8"
                />
                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-bold text-primary-dark">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.location} — {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imgUrl(images.workshop, 600)}
            srcSet={imgSrcSet(images.workshop, [400, 800, 1200])}
            sizes="100vw"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-20"
            alt="RVS Bespoke furniture workshop in Windsor, Berkshire"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-dark/80"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
            Ready to Begin Your Project?
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 font-light">
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
