import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | RVS Bespoke Windsor</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="relative min-h-screen flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
          <p className="text-accent-gold text-sm uppercase tracking-[0.4em] mb-6 font-medium">404 Error</p>
          <h1 className="text-[8rem] md:text-[12rem] font-bold text-white/10 leading-none tracking-tight select-none">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 -mt-4">
            Page <span className="text-accent-gold font-serif italic font-light">Not Found</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 font-light leading-relaxed">
            The page you're looking for doesn't exist. It may have moved or the link may be incorrect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-4 bg-accent-gold text-primary-dark px-10 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all"
            >
              Back to Home <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-4 border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[11px] hover:border-accent-gold hover:text-accent-gold transition-all"
            >
              Get In Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
