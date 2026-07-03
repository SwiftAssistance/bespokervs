import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { portfolio } from '../config/portfolio';

const totalImages = portfolio.reduce((sum, section) => sum + section.images.length, 0);

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Our Work | Fitted Furniture Portfolio | RVS Bespoke Windsor</title>
        <meta name="description" content={`Browse ${totalImages}+ real projects: fitted wardrobes, alcove cabinets, media walls, kitchens, home offices and under-stair storage — all designed and built by RVS Bespoke in Windsor, Berkshire.`} />
        <meta name="keywords" content="fitted furniture portfolio Windsor, fitted wardrobe examples Berkshire, alcove cabinet photos, media wall examples Windsor, bespoke furniture gallery Berkshire" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/portfolio" />
        <meta property="og:title" content="Our Work | Fitted Furniture Portfolio | RVS Bespoke Windsor" />
        <meta property="og:description" content="Real fitted furniture projects designed and built in our Windsor workshop — wardrobes, alcove cabinets, media walls, kitchens, home offices and more." />
        <meta property="og:url" content="https://rvsbespoke.co.uk/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Our Work | Fitted Furniture Portfolio | RVS Bespoke Windsor" />
        <meta name="twitter:description" content="Real fitted furniture projects designed and built in our Windsor workshop." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "RVS Bespoke Portfolio — Fitted Furniture Projects",
            "url": "https://rvsbespoke.co.uk/portfolio",
            "description": "Photographs of completed bespoke fitted furniture projects by RVS Bespoke across Windsor and Berkshire.",
            "publisher": { "@id": "https://rvsbespoke.co.uk/#organization" },
            "hasPart": portfolio.map((section) => ({
              "@type": "ImageGallery",
              "name": section.title,
              "url": `https://rvsbespoke.co.uk${section.path}`,
              "description": section.description,
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://rvsbespoke.co.uk/portfolio" },
            ],
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/living_room_1.jpeg"
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt="Bespoke fitted alcove cabinets handcrafted by RVS Bespoke in Windsor"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Real Projects, Real Homes</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Our <span className="text-accent-gold font-serif italic font-light">Work</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Every photo below is a real commission — designed, built in our Windsor workshop,
                and installed in a home across Berkshire. No stock images, no showroom sets.
              </p>
            </div>
          </div>
        </section>

        {/* Galleries */}
        {portfolio.map((section, sectionIndex) => (
          <section
            key={section.id}
            className={`py-20 px-8 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-background-light'}`}
          >
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed">{section.description}</p>
                </div>
                <Link
                  to={section.path}
                  className="inline-flex items-center gap-3 text-primary-dark font-bold text-[10px] uppercase tracking-[0.4em] border-b-2 border-accent-gold pb-1 hover:gap-5 transition-all whitespace-nowrap"
                >
                  About This Service <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {section.images.map((img) => (
                  <div key={img.src} className="aspect-square overflow-hidden bg-gray-100 group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      width={400}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 px-8 bg-primary-dark text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Like What You See?
            </h2>
            <p className="text-white/60 text-lg mb-10 font-light">
              Every project here started with a free design consultation. Tell us about your
              space and we'll show you what's possible.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-accent-gold text-primary-dark px-12 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all"
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
