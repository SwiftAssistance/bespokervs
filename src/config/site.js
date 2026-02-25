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
    established: 'ESTABLISHED IN WINDSOR',
  },

  // Contact Information (Required)
  contact: {
    phone: '01753 622159',
    phoneLink: 'tel:01753622159',
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
    instagram: 'https://instagram.com/rvsbespoke',
    facebook: 'https://facebook.com/rvsbespoke',
  },

  // Navigation Links (Required)
  navigation: {
    main: [
      { name: 'Home', path: '/' },
      {
        name: 'Rooms',
        path: '/living-room',
        children: [
          { name: 'Living Room', path: '/living-room' },
          { name: 'Bedroom', path: '/bedroom' },
          { name: 'Home Office', path: '/home-office' },
          { name: 'Bathroom', path: '/bathroom' },
          { name: 'Kitchen', path: '/kitchen' },
          { name: 'Cloakroom', path: '/cloakroom' },
        ],
      },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    footer: [
      { name: 'Home', path: '/' },
      { name: 'About the Studio', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },

  // Fitted Furniture Rooms (Required)
  rooms: [
    {
      id: 'living-room',
      title: 'Fitted Living Room Furniture',
      shortTitle: 'Living Room',
      shortDescription: 'Bespoke cabinetry and storage for your living space.',
      description: 'Transform your living room with bespoke fitted furniture. From media units and alcove cabinets to bookshelves and window seats, crafted to complement your home.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=75&w=800',
      path: '/living-room',
    },
    {
      id: 'bedroom',
      title: 'Fitted Bedroom Furniture',
      shortTitle: 'Bedroom',
      shortDescription: 'Wardrobes, dressing areas and bedroom storage.',
      description: 'Bespoke fitted wardrobes, bedside units, and dressing tables designed to maximise space and suit your style. Made to measure for any bedroom layout.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=75&w=800',
      path: '/bedroom',
    },
    {
      id: 'home-office',
      title: 'Fitted Home Office Furniture',
      shortTitle: 'Home Office',
      shortDescription: 'Custom desks and study furniture for productive working.',
      description: 'Bespoke fitted desks, shelving, and storage designed for remote working. Built-in solutions that keep your workspace organised and looking professional.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=75&w=800',
      path: '/home-office',
    },
    {
      id: 'bathroom',
      title: 'Fitted Bathroom Furniture',
      shortTitle: 'Bathroom',
      shortDescription: 'Bespoke vanity units and bathroom cabinetry.',
      description: 'Handcrafted fitted bathroom furniture including vanity units, storage cabinets, and shelving. Designed for moisture resistance and built to last.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=75&w=800',
      path: '/bathroom',
    },
    {
      id: 'kitchen',
      title: 'Fitted Kitchen Furniture',
      shortTitle: 'Kitchen',
      shortDescription: 'Handcrafted kitchens built to your specification.',
      description: 'Bespoke fitted kitchens designed around the way you cook and live. Every cabinet, drawer, and worktop crafted in our Windsor workshop.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=75&w=800',
      path: '/kitchen',
    },
    {
      id: 'cloakroom',
      title: 'Fitted Cloakroom Furniture',
      shortTitle: 'Cloakroom',
      shortDescription: 'Smart storage for hallways and cloakrooms.',
      description: 'Bespoke fitted cloakroom furniture including boot rooms, coat storage, and hallway cabinetry. Practical solutions that make the most of every inch.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=75&w=800',
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
    image: 'https://images.unsplash.com/photo-1540633596541-692790937a09?auto=format&fit=crop&q=80&w=1000',
  },

  // Contact Page Content (Required)
  contactPage: {
    hero: {
      title: 'Get In Touch',
      subtitle: 'Visit the Workshop',
    },
    form: {
      title: 'New Commission',
      submitButton: 'Submit Project Request',
      projectTypes: [
        'Fitted Living Room',
        'Fitted Bedroom',
        'Fitted Home Office',
        'Fitted Bathroom',
        'Fitted Kitchen',
        'Fitted Cloakroom',
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
      titleHighlight: 'Excellence.',
      description: 'Bespoke fitted furniture for every room in your home. Handcrafted in our Windsor workshop for homes across Berkshire.',
      cta: {
        primary: 'Begin Your Project',
        secondary: 'Explore Rooms',
      },
      scrollHint: 'Scroll to discover',
    },
    about: {
      sectionTitle: 'Our Story',
      title: 'Where Precision Meets',
      titleHighlight: 'Heritage.',
      description: 'Operating from our specialized workshop at 3 Riverway on Barry Ave, RVS Bespoke is a family-rooted business dedicated to the art of fine joinery.',
      cta: 'Meet the Craftsmen',
    },
    rooms: {
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
          quote: 'The attention to detail is extraordinary. Our kitchen has become the talking point of every dinner party.',
          author: 'Sarah Mitchell',
          location: 'Windsor',
          project: 'Fitted Kitchen',
        },
        {
          quote: 'RVS understood exactly what we needed. The home office they created has transformed how I work.',
          author: 'James Crawford',
          location: 'Ascot',
          project: 'Fitted Home Office',
        },
        {
          quote: 'From design to installation, the entire process was seamless. True craftsmen.',
          author: 'Emma Thompson',
          location: 'Eton',
          project: 'Fitted Bedroom',
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
    hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920',
    about: 'https://images.unsplash.com/photo-1540633596541-692790937a09?auto=format&fit=crop&q=75&w=800',
    workshop: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=75&w=800',
  },

  // SEO Configuration (Required)
  seo: {
    title: 'RVS Bespoke | Fitted Furniture Excellence',
    description: 'Bespoke fitted furniture for every room in your home. Handcrafted in our Windsor workshop for homes across Berkshire.',
    keywords: 'fitted furniture, bespoke fitted furniture, fitted kitchen, fitted bedroom, fitted bathroom, fitted living room, fitted home office, fitted cloakroom, Windsor joinery, Berkshire furniture maker',
  },
};

export default siteConfig;
