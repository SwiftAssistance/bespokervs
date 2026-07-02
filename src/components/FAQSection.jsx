import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, Minus } from 'lucide-react';

/**
 * Shared FAQ accordion. Renders the questions on the page and emits matching
 * FAQPage JSON-LD from the same data, so the structured data always mirrors
 * the visible content — a requirement for FAQ rich results and the signal
 * answer engines (Google AI Overviews, ChatGPT, Perplexity) draw from.
 */
const FAQSection = ({ faqs, title = 'Frequently Asked Questions', subtitle, className = 'bg-white' }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <section className={`py-20 px-8 ${className}`}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-dark tracking-tight mb-4">
          {title}
        </h2>
        {subtitle && <p className="text-gray-500 leading-relaxed mb-6">{subtitle}</p>}
        <div className="mt-6">
          {faqs.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={question} className="border-b border-gray-200">
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                  >
                    <span className="text-lg font-medium text-primary-dark">{question}</span>
                    {isOpen
                      ? <Minus size={18} className="text-accent-gold flex-shrink-0" />
                      : <Plus size={18} className="text-accent-gold flex-shrink-0" />}
                  </button>
                </h3>
                {/* Answer stays in the DOM when closed so crawlers and answer engines can read it */}
                <div id={panelId} hidden={!isOpen}>
                  <p className="pb-5 text-gray-500 leading-relaxed">{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
