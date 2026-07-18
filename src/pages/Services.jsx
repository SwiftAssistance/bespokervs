import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/site';
import { servicesFaqs } from '../config/faqs';
import { imgUrl, imgSrcSet } from '../utils/image';
import FAQSection from '../components/FAQSection';

const Services = () => {
  const services = siteConfig.rooms;

  return (
    <>
      <Helmet>
        <title>Our Services | Bespoke Fitted Furniture | RVS Bespoke Windsor</title>
        <meta name="description" content="Explore our full range of bespoke fitted furniture services. From kitchens and bedrooms to living rooms and home offices. Handcrafted in Windsor, Berkshire." />
        <meta name="keywords" content="bespoke fitted furniture Windsor, fitted furniture services Berkshire, bespoke joinery Windsor, fitted rooms Windsor, bespoke furniture maker Berkshire" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/services" />
        <meta property="og:title" content="Our Services | Bespoke Fitted Furniture | RVS Bespoke Windsor" />
        <meta property="og:description" content="Explore our full range of bespoke fitted furniture services. From kitchens and bedrooms to living rooms and home offices. Handcrafted in Windsor, Berkshire." />
        <meta property="og:url" content="https://rvsbespoke.co.uk/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Our Services | Bespoke Fitted Furniture | RVS Bespoke Windsor" />
        <meta name="twitter:description" content="Explore our full range of bespoke fitted furniture services. From kitchens and bedrooms to living rooms and home offices. Handcrafted in Windsor, Berkshire." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rvsbespoke.co.uk/services" },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Bespoke Fitted Furniture Services",
            "url": "https://rvsbespoke.co.uk/services",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Fitted Living Room, Dining Room & Kitchen", "url": "https://rvsbespoke.co.uk/living-room" },
              { "@type": "ListItem", "position": 2, "name": "Fitted Bedroom Furniture", "url": "https://rvsbespoke.co.uk/bedroom" },
              { "@type": "ListItem", "position": 3, "name": "Fitted Home Office Furniture", "url": "https://rvsbespoke.co.uk/home-office" },
              { "@type": "ListItem", "position": 4, "name": "Loft Conversion Fitted Furniture", "url": "https://rvsbespoke.co.uk/loft-conversion" },
              { "@type": "ListItem", "position": 5, "name": "Fitted Cloakroom & Under the Stairs", "url": "https://rvsbespoke.co.uk/cloakroom" },
            ],
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
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
                Our <span className="text-accent-gold font-serif italic font-light">Services</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke fitted furniture for every room in your home. Each piece designed around your space and handcrafted in our Windsor workshop.
              </p>
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="bg-white">
          {services.map((service, i) => (
            <Link
              key={service.id}
              to={service.path}
              className={`group flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} border-b border-gray-100 hover:bg-background-light transition-colors duration-300`}
            >
              {/* Image */}
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto md:min-h-[260px] overflow-hidden relative">
                <img
                  src={imgUrl(service.image, 800)}
                  srcSet={imgSrcSet(service.image, [400, 800, 1200])}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  width={800}
                  height={600}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={`${service.title} - RVS Bespoke Windsor`}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-3/5 flex items-center px-8 md:px-12 py-8">
                <div>
                  <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.4em] block mb-2">
                    0{i + 1}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-dark tracking-tight mb-3">
                    {service.shortTitle}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-5 max-w-md text-sm">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-3 text-primary-dark font-bold text-[10px] uppercase tracking-[0.4em] border-b-2 border-accent-gold pb-1 group-hover:gap-5 transition-all">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* FAQ */}
        <FAQSection faqs={servicesFaqs} className="bg-background-light" />

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
