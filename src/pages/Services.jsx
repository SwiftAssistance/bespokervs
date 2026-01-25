import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { siteConfig } from '../config/site';

const Services = () => {
  const { services, company } = siteConfig;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="Bespoke Craftsmanship"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-accent-gold"></div>
              <span className="text-white/60 text-[11px] uppercase tracking-[0.6em] font-bold">
                Our Expertise
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              Bespoke <br />
              <span className="text-accent-gold font-serif italic font-light">Services.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
              From initial consultation to final installation, we bring your vision to life with
              uncompromising attention to detail and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index !== services.length - 1 ? 'mb-32 pb-32 border-b border-gray-100' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl"></div>
                <div className="relative overflow-hidden group">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-[500px] object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary-dark/50 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <span className="text-accent-gold text-8xl font-serif italic opacity-50">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-4xl md:text-6xl font-bold text-primary-dark tracking-tighter mb-6">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-500 font-light leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 text-accent-gold">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 bg-primary-dark text-white px-10 py-5 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-accent-gold transition-all"
                >
                  Start This Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-8 bg-background-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-label justify-center mb-8">How We Work</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-primary-dark tracking-tighter">
              Our Process
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description:
                  'We begin with an in-depth discussion about your vision, requirements, and the space we\'ll be transforming.',
              },
              {
                step: '02',
                title: 'Design',
                description:
                  'Our designers create detailed plans and 3D visualizations, refining every detail until it\'s perfect.',
              },
              {
                step: '03',
                title: 'Crafting',
                description:
                  'In our Windsor workshop, skilled craftsmen bring the design to life using premium materials and traditional techniques.',
              },
              {
                step: '04',
                title: 'Installation',
                description:
                  'Our installation team ensures a flawless fit, with meticulous attention to every detail.',
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-white p-10 h-full shadow-lg hover:shadow-2xl transition-shadow">
                  <span className="text-6xl font-bold text-accent-gold/20 group-hover:text-accent-gold/40 transition-colors">
                    {item.step}
                  </span>
                  <h4 className="text-2xl font-bold text-primary-dark mt-4 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-accent-gold/30">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-32 px-8 bg-primary-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-full bg-white/5 -skew-x-12 -translate-x-32 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="section-label mb-8 text-accent-gold">
                <span className="h-px w-8 bg-accent-gold mr-4 inline-block"></span>
                Premium Materials
              </h2>
              <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
                Quality That <br />
                <span className="text-accent-gold font-serif italic font-light">Lasts.</span>
              </h3>
              <p className="text-white/60 text-xl leading-relaxed mb-10 font-light">
                We source only the finest materials for our projects. From sustainably harvested
                hardwoods to premium hardware, every component is selected for its quality and
                durability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'Oak & Walnut',
                  'Cherry & Maple',
                  'Premium Hardware',
                  'Soft-Close Systems',
                  'Quartz Surfaces',
                  'LED Lighting',
                ].map((material, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-2 h-2 bg-accent-gold"></div>
                    <span className="text-sm">{material}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000"
                alt="Premium Wood Materials"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-dark tracking-tighter mb-8">
            Let's Create Something <span className="text-accent-gold font-serif italic">Beautiful</span>
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-12 font-light">
            Every project begins with a conversation. Tell us about your space and your vision.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
