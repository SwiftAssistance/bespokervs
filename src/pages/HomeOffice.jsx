import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ContactModal from '../components/ContactModal';

const HomeOffice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary-dark to-primary-darker"></div>
            <div className="absolute inset-0">
              <div className="absolute top-32 right-20 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-32 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent-gold"></div>
                <span className="text-white/50 text-[11px] uppercase tracking-[0.5em] font-bold">
                  Home Offices
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6">
                Work From Home
                <span className="block text-accent-gold font-serif italic font-light">In Style</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-light">
                Bespoke desks and study furniture designed for productive remote working.
                Built-in storage that keeps your workspace organised.
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
                  A Proper Place to Work
                </h2>
                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
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

                <div className="mt-10">
                  <h3 className="text-lg font-bold text-primary-dark mb-5">What We Include</h3>
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
                      <span className="text-accent-gold text-2xl font-serif italic">O</span>
                    </div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Office Project</p>
                  </div>
                </div>
                <div className="w-full h-[200px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center border border-gray-100">
                  <div className="text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-wider">Storage Detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-8 bg-background-light">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
                Options
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight">
                Office Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Built-In Desk', desc: 'Custom desk fitted into alcoves, under stairs, or along walls. Maximises space while looking seamless.' },
                { title: 'Study Room', desc: 'Complete home study with desk, bookshelves, filing storage, and seating. A proper room for proper work.' },
                { title: 'Compact Office', desc: 'Clever solutions for small spaces. Fold-away desks, hidden storage, and dual-purpose furniture.' },
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
              Home Office Furniture Across Berkshire
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto text-sm">
              We design and install bespoke home offices throughout Windsor, Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-accent-gold text-white px-10 py-5 font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-primary-dark transition-all"
            >
              Discuss Your Project <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HomeOffice;
