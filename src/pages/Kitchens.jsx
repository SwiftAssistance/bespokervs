import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgUrl, imgSrcSet } from '../utils/image';

const Kitchens = () => {
  const features = [
    'Custom cabinetry with dovetail joints',
    'Solid hardwood and premium materials',
    'Soft-close drawers and hinges',
    'Integrated appliance solutions',
    'Bespoke island designs',
    'Granite, quartz or timber worktops',
    'Hand-painted or natural finishes',
    'Lifetime structural warranty',
  ];

  return (
    <>
      <Helmet>
        <title>Bespoke Kitchens Windsor | Handmade Fitted Kitchens | RVS Bespoke</title>
        <meta name="description" content="Handcrafted bespoke kitchens in Windsor, Berkshire. Custom fitted kitchens designed and built in our local workshop. Serving Ascot, Maidenhead, Slough. Free design consultation." />
        <meta name="keywords" content="bespoke kitchens Windsor, fitted kitchens Berkshire, handmade kitchens Ascot, custom kitchen design Maidenhead, luxury kitchens Slough, kitchen fitters Windsor, shaker kitchens Windsor, contemporary kitchens Berkshire" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/kitchens" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Bespoke Kitchens Windsor",
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
            "description": "Handcrafted bespoke kitchens designed and built in our Windsor workshop. Custom fitted kitchens using premium materials and traditional joinery.",
            "serviceType": "Bespoke Kitchen Design and Installation"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rvsbespoke.co.uk/services" },
              { "@type": "ListItem", "position": 3, "name": "Kitchens", "item": "https://rvsbespoke.co.uk/kitchens" }
            ]
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src={imgUrl('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136', 800)}
              srcSet={imgSrcSet('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136', [400, 800, 1200])}
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt="Bespoke fitted kitchen handcrafted in Windsor by RVS Bespoke"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Bespoke Kitchens</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Handcrafted Kitchens
                <span className="block text-accent-gold font-serif italic font-light">Made in Windsor</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Custom fitted kitchens designed around you and built in our local workshop.
                From traditional shaker to contemporary handleless designs.
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
                  Your Kitchen, Your Way
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Every kitchen we build starts with your ideas. We visit your home, measure the space,
                    and discuss how you cook, entertain, and live. Then we design a kitchen that works
                    for you — not a showroom compromise.
                  </p>
                  <p>
                    Our kitchens are built entirely in our Windsor workshop using solid hardwoods,
                    premium sheet materials, and quality hardware. We don't use flat-pack carcasses
                    or import pre-made units. Every cabinet, drawer, and shelf is made by us.
                  </p>
                  <p>
                    Whether you want a classic shaker kitchen, a sleek handleless design, or something
                    completely unique, we can build it. We work with painted finishes, natural timber,
                    and can match any colour you choose.
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
                  src={imgUrl('https://images.unsplash.com/photo-1556911220-e15b29be8c8f', 600)}
                  srcSet={imgSrcSet('https://images.unsplash.com/photo-1556911220-e15b29be8c8f', [400, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={350}
                  loading="lazy"
                  decoding="async"
                  alt="Bespoke kitchen island with granite worktop in Windsor home"
                  className="w-full h-[350px] object-cover"
                />
                <img
                  src={imgUrl('https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 600)}
                  srcSet={imgSrcSet('https://images.unsplash.com/photo-1600585154340-be6161a56a0c', [400, 600, 800])}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  width={800}
                  height={250}
                  loading="lazy"
                  decoding="async"
                  alt="Custom fitted kitchen cabinetry handmade in Berkshire"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-8 bg-background-light">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-12 text-center">
              How We Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Design Visit', desc: 'We visit your home, take measurements, and discuss your requirements. No charge, no obligation.' },
                { step: '02', title: 'Drawings & Quote', desc: 'Detailed plans and 3D visuals so you can see exactly what you\'re getting before we start.' },
                { step: '03', title: 'Build', desc: 'Your kitchen is crafted in our workshop. Build time is typically 6-10 weeks depending on complexity.' },
                { step: '04', title: 'Installation', desc: 'Our team fits your kitchen with care. We handle plumbing and electrical coordination.' },
              ].map((item) => (
                <div key={item.step} className="bg-white p-8 shadow-sm">
                  <span className="text-4xl font-bold text-accent-gold/30">{item.step}</span>
                  <h3 className="text-xl font-bold text-primary-dark mt-4 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-16 px-8 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Bespoke Kitchen Installation Across Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke kitchens throughout Windsor and the surrounding areas, including
              Ascot, Maidenhead, Slough, Eton, Datchet, Old Windsor, and Sunningdale.
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

export default Kitchens;
