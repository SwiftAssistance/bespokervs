import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/site';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const initialMount = useRef(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change (but not on initial mount)
  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }
    setIsMenuOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open — use class to avoid forced reflow
  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.documentElement.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isServiceActive = () => siteConfig.rooms.some((room) => location.pathname === room.path);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/40 mt-1.5">
                {siteConfig.company.established}
              </span>
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-accent-gold mt-1"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {siteConfig.navigation.main.map((item) =>
              item.children ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <div className="flex items-center gap-1.5">
                    <Link
                      to={item.path}
                      className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all relative group ${
                        isServiceActive() || isActive(item.path)
                          ? 'text-accent-gold'
                          : 'text-white/80 hover:text-accent-gold'
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-2 left-0 h-px bg-accent-gold transition-all ${
                          isServiceActive() || isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(prev => !prev)}
                      className={`transition-all ${
                        isServiceActive() || isActive(item.path)
                          ? 'text-accent-gold'
                          : 'text-white/80 hover:text-accent-gold'
                      }`}
                      aria-label="Toggle services menu"
                    >
                      <ChevronDown size={12} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-4 bg-primary-dark border border-white/10 shadow-2xl min-w-[220px] py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`block px-6 py-3 text-[10px] uppercase tracking-[0.3em] font-bold transition-colors ${
                            isActive(child.path)
                              ? 'text-accent-gold bg-white/5'
                              : 'text-white/70 hover:text-accent-gold hover:bg-white/5'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
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
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-full text-white bg-white/10 active:bg-white/30 transition-colors"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[150] bg-black/50 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-[200] bg-primary-dark md:hidden transition-transform duration-500 ease-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 flex justify-end">
          <button
            type="button"
            onClick={closeMenu}
            className="text-white p-3 bg-white/10 rounded-full active:bg-white/30 transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-8 text-white px-8 pb-16">
          {siteConfig.navigation.main.map((item) =>
            item.children ? (
              <div key={item.name} className="flex flex-col items-center">
                <div className="flex items-center gap-3">
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`text-4xl font-light tracking-tight transition-colors ${
                      isActive(item.path) || isServiceActive()
                        ? 'text-accent-gold'
                        : 'active:text-accent-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileDropdownOpen(prev => !prev)}
                    className="text-white/60 active:text-accent-gold p-2"
                    aria-label="Toggle services list"
                  >
                    <ChevronDown size={20} className={`transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <div
                  className={`flex flex-col items-center space-y-3 overflow-hidden transition-all duration-300 ${
                    mobileDropdownOpen ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      onClick={closeMenu}
                      className={`text-xl font-light tracking-tight transition-colors ${
                        isActive(child.path)
                          ? 'text-accent-gold'
                          : 'text-white/60 active:text-accent-gold'
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`text-4xl font-light tracking-tight transition-colors ${
                  isActive(item.path)
                    ? 'text-accent-gold'
                    : 'active:text-accent-gold'
                }`}
              >
                {item.name}
              </Link>
            )
          )}
          <div className="pt-8 flex flex-col items-center gap-4">
            <span className="text-accent-gold text-xs uppercase tracking-[0.5em]">
              Call Us
            </span>
            <a
              href={siteConfig.contact.phoneLink}
              className="text-2xl font-bold tracking-wider active:text-accent-gold transition-colors"
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
