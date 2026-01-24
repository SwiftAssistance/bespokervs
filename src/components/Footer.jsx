import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '../config/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-darker pt-32 pb-16 px-8 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          {/* Logo and Tagline */}
          <div className="md:col-span-6">
            <Link to="/" className="inline-block">
              <div className="text-4xl font-bold tracking-tighter text-white mb-10">
                {siteConfig.company.name.split(' ')[0]}{' '}
                <span className="text-accent-gold font-light">
                  {siteConfig.company.name.split(' ')[1]}
                </span>
              </div>
            </Link>
            <p className="text-white/30 text-lg max-w-md leading-relaxed font-light italic">
              {siteConfig.footer.tagline}
            </p>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3">
            <h6 className="text-accent-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-10">
              Directory
            </h6>
            <ul className="space-y-6 text-white/50 text-xs font-bold uppercase tracking-[0.2em]">
              {siteConfig.navigation.footer.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h6 className="text-accent-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-10">
              Social Connection
            </h6>
            <div className="flex items-center gap-8 text-accent-gold">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} strokeWidth={1.5} />
              </a>
              <div className="h-10 w-px bg-white/10 mx-2"></div>
              <div className="text-[9px] text-white/20 uppercase tracking-[0.4em] leading-tight font-bold">
                {siteConfig.footer.socialLabel.split(' ').slice(0, 2).join(' ')}{' '}
                <br />
                {siteConfig.footer.socialLabel.split(' ').slice(2).join(' ')}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/20 uppercase tracking-[0.3em] space-y-6 md:space-y-0 text-center md:text-left font-bold">
          <p>
            &copy; {currentYear} {siteConfig.footer.copyright}.{' '}
            {siteConfig.contact.address.full}.
          </p>
          <div className="flex gap-12">
            {siteConfig.footer.links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-white cursor-pointer transition-colors"
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
