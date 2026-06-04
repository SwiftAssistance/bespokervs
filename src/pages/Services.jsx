import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/site';
import { imgUrl, imgSrcSet } from '../utils/image';

const ServiceCard = ({ service, index, tall }) => (
  <Link
    to={service.path}
    className={`group relative overflow-hidden bg-primary-dark flex items-end w-full ${tall ? 'min-h-[500px]' : 'min-h-[380px]'}`}
  >
    <img
      src={imgUrl(service.image, 800)}
      srcSet={imgSrcSet(service.image, [400, 800, 1200])}
      sizes="(max-width: 768px) 100vw, 50vw"
      width={1200}
      height={800}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover object-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[2s]"
      alt={`${service.title} - RVS Bespoke Windsor`}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent"></div>
    <div className="relative z-10 p-8 w-full">
      <span className="text-accent-gold text-4xl font-serif italic opacity-30 block mb-3">
        0{index + 1}
      </span>
      <h2 className={`font-bold text-white mb-3 tracking-tight ${tall ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
        {service.shortTitle}
      </h2>
      <p className="text-white/50 font-light leading-relaxed mb-6 text-sm max-w-xl">
        {service.description}
      </p>
      <span className="flex items-center gap-3 text-accent-gold font-bold text-[10px] uppercase tracking-[0.4em] group-hover:gap-5 transition-all">
        View Details <ArrowRight size={14} />
      </span>
    </div>
  </Link>
);

const Services = () => {
  const services = siteConfig.rooms;

  return (
    <>
      <Helmet>
        <title>Our Services | Bespoke Fitted Furniture | RVS Bespoke Windsor</title>
        <meta name="description" content="Explore our full range of bespoke fitted furniture services. From kitchens and bedrooms to living rooms and home offices. Handcrafted in Windsor, Berkshire." />
        <link rel="canonical" href="https://rvsbespoke.co.uk/services" />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src={imgUrl(siteConfig.images.workshop, 800)}
              srcSet={imgSrcSet(siteConfig.images.workshop, [400, 800, 1200])}
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt="RVS Bespoke furniture workshop in Windsor"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">What We Do</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Our
                <span className="block text-accent-gold font-serif italic font-light">Services</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke fitted furniture for every room in your home. Each piece designed around your space and handcrafted in our Windsor workshop.
              </p>
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="py-20 md:py-32 px-8 bg-white">
          <div className="max-w-[1400px] mx-auto space-y-8">

            {/* Row 1: first service spans full width */}
            <ServiceCard service={services[0]} index={0} tall />

            {/* Row 2: two equal cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard service={services[1]} index={1} />
              <ServiceCard service={services[2]} index={2} />
            </div>

            {/* Row 3: two equal cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard service={services[3]} index={3} />
              <ServiceCard service={services[4]} index={4} />
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-8 bg-primary-dark text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-white/60 text-lg mb-10 font-light">
              Book a free design consultation and we'll help you find the perfect solution for your space.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-accent-gold text-primary-dark px-12 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
