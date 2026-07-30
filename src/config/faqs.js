/**
 * FAQ Content
 * Single source of truth for every FAQ on the site. Each page renders these
 * through the shared <FAQSection /> component, which also generates the
 * matching FAQPage structured data.
 */

export const siteFaqs = [
  {
    question: 'What areas do you cover?',
    answer: 'We usually work within a 15 mile radius of Windsor where we are based.',
  },
  {
    question: 'Do you handle everything from design to installation?',
    answer: 'Yes, we do not subcontract any of the work, including lighting and electrical.',
  },
  {
    question: 'What is the process from enquiring to finished installation?',
    answer: [
      'The process starts with a phone call to discuss your project',
      'If the project is suitable, we will arrange a free site visit to discuss further, followed by a free quote',
      'If you decide to go ahead, a deposit will be taken and a start date agreed',
      'Approximately 2 weeks before the work is due to start, we will pay another visit to finalise design and take detailed dimensions',
      'Installation with minimal possible disruption',
    ],
  },
  {
    question: 'What finishes are available?',
    answer:
      'All our fitted furniture is hand painted in either eggshell or satinwood finishes, colour choice is up to you.\nPopular colours include: Dulux, Little Greene, Farrow & Ball',
  },
  {
    question: "What's included in the price?",
    answer: 'Design, installation and all paint finishing.',
  },
];

/**
 * Page aliases. These are all still the site-wide Q&As: every answer in
 * siteFaqs is verified and applies to every service, so they display on
 * each page. Only the homepage emits the FAQPage JSON-LD (see the
 * `emitSchema` prop on FAQSection) so identical structured data isn't
 * repeated across 20+ URLs.
 *
 * TODO (needs owner input): genuinely page-specific Q&As — e.g. typical
 * kitchen lead time, whether appliances/worktops are supplied, moisture
 * specification for bathroom furniture. Those are real differentiators
 * for search and AI answer engines, but none can be written without
 * confirmed facts.
 */
export const homeFaqs = siteFaqs;
export const servicesFaqs = siteFaqs;
export const livingRoomFaqs = siteFaqs;
export const bedroomFaqs = siteFaqs;
export const homeOfficeFaqs = siteFaqs;
export const loftConversionFaqs = siteFaqs;
export const cloakroomFaqs = siteFaqs;
export const aboutFaqs = siteFaqs;
export const kitchenFaqs = siteFaqs;
export const bathroomFaqs = siteFaqs;

/**
 * Location-specific FAQs. The lead question is genuinely per-area; the
 * rest reuse the site-wide answers. Note we drop siteFaqs[0] ("What
 * areas do you cover?") because the area-specific question below
 * answers it better on these pages.
 *
 * The page body already renders area.intro, so it deliberately is NOT
 * repeated here — doing so would print the page's only unique paragraph
 * twice and add no new information.
 */
export const areaFaqs = (area) => [
  {
    question: `Do you cover ${area.name}?`,
    answer: `Yes. ${area.name} is [CONFIRM] miles from our workshop in Windsor and there is no travel charge. We also work in ${area.nearby.join(', ')}.`,
  },
  ...siteFaqs.slice(1),
];
