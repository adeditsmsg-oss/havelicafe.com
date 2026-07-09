export interface MenuItem {
  name: string;
  price: number;
  priceDouble?: number;
  description: string;
  image: string;
  category: string;
  isPopular?: boolean;
  isVeg?: boolean;
}

export interface MenuCategory {
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  // ─── COFFEE ───
  {
    name: 'Coffee',
    icon: 'Coffee',
    items: [
      {
        name: 'Filter Coffee Small',
        price: 30,
        description: 'Garam garam authentic South Indian filter coffee — chhoto cup e bhorpur flavour.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Coffee',
        isVeg: true,
      },
      {
        name: 'Filter Coffee Large',
        price: 50,
        description: 'Same rich filter coffee but for those who need a bigger dose of caffeine love.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Coffee',
        isVeg: true,
      },
      {
        name: 'Cold Coffee',
        price: 70,
        description: 'Creamy, chilled blended coffee — perfect pick-me-up for any time of day. Adda essential!',
        image: '/images/beverage_coffee.jpeg',
        category: 'Coffee',
        isPopular: true,
        isVeg: true,
      },
    ],
  },

  // ─── SNACKS / STARTERS ───
  {
    name: 'Snacks & Starters',
    icon: 'Drumstick',
    items: [
      {
        name: 'French Fry',
        price: 30,
        description: 'Golden crispy fries served piping hot — simple ar satisfying.',
        image: '/images/food_crispy_chicken.jpeg',
        category: 'Snacks & Starters',
        isVeg: true,
      },
      {
        name: 'French Fry with Cheese Sauce',
        price: 40,
        description: 'Crispy fries drowned in melty cheese sauce — ekbar khele ar thaamte paarbe na!',
        image: '/images/food_crispy_chicken.jpeg',
        category: 'Snacks & Starters',
        isPopular: true,
        isVeg: true,
      },
      {
        name: 'Schezwan Chilly Potato',
        price: 50,
        description: 'Crunchy potato fingers tossed in fiery schezwan sauce — jhal lovers er jonno.',
        image: '/images/food_chilli_chicken.jpeg',
        category: 'Snacks & Starters',
        isVeg: true,
      },
      {
        name: 'Crispy Wings',
        price: 120,
        description: 'Ekdom mochmoché golden wings — crunchy outside, juicy inside. Rainy day perfect combo!',
        image: '/images/food_crispy_chicken.jpeg',
        category: 'Snacks & Starters',
        isPopular: true,
      },
      {
        name: 'Hot Chilli Wings',
        price: 140,
        description: 'Same crispy wings but tossed in our spicy chilli glaze — jhole jhole masti!',
        image: '/images/food_crispy_chicken.jpeg',
        category: 'Snacks & Starters',
      },
      {
        name: 'Chinese BBQ Fried Chicken (8 pcs)',
        price: 160,
        description: 'Sweet and smoky BBQ-glazed fried chicken, 8 piece family share plate.',
        image: '/images/food_crispy_chicken.jpeg',
        category: 'Snacks & Starters',
      },
      {
        name: 'Chinese BBQ Fried Chicken (4 pcs)',
        price: 90,
        description: 'Smoky BBQ chicken bites — perfect starter for two. Chhoto pack, boro flavour.',
        image: '/images/food_crispy_chicken.jpeg',
        category: 'Snacks & Starters',
      },
      {
        name: 'Drums of Heaven (4 pcs)',
        price: 160,
        description: 'Indo-Chinese classic — tender drumettes tossed in sweet-spicy sauce. Party must-have!',
        image: '/images/food_chilli_chicken.jpeg',
        category: 'Snacks & Starters',
      },
      {
        name: 'Drums of Heaven (2 pcs)',
        price: 90,
        description: 'Same heavenly drums, smaller portion — great for a solo snack run.',
        image: '/images/food_chilli_chicken.jpeg',
        category: 'Snacks & Starters',
      },
      {
        name: 'Fish Finger (8 pcs)',
        price: 140,
        description: 'Crispy fried fish sticks with a golden coat — maacher lovers er jonno special.',
        image: '/images/food_crispy_chicken.jpeg',
        category: 'Snacks & Starters',
      },
      {
        name: 'Fish Finger (4 pcs)',
        price: 70,
        description: 'Crunchy fish fingers, perfect for a quick bite with friends.',
        image: '/images/food_crispy_chicken.jpeg',
        category: 'Snacks & Starters',
      },
      {
        name: 'Prawn Popcorn (10 pcs)',
        price: 80,
        description: 'Bite-sized crispy prawns — pop them like popcorn! Chingri premi der favourite.',
        image: '/images/food_crispy_chicken.jpeg',
        category: 'Snacks & Starters',
      },
      {
        name: 'Chilli Garlic Ball',
        price: 45,
        description: 'Spicy, garlicky fried balls — the ultimate adda snack at this price.',
        image: '/images/food_chilli_chicken.jpeg',
        category: 'Snacks & Starters',
        isVeg: true,
      },
      {
        name: 'Chicken Popcorn',
        price: 60,
        description: 'Bite-sized boneless chicken bites, perfectly seasoned and fried golden.',
        image: '/images/food_crispy_chicken.jpeg',
        category: 'Snacks & Starters',
      },
    ],
  },

  // ─── NOODLES ───
  {
    name: 'Noodles',
    icon: 'Soup',
    items: [
      {
        name: 'Veg Noodles',
        price: 60,
        description: 'Stir-fried noodles loaded with fresh vegetables — light ar tasty.',
        image: '/images/food_chowmein.jpeg',
        category: 'Noodles',
        isVeg: true,
      },
      {
        name: 'Egg Noodles',
        price: 70,
        description: 'Classic egg noodles tossed in wok — dimer sathe noodles er best combination.',
        image: '/images/food_chowmein.jpeg',
        category: 'Noodles',
      },
      {
        name: 'Chicken Noodles',
        price: 80,
        description: 'Wok-tossed noodles with tender chicken pieces and crunchy veggies.',
        image: '/images/food_chowmein.jpeg',
        category: 'Noodles',
      },
      {
        name: 'Schezwan Noodles Veg',
        price: 90,
        description: 'Fiery schezwan sauce meets stir-fried noodles — jhal khete bhalobashle try koro!',
        image: '/images/food_chowmein.jpeg',
        category: 'Noodles',
        isVeg: true,
      },
      {
        name: 'Schezwan Noodles Egg',
        price: 110,
        description: 'Spicy schezwan noodles with scrambled egg — bold flavour, every bite e moja.',
        image: '/images/food_chowmein.jpeg',
        category: 'Noodles',
      },
      {
        name: 'Schezwan Noodles Chicken',
        price: 120,
        description: 'Our bestselling noodles — fiery schezwan with juicy chicken. Ekbar khao, repeat customer!',
        image: '/images/food_chowmein.jpeg',
        category: 'Noodles',
        isPopular: true,
      },
      {
        name: 'Singapuri Noodles Veg',
        price: 90,
        description: 'Sweet and mildly spiced Singaporean-style noodles with colourful veggies.',
        image: '/images/food_chowmein.jpeg',
        category: 'Noodles',
        isVeg: true,
      },
      {
        name: 'Singapuri Noodles Egg',
        price: 110,
        description: 'Singapuri-style with egg — slightly sweet, slightly spicy, fully delicious.',
        image: '/images/food_chowmein.jpeg',
        category: 'Noodles',
      },
      {
        name: 'Singapuri Noodles Chicken',
        price: 110,
        description: 'Chicken-loaded Singapore noodles — unique flavour that keeps you coming back.',
        image: '/images/food_chowmein.jpeg',
        category: 'Noodles',
      },
    ],
  },

  // ─── RICE ───
  {
    name: 'Rice',
    icon: 'UtensilsCrossed',
    items: [
      {
        name: 'Veg Rice',
        price: 60,
        description: 'Simple stir-fried rice with fresh veggies — light meal, bhorpur swad.',
        image: '/images/food_chowmein.jpeg',
        category: 'Rice',
        isVeg: true,
      },
      {
        name: 'Egg Rice',
        price: 70,
        description: 'Fluffy egg fried rice — comfort food at its best. Jhorjhoré ar tasty.',
        image: '/images/food_chowmein.jpeg',
        category: 'Rice',
      },
      {
        name: 'Chicken Rice',
        price: 80,
        description: 'Wok-fried rice with seasoned chicken — filling and flavourful single meal.',
        image: '/images/food_chowmein.jpeg',
        category: 'Rice',
      },
      {
        name: 'Schezwan Rice Veg',
        price: 90,
        description: 'Spicy schezwan fried rice packed with vegetables — heat lovers welcome!',
        image: '/images/food_chowmein.jpeg',
        category: 'Rice',
        isVeg: true,
      },
      {
        name: 'Schezwan Rice Egg',
        price: 110,
        description: 'Fiery schezwan rice tossed with egg — jhal ar flavour er perfect balance.',
        image: '/images/food_chowmein.jpeg',
        category: 'Rice',
      },
      {
        name: 'Schezwan Rice Chicken',
        price: 120,
        description: 'Our spiciest rice dish with tender chicken — bold choice for bold taste buds.',
        image: '/images/food_chowmein.jpeg',
        category: 'Rice',
      },
      {
        name: 'Singapuri Rice Veg',
        price: 90,
        description: 'Mildly sweet Singaporean rice with colourful veggies — different ar delicious.',
        image: '/images/food_chowmein.jpeg',
        category: 'Rice',
        isVeg: true,
      },
      {
        name: 'Singapuri Rice Egg',
        price: 110,
        description: 'Singapore-style fried rice with egg — a unique twist on classic fried rice.',
        image: '/images/food_chowmein.jpeg',
        category: 'Rice',
      },
      {
        name: 'Singapuri Rice Chicken',
        price: 120,
        description: 'Chicken-loaded Singapuri rice — sweet, savoury, and completely addictive.',
        image: '/images/food_chowmein.jpeg',
        category: 'Rice',
      },
    ],
  },

  // ─── SHAWARMA ───
  {
    name: 'Shawarma',
    icon: 'Sandwich',
    items: [
      {
        name: 'Chicken Shawarma with French Fry',
        price: 45,
        description: 'Midnapore er most-loved shawarma — juicy chicken wrap with crispy fries on the side!',
        image: '/images/food_wrap_drink.jpeg',
        category: 'Shawarma',
        isPopular: true,
      },
      {
        name: 'Shawarma with Schezwan Sauce',
        price: 55,
        description: 'Classic shawarma gets a desi twist with fiery schezwan sauce — fusion masti!',
        image: '/images/food_wrap_drink.jpeg',
        category: 'Shawarma',
      },
    ],
  },

  // ─── MOCKTAILS ───
  {
    name: 'Mocktails',
    icon: 'GlassWater',
    items: [
      {
        name: 'Haveli Fizz',
        price: 80,
        description: 'Our signature fizzy cooler — Haveli er own special recipe. Instagram-worthy colours!',
        image: '/images/beverage_mocktail.jpeg',
        category: 'Mocktails',
        isPopular: true,
        isVeg: true,
      },
      {
        name: 'Red Cooler',
        price: 70,
        description: 'Refreshing red berry fizz that cools you down on a hot Midnapore afternoon.',
        image: '/images/beverage_mocktail.jpeg',
        category: 'Mocktails',
        isVeg: true,
      },
      {
        name: 'Litchi Sparkler',
        price: 70,
        description: 'Sweet litchi meets sparkling soda — light, fruity, and absolutely refreshing.',
        image: '/images/beverage_mocktail.jpeg',
        category: 'Mocktails',
        isVeg: true,
      },
    ],
  },

  // ─── ICE CREAM ───
  {
    name: 'Ice Cream',
    icon: 'IceCreamCone',
    items: [
      {
        name: 'Vanilla Ice Cream',
        price: 35,
        priceDouble: 70,
        description: 'Classic creamy vanilla — timeless flavour, always a hit with everyone.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Ice Cream',
        isVeg: true,
      },
      {
        name: 'Strawberry Ice Cream',
        price: 35,
        priceDouble: 70,
        description: 'Sweet strawberry scoops — fruity, fresh, and loved by the little ones.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Ice Cream',
        isVeg: true,
      },
      {
        name: 'Chocolate Ice Cream',
        price: 35,
        priceDouble: 70,
        description: 'Rich, dark chocolate goodness — every chocolate lover er dream scoop.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Ice Cream',
        isVeg: true,
      },
      {
        name: 'Mango Ice Cream',
        price: 35,
        priceDouble: 70,
        description: 'Seasonal mango in frozen form — amer moushum e must-try!',
        image: '/images/beverage_coffee.jpeg',
        category: 'Ice Cream',
        isVeg: true,
      },
      {
        name: 'Butter Scotch Ice Cream',
        price: 40,
        priceDouble: 80,
        description: 'Crunchy butter scotch bits in creamy ice cream — textured ar tasty.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Ice Cream',
        isVeg: true,
      },
    ],
  },

  // ─── MILKSHAKE ───
  {
    name: 'Milkshake',
    icon: 'CupSoda',
    items: [
      {
        name: 'Vanilla Milkshake',
        price: 70,
        description: 'Thick and creamy vanilla shake — simple, satisfying, and smooth.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Milkshake',
        isVeg: true,
      },
      {
        name: 'Strawberry Milkshake',
        price: 70,
        description: 'Sweet strawberry blended with cold milk — pink, pretty, and delicious.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Milkshake',
        isVeg: true,
      },
      {
        name: 'Chocolate Milkshake',
        price: 70,
        description: 'Rich chocolate milkshake — choco lovers er go-to drink, thick and indulgent.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Milkshake',
        isVeg: true,
      },
      {
        name: 'Mango Milkshake',
        price: 70,
        description: 'Fresh mango blended into a creamy shake — summer vibes in every sip.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Milkshake',
        isVeg: true,
      },
      {
        name: 'Butter Scotch Milkshake',
        price: 90,
        description: 'Crunchy butter scotch shake with real bits — premium taste, worth every sip.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Milkshake',
        isVeg: true,
      },
      {
        name: 'Brownie Coffee Shake',
        price: 130,
        description: 'Real brownie chunks blended with cold coffee — dessert ar drink ek sathe! Our richest shake.',
        image: '/images/beverage_coffee.jpeg',
        category: 'Milkshake',
        isPopular: true,
        isVeg: true,
      },
    ],
  },
];

// Helper: get all items as flat array
export function getAllMenuItems(): MenuItem[] {
  return menuCategories.flatMap((cat) => cat.items);
}

// Helper: get popular items
export function getPopularItems(): MenuItem[] {
  return getAllMenuItems().filter((item) => item.isPopular);
}
