/**
 * FAQ Content
 * Single source of truth for every FAQ on the site. Each page renders these
 * through the shared <FAQSection /> component, which also generates the
 * matching FAQPage structured data.
 */

export const siteFaqs = [
  {
    question: 'What areas do you cover?',
    answer: 'We usually work within a 15 miles radius from Windsor where we are based.',
  },
  {
    question: 'Do you handle everything from design to installation?',
    answer: 'Yes we handle everything from design to installation.',
  },
  {
    question: 'What is the process from enquiring to finished installation?',
    answer:
      '1) A site visit to discuss ideas and design, followed by a quote. 2) If you decide to go ahead, a deposit will be taken and the work booked in. 3) Two weeks before the start date, another visit to run through final details and measurements.',
  },
  {
    question: 'What finishes are available?',
    answer:
      'All our fitted furniture is hand painted in either eggshell or satinwood finishes, colour choice is up to you.',
  },
  {
    question: "What's included in the price?",
    answer: 'Design, installation and all paint finishing.',
  },
];

export const homeFaqs = siteFaqs;
export const servicesFaqs = siteFaqs;
export const livingRoomFaqs = siteFaqs;
export const bedroomFaqs = siteFaqs;
export const homeOfficeFaqs = siteFaqs;
export const loftConversionFaqs = siteFaqs;
export const cloakroomFaqs = siteFaqs;
export const aboutFaqs = siteFaqs;

/**
 * Location-specific FAQ pages reuse the same site-wide Q&As.
 */
export const areaFaqs = () => siteFaqs;
