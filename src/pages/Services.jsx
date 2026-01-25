import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import ContactModal from '../components/ContactModal';

const Services = () => {
  const { services, company } = siteConfig;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-primary-dark pt-32">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary-dark to-primary-darker"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent-gold"></div>
              <span className="text-white/60 text-[11px] uppercase tracking-[0.5em] font-bold">
                Our Expertise
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6">
              Bespoke <br />
              <span className="text-accent-gold font-serif italic font-light">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-light max-w-xl leading-relaxed">
              From consultation to installation, we bring your vision to life with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index !== services.length - 1 ? 'mb-24 pb-24 border-b border-gray-100' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-gold/10 rounded-full blur-2xl"></div>
                <div className="relative overflow-hidden group bg-gray-100">
                  {/* Placeholder for image */}
                  <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent-gold/20 flex items-center justify-center">
                        <span className="text-accent-gold text-3xl font-serif italic">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm uppercase tracking-wider">{service.title}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-accent-gold/30 text-6xl md:text-7xl font-serif italic block mb-4">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-primary-dark tracking-tight mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 text-accent-gold flex-shrink-0">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-4 bg-primary-dark text-white px-10 py-5 font-bold uppercase tracking-[0.25em] text-[11px] hover:bg-accent-gold transition-all"
                >
                  Start This Project <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 px-8 bg-background-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
              How We Work
            </span>
            <h3 className="text-4xl md:text-6xl font-bold text-primary-dark tracking-tight">
              Our Process
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Consultation',
                description:
                  'We visit your home to discuss your vision and take measurements. No charge, no obligation.',
              },
              {
                step: '02',
                title: 'Design',
                description:
                  'Detailed plans and 3D visuals so you can see exactly what you\'re getting.',
              },
              {
                step: '03',
                title: 'Crafting',
                description:
                  'Your furniture is built in our Windsor workshop using traditional techniques.',
              },
              {
                step: '04',
                title: 'Installation',
                description:
                  'Our team installs your furniture with care and attention to detail.',
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-white p-8 h-full border border-gray-100 hover:border-accent-gold/30 hover:shadow-xl transition-all duration-300">
                  <span className="text-5xl font-bold text-accent-gold/20 group-hover:text-accent-gold/40 transition-colors">
                    {item.step}
                  </span>
                  <h4 className="text-xl font-bold text-primary-dark mt-4 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-accent-gold/30 z-10">
                    <ChevronRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-24 md:py-32 px-8 bg-primary-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-gold text-xs uppercase tracking-[0.5em] font-bold mb-4 block">
                Premium Materials
              </span>
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                Quality That <br />
                <span className="text-accent-gold font-serif italic font-light">Lasts</span>
              </h3>
              <p className="text-white/50 text-lg leading-relaxed mb-10 font-light">
                We source the finest materials for every project. From sustainably harvested
                hardwoods to premium hardware, every component is selected for quality and durability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Oak & Walnut',
                  'Cherry & Maple',
                  'Premium Hardware',
                  'Soft-Close Systems',
                  'Quartz Surfaces',
                  'LED Lighting',
                ].map((material, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <span className="text-sm">{material}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-accent-gold/30 flex items-center justify-center">
                    <span className="text-accent-gold text-4xl font-serif italic">M</span>
                  </div>
                  <p className="text-white/40 text-sm uppercase tracking-wider">Materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark tracking-tight mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10 font-light">
            Every project begins with a conversation. Tell us about your space and your vision.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
          >
            Request a Consultation
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Services;
