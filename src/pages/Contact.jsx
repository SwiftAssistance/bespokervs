import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

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
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-primary-dark pt-32">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary-dark to-primary-darker"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 right-32 w-72 h-72 bg-accent-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-56 h-56 bg-accent-gold/5 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent-gold"></div>
              <span className="text-white/50 text-[11px] uppercase tracking-[0.5em] font-bold">
                {contactPage.hero.title}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6">
              {contactPage.hero.subtitle.split(' ')[0]} <br />
              <span className="text-accent-gold font-serif italic font-light">
                {contactPage.hero.subtitle.split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-10">
              Let's Start a <br />
              <span className="text-accent-gold font-serif italic font-light">Conversation</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="bg-background-light p-4 text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-colors">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-primary-dark uppercase text-[10px] tracking-widest mb-2">
                    Location
                  </h5>
                  <p className="text-lg text-gray-500 leading-snug">
                    {siteConfig.contact.address.line1}
                    <br />
                    {siteConfig.contact.address.line2}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-background-light p-4 text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-colors">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-primary-dark uppercase text-[10px] tracking-widest mb-2">
                    Phone
                  </h5>
                  <a
                    href={siteConfig.contact.phoneLink}
                    className="text-2xl font-bold text-primary-dark tracking-wide hover:text-accent-gold transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-background-light p-4 text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-colors">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-primary-dark uppercase text-[10px] tracking-widest mb-2">
                    Email
                  </h5>
                  <a
                    href={siteConfig.contact.emailLink}
                    className="text-lg text-gray-500 hover:text-accent-gold transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-background-light p-4 text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-colors">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-primary-dark uppercase text-[10px] tracking-widest mb-2">
                    {contactPage.showroom.title}
                  </h5>
                  <div className="space-y-1">
                    {contactPage.showroom.hours.map((item, i) => (
                      <div key={i} className="flex justify-between text-gray-500 max-w-[280px] text-sm">
                        <span>{item.day}</span>
                        <span className="text-primary-dark">{item.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">{contactPage.showroom.note}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary-dark p-10 md:p-12 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/10"></div>

            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h4 className="text-white text-2xl font-bold mb-3">Thank You!</h4>
                <p className="text-white/50 text-base max-w-sm">
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
                <h4 className="text-white text-2xl font-bold mb-8 tracking-tight">
                  {contactPage.form.title}
                </h4>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="border-b border-white/20 focus-within:border-accent-gold transition-colors pb-3">
                    <label className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-3 block">
                      {contactPage.form.fields.name.label}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent text-white text-lg outline-none placeholder:text-white/20 font-light"
                      placeholder={contactPage.form.fields.name.placeholder}
                    />
                  </div>

                  <div className="border-b border-white/20 focus-within:border-accent-gold transition-colors pb-3">
                    <label className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-3 block">
                      {contactPage.form.fields.email.label}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent text-white text-lg outline-none placeholder:text-white/20 font-light"
                      placeholder={contactPage.form.fields.email.placeholder}
                    />
                  </div>

                  <div className="border-b border-white/20 focus-within:border-accent-gold transition-colors pb-3">
                    <label className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-3 block">
                      {contactPage.form.fields.phone.label}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent text-white text-lg outline-none placeholder:text-white/20 font-light"
                      placeholder={contactPage.form.fields.phone.placeholder}
                    />
                  </div>

                  <div className="border-b border-white/20 focus-within:border-accent-gold transition-colors pb-3">
                    <label className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-3 block">
                      {contactPage.form.fields.projectType.label}
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent text-white text-lg outline-none appearance-none cursor-pointer font-light"
                    >
                      {contactPage.form.projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-primary-dark">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="border-b border-white/20 focus-within:border-accent-gold transition-colors pb-3">
                    <label className="text-[10px] uppercase tracking-widest text-accent-gold font-bold mb-3 block">
                      {contactPage.form.fields.message.label}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full bg-transparent text-white text-lg outline-none resize-none placeholder:text-white/20 font-light"
                      placeholder={contactPage.form.fields.message.placeholder}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-accent-gold text-white font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-primary-dark transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        {contactPage.form.submitButton} <Send size={14} />
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
      <section className="h-[400px] bg-gray-200 relative">
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
        <div className="absolute bottom-6 left-6 bg-white p-6 shadow-xl max-w-xs">
          <h4 className="font-bold text-primary-dark text-base mb-2">{company.name}</h4>
          <p className="text-gray-500 text-sm mb-3">{siteConfig.contact.address.full}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.contact.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold text-xs font-bold uppercase tracking-widest hover:text-primary-dark transition-colors"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 px-8 bg-background-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
              Common Questions
            </span>
            <h3 className="text-3xl md:text-5xl font-bold text-primary-dark tracking-tight">
              Frequently Asked
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'How long does a typical project take?',
                answer:
                  'Project timelines vary depending on complexity. A bespoke kitchen typically takes 8-12 weeks from design approval to installation. Smaller projects like fitted wardrobes may be completed in 4-6 weeks.',
              },
              {
                question: 'Do you provide design consultations?',
                answer:
                  'Yes, we offer complimentary initial consultations at your home or our Windsor showroom. During this meeting, we discuss your vision, take measurements, and provide guidance on materials and design options.',
              },
              {
                question: 'What areas do you serve?',
                answer:
                  'We primarily serve Windsor, Ascot, Maidenhead, Slough, and the wider Berkshire area. For larger projects, we can discuss installations throughout the South East of England.',
              },
              {
                question: 'Can I visit your workshop?',
                answer:
                  "Absolutely! We encourage clients to visit our workshop on Barry Avenue in Windsor. It's a great opportunity to see our craftsmanship firsthand and discuss your project in detail.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 border border-gray-100 hover:border-accent-gold/30 hover:shadow-lg transition-all">
                <h4 className="text-lg font-bold text-primary-dark mb-3">{faq.question}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
