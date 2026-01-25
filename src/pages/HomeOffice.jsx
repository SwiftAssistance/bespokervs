import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const HomeOffice = () => {
  const features = [
    'Custom desk to your dimensions',
    'Built-in shelving and storage',
    'Integrated cable management',
    'Filing drawers and cupboards',
    'Matching bookcases',
    'Timber or painted finishes',
    'Task lighting integration',
    'Ergonomic design focus',
  ];

  return (
    <>
      <Helmet>
        <title>Home Office Furniture Windsor | Bespoke Desks & Studies | RVS Bespoke</title>
        <meta name="description" content="Bespoke home office furniture in Windsor, Berkshire. Custom desks, built-in studies and office storage. Designed for remote working. Serving Ascot, Maidenhead. Free consultation." />
        <meta name="keywords" content="home office furniture Windsor, bespoke desk Berkshire, fitted study Ascot, custom office Maidenhead, built-in desk Windsor, home office design Slough, study furniture Windsor" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/home-office" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Bespoke Home Office Furniture Windsor",
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
            "description": "Custom home office furniture designed and built in our Windsor workshop. Bespoke desks, studies, and office storage solutions.",
            "serviceType": "Bespoke Home Office Design and Installation"
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt="Bespoke home office with custom desk and built-in storage in Windsor"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Home Offices</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Work From Home
                <span className="block text-accent-gold font-serif italic font-light">In Style</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke desks and study furniture designed for productive remote working.
                Built-in storage that keeps your workspace organised.
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
                  A Proper Place to Work
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Working from home needs more than a laptop on the kitchen table. A dedicated
                    workspace helps you focus, keeps work separate from home life, and looks
                    professional on video calls.
                  </p>
                  <p>
                    We design home offices that make the most of whatever space you have — whether
                    that's a spare bedroom, an alcove in the living room, or a corner of the loft.
                    Every desk, shelf, and drawer is built to fit the space exactly.
                  </p>
                  <p>
                    Our designs include integrated cable management to keep wires hidden, task
                    lighting to reduce eye strain, and enough storage to keep paperwork organised.
                    The result is a workspace that's practical and pleasant to use every day.
                  </p>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-primary-dark mb-6">What We Include</h3>
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
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  width={800}
                  height={350}
                  loading="lazy"
                  alt="Custom built-in home office desk with shelving in Berkshire"
                  className="w-full h-[350px] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800"
                  width={800}
                  height={250}
                  loading="lazy"
                  alt="Bespoke study furniture with integrated storage in Windsor home"
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
              Office Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Built-In Desk', desc: 'Custom desk fitted into alcoves, under stairs, or along walls. Maximises space while looking seamless.' },
                { title: 'Study Room', desc: 'Complete home study with desk, bookshelves, filing storage, and seating. A proper room for proper work.' },
                { title: 'Compact Office', desc: 'Clever solutions for small spaces. Fold-away desks, hidden storage, and dual-purpose furniture.' },
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
              Home Office Furniture Across Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke home offices throughout Windsor and the surrounding areas, including
              Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
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

export default HomeOffice;
