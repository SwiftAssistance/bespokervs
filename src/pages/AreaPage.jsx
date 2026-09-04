import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgSrcSet } from '../utils/image';
import { areas } from '../config/areas';
import { areaFaqs } from '../config/faqs';
import FAQSection from '../components/FAQSection';

const services = [
  { name: 'Fitted Living Room, Dining Room & Kitchen', path: '/living-room', short: 'Living Room & Kitchen' },
  { name: 'Fitted Bedroom Furniture', path: '/bedroom', short: 'Bedroom' },
  { name: 'Fitted Home Office', path: '/home-office', short: 'Home Office' },
  { name: 'Loft Conversion Furniture', path: '/loft-conversion', short: 'Loft Conversion' },
  { name: 'Cloakroom & Under the Stairs', path: '/cloakroom', short: 'Cloakroom & Under the Stairs' },
];

const AreaPage = () => {
  const { areaSlug } = useParams();
  const area = areas.find((a) => a.slug === areaSlug);

  if (!area) return <Navigate to="/404" replace />;

  const canonicalUrl = `https://rvsbespoke.co.uk/areas/${area.slug}`;
  // Kept within Google's display limits: titles 50-65 chars, descriptions
  // 140-160. The previous versions ran to 89-98 and 171-178 and were being
  // truncated in search results.
  const title = `Fitted Furniture ${area.name} | Wardrobes, Kitchens & Storage`;
  const description = `Bespoke fitted furniture in ${area.name}, ${area.county}. Fitted wardrobes, kitchens, home offices and storage, designed and built in our Windsor workshop.`;
  const faqs = areaFaqs(area);

  const schema = {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      "url": canonicalUrl,
      "name": `Fitted Furniture ${area.name} | RVS Bespoke`,
      "description": description,
      "isPartOf": { "@id": "https://rvsbespoke.co.uk/#website" },
      "about": { "@id": "https://rvsbespoke.co.uk/#localbusiness" },
      "inLanguage": "en-GB",
      "mainEntity": {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        "name": `Bespoke Fitted Furniture in ${area.name}`,
        "serviceType": "Fitted furniture design, manufacture and installation",
        "provider": { "@id": "https://rvsbespoke.co.uk/#localbusiness" },
        "areaServed": {
          "@type": "City",
          "name": area.name,
          "containedInPlace": { "@type": "AdministrativeArea", "name": area.county },
        },
      },
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Areas We Cover", "item": "https://rvsbespoke.co.uk/areas" },
        { "@type": "ListItem", "position": 3, "name": area.name, "item": canonicalUrl },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(schema.webPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schema.breadcrumb)}</script>
      </Helmet>

      <div>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero.jpeg"
              srcSet={imgSrcSet('/images/hero.jpeg', [400, 800, 1200, 1920])}
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt={`Bespoke fitted furniture in ${area.name}, ${area.county}`}
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">
                {area.county} · {area.postcode}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Fitted Furniture{' '}
                <span className="text-accent-gold font-serif italic font-light">{area.name}</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke fitted furniture designed and built in our Windsor workshop — installed in homes across {area.name} and {area.county}.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-gray-600 text-xl leading-relaxed">{area.intro}</p>

            {area.nearby.length > 0 && (
              <p className="text-gray-400 text-sm mt-6">
                We also cover nearby areas including {area.nearby.join(', ')}.
              </p>
            )}

            <p className="text-gray-500 text-sm mt-4">
              {area.county === 'Berkshire'
                ? 'More on our work across the county: '
                : 'Just over the county line, we also cover '}
              <Link
                to="/fitted-furniture-berkshire"
                className="text-primary-dark font-medium underline decoration-accent-gold underline-offset-4 hover:text-accent-gold transition-colors"
              >
                fitted furniture in Berkshire
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-8 bg-background-light">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-10 text-center">
              What We Build in {area.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="group bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6"
                >
                  <h3 className="text-lg font-bold text-primary-dark leading-snug">{s.name}</h3>
                  <span className="inline-flex items-center gap-2 text-accent-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:gap-4 transition-all">
                    View Service <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} emitSchema={false} />

        {/* CTA */}
        <section className="py-20 px-8 bg-primary-dark text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Based in {area.name}?
            </h2>
            <p className="text-white/60 text-lg mb-10 font-light">
              Book a free design consultation at your home. No obligation, no hard sell — just an honest conversation about your space.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-accent-gold text-primary-dark px-12 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all"
            >
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AreaPage;
