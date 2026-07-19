import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgUrl, imgSrcSet } from '../utils/image';
import { homeOfficeFaqs } from '../config/faqs';
import ImageCarousel from '../components/ImageCarousel';
import FAQSection from '../components/FAQSection';

const FittedHomeOffice = () => {

  return (
    <>
      <Helmet>
        <title>Fitted Home Office Furniture Windsor | Bespoke Desks & Studies | RVS Bespoke</title>
        <meta name="description" content="Bespoke fitted home office furniture in Windsor, Berkshire. Custom desks, built-in studies and office storage. Designed for remote working. Free consultation." />
        <meta name="keywords" content="fitted home office furniture Windsor, bespoke desk Berkshire, fitted study Ascot, custom office Maidenhead, built-in desk Windsor, home office design Slough" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/home-office" />
        <meta property="og:title" content="Fitted Home Office Furniture Windsor | Bespoke Desks & Studies | RVS Bespoke" />
        <meta property="og:description" content="Bespoke fitted home office furniture in Windsor, Berkshire. Custom desks, built-in studies and office storage. Designed for remote working." />
        <meta property="og:url" content="https://rvsbespoke.co.uk/home-office" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Fitted Home Office Furniture Windsor | Bespoke Desks & Studies | RVS Bespoke" />
        <meta name="twitter:description" content="Bespoke fitted home office furniture in Windsor, Berkshire. Custom desks, built-in studies and office storage. Designed for remote working." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fitted Home Office Furniture Windsor",
            "provider": { "@id": "https://rvsbespoke.co.uk/#localbusiness" },
            "areaServed": ["Windsor", "Ascot", "Maidenhead", "Slough", "Berkshire"],
            "description": "Bespoke fitted home office furniture designed and built in our Windsor workshop. Custom desks, studies, and office storage solutions.",
            "serviceType": "Fitted Home Office Furniture Design and Installation",
            "url": "https://rvsbespoke.co.uk/home-office",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rvsbespoke.co.uk/services" },
              { "@type": "ListItem", "position": 3, "name": "Home Office", "item": "https://rvsbespoke.co.uk/home-office" },
            ],
          })}
        </script>
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero.jpeg"
              sizes="100vw"
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-40"
              alt="Bespoke fitted home office with custom desk and storage in Windsor"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Fitted Furniture</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Home Office
                <span className="block text-accent-gold font-serif italic font-light">Fitted Furniture</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke desks and study furniture designed for productive remote working.
                Built-in storage that keeps your workspace organised.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tight mb-8">
                A Proper Place to Work
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Working from home needs more than a laptop on the kitchen table. A dedicated
                workspace helps you focus, keeps work separate from home life, and looks
                professional on video calls.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ImageCarousel images={[
                { src: '/images/home_office_1.jpeg', alt: 'Custom fitted home office desk with shelving in Berkshire' },
                { src: '/images/home_office_2.jpeg', alt: 'Bespoke fitted study furniture with integrated storage in Windsor home' },
                { src: '/images/home_office_3.jpeg', alt: 'Fitted home office with floor to ceiling bookshelves in Windsor' },
                { src: '/images/home_office_4.jpeg', alt: 'Bespoke built-in desk and storage in Berkshire home office' },
                { src: '/images/home_office_5.jpeg', alt: 'Custom fitted study with painted cabinetry in Ascot home' },
                { src: '/images/home_office_6.jpeg', alt: 'Handcrafted fitted home office with cable management in Windsor' },
                { src: '/images/home_office_7.jpeg', alt: 'Fitted alcove desk with overhead storage in Maidenhead' },
                { src: '/images/home_office_8.jpeg', alt: 'Bespoke fitted study room with integrated shelving in Berkshire' },
                { src: '/images/home_office_9.jpeg', alt: 'Custom fitted desk with drawer storage in Windsor home office' },
                { src: '/images/home_office_10.jpeg', alt: 'Handcrafted home office furniture with shaker doors in Ascot' },
                { src: '/images/home_office_11.jpeg', alt: 'Fitted home office with built-in bookcase and filing in Windsor' },
                { src: '/images/home_office_12.jpeg', alt: 'Bespoke fitted home study with matching storage units in Berkshire' },
                { src: '/images/home_office_13.jpeg', alt: 'Custom fitted corner desk with overhead cabinets in Slough' },
                { src: '/images/home_office_14.jpeg', alt: 'Fitted home office with display shelving in Windsor home' },
              ]} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={homeOfficeFaqs} />

        {/* Areas Served */}
        <section className="py-16 px-8 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Fitted Home Office Furniture Across Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke fitted home offices throughout Windsor and the surrounding areas, including
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

export default FittedHomeOffice;
