export const seoConfig = {
  businessName: 'Haveli Cafe & Restaurant',
  description: 'Premium Fusion Cafe & Restaurant in Midnapore, West Bengal. Savour authentic Bengali delights, Chinese specials, signature Chicken Shawarma, freshly brewed Coffee, and exotic Mocktails in an artistic, instagrammable setting.',
  url: 'https://havelicafegroup.com', // placeholder
  telephone: '+918248481654',
  address: {
    streetAddress: 'Ashok Nagar, Midnapore Railway Station Road, Dharma',
    addressLocality: 'Midnapore',
    addressRegion: 'West Bengal',
    postalCode: '721101',
    addressCountry: 'IN'
  },
  geo: {
    latitude: 22.4257,
    longitude: 87.3197
  },
  openingHours: 'Mo-Su 11:00-23:00',
  rating: {
    ratingValue: 4.6,
    reviewCount: 524
  },
  priceRange: '₹₹ (₹150 - ₹500 per person)',
  keywords: [
    'Bengali Restaurant Near Me',
    'Cafe in Midnapore',
    'Best Cafe in Midnapore',
    'Best Restaurant in Midnapore',
    'Haveli Cafe Midnapore',
    'Midnapore Railway Station cafe',
    'Dharma Midnapore restaurant',
    'Shawarma in Midnapore',
    'Chinese food Midnapore',
    'Instagrammable cafe West Bengal',
    'Couple friendly cafe Midnapore',
    'Student friendly cafe Midnapore'
  ]
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
      `${seoConfig.url}/images/beverage_coffee.jpeg`
    ],
    description: seoConfig.description,
    telephone: seoConfig.telephone,
    url: seoConfig.url,
    priceRange: '$$',
    menu: `${seoConfig.url}#menu`,
    servesCuisine: ['Bengali', 'Chinese', 'Fast Food', 'Coffee', 'Desserts'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.address.streetAddress,
      addressLocality: seoConfig.address.addressLocality,
      addressRegion: seoConfig.address.addressRegion,
      postalCode: seoConfig.address.postalCode,
      addressCountry: seoConfig.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seoConfig.geo.latitude,
      longitude: seoConfig.geo.longitude
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
        'Sunday'
      ],
      opens: '11:00',
      closes: '23:00'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: seoConfig.rating.ratingValue,
      reviewCount: seoConfig.rating.reviewCount
    }
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
        text: faq.answer
      }
    }))
  };
}
