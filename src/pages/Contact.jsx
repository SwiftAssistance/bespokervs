import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import { imgUrl, imgSrcSet } from '../utils/image';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity. A bespoke kitchen typically takes 8-12 weeks from design approval to installation. Smaller projects like fitted wardrobes may be completed in 4-6 weeks.',
  },
  {
    question: 'Do you provide design consultations?',
    answer: 'Yes, we offer complimentary initial consultations at your home or our Windsor showroom. During this meeting, we discuss your vision, take measurements, and provide guidance on materials and design options.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We primarily serve Windsor, Ascot, Maidenhead, Slough, and the wider Berkshire area. For larger projects, we can discuss installations throughout the South East of England.',
  },
  {
    question: 'Can I visit your workshop?',
    answer: "Absolutely! We encourage clients to visit our workshop on Barry Avenue in Windsor. It's a great opportunity to see our craftsmanship firsthand and discuss your project in detail.",
  },
];

const Contact = () => {
  const { contactPage, company } = siteConfig;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: contactPage.form.projectTypes[0],
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div>
      <Helmet>
        <title>Contact RVS Bespoke | Visit Our Windsor Workshop | Free Consultation</title>
        <meta name="description" content="Get in touch with RVS Bespoke for a free design consultation. Visit our workshop at 3 Riverway, Barry Ave, Windsor SL4 5JA. Call 01753 622159 or email us." />
        <link rel="canonical" href="https://rvsbespoke.co.uk/contact" />
        <meta name="keywords" content="contact RVS Bespoke, Windsor furniture maker phone, bespoke kitchen consultation, Barry Avenue Windsor workshop, free furniture quote Berkshire" />
        <meta property="og:title" content="Contact RVS Bespoke | Windsor Workshop" />
        <meta property="og:description" content="Visit our workshop or get in touch for a free design consultation. Bespoke furniture makers in Windsor, Berkshire." />
        <meta property="og:url" content="https://rvsbespoke.co.uk/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://rvsbespoke.co.uk/contact" }
          ]
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-primary-dark pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src={imgUrl('https://images.unsplash.com/photo-1497366216548-37526070297c', 800)}
            srcSet={imgSrcSet('https://images.unsplash.com/photo-1497366216548-37526070297c', [400, 800, 1200])}
            sizes="100vw"
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-20"
            alt="Contact RVS Bespoke furniture makers in Windsor, Berkshire"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-accent-gold"></div>
              <span className="text-white/60 text-[11px] uppercase tracking-[0.6em] font-bold">
                {contactPage.hero.title}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              {contactPage.hero.subtitle.split(' ')[0]} <br />
              <span className="text-accent-gold font-serif italic font-light">
                {contactPage.hero.subtitle.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark tracking-tighter mb-12">
              Let's Start a <br />
              <span className="text-accent-gold font-serif italic font-light">Conversation</span>
            </h2>

            <div className="space-y-10 mb-16">
              <div className="group contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-primary-dark uppercase text-[10px] tracking-[0.4em] mb-4">
                    Location
                  </h5>
                  <p className="text-2xl font-light text-gray-500 leading-snug">
                    {siteConfig.contact.address.line1}
                    <br />
                    {siteConfig.contact.address.line2}
                  </p>
                </div>
              </div>

              <div className="group contact-info-card">
                <div className="contact-info-icon">
                  <Phone size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-primary-dark uppercase text-[10px] tracking-[0.4em] mb-4">
                    Phone
                  </h5>
                  <a
                    href={siteConfig.contact.phoneLink}
                    className="text-3xl font-bold text-primary-dark tracking-widest hover:text-accent-gold transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="group contact-info-card">
                <div className="contact-info-icon">
                  <Mail size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-primary-dark uppercase text-[10px] tracking-[0.4em] mb-4">
                    Email
                  </h5>
                  <a
                    href={siteConfig.contact.emailLink}
                    className="text-xl font-light text-gray-500 tracking-tight hover:text-accent-gold transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="group contact-info-card">
                <div className="contact-info-icon">
                  <Clock size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-primary-dark uppercase text-[10px] tracking-[0.4em] mb-4">
                    {contactPage.showroom.title}
                  </h5>
                  <div className="space-y-2">
                    {contactPage.showroom.hours.map((item, i) => (
                      <div key={i} className="flex justify-between text-gray-500 max-w-xs">
                        <span className="font-medium">{item.day}</span>
                        <span>{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-4 italic">{contactPage.showroom.note}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary-dark p-12 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.2)] relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 pointer-events-none"></div>

            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-accent-gold rounded-full flex items-center justify-center mb-8">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h4 className="text-white text-3xl font-bold mb-4">Thank You!</h4>
                <p className="text-white/60 text-lg max-w-sm">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      projectType: contactPage.form.projectTypes[0],
                      message: '',
                    });
                  }}
                  className="mt-8 text-accent-gold text-sm uppercase tracking-widest hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-white text-3xl font-bold mb-12 tracking-tight">
                  {contactPage.form.title}
                </h4>
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="form-input">
                    <label className="form-label">{contactPage.form.fields.name.label}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-field"
                      placeholder={contactPage.form.fields.name.placeholder}
                    />
                  </div>

                  <div className="form-input">
                    <label className="form-label">{contactPage.form.fields.email.label}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-field"
                      placeholder={contactPage.form.fields.email.placeholder}
                    />
                  </div>

                  <div className="form-input">
                    <label className="form-label">{contactPage.form.fields.phone.label}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-field"
                      placeholder={contactPage.form.fields.phone.placeholder}
                    />
                  </div>

                  <div className="form-input">
                    <label className="form-label">{contactPage.form.fields.projectType.label}</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="form-field appearance-none cursor-pointer"
                    >
                      {contactPage.form.projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-primary-dark">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-input">
                    <label className="form-label">{contactPage.form.fields.message.label}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="form-field resize-none"
                      placeholder={contactPage.form.fields.message.placeholder}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-accent-gold text-white font-bold uppercase tracking-[0.5em] text-[11px] hover:bg-white hover:text-primary-dark transition-all shadow-xl flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        {contactPage.form.submitButton} <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-gray-200 relative">
        <div className="absolute inset-0 bg-primary-dark/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.2693867927!2d-0.6168!3d51.4785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI4JzQyLjYiTiAwwrAzNicxMC4xIlc!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RVS Bespoke Location"
          ></iframe>
        </div>
        <div className="absolute bottom-8 left-8 bg-white p-8 shadow-2xl max-w-sm">
          <h4 className="font-bold text-primary-dark text-lg mb-2">{company.name}</h4>
          <p className="text-gray-500 text-sm mb-4">{siteConfig.contact.address.full}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold text-sm font-bold uppercase tracking-widest hover:text-primary-dark transition-colors"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-background-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-label justify-center mb-8">Common Questions</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-primary-dark tracking-tighter">
              Frequently Asked
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold text-primary-dark mb-4">{faq.question}</h4>
                <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
