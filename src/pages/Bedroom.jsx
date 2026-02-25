import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgUrl, imgSrcSet } from '../utils/image';

const Bedroom = () => {
  const features = [
    'Made-to-measure fitted wardrobes',
    'Hinged or sliding door options',
    'Custom internal layouts and organisers',
    'Bedside tables and headboard units',
    'Fitted dressing tables and vanity areas',
    'Soft-close mechanisms throughout',
    'Integrated LED lighting',
    'Painted or timber finishes',
  ];

  return (
    <>
      <Helmet>
        <title>Fitted Bedroom Furniture Windsor | Bespoke Wardrobes & Storage | RVS Bespoke</title>
        <meta name="description" content="Bespoke fitted bedroom furniture in Windsor, Berkshire. Custom wardrobes, dressing tables, and bedroom storage. Handcrafted in our workshop. Free consultation." />
        <meta name="keywords" content="fitted bedroom furniture Windsor, bespoke wardrobes Berkshire, fitted wardrobes Ascot, custom bedroom storage Maidenhead, built-in wardrobes Windsor" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/bedroom" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fitted Bedroom Furniture Windsor",
            "provider": {
              "@type": "LocalBusiness",
              "name": "RVS Bespoke",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Windsor",
                "addressRegion": "Berkshire",
                "postalCode": "SL4 5JA"
              }
            },
            "areaServed": ["Windsor", "Ascot", "Maidenhead", "Slough", "Berkshire"],
            "description": "Bespoke fitted bedroom furniture designed and built in our Windsor workshop. Custom wardrobes, dressing tables, and bedroom storage solutions.",
            "serviceType": "Fitted Bedroom Furniture Design and Installation"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Bedroom", "item": "https://rvsbespoke.co.uk/bedroom" }
            ]
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src={imgUrl('https://images.unsplash.com/photo-1616594039964-ae9021a400a0', 800)}
              srcSet={imgSrcSet('https://images.unsplash.com/photo-1616594039964-ae9021a400a0', [400, 800, 1200])}
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
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
                Bespoke fitted wardrobes, dressing areas, and bedroom storage designed
                to maximise every inch of your space.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-32 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tight mb-8">
                  Storage That Works
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Off-the-shelf wardrobes rarely fit properly. There are gaps at the top, wasted space
                    in corners, and the internal layout is always a compromise. Our fitted bedroom
                    furniture is made to measure, designed specifically for your room and your belongings.
                  </p>
                  <p>
                    We build fitted furniture for bedrooms of all sizes — from compact alcove wardrobes
                    in Victorian terraces to spacious walk-in dressing rooms in new builds. Every shelf,
                    rail, and drawer is positioned exactly where you need it.
                  </p>
                  <p>
                    Choose from hinged doors for a traditional look or sliding doors to save space.
                    We offer painted finishes in any colour, natural timber veneers, and can incorporate
                    mirrors, glass panels, or fabric inserts.
                  </p>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-primary-dark mb-6">What's Included</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={18} className="text-accent-gold mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <img
                  src={imgUrl('https://images.unsplash.com/photo-1616594039964-ae9021a400a0', 600)}
                  srcSet={imgSrcSet('https://images.unsplash.com/photo-1616594039964-ae9021a400a0', [400, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={350}
                  loading="lazy"
                  decoding="async"
                  alt="Custom fitted wardrobes with organised internal storage in Berkshire bedroom"
                  className="w-full h-[350px] object-cover"
                />
                <img
                  src={imgUrl('https://images.unsplash.com/photo-1558997519-83ea9252edf8', 600)}
                  srcSet={imgSrcSet('https://images.unsplash.com/photo-1558997519-83ea9252edf8', [400, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  alt="Bespoke fitted bedroom storage handcrafted in Windsor workshop"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Options Section */}
        <section className="py-20 px-8 bg-background-light">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-12 text-center">
              Bedroom Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Fitted Wardrobes', desc: 'Hinged or sliding door wardrobes built into alcoves, across walls, or floor to ceiling. Custom interiors with rails, shelves, and drawers.' },
                { title: 'Dressing Rooms', desc: 'Walk-in wardrobe systems with open shelving, shoe racks, jewellery drawers, and integrated lighting for a luxury dressing experience.' },
                { title: 'Bedroom Storage', desc: 'Bedside cabinets, under-bed drawers, blanket boxes, and fitted headboard units. Matching furniture to complete the room.' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
