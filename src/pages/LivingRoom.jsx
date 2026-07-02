import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { imgUrl, imgSrcSet } from '../utils/image';
import ImageCarousel from '../components/ImageCarousel';

const LivingRoom = () => {

  return (
    <>
      <Helmet>
        <title>Fitted Living Room, Dining Room & Kitchen Furniture Windsor | RVS Bespoke</title>
        <meta name="description" content="Bespoke fitted furniture for living rooms, dining rooms and kitchens in Windsor, Berkshire. Custom cabinets, storage and joinery handcrafted in our workshop." />
        <meta name="keywords" content="fitted living room furniture Windsor, bespoke kitchen cabinets Berkshire, fitted dining room storage Ascot, alcove cabinets Windsor, media wall Maidenhead, kitchen joinery Windsor" />
        <link rel="canonical" href="https://rvsbespoke.co.uk/living-room" />
        <meta property="og:title" content="Fitted Living Room, Dining Room & Kitchen Furniture Windsor | RVS Bespoke" />
        <meta property="og:description" content="Bespoke fitted furniture for living rooms, dining rooms and kitchens in Windsor, Berkshire. Custom cabinets, storage and joinery handcrafted in our workshop." />
        <meta property="og:url" content="https://rvsbespoke.co.uk/living-room" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Fitted Living Room, Dining Room & Kitchen Furniture Windsor | RVS Bespoke" />
        <meta name="twitter:description" content="Bespoke fitted furniture for living rooms, dining rooms and kitchens in Windsor, Berkshire. Handcrafted in our workshop." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fitted Living Room, Dining Room & Kitchen Furniture Windsor",
            "provider": { "@id": "https://rvsbespoke.co.uk/#localbusiness" },
            "areaServed": ["Windsor", "Ascot", "Maidenhead", "Slough", "Berkshire"],
            "description": "Bespoke fitted furniture for living rooms, dining rooms and kitchens. Alcove cabinets, media walls, kitchen cabinetry and dining storage handcrafted in Windsor.",
            "serviceType": "Fitted Living Room, Dining Room & Kitchen Furniture Design and Installation",
            "url": "https://rvsbespoke.co.uk/living-room",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rvsbespoke.co.uk/services" },
              { "@type": "ListItem", "position": 3, "name": "Living Room, Dining Room & Kitchen", "item": "https://rvsbespoke.co.uk/living-room" },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Do you make fitted alcove cabinets in Windsor?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — alcove cabinets and shelving are one of our most popular commissions. We measure and build to the exact dimensions of your alcove so everything fits perfectly." } },
              { "@type": "Question", "name": "Can you build a bespoke media wall?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We design and build fitted media walls with integrated TV housing, shelving, and concealed cable management. Every wall is made to measure for your room." } },
              { "@type": "Question", "name": "Do you make kitchen furniture?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We make bespoke kitchen cabinetry handcrafted in our Windsor workshop — not flat-pack. Units are built from solid timber and quality materials to your exact measurements." } },
              { "@type": "Question", "name": "How long does a fitted living room take?", "acceptedAnswer": { "@type": "Answer", "text": "A typical alcove or media wall project takes four to six weeks from design sign-off to installation. Larger projects covering the full room may take longer — we'll give you a timeline upfront." } },
              { "@type": "Question", "name": "Can you match the paint or finish to my existing room?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can paint to any colour including Farrow & Ball, Little Greene, or your own specification. We can also work with natural timbers, stained finishes, and handleless designs." } },
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
              alt="Bespoke fitted living room, dining room and kitchen furniture in Windsor"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">Fitted Furniture</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                Living Room, Dining Room
                <span className="block text-accent-gold font-serif italic font-light">&amp; Kitchen</span>
              </h1>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Bespoke fitted furniture for the heart of your home — from alcove cabinets and media walls
                to kitchen cabinetry and dining storage. All handcrafted in our Windsor workshop.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tight mb-8">
                Furniture That Fits Your Home
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether it's alcove cabinets in the living room, a fitted sideboard in the dining room,
                or bespoke kitchen cabinetry — we design and build everything to measure, working around
                your space and the way you live.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ImageCarousel images={[
                { src: '/images/living_room_1.jpeg', alt: 'Bespoke fitted alcove cabinets and shelving in Windsor living room' },
                { src: '/images/living_room_2.jpeg', alt: 'Custom fitted living room storage and display cabinets in Berkshire' },
                { src: '/images/living_room_3.jpeg', alt: 'Fitted media wall with integrated shelving in Windsor home' },
                { src: '/images/living_room_4.jpeg', alt: 'Bespoke alcove bookcase with cabinet storage in Berkshire living room' },
                { src: '/images/living_room_5.jpeg', alt: 'Custom fitted entertainment unit with TV housing in Windsor' },
                { src: '/images/living_room_6.jpeg', alt: 'Handcrafted fitted living room cabinetry in Ascot home' },
                { src: '/images/living_room_7.jpeg', alt: 'Bespoke painted alcove cabinets with open shelving in Maidenhead' },
                { src: '/images/living_room_8.jpeg', alt: 'Fitted media wall with concealed cable management in Windsor' },
                { src: '/images/living_room_9.jpeg', alt: 'Custom built-in display cabinets in Berkshire living room' },
                { src: '/images/living_room_10.jpeg', alt: 'Bespoke fitted dining room sideboard handcrafted in Windsor' },
                { src: '/images/living_room_11.jpeg', alt: 'Fitted kitchen cabinetry with island in Windsor home' },
                { src: '/images/living_room_12.jpeg', alt: 'Custom kitchen units with granite worktop in Berkshire' },
                { src: '/images/living_room_13.jpeg', alt: 'Bespoke handmade kitchen cabinetry in Ascot home' },
                { src: '/images/living_room_14.jpeg', alt: 'Fitted dining room storage with glass display in Windsor' },
                { src: '/images/living_room_15.jpeg', alt: 'Custom alcove shelving and cabinets in Slough living room' },
                { src: '/images/living_room_16.jpeg', alt: 'Bespoke fitted window seat with storage in Windsor home' },
                { src: '/images/living_room_17.jpeg', alt: 'Handcrafted media wall with floating shelves in Berkshire' },
                { src: '/images/living_room_18.jpeg', alt: 'Fitted kitchen island with seating in Maidenhead home' },
                { src: '/images/living_room_19.jpeg', alt: 'Bespoke fitted living room with painted cabinetry in Windsor' },
                { src: '/images/living_room_20.jpeg', alt: 'Custom dining room fitted furniture handcrafted in Berkshire' },
                { src: '/images/living_room_21.jpeg', alt: 'Bespoke fitted living room cabinetry in Windsor home' },
                { src: '/images/living_room_22.jpeg', alt: 'Custom fitted alcove storage in Berkshire living room' },
                { src: '/images/living_room_23.jpeg', alt: 'Handcrafted fitted living room furniture in Ascot home' },
                { src: '/images/living_room_24.jpeg', alt: 'Fitted media wall with shelving in Windsor living room' },
                { src: '/images/living_room_25.jpeg', alt: 'Bespoke fitted dining room storage in Berkshire home' },
                { src: '/images/living_room_26.jpeg', alt: 'Custom fitted kitchen cabinetry handcrafted in Windsor' },
                { src: '/images/living_room_27.jpeg', alt: 'Bespoke fitted living room with painted alcove cabinets in Windsor' },
              ]} />
            </div>
          </div>
        </section>

        {/* Options Section */}
        <section className="py-20 px-8 bg-background-light">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-12 text-center">
              What We Build
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Living Room Storage', desc: 'Alcove cabinets, media walls, bookshelves and window seats — designed to make the most of every inch of your living space.' },
                { title: 'Dining Room Furniture', desc: 'Fitted sideboards, display cabinets and built-in storage that complement your dining room and keep clutter out of sight.' },
                { title: 'Kitchen Cabinetry', desc: 'Handmade kitchen units built in our Windsor workshop using solid timber and quality materials. No flat-pack, no compromise.' },
              ].map((item) => (
                <div key={item.title} className="bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-16 px-8 bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Serving Windsor and Berkshire
            </h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              We design and install bespoke fitted furniture throughout Windsor and the surrounding areas,
              including Ascot, Maidenhead, Slough, Eton, Datchet, and Sunningdale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary-dark text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-accent-gold transition-all"
            >
              Book a Design Visit <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LivingRoom;
