import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Hammer, Leaf, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

const iconMap = {
  ShieldCheck,
  Award,
  Hammer,
  Leaf,
};

const About = () => {
  const { about, images, company } = siteConfig;

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary-dark pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-30"
            alt="RVS Workshop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8 animate-fade-in">
              <div className="h-px w-12 bg-accent-gold"></div>
              <span className="text-white/60 text-[11px] uppercase tracking-[0.6em] font-bold">
                {about.hero.title}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8 animate-slide-up">
              {about.hero.subtitle.split(' ').slice(0, 2).join(' ')} <br />
              <span className="text-accent-gold font-serif italic font-light">
                {about.hero.subtitle.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {about.story.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent-gold/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <img
                  src={about.image}
                  className="w-full h-[600px] object-cover shadow-2xl"
                  alt="Our Workshop"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary-dark p-8 shadow-2xl z-20 hidden md:block">
                <div className="text-5xl font-bold text-accent-gold mb-2">10+</div>
                <div className="text-[10px] text-white/40 uppercase tracking-[0.4em]">
                  Years of Excellence
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-label mb-8">Our Journey</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-primary-dark tracking-tighter mb-8">
                Building a Legacy of <br />
                <span className="text-accent-gold font-serif italic font-light">Craftsmanship</span>
              </h3>
              <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                <p>{about.story.history}</p>
                <p>{about.story.philosophy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-8 bg-background-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-label justify-center mb-8">What Drives Us</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-primary-dark tracking-tighter">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.values.map((value, i) => {
              const Icon = iconMap[value.icon];
              return (
                <div
                  key={i}
                  className="bg-white p-10 shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-primary-dark flex items-center justify-center text-accent-gold mb-6 group-hover:bg-accent-gold group-hover:text-white transition-colors">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-primary-dark mb-4">{value.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 bg-primary-dark">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {about.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-7xl font-bold text-accent-gold mb-4">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-[0.3em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="section-label mb-8">{about.team.title}</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-primary-dark tracking-tighter mb-8">
                Meet the <br />
                <span className="text-accent-gold font-serif italic font-light">Artisans</span>
              </h3>
              <p className="text-gray-500 text-xl leading-relaxed mb-10 font-light">
                {about.team.description}
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Our workshop is home to skilled craftsmen who have dedicated their careers to the
                art of fine joinery. From master carpenters with decades of experience to young
                apprentices learning the trade, we're united by our passion for creating
                exceptional furniture.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 bg-primary-dark text-white px-10 py-5 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-accent-gold transition-all"
              >
                Visit Our Workshop <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1540633596541-692790937a09?auto=format&fit=crop&q=80&w=600"
                alt="Craftsman at work"
                className="w-full h-64 object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600"
                alt="Workshop detail"
                className="w-full h-64 object-cover shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600"
                alt="Wood materials"
                className="w-full h-64 object-cover shadow-lg -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=600"
                alt="Finished piece"
                className="w-full h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-32 px-8 bg-background-light">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-dark flex items-center justify-center text-accent-gold mx-auto mb-8">
              <Leaf size={40} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-primary-dark tracking-tighter mb-8">
              Committed to <span className="text-accent-gold font-serif italic">Sustainability</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-8 font-light">
              {about.story.commitment}
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              We believe that beautiful furniture and environmental responsibility go hand in hand.
              That's why we partner with certified sustainable forestry programs and continuously
              look for ways to reduce our environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.workshop}
            className="w-full h-full object-cover opacity-20"
            alt="Workshop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-dark/80"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
            Experience the Difference
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 font-light">
            Visit our Windsor workshop and see our craftsmen at work. We'd love to show you what
            bespoke truly means.
          </p>
          <Link to="/contact" className="btn-primary inline-block">
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
