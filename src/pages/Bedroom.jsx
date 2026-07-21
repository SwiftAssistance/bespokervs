import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgUrl, imgSrcSet } from '../utils/image';
import { bedroomFaqs } from '../config/faqs';
import ImageCarousel from '../components/ImageCarousel';
import FAQSection from '../components/FAQSection';

const Bedroom = () => {

  return (
    <>
      <Helmet>
        <title>Fitted Bedroom Furniture Windsor | Bespoke Wardrobes & Storage | RVS Bespoke</title>
        <meta name="description" content="Bespoke fitted bedroom furniture in Windsor, Berkshire. Custom wardrobes, dressing tables, and bedroom storage. Handcrafted in our workshop. Free consultation." />
        <meta name="keywords" content="fitted bedroom furniture Windsor, bespoke wardrobes Berkshire, fitted wardrobes Ascot, custom bedroom storage Maidenhead, built-in wardrobes Windsor" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/bedroom" />
        <meta property="og:title" content="Fitted Bedroom Furniture Windsor | Bespoke Wardrobes & Storage | RVS Bespoke" />
        <meta property="og:description" content="Bespoke fitted bedroom furniture in Windsor, Berkshire. Custom wardrobes, dressing tables, and bedroom storage. Handcrafted in our workshop." />
        <meta property="og:url" content="https://rvsbespoke.co.uk/bedroom" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Fitted Bedroom Furniture Windsor | Bespoke Wardrobes & Storage | RVS Bespoke" />
        <meta name="twitter:description" content="Bespoke fitted bedroom furniture in Windsor, Berkshire. Custom wardrobes, dressing tables, and bedroom storage. Handcrafted in our workshop." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fitted Bedroom Furniture Windsor",
            "provider": { "@id": "https://rvsbespoke.co.uk/#localbusiness" },
            "areaServed": ["Windsor", "Ascot", "Maidenhead", "Slough", "Berkshire"],
            "description": "Bespoke fitted bedroom furniture designed and built in our Windsor workshop. Custom wardrobes, dressing tables, and bedroom storage solutions.",
            "serviceType": "Fitted Bedroom Furniture Design and Installation",
            "url": "https://rvsbespoke.co.uk/bedroom",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rvsbespoke.co.uk/services" },
              { "@type": "ListItem", "position": 3, "name": "Bedroom", "item": "https://rvsbespoke.co.uk/bedroom" },
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
              alt="Bespoke fitted bedroom furniture with custom wardrobes in Windsor"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Fitted Furniture</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Bedroom
                <span className="block text-accent-gold font-serif italic font-light">Fitted Furniture</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke fitted furniture, walk in wardrobes, and bedroom storage
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tight mb-8">
                Storage That Works
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The internal layout of stand alone wardrobes is usually a compromise. Our bedroom
                fitted furniture is designed to maximise usage of the available space and designed
                specifically for your room and your belongings.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ImageCarousel images={[
                { src: '/images/bedroom_23.jpeg', alt: 'Bespoke fitted bedroom with luxury dressing room in Berkshire' },
                { src: '/images/bedroom_18.jpeg', alt: 'Custom fitted wardrobe with shoe storage and drawers in Windsor' },
                { src: '/images/bedroom_21.jpeg', alt: 'Bespoke fitted bedroom furniture in Windsor home' },
                { src: '/images/bedroom_22.jpeg', alt: 'Custom fitted wardrobe with painted finish in Berkshire bedroom' },
                { src: '/images/bedroom_16.jpeg', alt: 'Bespoke fitted sliding door wardrobes in Windsor bedroom' },
                { src: '/images/bedroom_1.jpeg', alt: 'Custom fitted wardrobes with organised internal storage in Berkshire bedroom' },
                { src: '/images/bedroom_2.jpeg', alt: 'Bespoke fitted bedroom storage handcrafted in Windsor workshop' },
                { src: '/images/bedroom_4.jpeg', alt: 'Bespoke dressing room with open shelving and hanging rails in Berkshire' },
                { src: '/images/bedroom_5.jpeg', alt: 'Custom fitted wardrobe interiors with drawers and shelves in Ascot' },
                { src: '/images/bedroom_6.jpeg', alt: 'Handcrafted fitted bedroom furniture with painted finish in Windsor' },
                { src: '/images/bedroom_7.jpeg', alt: 'Bespoke walk-in wardrobe with island unit in Maidenhead home' },
                { src: '/images/bedroom_8.jpeg', alt: 'Fitted alcove wardrobes with integrated bedside units in Windsor' },
                { src: '/images/bedroom_9.jpeg', alt: 'Custom fitted headboard with bedside cabinets in Berkshire bedroom' },
                { src: '/images/bedroom_10.jpeg', alt: 'Bespoke fitted dressing table with mirror in Windsor home' },
                { src: '/images/bedroom_11.jpeg', alt: 'Floor to ceiling painted wardrobes in Ascot bedroom' },
                { src: '/images/bedroom_12.jpeg', alt: 'Custom fitted bedroom storage with soft close drawers in Slough' },
                { src: '/images/bedroom_13.jpeg', alt: 'Bespoke fitted wardrobe with internal lighting in Windsor' },
                { src: '/images/bedroom_14.jpeg', alt: 'Handcrafted fitted bedroom in Maidenhead with shaker doors' },
                { src: '/images/bedroom_20.jpeg', alt: 'Handcrafted fitted wardrobes with integrated lighting in Windsor home' },
              ]} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={bedroomFaqs} />

        {/* Areas Served */}
        <section className="py-16 px-8 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Fitted Bedroom Furniture Across Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke fitted bedroom furniture throughout Windsor and the surrounding areas,
              including Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary-dark text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-accent-gold transition-all"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bedroom;
