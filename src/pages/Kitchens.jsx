import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ContactModal from '../components/ContactModal';

const Kitchens = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary-dark to-primary-darker"></div>
            <div className="absolute inset-0">
              <div className="absolute top-20 right-20 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-32 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent-gold"></div>
                <span className="text-white/50 text-[11px] uppercase tracking-[0.5em] font-bold">
                  Bespoke Kitchens
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6">
                Handcrafted Kitchens
                <span className="block text-accent-gold font-serif italic font-light">Made in Windsor</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-light">
                Custom fitted kitchens designed around you and built in our local workshop.
                From traditional shaker to contemporary handleless designs.
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
                  Your Kitchen, Your Way
                </h2>
                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
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

                <div className="mt-10">
                  <h3 className="text-lg font-bold text-primary-dark mb-5">What's Included</h3>
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
                      <span className="text-accent-gold text-2xl font-serif italic">K</span>
                    </div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Kitchen Project</p>
                  </div>
                </div>
                <div className="w-full h-[200px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center border border-gray-100">
                  <div className="text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Detail View</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-8 bg-background-light">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight">
                How We Work
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Design Visit', desc: 'We visit your home, take measurements, and discuss your requirements. No charge, no obligation.' },
                { step: '02', title: 'Drawings & Quote', desc: 'Detailed plans and 3D visuals so you can see exactly what you\'re getting before we start.' },
                { step: '03', title: 'Build', desc: 'Your kitchen is crafted in our workshop. Build time is typically 6-10 weeks depending on complexity.' },
                { step: '04', title: 'Installation', desc: 'Our team fits your kitchen with care. We handle plumbing and electrical coordination.' },
              ].map((item) => (
                <div key={item.step} className="bg-white p-6 border border-gray-100 hover:border-accent-gold/30 hover:shadow-lg transition-all">
                  <span className="text-4xl font-bold text-accent-gold/20">{item.step}</span>
                  <h3 className="text-lg font-bold text-primary-dark mt-3 mb-2">{item.title}</h3>
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
              Bespoke Kitchen Installation Across Berkshire
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto text-sm">
              We design and install bespoke kitchens throughout Windsor, Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-accent-gold text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-primary-dark transition-all"
            >
              Book a Design Visit <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Kitchens;
