import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ChevronRight, ShieldCheck, Award, Quote, MapPin, Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import { imgUrl, imgSrcSet } from '../utils/image';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const { home, rooms: services, images, company } = siteConfig;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = home.testimonials.items;
  const { contactPage, contact } = siteConfig;
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', projectType: contactPage.form.projectTypes[0], message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setContactSubmitting(false);
    setContactSubmitted(true);
  };

  const touchStartX = useRef(null);
  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);
  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? nextTestimonial() : prevTestimonial();
    touchStartX.current = null;
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div>
      <Helmet>
        <title>RVS Bespoke | Fitted Furniture for Every Room in Windsor, Berkshire</title>
        <meta name="description" content="Bespoke fitted furniture for every room in your home. Handcrafted in our Windsor workshop. Serving Berkshire for over a decade. Free design consultation." />
        <link rel="canonical" href="https://rvsbespoke.co.uk/" />
        <meta property="og:title" content="RVS Bespoke | Fitted Furniture for Every Room in Windsor" />
        <meta property="og:description" content="Bespoke fitted furniture for every room in your home. Handcrafted in our Windsor workshop for homes across Berkshire." />
        <meta property="og:url" content="https://rvsbespoke.co.uk/" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl(images.hero, 800, 60)}
            srcSet={imgSrcSet(images.hero, [400, 800, 1200, 1920], 60)}
            sizes="100vw"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-50"
            alt="Bespoke fitted kitchen handcrafted by RVS Bespoke in Windsor, Berkshire"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <div className="max-w-4xl">
            <h1 className="hero-title text-white mb-12">
              {home.hero.title} <br />
              <span className="hero-title-highlight">{home.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mb-16 leading-relaxed">
              {home.hero.description}
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
              >
                {home.hero.cta.primary}
              </button>
              <Link to="/living-room" className="group btn-secondary text-white">
                {home.hero.cta.secondary}{' '}
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-6">
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 writing-vertical">
            {home.hero.scrollHint}
          </span>
          <div className="h-20 w-px bg-gradient-to-b from-accent-gold to-transparent"></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 md:py-36 px-8 bg-background-light below-fold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-label justify-center mb-10">{home.about.sectionTitle}</h2>
          <p className="text-primary-dark text-2xl md:text-3xl leading-relaxed mb-14 font-light tracking-tight">
            {home.about.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-16 mb-14">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-accent-gold">
                <ShieldCheck size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Master Joinery</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                Traditional mortise and tenon joints combined with modern precision for lifetime durability.
              </p>
            </div>
            <div className="w-px bg-gray-200 self-stretch hidden sm:block"></div>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-accent-gold">
                <Award size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Local Heritage</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                Serving Windsor, Ascot, and the surrounding Berkshire areas for over a decade with distinction.
              </p>
            </div>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-4 text-primary-dark font-bold uppercase tracking-[0.3em] text-xs border-b-2 border-accent-gold pb-2 hover:gap-6 transition-all"
          >
            About Us <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 md:py-48 px-8 bg-primary-dark relative overflow-hidden below-fold">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 skew-x-12 translate-x-32 pointer-events-none hidden md:block"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-24">
            <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
              {home.services.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {services.slice(0, 3).map((service, i) => (
              <Link
                key={service.id}
                to={service.path}
                className="group service-card"
              >
                <img
                  src={imgUrl(service.image, 400)}
                  srcSet={imgSrcSet(service.image, [300, 600, 800])}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-55 group-hover:opacity-75 group-hover:scale-110 transition-all duration-[2s]"
                  alt={`${service.title} - Bespoke fitted furniture Windsor`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent"></div>

                <div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-700">
                  <span className="text-accent-gold text-6xl font-serif italic opacity-30 block mb-6">
                    0{i + 1}
                  </span>
                  <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">
                    {service.shortTitle}
                  </h4>
                  <p className="text-white/50 font-light leading-relaxed mb-10 max-w-xs">
                    {service.description}
                  </p>
                  <span className="flex items-center gap-4 text-accent-gold font-bold text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-4 bg-accent-gold text-primary-dark px-12 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all"
            >
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 md:py-48 px-8 bg-background-light below-fold">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-label justify-center mb-8">
              {home.testimonials.sectionTitle}
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-primary-dark tracking-tighter">
              {home.testimonials.title}
            </h3>
          </div>

          <div className="relative max-w-3xl mx-auto min-h-[280px] cursor-grab active:cursor-grabbing" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-all duration-700 ease-in-out"
                style={{
                  opacity: activeTestimonial === i ? 1 : 0,
                  transform: activeTestimonial === i ? 'translateY(0)' : 'translateY(20px)',
                  pointerEvents: activeTestimonial === i ? 'auto' : 'none',
                }}
              >
                <div className="bg-white p-12 shadow-xl relative">
                  <Quote
                    size={48}
                    className="text-accent-gold/20 absolute top-8 right-8"
                  />
                  <p className="text-gray-600 text-xl md:text-2xl leading-relaxed mb-10 italic font-light">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-100 pt-6">
                    <p className="font-bold text-primary-dark text-lg">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.location} — {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === i ? 'bg-accent-gold w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-24 px-8 bg-primary-dark below-fold">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="text-white flex flex-col">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Start Your <br />
              <span className="text-accent-gold font-serif italic font-light">Project</span>
            </h2>
            <p className="text-white/60 text-lg font-light mb-10">
              Tell us about your vision and we'll get back to you within 24 hours.
            </p>
            <div className="space-y-4 text-sm text-white/50 mb-10">
              <a href={contact.phoneLink} className="flex items-center gap-3 hover:text-accent-gold transition-colors">
                <span className="w-px h-4 bg-accent-gold"></span>
                {contact.phone}
              </a>
              <a href={contact.emailLink} className="flex items-center gap-3 hover:text-accent-gold transition-colors">
                <span className="w-px h-4 bg-accent-gold"></span>
                {contact.email}
              </a>
            </div>
            <div className="relative overflow-hidden" style={{ height: '240px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.2693867927!2d-0.6168!3d51.4785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI4JzQyLjYiTiAwwrAzNicxMC4xIlc!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) brightness(0.85)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RVS Bespoke Location"
              ></iframe>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-primary-dark/90 px-4 py-2 text-accent-gold text-[10px] font-bold uppercase tracking-widest hover:bg-accent-gold hover:text-white transition-all"
              >
                Get Directions →
              </a>
            </div>
          </div>

          <div>
            {contactSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h4 className="text-white text-2xl font-bold mb-3">Thank You!</h4>
                <p className="text-white/60 max-w-sm">We'll be in touch within 24 hours.</p>
                <button
                  onClick={() => { setContactSubmitted(false); setContactForm({ name: '', email: '', phone: '', projectType: contactPage.form.projectTypes[0], message: '' }); }}
                  className="mt-6 text-accent-gold text-xs uppercase tracking-widest hover:text-white transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-8">
                <div>
                  <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Name</label>
                  <input type="text" name="name" value={contactForm.name} onChange={handleContactChange} required placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:border-accent-gold outline-none transition-colors text-lg" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Email</label>
                  <input type="email" name="email" value={contactForm.email} onChange={handleContactChange} required placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:border-accent-gold outline-none transition-colors text-lg" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Project Type</label>
                  <select name="projectType" value={contactForm.projectType} onChange={handleContactChange}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:border-accent-gold outline-none transition-colors text-lg appearance-none cursor-pointer">
                    {contactPage.form.projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-primary-dark">{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Message</label>
                  <textarea name="message" value={contactForm.message} onChange={handleContactChange} rows={3} placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/30 focus:border-accent-gold outline-none transition-colors resize-none text-lg" />
                </div>
                <button type="submit" disabled={contactSubmitting}
                  className="w-full py-5 bg-accent-gold text-white font-bold uppercase tracking-[0.4em] text-[11px] hover:bg-white hover:text-primary-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50">
                  {contactSubmitting ? <span className="animate-pulse">Sending...</span> : <><span>Submit Enquiry</span><Send size={14} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
