export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    name: 'Sourav K.',
    rating: 5,
    date: '3 months ago',
    text: 'Coffee ta onek bhalo laglo, ar ambience ekdom premium feel dey! ☕ Will definitely visit again with friends.',
    avatar: 'SK',
  },
  {
    name: 'Priya M.',
    rating: 5,
    date: '2 months ago',
    text: 'Chicken shawarma is the BEST in Midnapore, no cap 🔥 Price o reasonable. Amra regular e ashi.',
    avatar: 'PM',
  },
  {
    name: 'Rahul D.',
    rating: 5,
    date: '1 month ago',
    text: "First time gechilam bhaier sathe, puro place ta Instagram-worthy! Food quality excellent, specially the crispy wings.",
    avatar: 'RD',
  },
  {
    name: 'Ananya S.',
    rating: 4,
    date: '2 weeks ago',
    text: 'Family outing te gechilam, sobai khub enjoy korlo. Mocktails are must-try! Bas ektu waiting time beshi chilo.',
    avatar: 'AS',
  },
  {
    name: 'Arjun P.',
    rating: 5,
    date: '1 month ago',
    text: 'Best cafe near railway station. Staff bhaloi behave kore, seating comfortable. Cold coffee ar cheese fries combo 👌',
    avatar: 'AP',
  },
  {
    name: 'Tanisha R.',
    rating: 5,
    date: '3 weeks ago',
    text: 'Crispy wings ar cold coffee — perfect combo for a rainy day! Midnapore te eto sundor cafe ache jantem na 😍',
    avatar: 'TR',
  },
  {
    name: 'Dipankar G.',
    rating: 5,
    date: '1 week ago',
    text: 'Birthday celebrate korlam here, they made it really special. Decoration free te korlo, staff really helpful. Highly recommend!',
    avatar: 'DG',
  },
];
