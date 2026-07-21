import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { areas } from '../config/areas';
import { siteConfig } from '../config/site';
import { serviceAreaFaqs } from '../config/faqs';
import { imgUrl, imgSrcSet } from '../utils/image';
import FAQSection from '../components/FAQSection';

const ServiceAreaPage = () => {
  const { areaSlug, serviceSlug } = useParams();
  const area = areas.find((a) => a.slug === areaSlug);
  const service = siteConfig.rooms.find((r) => r.id === serviceSlug);

  if (!area || !service) return <Navigate to="/404" replace />;

  const otherServices = siteConfig.rooms.filter((r) => r.id !== service.id);
  const nearbyAreas = area.nearby
    .map((name) => areas.find((a) => a.name === name))
    .filter(Boolean);

  const canonicalUrl = `https://rvsbespoke.co.uk/areas/${area.slug}/${service.id}`;
  const title = `Fitted ${service.shortTitle} ${area.name} | Bespoke ${service.shortTitle} | RVS Bespoke`;
  const description = `Bespoke fitted ${service.shortTitle.toLowerCase()} in ${area.name}, ${area.county}. ${service.description}. Designed and built in our Windsor workshop.`;
  const faqs = serviceAreaFaqs(area, service);

  const schema = {
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Fitted ${service.shortTitle} ${area.name}`,
      "provider": { "@id": "https://rvsbespoke.co.uk/#localbusiness" },
      "areaServed": [area.name, ...area.nearby, area.county],
      "description": description,
      "serviceType": service.title,
      "url": canonicalUrl,
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Areas We Cover", "item": "https://rvsbespoke.co.uk/areas" },
        { "@type": "ListItem", "position": 3, "name": area.name, "item": `https://rvsbespoke.co.uk/areas/${area.slug}` },
        { "@type": "ListItem", "position": 4, "name": service.shortTitle, "item": canonicalUrl },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`fitted ${service.shortTitle.toLowerCase()} ${area.name}, bespoke ${service.shortTitle.toLowerCase()} ${area.name}, ${service.shortTitle.toLowerCase()} installer ${area.county}, fitted furniture ${area.name}`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema.service)}</script>
        <script type="application/ld+json">{JSON.stringify(schema.breadcrumb)}</script>
      </Helmet>

      <div>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src={imgUrl(service.image, 800)}
              srcSet={imgSrcSet(service.image, [400, 800, 1200])}
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt={`Bespoke fitted ${service.shortTitle.toLowerCase()} in ${area.name}, ${area.county}`}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">
                {area.county} · {area.postcode}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Fitted {service.shortTitle}{' '}
                <span className="text-accent-gold font-serif italic font-light">{area.name}</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                {service.description} — designed and built in our Windsor workshop for homes across {area.name}.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-gray-600 text-xl leading-relaxed">{area.intro}</p>
            {nearbyAreas.length > 0 && (
              <p className="text-gray-400 text-sm mt-6">
                We also fit {service.shortTitle.toLowerCase()} in nearby{' '}
                {nearbyAreas.map((a, i) => (
                  <span key={a.slug}>
                    <Link to={`/areas/${a.slug}/${service.id}`} className="text-primary-dark underline hover:text-accent-gold">
                      {a.name}
                    </Link>
                    {i < nearbyAreas.length - 1 ? ', ' : ''}
                  </span>
                ))}
                .
              </p>
            )}
          </div>
        </section>

        {/* Other Services in this area */}
        <section className="py-20 px-8 bg-background-light">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-10 text-center">
              More Fitted Furniture in {area.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((s) => (
                <Link
                  key={s.id}
                  to={`/areas/${area.slug}/${s.id}`}
                  className="group bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6"
                >
                  <h3 className="text-lg font-bold text-primary-dark leading-snug">{s.title}</h3>
                  <span className="inline-flex items-center gap-2 text-accent-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:gap-4 transition-all">
                    View Service <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={faqs} />

        {/* CTA */}
        <section className="py-20 px-8 bg-primary-dark text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Fitted {service.shortTitle} in {area.name}?
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

export default ServiceAreaPage;
