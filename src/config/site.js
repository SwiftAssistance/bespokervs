/**
 * Site Configuration
 * All site-wide settings and content are configured here
 * Every field is required for the site to function properly
 */

export const siteConfig = {
  // Company Information (Required)
  company: {
    name: 'RVS Bespoke',
    fullName: 'RVS Bespoke Furniture Ltd',
    tagline: 'Bespoke Excellence',
    description: 'Bespoke fitted furniture for every room in your home. Handcrafted in our Windsor workshop for homes across Berkshire.',
    established: 'Windsor, Berkshire',
  },

  // Contact Information (Required)
  contact: {
    phone: '07963 422797',
    phoneLink: 'tel:07963422797',
    email: 'enquiries@rvsbespoke.co.uk',
    emailLink: 'mailto:enquiries@rvsbespoke.co.uk',
    address: {
      line1: '3 Riverway, Barry Ave',
      line2: 'Windsor SL4 5JA',
      full: '3 Riverway, Barry Ave, Windsor SL4 5JA',
    },
  },

  // Social Media Links (Required)
  social: {
    instagram: 'https://www.instagram.com/rvs_bespoke',
    facebook: 'https://facebook.com/rvsbespoke',
  },

  // Navigation Links (Required)
  navigation: {
    main: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      {
        name: 'Services',
        path: '/services',
        children: [
          { name: 'Living Room, Dining Room & Kitchen', path: '/living-room' },
          { name: 'Bedroom', path: '/bedroom' },
          { name: 'Home Office', path: '/home-office' },
          { name: 'Loft Conversion', path: '/loft-conversion' },
          { name: 'Cloakroom & Under the Stairs', path: '/cloakroom' },
        ],
      },
      { name: 'Contact', path: '/contact' },
    ],
    footer: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Areas We Cover', path: '/areas' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },

  // Fitted Furniture Rooms (Required)
  rooms: [
    {
      id: 'living-room',
      title: 'Living Room, Dining Room & Kitchen',
      shortTitle: 'Living Room, Dining Room & Kitchen',
      shortDescription: 'Alcove cabinets, media walls, kitchen cabinetry and dining storage.',
      description: 'Bespoke fitted furniture for the heart of your home including alcove cabinetry, media walls and bookshelves',
      image: '/images/living_room_card.jpeg',
      path: '/living-room',
    },
    {
      id: 'bedroom',
      title: 'Fitted Bedroom Furniture',
      shortTitle: 'Bedroom',
      shortDescription: 'Wardrobes, dressing areas and bedroom storage.',
      description: 'Bespoke fitted wardrobes, walk in wardrobes and bedroom storage',
      image: '/images/bedroom_card.jpeg',
      path: '/bedroom',
    },
    {
      id: 'home-office',
      title: 'Fitted Home Office Furniture',
      shortTitle: 'Home Office',
      shortDescription: 'Custom desks and study furniture for productive working.',
      description: 'Bespoke desks and home office fitted furniture',
      image: '/images/home_office_card.jpeg',
      path: '/home-office',
    },
    {
      id: 'loft-conversion',
      title: 'Loft Conversion Furniture',
      shortTitle: 'Loft Conversion',
      shortDescription: 'Fitted joinery designed for sloped ceilings and eaves.',
      description: 'Fitted furniture designed for under eaves and awkward spaces',
      image: '/images/bedroom_card.jpeg',
      path: '/loft-conversion',
    },
    {
      id: 'cloakroom',
      title: 'Cloakroom & Under the Stairs',
      shortTitle: 'Cloakroom & Under the Stairs',
      shortDescription: 'Smart storage for hallways, cloakrooms and under-stair spaces.',
      description: 'Hallway and understairs cabinetry that keeps your entry way organised and welcoming',
      image: '/images/cloakroom_card.jpeg',
      path: '/cloakroom',
    },
  ],

  // About Page Content (Required)
  about: {
    hero: {
      title: 'Our Story',
      subtitle: 'Where Precision Meets Heritage',
    },
    story: {
      intro: 'Operating from our specialized workshop at 3 Riverway on Barry Ave, RVS Bespoke is a family-rooted business dedicated to the art of fine joinery.',
      history: 'Founded with a passion for exceptional craftsmanship, RVS Bespoke has grown from a small workshop to become one of Windsor\'s most respected bespoke furniture makers. Our journey began with a simple belief: that furniture should be built to last generations, not just years.',
      philosophy: 'Every piece that leaves our workshop carries the hallmarks of traditional craftsmanship combined with modern precision. We believe in taking the time to understand not just what our clients want, but how they live, ensuring every commission perfectly fits their lifestyle.',
      commitment: 'We are committed to sustainable practices, sourcing materials responsibly and building furniture designed to last a lifetime. Our workshop operates with minimal waste, and we actively seek out reclaimed and certified sustainable timbers.',
    },
    values: [
      {
        icon: 'ShieldCheck',
        title: 'Master Joinery',
        description: 'We use traditional mortise and tenon joints combined with modern precision for lifetime durability.',
      },
      {
        icon: 'Award',
        title: 'Local Heritage',
        description: 'Serving Windsor, Ascot, and the surrounding Berkshire areas for over a decade with distinction.',
      },
      {
        icon: 'Hammer',
        title: 'Handcrafted Excellence',
        description: 'Every piece is hand-finished by skilled craftsmen who take pride in their work.',
      },
      {
        icon: 'Leaf',
        title: 'Sustainable Practice',
        description: 'We source materials responsibly and build furniture designed to last generations.',
      },
    ],
    team: {
      title: 'The Craftsmen',
      description: 'Our team brings together decades of combined experience in traditional joinery, modern design, and customer service excellence.',
    },
    stats: [
      { value: '10+', label: 'Years Experience' },
      { value: '500+', label: 'Projects Completed' },
      { value: '100%', label: 'Bespoke Design' },
      { value: '5 Star', label: 'Customer Rating' },
    ],
    image: '/images/about_workshop.jpeg',
  },

  // Contact Page Content (Required)
  contactPage: {
    hero: {
      title: 'Get In Touch',
      subtitle: 'Contact Us',
    },
    form: {
      title: 'Get In Touch',
      submitButton: 'Send Message',
      projectTypes: [
        'Living Room, Dining Room & Kitchen',
        'Bedroom',
        'Home Office',
        'Loft Conversion',
        'Cloakroom & Under the Stairs',
        'Other',
      ],
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'e.g. James Windsor',
        },
        email: {
          label: 'Email Address',
          placeholder: 'email@address.com',
        },
        phone: {
          label: 'Phone Number',
          placeholder: '+44 1234 567890',
        },
        projectType: {
          label: 'Project Type',
        },
        message: {
          label: 'Your Message',
          placeholder: 'Tell us about your space and what you\'re looking for...',
        },
      },
    },
    showroom: {
      title: 'Visit Our Showroom',
      hours: [
        { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
        { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
        { day: 'Sunday', time: 'By Appointment' },
      ],
      note: 'We recommend booking an appointment for personalized consultations.',
    },
  },

  // Home Page Content (Required)
  home: {
    hero: {
      title: 'Bespoke',
      titleHighlight: 'Storage Solutions.',
      description: 'Handcrafted fitted furniture for your home.',
      cta: {
        primary: 'Begin Your Project',
        secondary: 'Explore Services',
      },
      scrollHint: 'Scroll to discover',
    },
    about: {
      sectionTitle: 'About Us',
      title: 'Where Precision Meets',
      titleHighlight: 'Heritage.',
      description: 'RVS Bespoke is a family-rooted Windsor business dedicated to the art of fine joinery — crafting bespoke fitted furniture for homes across Berkshire with over a decade of expertise.',
      cta: 'Meet the Craftsmen',
    },
    services: {
      sectionTitle: 'The Studio',
      title: 'Fitted Furniture.',
      quote: '"Every piece is a unique dialogue between the wood and your home."',
      cta: 'Discuss Project',
    },
    testimonials: {
      sectionTitle: 'Client Stories',
      title: 'What Our Clients Say',
      items: [
        {
          quote: 'Richard has now completed three projects in our house: window seat storage, under stairs storage/pull outs and most recently has added additional storage to our shed interior. Richard’s attention to detail is second to none.',
          author: 'Rebecca Donegan',
          location: 'Ascot',
          project: 'Window Seat & Under-Stairs Storage',
        },
        {
          quote: 'Richard built us a fabulous bookcase with storage, drawers led lighting and integrated tv. We were so thrilled with his work, which is finished to the highest standard.',
          author: 'Jez Ashton',
          location: 'Maidenhead',
          project: 'Fitted Bookcase & Media Wall',
        },
      ],
    },
  },

  // Footer Content (Required)
  footer: {
    tagline: 'Crafting the fine details that define extraordinary living spaces. From our workshop to your home, quality is our absolute priority.',
    copyright: 'RVS Bespoke Furniture Ltd',
    links: [
      { name: 'Privacy', path: '/privacy' },
      { name: 'Terms', path: '/terms' },
      { name: 'Sitemap', path: '/sitemap' },
    ],
    socialLabel: 'Follow Our Progress',
  },

  // Images (Required)
  images: {
    hero: '/images/hero.jpeg',
    about: '/images/home_about.jpeg',
    workshop: '/images/hero.jpeg',
  },

  // SEO Configuration (Required)
  seo: {
    title: 'RVS Bespoke | Fitted Furniture Excellence',
    description: 'Bespoke fitted furniture for every room in your home. Handcrafted in our Windsor workshop for homes across Berkshire.',
    keywords: 'fitted furniture, bespoke fitted furniture, fitted kitchen, fitted bedroom, fitted bathroom, fitted living room, fitted home office, fitted cloakroom, Windsor joinery, Berkshire furniture maker',
  },
};

export default siteConfig;
