import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgUrl, imgSrcSet } from '../utils/image';

const Bathroom = () => {
  const features = [
    'Bespoke vanity units and basins',
    'Fitted storage cabinets and shelving',
    'Moisture-resistant materials and finishes',
    'Mirrored cabinets with lighting',
    'Towel storage and linen cupboards',
    'Under-sink cabinetry',
    'Painted or timber finishes',
    'Wall-hung or freestanding options',
  ];

  return (
    <>
      <Helmet>
        <title>Fitted Bathroom Furniture Windsor | Bespoke Vanity Units & Storage | RVS Bespoke</title>
        <meta name="description" content="Bespoke fitted bathroom furniture in Windsor, Berkshire. Custom vanity units, storage cabinets, and shelving. Moisture-resistant finishes. Free consultation." />
        <meta name="keywords" content="fitted bathroom furniture Windsor, bespoke vanity unit Berkshire, bathroom cabinets Ascot, custom bathroom storage Maidenhead, fitted bathroom Windsor" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/bathroom" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fitted Bathroom Furniture Windsor",
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
            "description": "Bespoke fitted bathroom furniture designed and built in our Windsor workshop. Custom vanity units, cabinets, and storage solutions.",
            "serviceType": "Fitted Bathroom Furniture Design and Installation"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Bathroom", "item": "https://rvsbespoke.co.uk/bathroom" }
            ]
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src={imgUrl('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14', 800)}
              srcSet={imgSrcSet('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14', [400, 800, 1200])}
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt="Bespoke fitted bathroom furniture with custom vanity unit in Windsor"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Fitted Furniture</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Bathroom
                <span className="block text-accent-gold font-serif italic font-light">Fitted Furniture</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Handcrafted vanity units, storage cabinets, and shelving designed
                to bring luxury and order to your bathroom.
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
                  Built for the Bathroom
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Bathrooms need furniture that looks beautiful and handles moisture without complaint.
                    Our fitted bathroom furniture is built using materials specifically chosen for wet
                    environments, with finishes that resist humidity and splashes.
                  </p>
                  <p>
                    We design vanity units that fit your basin perfectly, with storage underneath for
                    toiletries and cleaning supplies. Mirrored cabinets with integrated lighting,
                    towel cupboards, and fitted shelving — all built to your exact dimensions.
                  </p>
                  <p>
                    Whether you have a compact en-suite or a spacious family bathroom, we create
                    fitted furniture that maximises storage and makes the room feel considered
                    and complete.
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
                  src={imgUrl('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14', 600)}
                  srcSet={imgSrcSet('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14', [400, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={350}
                  loading="lazy"
                  decoding="async"
                  alt="Custom fitted bathroom vanity unit with storage in Berkshire home"
                  className="w-full h-[350px] object-cover"
                />
                <img
                  src={imgUrl('https://images.unsplash.com/photo-1507652313519-d4e9174996dd', 600)}
                  srcSet={imgSrcSet('https://images.unsplash.com/photo-1507652313519-d4e9174996dd', [400, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  alt="Bespoke fitted bathroom cabinets handcrafted in Windsor workshop"
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
              Bathroom Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Vanity Units', desc: 'Custom vanity units built to fit your basin and space. Soft-close drawers, internal organisers, and moisture-resistant finishes.' },
                { title: 'Storage Cabinets', desc: 'Tall boys, wall-hung cabinets, and fitted shelving to keep towels, toiletries, and linens organised and accessible.' },
                { title: 'En-Suite Solutions', desc: 'Compact fitted furniture for smaller bathrooms. Clever storage that makes the most of every inch without cluttering the room.' },
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
              Fitted Bathroom Furniture Across Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke fitted bathroom furniture throughout Windsor and the surrounding areas,
              including Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary-dark text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-accent-gold transition-all"
            >
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bathroom;
