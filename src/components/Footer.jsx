import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-darker pt-32 pb-16 px-8 border-t border-white/5" role="contentinfo">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Logo and Contact Info */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block" aria-label="RVS Bespoke - Home">
              <div className="text-4xl font-bold tracking-tighter text-white mb-8">
                {siteConfig.company.name.split(' ')[0]}{' '}
                <span className="text-accent-gold font-light">
                  {siteConfig.company.name.split(' ')[1]}
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Bespoke fitted furniture for every room, handcrafted in Windsor. Made to measure for your home.
            </p>
            <div className="space-y-4 text-white/50 text-sm">
              <a
                href={siteConfig.contact.phoneLink}
                className="flex items-center gap-3 hover:text-accent-gold transition-colors"
                aria-label="Call us"
              >
                <Phone size={16} />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <address className="not-italic">
                  {siteConfig.contact.address.line1}<br />
                  {siteConfig.contact.address.line2}
                </address>
              </div>
            </div>
          </div>

          {/* Fitted Furniture */}
          <div className="md:col-span-2">
            <h3 className="text-accent-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-8">
              Fitted Furniture
            </h3>
            <ul className="space-y-4 text-white/50 text-sm">
              {siteConfig.rooms.map((room) => (
                <li key={room.id}>
                  <Link to={room.path} className="hover:text-white transition-colors">
                    {room.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas We Serve */}
          <div className="md:col-span-3">
            <h3 className="text-accent-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-8">
              Areas We Serve
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-white/50 text-sm">
              <li>Windsor</li>
              <li>Ascot</li>
              <li>Maidenhead</li>
              <li>Slough</li>
              <li>Eton</li>
              <li>Datchet</li>
              <li>Old Windsor</li>
              <li>Sunningdale</li>
              <li>Winkfield</li>
              <li>Berkshire</li>
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div className="md:col-span-3">
            <h3 className="text-accent-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-8">
              Company
            </h3>
            <ul className="space-y-4 text-white/50 text-sm mb-10">
              {siteConfig.navigation.footer.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6 text-accent-gold">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Follow RVS Bespoke on Instagram"
              >
                <Instagram size={22} strokeWidth={1.5} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Follow RVS Bespoke on Facebook"
              >
                <Facebook size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 uppercase tracking-[0.2em] space-y-4 md:space-y-0 text-center md:text-left">
          <p>
            &copy; {currentYear} {siteConfig.footer.copyright}. Bespoke furniture makers in Windsor, Berkshire.
          </p>
          <div className="flex gap-8">
            {siteConfig.footer.links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
