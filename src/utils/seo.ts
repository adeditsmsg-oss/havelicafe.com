export const seoConfig = {
  businessName: 'Haveli Cafe & Restaurant',
  description:
    'Premium Fusion Cafe & Restaurant in Midnapore, West Bengal. Savour signature Chicken Shawarma, freshly brewed Coffee, Chinese specials, exotic Mocktails, and creamy Milkshakes in an artistic, Instagram-worthy setting. মেদিনীপুরের সেরা ক্যাফে।',
  url: 'https://havelicafegroup.com',
  telephone: '+918248481654',
  themeColor: '#F59E0B',
  address: {
    streetAddress: 'Ashok Nagar, Midnapore Railway Station Road, Dharma',
    addressLocality: 'Midnapore',
    addressRegion: 'West Bengal',
    postalCode: '721101',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 22.4297376,
    longitude: 87.3099231,
  },
  openingHours: 'Mo-Su 11:00-23:00',
  rating: {
    ratingValue: 4.6,
    reviewCount: 524,
  },
  priceRange: '₹₹ (₹30 - ₹160 per person)',
  keywords: [
    'Haveli Cafe Midnapore',
    'Best Cafe in Midnapore',
    'Best Restaurant in Midnapore',
    'মেদিনীপুরের সেরা ক্যাফে',
    'best coffee Midnapore',
    'cafe with AC Midnapore',
    'friends hangout Midnapore',
    'birthday party cafe Midnapore',
    'Midnapore Railway Station cafe',
    'Dharma Midnapore restaurant',
    'Shawarma in Midnapore',
    'Chinese food Midnapore',
    'Instagrammable cafe West Bengal',
    'Couple friendly cafe Midnapore',
    'Student friendly cafe Midnapore',
    'Bengali Restaurant Near Me',
    'Cafe in Midnapore',
    'cold coffee Midnapore',
    'mocktails Midnapore',
    'best wings Midnapore',
    'Top rated cafe in Midnapore',
    'Foodies in Midnapore',
    'মেদিনীপুরের সেরা রেস্তোরাঁ',
    'সেরা ক্যাফে মেদিনীপুর',
    'Midnapore food spot',
    'Best cafe near Midnapore station'
  ],
  googleReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJy59wIAxbHToREI5jtFqa6s8',
  fullMenuUrl: 'https://adeditsmsg-oss.github.io/haveli-cafe-menu/',
  whatsapp: '+918248481654',
};

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': seoConfig.url,
    name: seoConfig.businessName,
    image: [
      `${seoConfig.url}/images/exterior.jpeg`,
      `${seoConfig.url}/images/interior_tables.jpeg`,
      `${seoConfig.url}/images/beverage_coffee.jpeg`,
    ],
    description: seoConfig.description,
    telephone: seoConfig.telephone,
    url: seoConfig.url,
    priceRange: '$$',
    menu: seoConfig.fullMenuUrl,
    servesCuisine: ['Chinese', 'Fast Food', 'Coffee', 'Shawarma', 'Mocktails', 'Ice Cream'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.address.streetAddress,
      addressLocality: seoConfig.address.addressLocality,
      addressRegion: seoConfig.address.addressRegion,
      postalCode: seoConfig.address.postalCode,
      addressCountry: seoConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seoConfig.geo.latitude,
      longitude: seoConfig.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '11:00',
      closes: '23:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: seoConfig.rating.ratingValue,
      reviewCount: seoConfig.rating.reviewCount,
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
