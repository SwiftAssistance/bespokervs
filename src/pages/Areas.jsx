import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { areas } from '../config/areas';

const Areas = () => {
  return (
    <>
      <Helmet>
        <title>Areas We Cover | Fitted Furniture Berkshire & Surrey | RVS Bespoke</title>
        <meta name="description" content="RVS Bespoke fits bespoke furniture across Windsor, Ascot, Maidenhead, Slough, Virginia Water and surrounding Berkshire and Surrey areas. Handcrafted in our Windsor workshop." />
        <link rel="canonical" href="https://rvsbespoke.co.uk/areas" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Areas We Cover", "item": "https://rvsbespoke.co.uk/areas" },
            ],
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero.jpeg"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt="RVS Bespoke fitted furniture workshop Windsor"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Where We Work</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Areas We <span className="text-accent-gold font-serif italic font-light">Cover</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                We design and install bespoke fitted furniture across Windsor, Berkshire, and the surrounding areas. Based in Windsor, we cover a wide radius with no extra travel charges.
              </p>
            </div>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  className="group border border-gray-100 p-8 hover:border-accent-gold hover:bg-background-light transition-all flex flex-col justify-between gap-6"
                >
                  <div>
                    <p className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                      {area.county} · {area.postcode}
                    </p>
                    <h2 className="text-2xl font-bold text-primary-dark mb-3">
                      Fitted Furniture {area.name}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{area.intro}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-primary-dark text-[10px] font-bold uppercase tracking-[0.3em] group-hover:gap-4 transition-all">
                    View {area.name} <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-8 bg-primary-dark text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Don't See Your Area?
            </h2>
            <p className="text-white/60 text-lg mb-10 font-light">
              We cover a wide area from our Windsor workshop. Get in touch and we'll let you know if we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-accent-gold text-primary-dark px-12 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Areas;
