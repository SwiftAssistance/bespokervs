import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Hammer, PaintRoller, Ruler } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgSrcSet } from '../utils/image';
import { siteConfig } from '../config/site';
import { areas } from '../config/areas';
import { berkshireFaqs } from '../config/faqs';
import ImageCarousel from '../components/ImageCarousel';
import FAQSection from '../components/FAQSection';

/**
 * County landing page targeting "fitted furniture Berkshire".
 *
 * The town pages under /areas/:slug each own their own town query; this page
 * owns the county-level one and links down to them, so the two don't compete
 * for the same result. Coverage claims here deliberately match the rest of
 * the site (Windsor workshop, roughly a 15 mile radius, no travel charge) —
 * do not widen them to the whole county.
 */

const canonicalUrl = 'https://rvsbespoke.co.uk/fitted-furniture-berkshire';
const title = 'Fitted Furniture Berkshire | Bespoke Fitted Furniture Makers';
const description =
  'Bespoke fitted furniture across Berkshire — fitted wardrobes, alcove cabinets, media walls, kitchens and home offices, made in our Windsor workshop and installed by us.';

const berkshireAreas = areas.filter((area) => area.county === 'Berkshire');

// Villages and neighbourhoods pulled from the town pages, minus anything that
// is already a town page in its own right, so the list adds coverage rather
// than repeating the grid above it.
const berkshireTownNames = new Set(berkshireAreas.map((a) => a.name));
const berkshireVillages = [
  ...new Set(berkshireAreas.flatMap((a) => a.nearby).filter((n) => !berkshireTownNames.has(n))),
].sort();

const berkshireTestimonials = siteConfig.home.testimonials.items.filter((t) =>
  ['Windsor', 'Ascot', 'Maidenhead', 'Slough', 'Eton', 'Sunningdale', 'Sunninghill', 'Datchet', 'Wokingham', 'Bracknell'].includes(t.location)
);

const services = [
  {
    path: '/living-room',
    name: 'Living Room, Dining Room & Kitchen',
    copy: 'Alcove cabinets, bookcases, media walls and kitchen cabinetry built around the room you already have.',
  },
  {
    path: '/bedroom',
    name: 'Fitted Bedrooms & Wardrobes',
    copy: 'Fitted and walk-in wardrobes, dressing rooms and bedroom storage laid out around what you actually own.',
  },
  {
    path: '/home-office',
    name: 'Fitted Home Offices',
    copy: 'Built-in desks, shelving and cable management for a study that works as hard as the rest of the house.',
  },
  {
    path: '/loft-conversion',
    name: 'Loft Conversion Furniture',
    copy: 'Eaves storage and wardrobes made for sloped ceilings, where nothing off the shelf will ever fit.',
  },
  {
    path: '/cloakroom',
    name: 'Cloakroom & Under-Stair Storage',
    copy: 'Boot rooms, hallway cabinetry and under-stair storage that turn dead space into useful space.',
  },
];

const reasons = [
  {
    icon: Hammer,
    title: 'Made in Windsor, not bought in',
    copy: 'Everything is built in our own workshop on Barry Avenue and installed by the same team that made it. Nothing is subcontracted, including lighting and electrics.',
  },
  {
    icon: Ruler,
    title: 'Measured to your room',
    copy: 'Berkshire homes run from Victorian terraces to new builds. Each piece is measured on site and scribed to the walls rather than fitted from standard carcass sizes.',
  },
  {
    icon: PaintRoller,
    title: 'Hand-painted finish included',
    copy: 'Hand painted in eggshell or satinwood in a colour of your choice — Farrow & Ball, Little Greene and Dulux are the usual requests. Paint finishing is in the quoted price.',
  },
  {
    icon: MapPin,
    title: 'No travel charge across our area',
    copy: 'Design visits and installation anywhere in our Berkshire coverage area are quoted the same as they would be in Windsor.',
  },
];

const schema = {
  webPage: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: 'Fitted Furniture Berkshire | RVS Bespoke',
    description,
    isPartOf: { '@id': 'https://rvsbespoke.co.uk/#website' },
    about: { '@id': 'https://rvsbespoke.co.uk/#localbusiness' },
    inLanguage: 'en-GB',
    mainEntity: {
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: 'Bespoke Fitted Furniture in Berkshire',
      serviceType: 'Fitted furniture design, manufacture and installation',
      provider: { '@id': 'https://rvsbespoke.co.uk/#localbusiness' },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Berkshire',
        containsPlace: berkshireAreas.map((area) => ({ '@type': 'City', name: area.name })),
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fitted furniture across Berkshire',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            url: `https://rvsbespoke.co.uk${service.path}`,
          },
        })),
      },
    },
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rvsbespoke.co.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Areas We Cover', item: 'https://rvsbespoke.co.uk/areas' },
      { '@type': 'ListItem', position: 3, name: 'Fitted Furniture Berkshire', item: canonicalUrl },
    ],
  },
};

const galleryImages = [
  { src: '/images/living_room_28.jpeg', alt: 'Bespoke fitted alcove cabinets and media wall in a Berkshire living room' },
  { src: '/images/bedroom_23.jpeg', alt: 'Fitted wardrobes and dressing room in a Berkshire bedroom' },
  { src: '/images/home_office_14.jpeg', alt: 'Fitted home office with built-in desk and shelving in Berkshire' },
  { src: '/images/kitchen_1.jpeg', alt: 'Bespoke fitted kitchen cabinetry handcrafted in Windsor, Berkshire' },
  { src: '/images/loft_3.jpeg', alt: 'Fitted eaves storage in a Berkshire loft conversion' },
  { src: '/images/cloakroom_6.jpeg', alt: 'Under-stair storage and hallway cabinetry in a Berkshire home' },
  { src: '/images/living_room_15.jpeg', alt: 'Fitted bookcases either side of a fireplace in a Berkshire home' },
  { src: '/images/bedroom_11.jpeg', alt: 'Floor to ceiling hand-painted fitted wardrobes in Berkshire' },
];

const BerkshireFittedFurniture = () => {
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
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-30"
              alt="Bespoke fitted furniture handcrafted in Windsor for homes across Berkshire"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">
                Berkshire · Windsor Workshop
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Fitted Furniture in{' '}
                <span className="text-accent-gold font-serif italic font-light">Berkshire</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke fitted wardrobes, alcove cabinets, media walls, kitchens and home offices —
                designed, made and installed by RVS Bespoke for homes across Berkshire.
              </p>
              <div className="flex flex-wrap gap-6 items-center mt-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 bg-accent-gold text-primary-dark px-10 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all"
                >
                  Free Design Visit <ArrowRight size={16} />
                </Link>
                <a
                  href={siteConfig.contact.phoneLink}
                  className="text-white/80 text-sm uppercase tracking-[0.2em] font-bold hover:text-accent-gold transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark tracking-tight mb-8">
              Bespoke Fitted Furniture, Built in Berkshire
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                RVS Bespoke is a family-run joinery workshop on Barry Avenue in Windsor, making
                fitted furniture for Berkshire homes since 2014. Every commission is drawn around
                one specific room in one specific house — measured on site, built in our workshop a
                few miles away, and installed and hand painted by the same people who made it.
              </p>
              <p>
                That matters more in Berkshire than most counties. The housing here runs from
                Victorian and Edwardian terraces in Windsor, Slough and Maidenhead, through 1930s
                semis and rambling detached houses in Ascot and Sunningdale, to new builds around
                Bracknell and Wokingham. Very few of those rooms have square corners, level floors
                or standard ceiling heights, and almost none of them suit furniture that arrives in
                fixed carcass widths. Made to measure is not a luxury in that kind of house — it is
                the only way to use the whole space.
              </p>
              <p>
                We work across east Berkshire, typically within about 15 miles of the workshop, and
                there is no travel charge anywhere in that area. Design, installation and all paint
                finishing are included in the quoted price, and nothing is subcontracted — including
                the lighting and electrical work.
              </p>
            </div>
          </div>
        </section>

        {/* What we make */}
        <section className="py-20 px-8 bg-background-light">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4 text-center">
              What We Make for Berkshire Homes
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
              Fitted furniture for every room in the house, all built in the same Windsor workshop.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="group bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6"
                >
                  <div>
                    <h3 className="text-lg font-bold text-primary-dark leading-snug mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.copy}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-accent-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:gap-4 transition-all">
                    View Service <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-[900px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-10 text-center">
              Recent Work
            </h2>
            <ImageCarousel
              images={galleryImages.map((image) => ({
                ...image,
                srcSet: imgSrcSet(image.src, [400, 800, 1200]),
              }))}
            />
          </div>
        </section>

        {/* Towns covered */}
        <section className="py-20 px-8 bg-background-light">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4 text-center">
              Berkshire Towns We Cover
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
              Each town has its own page with the work we do there. Virginia Water and the villages
              just over the Surrey border are covered too.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {berkshireAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  className="group border border-gray-200 bg-white p-8 hover:border-accent-gold transition-all flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                      {area.postcode}
                    </p>
                    <h3 className="text-xl font-bold text-primary-dark">
                      Fitted Furniture {area.name}
                    </h3>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-primary-dark flex-shrink-0 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-sm text-center mt-10 max-w-3xl mx-auto leading-relaxed">
              We also cover the surrounding villages, including {berkshireVillages.join(', ')}.{' '}
              <Link to="/areas" className="text-primary-dark font-medium hover:text-accent-gold transition-colors">
                See every area we cover
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-12 text-center">
              Why Berkshire Homeowners Choose RVS Bespoke
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {reasons.map(({ icon: Icon, title: reasonTitle, copy }) => (
                <div key={reasonTitle} className="flex gap-6">
                  <Icon size={28} className="text-accent-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-bold text-primary-dark mb-3">{reasonTitle}</h3>
                    <p className="text-gray-500 leading-relaxed">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {berkshireTestimonials.length > 0 && (
          <section className="py-20 px-8 bg-background-light">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-12 text-center">
                What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {berkshireTestimonials.slice(0, 3).map((testimonial) => (
                  <blockquote key={testimonial.author} className="bg-white p-8 shadow-sm">
                    <p className="text-gray-600 leading-relaxed italic font-light mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer className="border-t border-gray-100 pt-4">
                      <p className="font-bold text-primary-dark">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.location} — {testimonial.project}
                      </p>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <FAQSection
          faqs={berkshireFaqs}
          title="Fitted Furniture in Berkshire — Common Questions"
        />

        {/* CTA */}
        <section className="py-20 px-8 bg-primary-dark text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Planning Fitted Furniture in Berkshire?
            </h2>
            <p className="text-white/60 text-lg mb-10 font-light">
              Book a free design visit at your home. No obligation, no hard sell — just an honest
              conversation about the space and a written quote.
            </p>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 bg-accent-gold text-primary-dark px-12 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all"
              >
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <a
                href={siteConfig.contact.phoneLink}
                className="text-white/80 text-sm uppercase tracking-[0.2em] font-bold hover:text-accent-gold transition-colors"
              >
                Call {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BerkshireFittedFurniture;
