import React from 'react';

const MARQUEE_ITEMS = [
  '✨ 500+ Happy Customers',
  '⭐ 4.6 Google Rating',
  '🍽️ Fresh Ingredients Daily',
  '❄️ AC Dining',
  '📸 Instagram-Worthy Ambience',
  '🎂 Birthday Celebrations',
  '☕ Best Coffee in Midnapore',
  '🔥 Spicy Chinese Specials',
];

const SEPARATOR = '  •  ';

function MarqueeContent() {
  return (
    <>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="whitespace-nowrap">
          {item}
          {i < MARQUEE_ITEMS.length - 1 && (
            <span className="mx-3 opacity-60">{SEPARATOR.trim()}</span>
          )}
        </span>
      ))}
      {/* Spacer between duplicates */}
      <span className="mx-6 opacity-60">•</span>
    </>
  );
}

export default function TrustBar() {
  return (
    <section
      className="bg-gradient-to-r from-amber-500 to-amber-600 py-3 overflow-hidden"
      aria-label="Trust highlights"
    >
      <div className="animate-marquee text-white text-sm sm:text-base font-bold">
        {/* Two copies for seamless loop */}
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
}
