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

/**
 * County landing page (/fitted-furniture-berkshire). These are deliberately
 * written fresh rather than reusing `siteFaqs`, so the page carries its own
 * FAQPage schema without repeating the site-wide block on yet another URL.
 */
export const berkshireFaqs = [
  {
    question: 'Do you cover the whole of Berkshire?',
    answer:
      'We are based in Windsor and usually work within about a 15 mile radius, which covers most of east Berkshire — Windsor, Eton, Slough, Maidenhead, Ascot, Sunningdale, Datchet, Bracknell and Wokingham, plus the villages around them. If you are further west in the county, give us a call and we will tell you honestly whether we can take the project on.',
  },
  {
    question: 'Is there a travel charge for fitted furniture outside Windsor?',
    answer:
      'No. Anywhere inside our normal Berkshire coverage area, design visits and installation are quoted the same as they would be in Windsor — there is no separate travel charge.',
  },
  {
    question: 'Where is the furniture actually made?',
    answer:
      'In our own workshop at 3 Riverway, Barry Avenue, Windsor. Nothing is bought in as flat-pack carcasses and nothing is subcontracted, including the lighting and electrical work, so the same team measures, builds, installs and paints your furniture.',
  },
  {
    question: 'Can you build fitted furniture for a period property?',
    answer:
      'Yes — a lot of Berkshire housing stock is Victorian, Edwardian or 1930s, where no wall is straight and no alcove is square. Every piece is measured on site and scribed to fit, and mouldings and door styles can be matched to the existing joinery so the finished furniture looks original to the house.',
  },
  {
    question: 'How do I get a quote for fitted furniture in Berkshire?',
    answer:
      'Call 07963 422797 or send an enquiry through the site. We will talk the project through, and if it is a good fit we will arrange a free site visit anywhere in our Berkshire area, followed by a free written quote with design, installation and paint finishing all included.',
  },
];
