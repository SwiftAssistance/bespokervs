import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgUrl, imgSrcSet } from '../utils/image';

const LivingRoom = () => {
  const features = [
    'Bespoke alcove cabinets and shelving',
    'Custom media units and TV walls',
    'Fitted bookshelves and display cases',
    'Window seats with hidden storage',
    'Built-in sideboards and dressers',
    'Fireplace surrounds and mantels',
    'Painted or natural timber finishes',
    'Colour-matched to your decor',
  ];

  return (
    <>
      <Helmet>
        <title>Fitted Living Room Furniture Windsor | Bespoke Cabinets & Storage | RVS Bespoke</title>
        <meta name="description" content="Bespoke fitted living room furniture in Windsor, Berkshire. Custom alcove cabinets, media units, bookshelves and storage. Handcrafted in our workshop. Free consultation." />
        <meta name="keywords" content="fitted living room furniture Windsor, bespoke alcove cabinets Berkshire, custom media unit Ascot, living room storage Maidenhead, built-in bookshelves Windsor" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/living-room" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fitted Living Room Furniture Windsor",
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
            "description": "Bespoke fitted living room furniture designed and built in our Windsor workshop. Custom alcove cabinets, media units, and storage solutions.",
            "serviceType": "Fitted Living Room Furniture Design and Installation"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Living Room", "item": "https://rvsbespoke.co.uk/living-room" }
            ]
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src={imgUrl('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0', 800)}
              srcSet={imgSrcSet('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0', [400, 800, 1200])}
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt="Bespoke fitted living room furniture crafted in Windsor by RVS Bespoke"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Fitted Furniture</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Living Room
                <span className="block text-accent-gold font-serif italic font-light">Fitted Furniture</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke cabinets, shelving, and storage designed to transform your living space.
                Handcrafted in our Windsor workshop, fitted to your room.
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
                  Furniture That Fits Your Life
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Your living room is where you relax, entertain, and spend time with family. It deserves
                    furniture that works as hard as you do — fitted perfectly to your space, with storage
                    for everything from books to media equipment.
                  </p>
                  <p>
                    We design and build bespoke fitted furniture for living rooms of every size and shape.
                    Alcove cabinets that use every inch, media walls that hide cables and clutter, and
                    bookshelves that turn a wall into a feature.
                  </p>
                  <p>
                    Every piece is made to measure in our Windsor workshop. We work with you to choose
                    materials, finishes, and details that complement your home — from contemporary painted
                    units to traditional timber designs.
                  </p>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-primary-dark mb-6">What We Offer</h3>
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
                  src={imgUrl('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0', 600)}
                  srcSet={imgSrcSet('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0', [400, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={350}
                  loading="lazy"
                  decoding="async"
                  alt="Bespoke fitted alcove cabinets and shelving in Windsor living room"
                  className="w-full h-[350px] object-cover"
                />
                <img
                  src={imgUrl('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92', 600)}
                  srcSet={imgSrcSet('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92', [400, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  alt="Custom fitted living room storage and display cabinets in Berkshire"
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
              Living Room Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Alcove Cabinets', desc: 'Fitted cabinets and shelving designed to make the most of alcoves either side of a chimney breast or any recess.' },
                { title: 'Media Walls', desc: 'Bespoke entertainment units with hidden cable management, integrated lighting, and space for all your equipment.' },
                { title: 'Storage & Display', desc: 'From built-in bookcases to window seats with storage, we create pieces that are both practical and beautiful.' },
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
              Fitted Living Room Furniture Across Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke fitted living room furniture throughout Windsor and the surrounding areas,
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

export default LivingRoom;
