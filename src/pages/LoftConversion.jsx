import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { loftConversionFaqs } from '../config/faqs';
import ImageCarousel from '../components/ImageCarousel';
import FAQSection from '../components/FAQSection';

const LoftConversion = () => {

  return (
    <>
      <Helmet>
        <title>Loft Conversion Fitted Furniture Windsor | Bespoke Storage | RVS Bespoke</title>
        <meta name="description" content="Bespoke fitted furniture for loft conversions in Windsor, Berkshire. Custom storage, wardrobes and built-in joinery to make the most of your loft space." />
        <meta name="keywords" content="loft conversion fitted furniture Windsor, bespoke eaves storage Berkshire, fitted wardrobes loft conversion Ascot, sloped ceiling wardrobes Windsor, loft joinery Berkshire" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/loft-conversion" />
        <meta property="og:title" content="Loft Conversion Fitted Furniture Windsor | Bespoke Storage | RVS Bespoke" />
        <meta property="og:description" content="Bespoke fitted furniture for loft conversions in Windsor, Berkshire. Custom storage, wardrobes and built-in joinery to make the most of your loft space." />
        <meta property="og:url" content="https://rvsbespoke.co.uk/loft-conversion" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Loft Conversion Fitted Furniture Windsor | Bespoke Storage | RVS Bespoke" />
        <meta name="twitter:description" content="Bespoke fitted furniture for loft conversions in Windsor, Berkshire. Custom eaves storage and wardrobes handcrafted in our workshop." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Loft Conversion Fitted Furniture Windsor",
            "provider": { "@id": "https://rvsbespoke.co.uk/#localbusiness" },
            "areaServed": ["Windsor", "Ascot", "Maidenhead", "Slough", "Berkshire"],
            "description": "Bespoke fitted furniture for loft conversions — working with eaves, sloped ceilings and awkward angles to maximise every usable inch of your loft space.",
            "serviceType": "Loft Conversion Fitted Furniture Design and Installation",
            "url": "https://rvsbespoke.co.uk/loft-conversion",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rvsbespoke.co.uk/services" },
              { "@type": "ListItem", "position": 3, "name": "Loft Conversion", "item": "https://rvsbespoke.co.uk/loft-conversion" },
            ],
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero.jpeg"
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-40"
              alt="Bespoke fitted loft conversion furniture in Windsor"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Fitted Furniture</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Loft
                <span className="block text-accent-gold font-serif italic font-light">Conversion</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke fitted furniture designed specifically for loft spaces
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tight mb-8">
                Making the Most of Your Loft
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Loft conversion fitted furniture designed to maximise space usage especially
                in the under eaves areas.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ImageCarousel images={[
                { src: '/images/loft_7.jpeg', alt: 'Fitted loft office with built-in desk and shelving in Maidenhead' },
                { src: '/images/loft_10.jpeg', alt: 'Fitted loft conversion bedroom furniture in Ascot home' },
                { src: '/images/loft_4.jpeg', alt: 'Bespoke eaves cupboards with pull-out drawers in Berkshire loft' },
                { src: '/images/loft_5.jpeg', alt: 'Custom fitted loft bedroom with built-in wardrobes in Ascot' },
                { src: '/images/loft_2.jpeg', alt: 'Custom fitted eaves storage and wardrobes in Berkshire loft' },
                { src: '/images/loft_6.jpeg', alt: 'Handcrafted loft conversion furniture with eaves storage in Windsor' },
                { src: '/images/loft_9.jpeg', alt: 'Custom fitted eaves storage with painted doors in Berkshire' },
                { src: '/images/loft_1.jpeg', alt: 'Bespoke fitted loft conversion storage in Windsor' },
                { src: '/images/loft_3.jpeg', alt: 'Fitted wardrobes under sloped ceiling in Windsor loft conversion' },
                { src: '/images/loft_8.jpeg', alt: 'Bespoke sloped ceiling wardrobes in Windsor loft conversion' },
              ]} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={loftConversionFaqs} />

        {/* Areas Served */}
        <section className="py-16 px-8 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Loft Conversion Furniture Across Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke loft furniture throughout Windsor and the surrounding areas,
              including Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary-dark text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-accent-gold transition-all"
            >
              Book a Design Visit <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoftConversion;
