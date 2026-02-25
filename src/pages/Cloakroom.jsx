import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgUrl, imgSrcSet } from '../utils/image';

const Cloakroom = () => {
  const features = [
    'Fitted coat hooks and hanging rails',
    'Custom shoe racks and boot storage',
    'Built-in bench seating with storage',
    'Fitted shelving and cubby holes',
    'Bag and hat storage solutions',
    'Umbrella stands and key hooks',
    'Painted or timber finishes',
    'Moisture-resistant materials',
  ];

  return (
    <>
      <Helmet>
        <title>Fitted Cloakroom Furniture Windsor | Bespoke Boot Room & Hallway Storage | RVS Bespoke</title>
        <meta name="description" content="Bespoke fitted cloakroom furniture in Windsor, Berkshire. Custom boot rooms, coat storage, and hallway cabinetry. Handcrafted in our workshop. Free consultation." />
        <meta name="keywords" content="fitted cloakroom furniture Windsor, bespoke boot room Berkshire, hallway storage Ascot, coat cupboard Maidenhead, fitted hallway furniture Windsor" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/cloakroom" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fitted Cloakroom Furniture Windsor",
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
            "description": "Bespoke fitted cloakroom and hallway furniture designed and built in our Windsor workshop. Custom boot rooms, coat storage, and hallway solutions.",
            "serviceType": "Fitted Cloakroom Furniture Design and Installation"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Cloakroom", "item": "https://rvsbespoke.co.uk/cloakroom" }
            ]
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src={imgUrl('https://images.unsplash.com/photo-1558618666-fcd25c85cd64', 800)}
              srcSet={imgSrcSet('https://images.unsplash.com/photo-1558618666-fcd25c85cd64', [400, 800, 1200])}
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt="Bespoke fitted cloakroom and hallway storage in Windsor home"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Fitted Furniture</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Cloakroom
                <span className="block text-accent-gold font-serif italic font-light">Fitted Furniture</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke boot rooms, coat storage, and hallway cabinetry that keeps
                your entrance organised and welcoming.
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
                  First Impressions Count
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    The hallway and cloakroom are the first things guests see when they enter your home.
                    Fitted furniture turns a cluttered entrance into an organised, welcoming space where
                    everything has its place.
                  </p>
                  <p>
                    We design and build bespoke cloakroom furniture that tackles the practical challenges
                    of family life — muddy boots, wet coats, school bags, and dog leads. Our fitted
                    solutions include bench seating with storage underneath, hanging rails at different
                    heights, and shoe racks that keep the floor clear.
                  </p>
                  <p>
                    Whether you have a dedicated boot room, an under-stairs cupboard, or a narrow
                    hallway, we create fitted furniture that makes the most of your space. Durable
                    materials and practical finishes mean it stands up to daily wear and tear.
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
                  src={imgUrl('https://images.unsplash.com/photo-1558618666-fcd25c85cd64', 600)}
                  srcSet={imgSrcSet('https://images.unsplash.com/photo-1558618666-fcd25c85cd64', [400, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={350}
                  loading="lazy"
                  decoding="async"
                  alt="Custom fitted cloakroom with coat storage and bench seating in Berkshire"
                  className="w-full h-[350px] object-cover"
                />
                <img
                  src={imgUrl('https://images.unsplash.com/photo-1565793298595-6a879b1d9492', 600)}
                  srcSet={imgSrcSet('https://images.unsplash.com/photo-1565793298595-6a879b1d9492', [400, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  alt="Bespoke hallway furniture handcrafted in Windsor workshop"
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
              Cloakroom Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Boot Rooms', desc: 'Dedicated muddy boot and coat storage with bench seating, drying space, and easy-clean surfaces for active families.' },
                { title: 'Hallway Storage', desc: 'Slim fitted cabinets, coat hooks, and shelving designed for narrow hallways. Maximum storage without blocking the way.' },
                { title: 'Under-Stairs', desc: 'Clever pull-out drawers, shelving, and hanging space fitted into the awkward space beneath your staircase.' },
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
              Fitted Cloakroom Furniture Across Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke fitted cloakroom and hallway furniture throughout Windsor and the
              surrounding areas, including Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary-dark text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-accent-gold transition-all"
            >
              Discuss Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cloakroom;
