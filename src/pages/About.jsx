import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
const About = () => {
  return (
    <div>
      <Helmet>
        <title>About RVS Bespoke | Master Furniture Craftsmen in Windsor, Berkshire</title>
        <meta name="description" content="RVS Bespoke operates from our workshop at 3 Riverway, Barry Avenue, Windsor. We design and build bespoke kitchens, wardrobes, and home offices for clients across Berkshire." />
        <link rel="canonical" href="https://rvsbespoke.co.uk/about" />
        <meta name="keywords" content="about RVS Bespoke, Windsor furniture maker, Berkshire joinery workshop, bespoke craftsmen, Barry Avenue Windsor" />
        <meta property="og:title" content="About RVS Bespoke | Master Craftsmen in Windsor" />
        <meta property="og:description" content="Operating from our Windsor workshop, we design and build bespoke fitted furniture for homes across Berkshire." />
        <meta property="og:url" content="https://rvsbespoke.co.uk/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About RVS Bespoke",
          "description": "RVS Bespoke operates from a workshop at 3 Riverway on Barry Avenue in Windsor. We design and build fitted furniture for clients across Berkshire.",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "RVS Bespoke",
            "description": "Bespoke furniture maker in Windsor, Berkshire",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3 Riverway, Barry Ave",
              "addressLocality": "Windsor",
              "postalCode": "SL4 5JA",
              "addressCountry": "GB"
            },
            "knowsAbout": ["Bespoke Kitchens", "Fitted Wardrobes", "Home Office Furniture", "Custom Joinery"]
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
            { "@type": "ListItem", "position": 2, "name": "About", "item": "https://rvsbespoke.co.uk/about" }
          ]
        })}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpeg"
            sizes="100vw"
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-40"
            alt="RVS Bespoke joinery workshop in Windsor, Berkshire"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
          <div className="max-w-3xl">
            <p className="text-accent-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">RVS Bespoke · Windsor</p>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              About <br />
              <span className="text-accent-gold font-serif italic font-light">Us</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl leading-relaxed">
              A family-run joinery workshop designing and building bespoke fitted furniture for homes across Berkshire.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[900px] mx-auto">
          <p className="text-2xl md:text-3xl text-primary-dark font-light leading-relaxed mb-12">
            We're a small, hands-on joinery business based at 3 Riverway, Barry Avenue, Windsor.
            Every piece of furniture we make is designed and built specifically for the space it goes into.
          </p>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              RVS Bespoke was founded on a simple belief: furniture should fit around your home, not the other way around.
              Standard off-the-shelf units rarely work well in older properties or rooms with unusual proportions.
              Made-to-measure joinery solves that — and it tends to look better doing it.
            </p>
            <p>
              We keep everything in-house, from the first site visit through to installation. That means
              one consistent team, clear communication, and the flexibility to adapt as a project takes shape —
              rather than being locked in by decisions made on day one.
            </p>
            <p>
              Our clients are mostly in Windsor, Ascot, Maidenhead, and the surrounding villages.
              We've fitted kitchens in Victorian terraces, built library walls in Edwardian houses,
              and created home offices in modern new-builds. No two jobs are the same, which suits us well.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-8 bg-background-light">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tighter mb-4">
            How it works
          </h2>
          <p className="text-gray-500 text-lg mb-12">A straightforward process, from first conversation to final fit.</p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold mb-3">01 — Site Visit</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We start with a free visit to measure the space and understand what you're after.
                No pressure — just a conversation about what's possible.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold mb-3">02 — Design & Quote</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We produce drawings and a detailed quote. For kitchens and larger projects,
                we include 3D renders so you can visualise the result before anything is built.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold mb-3">03 — Construction</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Everything is built at our Windsor workshop using solid timber and quality sheet materials.
                Wardrobes typically take four to six weeks; kitchens eight to twelve.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold mb-3">04 — Installation</p>
              <p className="text-gray-600 text-lg leading-relaxed">
                The same team that built your furniture installs it.
                We don't subcontract fitting work — ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-primary-dark">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-6">
            If you have a project in mind, get in touch.
          </h2>
          <p className="text-white/60 text-lg mb-10">
            We're happy to visit, take measurements, and provide a quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent-gold text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-primary-dark transition-all"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
