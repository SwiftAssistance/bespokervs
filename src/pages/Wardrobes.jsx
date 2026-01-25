import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Wardrobes = () => {
  const features = [
    'Made-to-measure for any space',
    'Hinged or sliding door options',
    'Custom internal layouts',
    'Soft-close mechanisms',
    'Integrated LED lighting',
    'Mirror and glass panels',
    'Painted or timber finishes',
    'Matching bedroom furniture',
  ];

  return (
    <>
      <Helmet>
        <title>Fitted Wardrobes Windsor | Bespoke Bedroom Furniture | RVS Bespoke</title>
        <meta name="description" content="Custom fitted wardrobes in Windsor, Berkshire. Bespoke bedroom storage designed and built in our workshop. Hinged & sliding doors. Serving Ascot, Maidenhead. Free consultation." />
        <meta name="keywords" content="fitted wardrobes Windsor, bespoke wardrobes Berkshire, built-in wardrobes Ascot, custom wardrobes Maidenhead, bedroom furniture Windsor, sliding wardrobes Slough, walk-in wardrobe Windsor" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/wardrobes" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fitted Wardrobes Windsor",
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
            "description": "Custom fitted wardrobes designed and built in our Windsor workshop. Bespoke bedroom storage solutions with hinged or sliding doors.",
            "serviceType": "Bespoke Wardrobe Design and Installation"
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=1200"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt="Bespoke fitted wardrobe with custom storage solutions in Windsor"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Fitted Wardrobes</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Bespoke Wardrobes
                <span className="block text-accent-gold font-serif italic font-light">Built to Fit</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Fitted wardrobes designed to maximise every inch of your space.
                From alcove storage to walk-in dressing rooms.
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
                    Off-the-shelf wardrobes rarely fit properly. There are gaps at the top, wasted
                    space in corners, and the internal layout is a compromise. Our fitted wardrobes
                    are made to measure, designed specifically for your room and your belongings.
                  </p>
                  <p>
                    We build wardrobes for bedrooms of all sizes — from compact alcoves in Victorian
                    terraces to spacious walk-in dressing rooms in new builds. Every internal shelf,
                    rail, and drawer is positioned exactly where you need it.
                  </p>
                  <p>
                    Choose from hinged doors for a traditional look or sliding doors to save space.
                    We offer painted finishes in any colour, natural timber veneers, and can incorporate
                    mirrors, glass panels, or fabric inserts.
                  </p>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-primary-dark mb-6">Features</h3>
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
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
                  alt="Custom fitted wardrobe interior with organised storage in Berkshire home"
                  className="w-full h-[350px] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800"
                  alt="Bespoke wardrobe doors handcrafted in Windsor workshop"
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
              Wardrobe Styles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Hinged Door', desc: 'Classic wardrobes with traditional hinged doors. Available with shaker, panelled, or plain door styles.' },
                { title: 'Sliding Door', desc: 'Space-saving sliding door wardrobes. Ideal for bedrooms where door swing is limited.' },
                { title: 'Walk-In', desc: 'Open wardrobe systems for dressing rooms. Custom shelving, rails, and drawer units.' },
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
              Fitted Wardrobes Across Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke wardrobes throughout Windsor and the surrounding areas, including
              Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
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

export default Wardrobes;
