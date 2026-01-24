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
    description: 'Exceptional handcrafted furniture for kitchens, offices, and living spaces. Built locally in our Windsor workshop for homes across Berkshire.',
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
      { name: 'Services', path: '/services' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    footer: [
      { name: 'Home', path: '/' },
      { name: 'Our Services', path: '/services' },
      { name: 'About the Studio', path: '/about' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },

  // Services Data (Required)
  services: [
    {
      id: 'kitchens',
      title: 'Handcrafted Kitchens',
      shortDescription: 'The heart of the home, reimagined.',
      description: 'The heart of the home, reimagined. We create ergonomic, stunning culinary spaces that balance form and function with meticulous attention to detail.',
      fullDescription: 'Our bespoke kitchens are designed and built to be the centerpiece of your home. Using premium materials and traditional joinery techniques combined with modern precision, we create spaces that are both beautiful and highly functional. Every cabinet, drawer, and surface is crafted to your exact specifications.',
      features: [
        'Custom cabinetry with dovetail joints',
        'Premium hardwood and sustainable materials',
        'Integrated appliance solutions',
        'Bespoke island designs',
        'Hand-finished surfaces',
        'Lifetime structural warranty',
      ],
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
      heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=2000',
    },
    {
      id: 'offices',
      title: 'Executive Offices',
      shortDescription: 'Quiet luxury for your workspace.',
      description: 'Quiet luxury for your workspace. Custom desks and integrated library systems tailored to your workflow and professional aesthetic.',
      fullDescription: 'Transform your workspace into an environment that inspires productivity and reflects your professional stature. Our executive office furniture combines timeless design with practical functionality, featuring integrated cable management, custom storage solutions, and premium materials.',
      features: [
        'Executive desks with leather inlays',
        'Custom library and shelving systems',
        'Integrated technology solutions',
        'Meeting room furniture',
        'Reception area design',
        'Acoustic panel integration',
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000',
    },
    {
      id: 'wardrobes',
      title: 'Fitted Wardrobes',
      shortDescription: 'Intelligent storage solutions for suites.',
      description: 'Intelligent storage solutions for suites. From walk-in closets to bespoke bedroom cabinetry, we maximize every inch of your space.',
      fullDescription: 'Our fitted wardrobes are designed to maximize your storage space while adding elegance to your bedroom. Whether you need a compact solution or a luxurious walk-in closet, we design and build wardrobes that perfectly fit your space and lifestyle.',
      features: [
        'Custom internal configurations',
        'Soft-close mechanisms throughout',
        'Integrated lighting systems',
        'Mirror and glass options',
        'Accessories and organizers',
        'Color-matched to your decor',
      ],
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200',
      heroImage: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80&w=2000',
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
  contact: {
    hero: {
      title: 'Get In Touch',
      subtitle: 'Visit the Workshop',
    },
    form: {
      title: 'New Commission',
      submitButton: 'Submit Project Request',
      projectTypes: [
        'Bespoke Kitchen',
        'Home Office',
        'Fitted Wardrobe',
        'Custom Furniture',
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
      description: 'Exceptional handcrafted furniture for kitchens, offices, and living spaces. Built locally in our Windsor workshop for homes across Berkshire.',
      cta: {
        primary: 'Begin Your Project',
        secondary: 'Explore Services',
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
    services: {
      sectionTitle: 'The Studio',
      title: 'Bespoke Specialisms.',
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
          project: 'Bespoke Kitchen',
        },
        {
          quote: 'RVS understood exactly what we needed. The home office they created has transformed how I work.',
          author: 'James Crawford',
          location: 'Ascot',
          project: 'Executive Office',
        },
        {
          quote: 'From design to installation, the entire process was seamless. True craftsmen.',
          author: 'Emma Thompson',
          location: 'Eton',
          project: 'Fitted Wardrobes',
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
    hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=95&w=2400',
    about: 'https://images.unsplash.com/photo-1540633596541-692790937a09?auto=format&fit=crop&q=80&w=1000',
    workshop: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=1200',
  },

  // SEO Configuration (Required)
  seo: {
    title: 'RVS Bespoke | Handcrafted Furniture Excellence',
    description: 'Exceptional handcrafted furniture for kitchens, offices, and living spaces. Built locally in our Windsor workshop.',
    keywords: 'bespoke furniture, handcrafted kitchens, custom wardrobes, executive offices, Windsor joinery, Berkshire furniture maker',
  },
};

export default siteConfig;
