import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgUrl, imgSrcSet } from '../utils/image';
import { cloakroomFaqs } from '../config/faqs';
import ImageCarousel from '../components/ImageCarousel';
import FAQSection from '../components/FAQSection';

const Cloakroom = () => {

  return (
    <>
      <Helmet>
        <title>Fitted Cloakroom Furniture Windsor | Bespoke Boot Room & Hallway Storage | RVS Bespoke</title>
        <meta name="description" content="Bespoke fitted cloakroom furniture in Windsor, Berkshire. Custom boot rooms, coat storage, and hallway cabinetry. Handcrafted in our workshop. Free consultation." />
        <meta name="keywords" content="fitted cloakroom furniture Windsor, bespoke boot room Berkshire, hallway storage Ascot, coat cupboard Maidenhead, fitted hallway furniture Windsor" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/cloakroom" />
        <meta property="og:title" content="Fitted Cloakroom Furniture Windsor | Bespoke Boot Room & Hallway Storage | RVS Bespoke" />
        <meta property="og:description" content="Bespoke fitted cloakroom furniture in Windsor, Berkshire. Custom boot rooms, coat storage, and hallway cabinetry. Handcrafted in our workshop." />
        <meta property="og:url" content="https://rvsbespoke.co.uk/cloakroom" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Fitted Cloakroom Furniture Windsor | Bespoke Boot Room & Hallway Storage | RVS Bespoke" />
        <meta name="twitter:description" content="Bespoke fitted cloakroom furniture in Windsor, Berkshire. Custom boot rooms, coat storage, and hallway cabinetry. Handcrafted in our workshop." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fitted Cloakroom Furniture Windsor",
            "provider": { "@id": "https://rvsbespoke.co.uk/#localbusiness" },
            "areaServed": ["Windsor", "Ascot", "Maidenhead", "Slough", "Berkshire"],
            "description": "Bespoke fitted cloakroom and hallway furniture designed and built in our Windsor workshop. Custom boot rooms, coat storage, and hallway solutions.",
            "serviceType": "Fitted Cloakroom Furniture Design and Installation",
            "url": "https://rvsbespoke.co.uk/cloakroom",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rvsbespoke.co.uk/services" },
              { "@type": "ListItem", "position": 3, "name": "Cloakroom & Under the Stairs", "item": "https://rvsbespoke.co.uk/cloakroom" },
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
              alt="Bespoke fitted cloakroom and hallway storage in Windsor home"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Fitted Furniture</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Cloakroom &amp; Under
                <span className="block text-accent-gold font-serif italic font-light">the Stairs</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke under stairs, cloakroom and hallway cabinetry
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tight mb-8">
                Fitted Storage for Busy Hallways
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fitted furniture designed to make the most of your waste space under your stairs
                and de clutter your hallway.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ImageCarousel images={[
                { src: '/images/cloakroom_1.jpeg', alt: 'Custom fitted cloakroom with coat storage and bench seating in Berkshire' },
                { src: '/images/cloakroom_2.jpeg', alt: 'Bespoke hallway furniture handcrafted in Windsor workshop' },
                { src: '/images/cloakroom_3.jpeg', alt: 'Fitted boot room with bench seating and coat hooks in Windsor' },
                { src: '/images/cloakroom_4.jpeg', alt: 'Bespoke under-stairs storage with pull-out drawers in Berkshire' },
                { src: '/images/cloakroom_5.jpeg', alt: 'Custom fitted hallway cabinet with shoe storage in Ascot' },
                { src: '/images/cloakroom_7.jpeg', alt: 'Fitted under-stair cupboard with shelving in Maidenhead home' },
                { src: '/images/cloakroom_8.jpeg', alt: 'Bespoke fitted cloakroom with hooks and coat storage in Slough' },
                { src: '/images/cloakroom_9.jpeg', alt: 'Custom fitted hallway storage unit in Windsor home' },
                { src: '/images/cloakroom_10.jpeg', alt: 'Fitted boot room with family coat and boot storage in Berkshire' },
                { src: '/images/cloakroom_11.jpeg', alt: 'Bespoke fitted hallway furniture with drawers in Windsor' },
                { src: '/images/cloakroom_12.jpeg', alt: 'Custom under-stairs cupboard with pull-out storage in Ascot' },
                { src: '/images/cloakroom_6.jpeg', alt: 'Handcrafted fitted boot room with painted cabinetry in Windsor' },
                { src: '/images/cloakroom_13.jpeg', alt: 'Handcrafted boot room cabinetry with shaker doors in Windsor' },
                { src: '/images/cloakroom_14.jpeg', alt: 'Fitted cloakroom with WC and vanity storage in Berkshire' },
                { src: '/images/cloakroom_15.jpeg', alt: 'Bespoke fitted hallway with bench and coat cupboards in Windsor' },
              ]} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={cloakroomFaqs} />

        {/* Areas Served */}
        <section className="py-16 px-8 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Fitted Cloakroom Furniture Across Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke fitted cloakroom and hallway furniture throughout Windsor and the
              surrounding areas, including Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
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

export default Cloakroom;
