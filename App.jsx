import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Small threshold for a snappier feel
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-[#FAF9F6] text-[#0A1128] font-sans antialiased selection:bg-[#B8860B] selection:text-white">
      
      {/* --- Elegant Navigation --- */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-[#0A1128] shadow-xl' 
          : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex justify-between items-center">
          <div 
            onClick={() => scrollTo('home')}
            className="cursor-pointer group"
          >
            <div className={`flex flex-col leading-none transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
              <span className="text-3xl font-bold tracking-tighter text-white">
                RVS <span className="font-light text-[#B8860B]">BESPOKE</span>
              </span>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-[#B8860B] mt-1"></div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {['Services', 'About', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-[10px] uppercase tracking-[0.4em] font-bold transition-all relative group text-white/80 hover:text-[#B8860B]"
              >
                {item === 'About' ? 'About Us' : item}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#B8860B] transition-all group-hover:w-full"></span>
              </button>
            ))}
            <a 
              href="tel:01753622159"
              className={`px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-bold transition-all border-2 flex items-center gap-3 ${
                scrolled 
                  ? 'bg-[#B8860B] border-[#B8860B] text-white hover:bg-white hover:text-[#0A1128]' 
                  : 'border-white/30 text-white hover:bg-[#B8860B] hover:border-[#B8860B]'
              }`}
            >
              <Phone size={14} /> 01753 622159
            </a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="md:hidden p-3 rounded-full text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Overlay --- */}
      <div className={`fixed inset-0 z-[200] bg-[#0A1128] transition-all duration-700 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex justify-end">
          <button onClick={() => setIsMenuOpen(false)} className="text-white p-2 bg-white/10 rounded-full">
            <X size={32} />
          </button>
        </div>
        <div className="h-[70%] flex flex-col justify-center items-center space-y-12 text-white">
          {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item.toLowerCase().replace(' ', ''))} 
              className="text-5xl font-light tracking-tighter hover:text-[#B8860B] transition-all"
            >
              {item}
            </button>
          ))}
          <div className="pt-10 flex flex-col items-center gap-4">
             <span className="text-[#B8860B] text-xs uppercase tracking-[0.5em]">Direct Line</span>
             <a href="tel:01753622159" className="text-3xl font-bold tracking-widest">01753 622159</a>
          </div>
        </div>
      </div>

      {/* --- High-Impact Hero --- */}
      <section id="home" className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-[#0A1128]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=95&w=2400" 
            className="w-full h-full object-cover opacity-50 scale-105"
            alt="Pinnacle Joinery"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#B8860B]"></div>
              <span className="text-white/60 text-[11px] uppercase tracking-[0.6em] font-bold">
                ESTABLISHED IN WINDSOR
              </span>
            </div>
            <h1 className="text-6xl md:text-[10rem] font-bold text-white leading-[0.9] tracking-tighter mb-12">
              Bespoke <br />
              <span className="text-[#B8860B] font-serif italic font-light">Excellence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mb-16 leading-relaxed">
              Exceptional handcrafted furniture for kitchens, offices, and living spaces. Built locally in our Windsor workshop for homes across Berkshire.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button onClick={() => scrollTo('contact')} className="bg-[#B8860B] text-white px-14 py-6 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:text-[#0A1128] transition-all shadow-xl">
                Begin Your Project
              </button>
              <button onClick={() => scrollTo('services')} className="group flex items-center gap-4 text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:text-[#B8860B] transition-colors">
                Explore Services <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Subtle Scroll Hint */}
        <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-6">
           <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 [writing-mode:vertical-lr]">Scroll to discover</span>
           <div className="h-20 w-px bg-gradient-to-b from-[#B8860B] to-transparent"></div>
        </div>
      </section>

      {/* --- Detailed About Us --- */}
      <section id="about" className="py-32 md:py-48 px-8 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#B8860B]/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 p-4 border border-gray-100 bg-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1540633596541-692790937a09?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Windsor Joinery Team"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#0A1128] p-10 shadow-2xl z-20 hidden md:block">
                <div className="text-4xl font-serif text-[#B8860B] italic mb-1 tracking-tighter">Hand-Finished</div>
                <div className="text-[10px] text-white/40 uppercase tracking-[0.4em]">Barry Ave, Windsor</div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="max-w-xl">
                <h2 className="text-[#B8860B] text-xs uppercase tracking-[0.5em] font-bold mb-8 flex items-center gap-4">
                  <span className="h-px w-8 bg-[#B8860B]"></span> Our Story
                </h2>
                <h3 className="text-5xl md:text-7xl font-bold text-[#0A1128] leading-[1.1] tracking-tighter mb-10">
                  Where Precision Meets <br />
                  <span className="italic font-serif font-light">Heritage.</span>
                </h3>
                <p className="text-gray-500 text-xl leading-relaxed mb-10 font-light">
                  Operating from our specialized workshop at 3 Riverway on Barry Ave, RVS Bespoke is a family-rooted business dedicated to the art of fine joinery. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[#B8860B]">
                        <ShieldCheck size={20} /> <span className="text-[10px] font-bold uppercase tracking-widest">Master Joinery</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">We use traditional mortise and tenon joints combined with modern precision for lifetime durability.</p>
                   </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[#B8860B]">
                        <Award size={20} /> <span className="text-[10px] font-bold uppercase tracking-widest">Local Heritage</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">Serving Windsor, Ascot, and the surrounding Berkshire areas for over a decade with distinction.</p>
                   </div>
                </div>
                <button onClick={() => scrollTo('contact')} className="inline-flex items-center gap-4 text-[#0A1128] font-bold uppercase tracking-[0.3em] text-xs border-b-2 border-[#B8860B] pb-2 hover:gap-6 transition-all">
                  Meet the Craftsmen <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Premium Services Section --- */}
      <section id="services" className="py-32 md:py-48 px-8 bg-[#0A1128] relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 skew-x-12 translate-x-32 pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-2xl">
              <h2 className="text-[#B8860B] text-xs uppercase tracking-[0.5em] font-bold mb-8 flex items-center gap-4">
                <span className="h-px w-8 bg-[#B8860B]"></span> The Studio
              </h2>
              <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">Bespoke Specialisms.</h3>
            </div>
            <p className="text-white/40 text-lg font-light italic max-w-xs md:text-right">
              "Every piece is a unique dialogue between the wood and your home."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { 
                title: "Handcrafted Kitchens", 
                desc: "The heart of the home, reimagined. We create ergonomic, stunning culinary spaces that balance form and function.", 
                img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200" 
              },
              { 
                title: "Executive Offices", 
                desc: "Quiet luxury for your workspace. Custom desks and integrated library systems tailored to your workflow.", 
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              },
              { 
                title: "Fitted Wardrobes", 
                desc: "Intelligent storage solutions for suites. From walk-in closets to bespoke bedroom cabinetry.", 
                img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200" 
              }
            ].map((service, i) => (
              <div key={i} className="bg-[#0A1128] group relative overflow-hidden p-12 md:p-16 flex flex-col justify-end min-h-[600px] hover:bg-transparent transition-all duration-700">
                <img src={service.img} className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-60 group-hover:scale-110 transition-all duration-[2s]" alt={service.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/40 to-transparent"></div>
                
                <div className="relative z-10 transform group-hover:-translate-y-4 transition-transform duration-700">
                  <span className="text-[#B8860B] text-6xl font-serif italic opacity-30 block mb-6">0{i+1}</span>
                  <h4 className="text-3xl font-bold text-white mb-6 tracking-tight">{service.title}</h4>
                  <p className="text-white/50 font-light leading-relaxed mb-10 max-w-xs">{service.desc}</p>
                  <button onClick={() => scrollTo('contact')} className="flex items-center gap-4 text-[#B8860B] font-bold text-[10px] uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    Discuss Project <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Serious Contact Section --- */}
      <section id="contact" className="py-32 md:py-48 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-[#B8860B] text-xs uppercase tracking-[0.5em] font-bold mb-8 flex items-center gap-4">
              <span className="h-px w-8 bg-[#B8860B]"></span> Get In Touch
            </h2>
            <h3 className="text-5xl md:text-8xl font-bold text-[#0A1128] tracking-tighter mb-12">Visit the <br />Workshop.</h3>
            
            <div className="space-y-16">
              <div className="flex items-start gap-10 group">
                <div className="bg-[#0A1128] p-6 text-[#B8860B] transition-transform group-hover:scale-110">
                  <MapPin size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-[#0A1128] uppercase text-[10px] tracking-[0.4em] mb-4">Location</h5>
                  <p className="text-3xl font-light text-gray-500 leading-snug">
                    3 Riverway, Barry Ave,<br />Windsor SL4 5JA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-10 group">
                <div className="bg-[#0A1128] p-6 text-[#B8860B] transition-transform group-hover:scale-110">
                  <Phone size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-[#0A1128] uppercase text-[10px] tracking-[0.4em] mb-4">Phone</h5>
                  <p className="text-4xl font-bold text-[#0A1128] tracking-widest">
                    <a href="tel:01753622159">01753 622159</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-10 group">
                <div className="bg-[#0A1128] p-6 text-[#B8860B] transition-transform group-hover:scale-110">
                  <Mail size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-[#0A1128] uppercase text-[10px] tracking-[0.4em] mb-4">Email</h5>
                  <p className="text-2xl font-light text-gray-500 tracking-tight">
                    enquiries@rvsbespoke.co.uk
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0A1128] p-12 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.2)] relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 pointer-events-none"></div>
            <h4 className="text-white text-4xl font-bold mb-16 tracking-tight">New Commission</h4>
            <form className="space-y-12">
              <div className="relative border-b border-white/20 focus-within:border-[#B8860B] transition-colors pb-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-[#B8860B] font-bold mb-4 block">Full Name</label>
                <input type="text" className="w-full bg-transparent text-white text-2xl outline-none placeholder:text-white/10 font-light" placeholder="e.g. James Windsor" />
              </div>
              <div className="relative border-b border-white/20 focus-within:border-[#B8860B] transition-colors pb-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-[#B8860B] font-bold mb-4 block">Email Address</label>
                <input type="email" className="w-full bg-transparent text-white text-2xl outline-none placeholder:text-white/10 font-light" placeholder="email@address.com" />
              </div>
              <div className="relative border-b border-white/20 focus-within:border-[#B8860B] transition-colors pb-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-[#B8860B] font-bold mb-4 block">Project Type</label>
                <select className="w-full bg-transparent text-white text-2xl outline-none font-light appearance-none cursor-pointer">
                  <option className="bg-[#0A1128]">Bespoke Kitchen</option>
                  <option className="bg-[#0A1128]">Home Office</option>
                  <option className="bg-[#0A1128]">Fitted Furniture</option>
                  <option className="bg-[#0A1128]">Other</option>
                </select>
              </div>
              <div className="relative border-b border-white/20 focus-within:border-[#B8860B] transition-colors pb-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-[#B8860B] font-bold mb-4 block">Your Message</label>
                <textarea rows="2" className="w-full bg-transparent text-white text-2xl outline-none placeholder:text-white/10 font-light resize-none" placeholder="Tell us about your space"></textarea>
              </div>
              <button className="w-full py-6 bg-[#B8860B] text-white font-bold uppercase tracking-[0.5em] text-[11px] hover:bg-white hover:text-[#0A1128] transition-all shadow-xl">
                Submit Project Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Pinnacle Footer --- */}
      <footer className="bg-[#050A18] pt-32 pb-16 px-8 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
            <div className="md:col-span-6">
              <div className="text-4xl font-bold tracking-tighter text-white mb-10">
                RVS <span className="text-[#B8860B] font-light">BESPOKE</span>
              </div>
              <p className="text-white/30 text-lg max-w-md leading-relaxed font-light italic">
                Crafting the fine details that define extraordinary living spaces. From our workshop to your home, quality is our absolute priority.
              </p>
            </div>
            <div className="md:col-span-3">
              <h6 className="text-[#B8860B] text-[10px] uppercase tracking-[0.6em] font-bold mb-10">Directory</h6>
              <ul className="space-y-6 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => scrollTo('home')}>Top of Page</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => scrollTo('services')}>Our Services</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => scrollTo('about')}>About the Studio</li>
                <li className="hover:text-white cursor-pointer transition-colors" onClick={() => scrollTo('contact')}>Contact Us</li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <h6 className="text-[#B8860B] text-[10px] uppercase tracking-[0.6em] font-bold mb-10">Social Connection</h6>
              <div className="flex items-center gap-8 text-[#B8860B]">
                <Instagram size={24} className="hover:text-white transition-colors cursor-pointer" strokeWidth={1.5} />
                <Facebook size={24} className="hover:text-white transition-colors cursor-pointer" strokeWidth={1.5} />
                <div className="h-10 w-px bg-white/10 mx-2"></div>
                <div className="text-[9px] text-white/20 uppercase tracking-[0.4em] leading-tight font-bold">Follow Our <br />Progress</div>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 uppercase tracking-[0.3em] space-y-6 md:space-y-0 text-center md:text-left font-bold">
            <p>&copy; {new Date().getFullYear()} RVS Bespoke Furniture Ltd. 3 Riverway, Barry Ave, Windsor SL4 5JA.</p>
            <div className="flex gap-12">
               <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
               <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
               <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
