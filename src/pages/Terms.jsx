// TEMPLATE — these are draft terms and conditions for RVS Bespoke's
// design, build and installation work. They have not been reviewed by
// a solicitor and should be checked before the business relies on them.
import { Helmet } from 'react-helmet-async';
import { imgSrcSet } from '../utils/image';

const Terms = () => {
  const canonicalUrl = 'https://rvsbespoke.co.uk/terms';

  return (
    <div>
      <Helmet>
        <title>Terms & Conditions | RVS Bespoke</title>
        <meta name="description" content="Terms and conditions covering quoting, deposits, lead times, variations and guarantees for RVS Bespoke fitted furniture projects." />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="noindex, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": canonicalUrl },
          ],
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-primary-dark pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpeg"
            srcSet={imgSrcSet('/images/hero.jpeg', [400, 800, 1200, 1920])}
            sizes="100vw"
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-30"
            alt="RVS Bespoke joinery workshop in Windsor, Berkshire"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full py-20">
          <div className="max-w-3xl">
            <p className="text-accent-gold uppercase tracking-[0.2em] text-xs font-bold mb-6">RVS Bespoke · Windsor</p>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              Terms &amp; <span className="text-accent-gold font-serif italic font-light">Conditions</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl leading-relaxed">
              The terms that apply to a design, build and installation project with us.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[900px] mx-auto prose prose-lg text-gray-600 leading-relaxed space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Quoting and acceptance</h2>
            <p>
              Quotes are provided free of charge following a design consultation and site visit. A quote
              becomes a binding agreement once accepted in writing and any required deposit is paid.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Deposit and payment</h2>
            <p>
              A deposit is payable on acceptance of a quote to secure a start date, with the balance due on
              completion. The deposit amount and any staged payments are set out in your written quote. We
              accept cash, credit card and bank transfer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Lead times</h2>
            <p>
              Lead times depend on the size of the project and our current workload, and are confirmed in
              your quote. If a project is delayed beyond the agreed start date, we will contact you as soon
              as we're aware and agree a revised date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Variations</h2>
            <p>
              Any changes to the agreed design or specification after acceptance will be priced separately
              and confirmed with you in writing before work proceeds.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">What you need to provide</h2>
            <p>
              To carry out installation, we ask that you provide reasonable access to the work area,
              parking for our vehicle where possible, and access to a power supply.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Guarantee</h2>
            <p>
              We guarantee our workmanship. The guarantee period and exactly what it covers are confirmed
              in writing with your quote. It does not cover damage caused by misuse, or normal wear and
              tear.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Cancellation</h2>
            <p>
              If you wish to cancel after accepting a quote, contact us as soon as possible. Cancellation
              terms and any deposit refund depend on how much design and preparation work has already been
              carried out at the point of cancellation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Limitation of liability</h2>
            <p>
              We carry out all work to a professional standard and take care to protect your home during
              installation. Our liability is limited to the value of the project, except where liability
              cannot be excluded by law (such as for death or personal injury caused by negligence).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Governing law</h2>
            <p>
              These terms are governed by the law of England and Wales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
