// TEMPLATE — this is a standard UK GDPR privacy notice drafted for RVS
// Bespoke's contact form and Google Maps embed. It has not been reviewed
// by a solicitor and should be checked before the business relies on it.
import { Helmet } from 'react-helmet-async';
import { imgSrcSet } from '../utils/image';

const Privacy = () => {
  const canonicalUrl = 'https://rvsbespoke.co.uk/privacy';

  return (
    <div>
      <Helmet>
        <title>Privacy Policy | RVS Bespoke</title>
        <meta name="description" content="How RVS Bespoke collects, uses and stores personal data submitted through our contact forms, in line with UK GDPR." />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="noindex, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rvsbespoke.co.uk/" },
            { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": canonicalUrl },
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
              Privacy <span className="text-accent-gold font-serif italic font-light">Policy</span>
            </h1>
            <p className="text-white/60 text-xl max-w-xl leading-relaxed">
              How we collect, use and protect your personal data.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[900px] mx-auto prose prose-lg text-gray-600 leading-relaxed space-y-8">
          <p>
            RVS Bespoke Furniture Ltd ("we", "us", "our") is committed to protecting your privacy. This
            policy explains what personal data we collect when you contact us, why we collect it, and
            your rights under UK GDPR.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">What we collect</h2>
            <p>
              When you submit an enquiry through our contact form, we collect the information you provide:
              your name, email address, phone number, the type of project you're enquiring about, and any
              message you send us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Why we collect it</h2>
            <p>
              We use this information solely to respond to your enquiry, discuss your project, and provide
              a quote if you'd like one. Our lawful basis for processing this data is legitimate interest —
              responding to a direct enquiry you have made to us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">How long we keep it</h2>
            <p>
              We keep enquiry data only for as long as we need it to respond to you. If you go on to become
              a client, data relevant to your project is kept for the duration of the project and any
              applicable guarantee period.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Who we share it with</h2>
            <p>
              We do not sell your data or share it with third parties for marketing purposes. Your enquiry
              is sent to our contact form provider in order to deliver it to us, and is otherwise seen only
              by RVS Bespoke.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Google Maps</h2>
            <p>
              Our Contact and homepage pages embed a Google Maps view of our workshop location. Google may
              set cookies and collect usage data when this embed loads, in line with Google's own privacy
              policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Your rights</h2>
            <p>
              Under UK GDPR, you have the right to access, correct, or request deletion of your personal
              data, and to object to or restrict our processing of it. To exercise any of these rights, or
              if you have questions about this policy, contact us at{' '}
              <a href="mailto:rvsbuilding@aol.com" className="text-accent-gold hover:underline">rvsbuilding@aol.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
