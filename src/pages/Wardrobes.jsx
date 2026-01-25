import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ContactModal from '../components/ContactModal';

const Wardrobes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary-dark to-primary-darker"></div>
            <div className="absolute inset-0">
              <div className="absolute top-20 right-32 w-72 h-72 bg-accent-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-56 h-56 bg-accent-gold/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent-gold"></div>
                <span className="text-white/50 text-[11px] uppercase tracking-[0.5em] font-bold">
                  Fitted Wardrobes
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6">
                Bespoke Wardrobes
                <span className="block text-accent-gold font-serif italic font-light">Built to Fit</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-light">
                Fitted wardrobes designed to maximise every inch of your space.
                From alcove storage to walk-in dressing rooms.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-primary-dark tracking-tight mb-8">
                  Storage That Works
                </h2>
                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
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

                <div className="mt-10">
                  <h3 className="text-lg font-bold text-primary-dark mb-5">Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={16} className="text-accent-gold mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-full h-[280px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center border border-gray-100">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent-gold/10 flex items-center justify-center">
                      <span className="text-accent-gold text-2xl font-serif italic">W</span>
                    </div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Wardrobe Project</p>
                  </div>
                </div>
                <div className="w-full h-[200px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center border border-gray-100">
                  <div className="text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Interior Detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Styles Section */}
        <section className="py-20 px-8 bg-background-light">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
                Options
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight">
                Wardrobe Styles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Hinged Door', desc: 'Classic wardrobes with traditional hinged doors. Available with shaker, panelled, or plain door styles.' },
                { title: 'Sliding Door', desc: 'Space-saving sliding door wardrobes. Ideal for bedrooms where door swing is limited.' },
                { title: 'Walk-In', desc: 'Open wardrobe systems for dressing rooms. Custom shelving, rails, and drawer units.' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 border border-gray-100 hover:border-accent-gold/30 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-primary-dark mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-primary-dark">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Fitted Wardrobes Across Berkshire
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto text-sm">
              We design and install bespoke wardrobes throughout Windsor, Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-accent-gold text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-primary-dark transition-all"
            >
              Get a Free Quote <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Wardrobes;
