import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config/site';
import { areas } from '../config/areas';

const Sitemap = () => {
  const canonicalUrl = 'https://rvsbespoke.co.uk/sitemap';
  const { rooms } = siteConfig;

  const company = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Areas We Cover', path: '/areas' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  return (
    <div>
      <Helmet>
        <title>Sitemap | RVS Bespoke</title>
        <meta name="description" content="A full list of every page on the RVS Bespoke website, including our fitted furniture services and the areas we cover." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Sitemap", "item": canonicalUrl },
          ],
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-primary-dark pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpeg"
            sizes="100vw"
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-30"
            alt="RVS Bespoke joinery workshop in Windsor, Berkshire"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
          <div className="max-w-3xl">
            <p className="text-accent-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">RVS Bespoke · Windsor</p>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              Site<span className="text-accent-gold font-serif italic font-light">map</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl leading-relaxed">
              Every page on the RVS Bespoke website.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-lg font-bold text-primary-dark uppercase tracking-widest mb-4">Services</h2>
            <ul className="space-y-3">
              {rooms.map((room) => (
                <li key={room.id}>
                  <Link to={room.path} className="text-gray-600 hover:text-accent-gold transition-colors">
                    {room.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary-dark uppercase tracking-widest mb-4">Areas We Cover</h2>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link to={`/areas/${area.slug}`} className="text-gray-600 hover:text-accent-gold transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary-dark uppercase tracking-widest mb-4">Company</h2>
            <ul className="space-y-3">
              {company.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-gray-600 hover:text-accent-gold transition-colors">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
