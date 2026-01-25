import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-primary-dark shadow-xl'
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="cursor-pointer group">
            <div
              className={`flex flex-col leading-none transition-all duration-500 ${
                scrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              <span className="text-3xl font-bold tracking-tighter text-white">
                {siteConfig.company.name.split(' ')[0]}{' '}
                <span className="font-light text-accent-gold">
                  {siteConfig.company.name.split(' ')[1]}
                </span>
              </span>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-accent-gold mt-1"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all relative group ${
                  isActive(item.path)
                    ? 'text-accent-gold'
                    : 'text-white/80 hover:text-accent-gold'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-accent-gold transition-all ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
            <a
              href={siteConfig.contact.phoneLink}
              className={`px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-bold transition-all border-2 flex items-center gap-3 ${
                scrolled
                  ? 'bg-accent-gold border-accent-gold text-white hover:bg-white hover:text-primary-dark'
                  : 'border-white/30 text-white hover:bg-accent-gold hover:border-accent-gold'
              }`}
            >
              <Phone size={14} /> {siteConfig.contact.phone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-3 rounded-full text-white bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-primary-dark transition-all duration-700 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 flex justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>
        <div className="h-[70%] flex flex-col justify-center items-center space-y-12 text-white">
          {siteConfig.navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-5xl font-light tracking-tighter transition-all ${
                isActive(item.path)
                  ? 'text-accent-gold'
                  : 'hover:text-accent-gold'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-10 flex flex-col items-center gap-4">
            <span className="text-accent-gold text-xs uppercase tracking-[0.5em]">
              Direct Line
            </span>
            <a
              href={siteConfig.contact.phoneLink}
              className="text-3xl font-bold tracking-widest hover:text-accent-gold transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
