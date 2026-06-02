import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

export interface TranslationType {
  brandName1: string;
  brandName2: string;
  navbar: {
    home: string;
    about: string;
    browseCategories: string;
    searchPlaceholder: string;
    allCategories: string;
    whatsapp: string;
  };
  footer: {
    getInTouch: string;
    copyright: string;
    address: string;
    description: string;
  };
  values: {
    howWeWork: string;
    titleStart: string;
    titleHighlight: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  seoContent: {
    titleStart: string;
    titleHighlight: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  categories: {
    [key: string]: string;
  };
  ourProducts: {
    categoriesTitle: string;
    trendingTitle: string;
    aboutTitle: string;
    aboutText: string;
    popular: string;
    addToCart: string;
    whatsappMsg: string;
  };
  topBrands: {
    top: string;
    brands: string;
    subtitle: string;
    viewAll: string;
  };
  aboutPage: {
    ourIntroduction: string;
    establishedSince: string;
    establishedYear: string;
    introP1: string;
    introP2: string;
    leadershipTitle: string;
    ceoTitle: string;
    ceoBio: string;
    marketingTitle: string;
    marketingBio: string;
  };
  searchBar: {
    browseAll: string;
    searchResults: string;
    itemsWord: string;
    foundWord: string;
    noResults: string;
    categoryMatch: string;
    brandsAvailable: string;
  };
  introCommon: {
    exploreBrands: string;
    constructionDesc: string;
    electricalDesc: string;
    gypsumDesc: string;
    paintDesc: string;
    plumbingDesc: string;
    cabinsDesc: string;
    safetyDesc: string;
    toolsDesc: string;
    waterProofingDesc: string;
  };
  productCommon: {
    whatsappMsg: string;
  };
  brands: {
    shopBy: string;
    brandsWord: string;
    subtitle: string;
    productsWord: string;
  };
  productPages: {
    waterproofing: { title: string; titleHighlight: string; subtitle: string };
    construction: { title: string; titleHighlight: string; subtitle: string };
    electrical: { title: string; titleHighlight: string; subtitle: string };
    gypsum: { title: string; titleHighlight: string; subtitle: string };
    paints: { title: string; titleHighlight: string; subtitle: string };
    plumbing: { title: string; titleHighlight: string; subtitle: string };
    cabins: { title: string; titleHighlight: string; subtitle: string };
    safety: { title: string; titleHighlight: string; subtitle: string };
    tools: { title: string; titleHighlight: string; subtitle: string };
  };
}

const translations: Record<Language, TranslationType> = {
  en: {
    brandName1: 'Al Emaar Al Areeq',
    brandName2: 'Building Solutions',
    navbar: {
      home: 'Home',
      about: 'About Company',
      browseCategories: 'Browse Categories',
      searchPlaceholder: 'Search brands, products, categories...',
      allCategories: 'All Categories',
      whatsapp: 'WhatsApp',
    },
    footer: {
      getInTouch: 'Get In Touch',
      copyright: '© 2026 Al-Emaar Building Solutions • Design and Developed by StackFlow Development Company • All Rights Reserved',
      address: 'Malik Fahad Road (Sittin) - Al Rabwah Dist., Jeddah 23342',
      description: 'Al-Emaar Building Solutions is your trusted partner for premium construction materials and building supplies. We provide comprehensive solutions for waterproofing, paints, adhesives, electrical items, plumbing, safety products, and construction materials to meet all your building needs with excellence and reliability.',
    },
    values: {
      howWeWork: 'How We Work',
      titleStart: 'Our 4 Steps To ',
      titleHighlight: 'Quality Assurance',
      steps: [
        {
          title: 'Careful Selection',
          description: 'We meticulously choose our materials from reputable suppliers.',
        },
        {
          title: 'Thorough Inspection',
          description: 'Our experts rigorously assess every product for quality and compliance.',
        },
        {
          title: 'Efficient Delivery',
          description: 'We prioritize timely and secure delivery for your convenience.',
        },
        {
          title: 'Dedicated Support',
          description: 'Our team is committed to providing personalized assistance and ongoing support.',
        },
      ],
    },
    seoContent: {
      titleStart: 'Why Choose Al Emaar ',
      titleHighlight: 'Al Areeq Trading Est.?',
      items: [
        {
          title: 'Competitive Wholesale Pricing',
          description: 'Best prices for bulk orders and contractors',
        },
        {
          title: 'Trusted International Brands',
          description: 'Authorized dealers for premium brands',
        },
        {
          title: 'Bulk Supply for Contractors',
          description: 'Large inventory for construction projects',
        },
        {
          title: 'Fast Delivery in Jeddah',
          description: 'Quick delivery across Jeddah and surrounding areas',
        },
        {
          title: 'Reliable Customer Support',
          description: 'Expert advice and technical support',
        },
      ],
    },
    categories: {
      'Waterproofing Items': 'Waterproofing Items',
      'Construction Materials': 'Construction Materials',
      'Gypsum Boards': 'Gypsum Boards',
      'Paints': 'Paints',
      'Electrical Items': 'Electrical Items',
      'Plumbing Items': 'Plumbing Items',
      'Porta Cabins': 'Porta Cabins',
      'Safety Products': 'Safety Products',
      'Tools And Equipments': 'Tools And Equipments',
      'Water Proofing Items': 'Water Proofing Items',
      'Gypsum Board': 'Gypsum Board',
      'Tools & Equipment': 'Tools & Equipment',
    },
    ourProducts: {
      categoriesTitle: 'All Categories',
      trendingTitle: 'Trending Products',
      aboutTitle: 'About Al-Emaar',
      aboutText: 'AL-EMAAR Building Solutions is a leading supplier of top-quality building materials. We provide a comprehensive range products to meet all your construction needs.',
      popular: 'Popular',
      addToCart: 'Add to Cart',
      whatsappMsg: 'Hello Al-Emaar! I am interested in purchasing the following product:\n\n*Product:* {name}\n*Details:* {subName}\n*Category:* {category}\n\nCould you please provide more information and pricing?',
    },
    topBrands: {
      top: 'Top',
      brands: 'Brands',
      subtitle: 'Browse Our Best-Selling Brands',
      viewAll: 'View All',
    },
    aboutPage: {
      ourIntroduction: 'OUR INTRODUCTION',
      establishedSince: 'Established Since',
      establishedYear: '2023',
      introP1: 'Al Emaar Alreeq Trading Est. is a diversified trading company and a trusted supplier of premium building materials and MEP products across Saudi Arabia. With more than seven years of industry and supply experience, we specialize in multi-materials supplying.',
      introP2: 'We provide a broad range of products including STP and swimming-pool chemicals, electrical items, fire and safety equipment, home appliances, electronics, and complete MEP solutions. We operate a full-service showroom and offer direct material supply to project sites across the region.',
      leadershipTitle: 'Meet Our Leadership Team',
      ceoTitle: 'Chief Executive Officer',
      ceoBio: "CEO of Al Emaar Alreeq Trading Est. Nadeem Farooq Khan is a visionary leader with extensive experience in business development and strategic management. With a strong background in commerce and a keen understanding of market dynamics, Nadeem has played a pivotal role in expanding the company's footprint across Saudi Arabia, forging key partnerships, and driving growth in the competitive construction materials sector.",
      marketingTitle: 'Marketing Manager',
      marketingBio: "Marketing Manager at Al Emaar Alreeq Trading Est., Ali Ur Rahman leads the company's marketing initiatives and brand development strategies. With expertise in market analysis and customer engagement, Ali focuses on building strong client relationships and expanding market presence across Saudi Arabia. His innovative approach to marketing and deep understanding of the construction materials sector has been key in positioning Al Emaar Alreeq as a trusted name in the industry, driving customer satisfaction and business growth.",
    },
    searchBar: {
      browseAll: 'Browse All',
      searchResults: 'Search Results',
      itemsWord: 'items',
      foundWord: 'found',
      noResults: 'No brands, products, or categories found for',
      categoryMatch: 'Category Match',
      brandsAvailable: 'brands available',
    },
    introCommon: {
      exploreBrands: 'Explore Our Brands',
      constructionDesc: 'Al Emaar Alreeq Trading Est. is a trusted supplier of premium construction materials, concrete chemicals, structural steels, cement products, and building accessories.',
      electricalDesc: 'Al Emaar Alreeq Trading Est. supplies a comprehensive range of electrical items including cables, wires, switches, sockets, circuit breakers, distribution boards, and lighting solutions from leading brands.',
      gypsumDesc: 'Al Emaar Alreeq Trading Est. offers high-quality Gypsum boards, ceiling tiles, metal framing systems, joint compounds, and accessories from top regional manufacturers.',
      paintDesc: 'Al Emaar Alreeq Trading Est. supplies professional paint products, wood coatings, epoxy systems, putties, and painting tools for residential, commercial, and industrial use.',
      plumbingDesc: 'Al Emaar Alreeq Trading Est. stocks a full range of plumbing items including UPVC pipes, fittings, valves, water heaters, pumps, and sanitary ware. We carry products from trusted brands.',
      cabinsDesc: 'Al Emaar Alreeq Trading Est. provides premium porta cabins, prefabricated offices, security cabins, and structural modules designed for temporary and permanent applications.',
      safetyDesc: 'Al Emaar Alreeq Trading Est. provides highly-durable personal protective equipment (PPE), safety shoes, helmets, reflective jackets, gloves, safety harnesses, and fire safety systems.',
      toolsDesc: 'Al Emaar Alreeq Trading Est. provides a full range of power tools, hand tools, measuring devices, cutting tools, and accessories from premium international manufacturers.',
      waterProofingDesc: 'Al Emaar Alreeq Trading Est. is a leading provider of high-performance waterproofing systems, membranes, coatings, sealants, and thermal insulation solutions.',
    },
    productCommon: {
      whatsappMsg: 'I want to buy the {name} from {category}',
    },
    brands: {
      shopBy: 'Shop by',
      brandsWord: 'Brands',
      subtitle: 'Click the Logo and see more in detail.',
      productsWord: 'Products',
    },
    productPages: {
      waterproofing: {
        title: 'WaterProofing &',
        titleHighlight: 'Chemicals Items',
        subtitle: 'Advanced chemical solutions and waterproofing systems designed to protect your structures from water damage and environmental wear.',
      },
      construction: {
        title: 'Construction',
        titleHighlight: 'Materials',
        subtitle: 'Premium structural materials, cement, steel, and aggregates for residential and commercial construction projects.',
      },
      electrical: {
        title: 'Electrical',
        titleHighlight: 'Items',
        subtitle: 'Complete range of cables, wiring, switches, circuit breakers, and lighting solutions compliant with Saudi standards.',
      },
      gypsum: {
        title: 'Gypsum',
        titleHighlight: 'Boards',
        subtitle: 'High-quality gypsum boards, ceiling tiles, and metal framing for interior fit-out and partition wall systems.',
      },
      paints: {
        title: 'Paints &',
        titleHighlight: 'Adhesives',
        subtitle: 'Interior and exterior paints, primers, wood coatings, and adhesives for every surface and environment.',
      },
      plumbing: {
        title: 'Plumbing',
        titleHighlight: 'Items',
        subtitle: 'UPVC pipes, valves, sanitary ware, water heaters, and pumps from trusted international brands.',
      },
      cabins: {
        title: 'Porta',
        titleHighlight: 'Cabins',
        subtitle: 'Durable, weather-resistant porta cabins for construction sites, offices, labor accommodations, and temporary storage.',
      },
      safety: {
        title: 'Safety',
        titleHighlight: 'Products',
        subtitle: 'Certified PPE, helmets, safety shoes, harnesses, fire extinguishers, and first aid kits for Saudi-compliant safe sites.',
      },
      tools: {
        title: 'Tools &',
        titleHighlight: 'Equipments',
        subtitle: 'Power tools, hand tools, drilling machines, grinders, and compressors from top international brands.',
      },
    },
  },
  ar: {
    brandName1: 'الإعمار العريق',
    brandName2: 'لحلول البناء',
    navbar: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      browseCategories: 'تصفح التصنيفات',
      searchPlaceholder: 'ابحث عن الماركات، المنتجات، التصنيفات...',
      allCategories: 'جميع التصنيفات',
      whatsapp: 'واتساب',
    },
    footer: {
      getInTouch: 'اتصل بنا',
      copyright: '© 2026 الإعمار لحلول البناء • تصميم وتطوير شركة ستاك فلو للتطوير • جميع الحقوق محفوظة',
      address: 'طريق الملك فهد (الستين) - حي الربوة، جدة 23342',
      description: 'الإعمار لحلول البناء هي شريكك الموثوق لمواد البناء والتوريدات الفاخرة. نحن نقدم حلولاً شاملة للعزل المائي، الدهانات، المواد اللاصقة، الأدوات الكهربائية، السباكة، منتجات السلامة، ومواد البناء لتلبية جميع احتياجات البناء والتشييد الخاصة بك بتميز وموثوقية.',
    },
    values: {
      howWeWork: 'طريقة عملنا',
      titleStart: 'خطواتنا الأربع لـ ',
      titleHighlight: 'ضمان الجودة',
      steps: [
        {
          title: 'الاختيار الدقيق',
          description: 'نختار موادنا بدقة وعناية من موردين ذوي سمعة طيبة.',
        },
        {
          title: 'الفحص الشامل',
          description: 'يقوم خبراؤنا بتقييم كل منتج بصرامة للتأكد من الجودة والمطابقة.',
        },
        {
          title: 'التوصيل الفعال',
          description: 'نحن نولي الأولوية للتوصيل الآمن وفي الوقت المحدد لراحتك.',
        },
        {
          title: 'الدعم المخصص',
          description: 'يلتزم فريقنا بتقديم المساعدة الشخصية والدعم المستمر لعملائنا.',
        },
      ],
    },
    seoContent: {
      titleStart: 'لماذا تختار الإعمار ',
      titleHighlight: 'العريق للتجارة؟',
      items: [
        {
          title: 'أسعار جملة تنافسية',
          description: 'أفضل الأسعار للطلبات الكبيرة والمقاولين والمشاريع',
        },
        {
          title: 'ماركات عالمية موثوقة',
          description: 'موزعون معتمدون لأفضل وأجود الماركات العالمية',
        },
        {
          title: 'توريد كميات للمقاولين',
          description: 'مخزون ضخم متاح لتلبية متطلبات المشاريع الإنشائية',
        },
        {
          title: 'توصيل سريع في جدة',
          description: 'توصيل سريع وموثوق في جميع أنحاء جدة والمناطق المجاورة لها',
        },
        {
          title: 'دعم عملاء موثوق',
          description: 'نقدم مشورة الخبراء والدعم الفني والتقني المتواصل',
        },
      ],
    },
    categories: {
      'Waterproofing Items': 'مواد العزل المائي',
      'Construction Materials': 'مواد البناء والإنشاءات',
      'Gypsum Boards': 'ألواح الجبس بورد',
      'Paints': 'الدهانات والمواد اللاصقة',
      'Electrical Items': 'المواد والأدوات الكهربائية',
      'Plumbing Items': 'مواد وأدوات السباكة',
      'Porta Cabins': 'الغرف الجاهزة (بورت كابين)',
      'Safety Products': 'أدوات ومعدات السلامة',
      'Tools And Equipments': 'المعدات والعدد اليدوية والكهربائية',
      'Water Proofing Items': 'مواد العزل المائي',
      'Gypsum Board': 'ألواح الجبس بورد',
      'Tools & Equipment': 'المعدات والعدد',
    },
    ourProducts: {
      categoriesTitle: 'جميع التصنيفات',
      trendingTitle: 'المنتجات الأكثر طلباً',
      aboutTitle: 'عن الإعمار',
      aboutText: 'مؤسسة الإعمار العريق للتجارة هي مورد رائد لمواد البناء والتشييد عالية الجودة. نحن نقدم مجموعة شاملة ومتكاملة من المنتجات لتلبية جميع احتياجات البناء الخاصة بك.',
      popular: 'شائع',
      addToCart: 'إضافة إلى السلة',
      whatsappMsg: 'مرحباً الإعمار! أنا مهتم بشراء المنتج التالي:\n\n*المنتج:* {name}\n*التفاصيل:* {subName}\n*التصنيف:* {category}\n\nهل يمكنك تزويدي بمزيد من المعلومات والأسعار؟',
    },
    topBrands: {
      top: 'أبرز',
      brands: 'الماركات',
      subtitle: 'تصفح الماركات الأكثر مبيعاً لدينا',
      viewAll: 'عرض الكل',
    },
    aboutPage: {
      ourIntroduction: 'مقدمة عن الشركة',
      establishedSince: 'تأسست منذ عام',
      establishedYear: '2023',
      introP1: 'مؤسسة الإعمار العريق للتجارة هي شركة تجارية متنوعة ومورد موثوق لمواد البناء الفاخرة ومنتجات السباكة والكهرباء (MEP) في جميع أنحاء المملكة العربية السعودية. مع أكثر من سبع سنوات من الخبرة في قطاع توريد مواد التشييد، نحن متخصصون في توفير وتوريد المواد المتعددة.',
      introP2: 'نحن نقدم مجموعة واسعة ومتنوعة من المنتجات بما في ذلك المواد الكيميائية لمحطات معالجة المياه وحمامات السباحة، والأدوات الكهربائية، ومعدات السلامة والوقاية من الحرائق، والأجهزة المنزلية، والإلكترونيات، وحلول السباكة والكهرباء المتكاملة. نحن ندير صالة عرض متكاملة ونقدم إمداداً مباشراً للمواد إلى مواقع المشاريع في جميع أنحاء المنطقة.',
      leadershipTitle: 'تعرف على فريق القيادة لدينا',
      ceoTitle: 'الرئيس التنفيذي',
      ceoBio: 'الرئيس التنفيذي لمؤسسة الإعمار العريق للتجارة. نديم فاروق خان هو قائد ذو رؤية وخبرة واسعة في مجال تطوير الأعمال والإدارة الاستراتيجية. مع خلفية قوية في مجال التجارة وفهم دقيق لديناميكيات السوق، لعب نديم دوراً رئيسياً في توسيع نطاق حضور الشركة في المملكة العربية السعودية، وبناء شراكات ناجحة، ودفع عجلة النمو في قطاع مواد البناء التنافسي.',
      marketingTitle: 'مدير التسويق',
      marketingBio: 'مدير التسويق في مؤسسة الإعمار العريق للتجارة. يقود علي الرحمن مبادرات التسويق واستراتيجيات تطوير العلامة التجارية للشركة. مع خبرته الكبيرة في تحليل السوق والتفاعل مع العملاء، يركز علي على بناء علاقات قوية مع العملاء وتوسيع نطاق حضور الشركة في السوق السعودي. كان لنهجه المبتكر في التسويق وفهمه العميق لقطاع مواد البناء دور رئيسي في ترسيخ مكانة الإعمار العريق كاسم موثوق في هذا القطاع، مما يساهم في تحقيق رضا العملاء ونمو الأعمال.',
    },
    searchBar: {
      browseAll: 'تصفح الكل',
      searchResults: 'نتائج البحث',
      itemsWord: 'عنصر',
      foundWord: 'تم العثور عليها',
      noResults: 'لم يتم العثور على أي ماركات أو منتجات أو تصنيفات تطابق',
      categoryMatch: 'تطابق التصنيف',
      brandsAvailable: 'علامة تجارية متوفرة',
    },
    introCommon: {
      exploreBrands: 'استكشف علاماتنا التجارية',
      constructionDesc: 'مؤسسة الإعمار العريق للتجارة هي المورد الموثوق لأجود أنواع مواد البناء، كيماويات الخرسانة، الحديد الإنشائي، منتجات الإسمنت وإكسسوارات ومستلزمات التشييد.',
      electricalDesc: 'توفر مؤسسة الإعمار العريق للتجارة مجموعة متكاملة من المواد الكهربائية بما في ذلك الكابلات، الأسلاك، المفاتيح، القواطع الكهربائية، لوحات التوزيع وحلول الإضاءة من أفضل العلامات التجارية.',
      gypsumDesc: 'تقدم مؤسسة الإعمار العريق للتجارة ألواح الجبس بورد عالية الجودة، بلاط الأسقف، القواطع المعدنية، معجون المفاصل وإكسسواراتها من أفضل المصانع المحلية والإقليمية.',
      paintDesc: 'توفر مؤسسة الإعمار العريق للتجارة دهانات احترافية ومواد طلاء الأخشاب، وأنظمة الإيبوكسي وعزل الأرضيات، والمعجون وأدوات ومستلزمات الدهان للاستخدام السكني والتجاري والصناعي.',
      plumbingDesc: 'توفر مؤسسة الإعمار العريق للتجارة تشكيلة متكاملة من مستلزمات وأدوات السباكة بما في ذلك أنابيب UPVC ووصلاتها، المحابس، سخانات المياه، المضخات والأدوات الصحية من ماركات موثوقة.',
      cabinsDesc: 'توفر مؤسسة الإعمار العريق للتجارة غرف بورت كابين الفاخرة، المكاتب الجاهزة، غرف الحراسة، والوحدات الإنشائية المصممة خصيصاً للاستخدامات المؤقتة والدائمة.',
      safetyDesc: 'توفر مؤسسة الإعمار العريق للتجارة أدوات السلامة المهنية ومعدات الحماية الشخصية (PPE)، أحذية السلامة، الخوذ، السترات العاكسة، القفازات، وأحزمة الأمان وكاشفات وأنظمة الحريق.',
      toolsDesc: 'توفر مؤسسة الإعمار العريق للتجارة مجموعة كاملة من المعدات والعدد الكهربائية واليدوية، وأجهزة القياس، وأدوات القطع وإكسسواراتها من كبرى الشركات العالمية.',
      waterProofingDesc: 'مؤسسة الإعمار العريق للتجارة هي المورد والشركة الرائدة في توفير أنظمة العزل المائي والحراري عالية الكفاءة، ولفائف العزل، والدهانات العازلة، والمواد المالئة.',
    },
    productCommon: {
      whatsappMsg: 'أريد شراء {name} من قسم {category}',
    },
    brands: {
      shopBy: 'تسوق بحسب',
      brandsWord: 'الماركات',
      subtitle: 'انقر على الشعار لمزيد من التفاصيل.',
      productsWord: 'منتجات',
    },
    productPages: {
      waterproofing: {
        title: 'العزل المائي و',
        titleHighlight: 'الكيماويات',
        subtitle: 'حلول كيميائية متطورة وأنظمة عزل مائي لحماية منشآتك من أضرار المياه والتآكل البيئي.',
      },
      construction: {
        title: 'مواد',
        titleHighlight: 'البناء والإنشاءات',
        subtitle: 'مواد إنشائية فاخرة وإسمنت وحديد وركام لمشاريع البناء السكنية والتجارية.',
      },
      electrical: {
        title: 'المواد',
        titleHighlight: 'الكهربائية',
        subtitle: 'مجموعة متكاملة من الكابلات والأسلاك والمفاتيح والقواطع وحلول الإضاءة المطابقة للمواصفات السعودية.',
      },
      gypsum: {
        title: 'ألواح',
        titleHighlight: 'الجبس بورد',
        subtitle: 'ألواح جبس بورد عالية الجودة وبلاط أسقف وأنظمة تقسيم الجدران للتشطيبات الداخلية.',
      },
      paints: {
        title: 'الدهانات و',
        titleHighlight: 'المواد اللاصقة',
        subtitle: 'دهانات داخلية وخارجية وبرايمر ومواد طلاء الخشب ومواد لاصقة لجميع الأسطح والبيئات.',
      },
      plumbing: {
        title: 'مستلزمات',
        titleHighlight: 'السباكة',
        subtitle: 'أنابيب UPVC ومحابس وأدوات صحية وسخانات ومضخات مياه من ماركات دولية موثوقة.',
      },
      cabins: {
        title: 'غرف',
        titleHighlight: 'البورت كابين',
        subtitle: 'غرف جاهزة متينة ومقاومة للعوامل الجوية لمواقع البناء والمكاتب والمخازن المؤقتة.',
      },
      safety: {
        title: 'منتجات',
        titleHighlight: 'السلامة',
        subtitle: 'معدات حماية شخصية معتمدة وخوذ وأحذية سلامة وطفايات حريق وإسعافات أولية لمواقع العمل.',
      },
      tools: {
        title: 'المعدات و',
        titleHighlight: 'العدد',
        subtitle: 'معدات كهربائية وعدد يدوية وأجهزة قياس وأدوات قطع من أفضل الماركات العالمية.',
      },
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved === 'en' || saved === 'ar' ? saved : 'en') as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
