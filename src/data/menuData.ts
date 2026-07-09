export interface MenuItem {
  id: string;
  nameEn: string;
  nameBn: string;
  descriptionEn: string;
  descriptionBn: string;
  price: number;
  category: string;
  image: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isVeg?: boolean;
}

export const menuCategories = [
  { id: 'starters', nameEn: 'Starters', nameBn: 'স্টার্টার' },
  { id: 'bengali', nameEn: 'Bengali Special', nameBn: 'বাঙালি স্পেশাল' },
  { id: 'chinese', nameEn: 'Chinese', nameBn: 'চাইনিজ' },
  { id: 'rolls', nameEn: 'Rolls & Wraps', nameBn: 'রোল ও র‍্যাপ' },
  { id: 'pizza', nameEn: 'Pizza', nameBn: 'পিজ্জা' },
  { id: 'burger', nameEn: 'Burger', nameBn: 'বার্গার' },
  { id: 'coffee', nameEn: 'Coffee', nameBn: 'কফি' },
  { id: 'tea', nameEn: 'Tea', nameBn: 'চা' },
  { id: 'mocktails', nameEn: 'Mocktails', nameBn: 'মকটেল' },
  { id: 'desserts', nameEn: 'Desserts', nameBn: 'ডেজার্ট' },
  { id: 'combos', nameEn: 'Combos & Meals', nameBn: 'কম্বো ও মিলস' }
];

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 'starter-1',
    nameEn: 'Crispy Fried Chicken (Toothpick)',
    nameBn: 'ক্রিস্পি ফ্রাইড চিকেন (টুথপিক)',
    descriptionEn: 'Golden, crispy bite-sized chicken tossed in mild spices, served with fresh lemon.',
    descriptionBn: 'মৃদু মশলায় মাখানো সোনালী ও মুচমুচে চিকেন বাইটস, লেবুর সাথে পরিবেশিত।',
    price: 150,
    isVeg: false,
    category: 'starters',
    image: '/images/food_crispy_chicken.jpeg',
    isPopular: true
  },
  {
    id: 'starter-2',
    nameEn: 'Pan-Fried Chicken Momos',
    nameBn: 'প্যান-ফ্রাইড চিকেন মোমো',
    descriptionEn: 'Steamed chicken momos seared to perfection and tossed in a sweet-spicy glaze.',
    descriptionBn: 'স্টিমড চিকেন মোমো প্যানে ভেজে মিষ্টি ও ঝাল সসে মাখানো।',
    price: 120,
    isVeg: false,
    category: 'starters',
    image: '/images/food_momos.jpeg'
  },
  {
    id: 'starter-3',
    nameEn: 'Crispy Veg Pakora',
    nameBn: 'মুচমুচে ভেজ পকোড়া',
    descriptionEn: 'Deep-fried seasonal vegetable fritters served with tangy mint chutney.',
    descriptionBn: 'পুদিনা চাটনির সাথে পরিবেশিত মুচমুচে ভেজিটেবল পকোড়া।',
    price: 90,
    isVeg: true,
    category: 'starters',
    image: '/images/interior_tables.jpeg' // placeholder / fallback
  },

  // Bengali Special
  {
    id: 'bengali-1',
    nameEn: 'Luchi Alur Dum (4 Pcs)',
    nameBn: 'লুচি আলুর দম (৪ পিস)',
    descriptionEn: 'Puffy, golden-fried flatbreads served with rich, spicy potato curry - a Bengali classic.',
    descriptionBn: 'গরম গরম ফোলা লুচি আর কষা আলুর দম - খাঁটি বাঙালি স্বাদ।',
    price: 80,
    isVeg: true,
    category: 'bengali',
    image: '/images/food_chilli_chicken.jpeg',
    isPopular: true
  },
  {
    id: 'bengali-2',
    nameEn: 'Mughlai Paratha',
    nameBn: 'মোগলাই পরোটা',
    descriptionEn: 'Flaky flatbread stuffed with spiced minced egg and onions, served with potato curry.',
    descriptionBn: 'ডিম ও পেঁয়াজের পুর ভরা মুচমুচে মোগলাই পরোটা, আলুর তরকারির সাথে।',
    price: 130,
    isVeg: false,
    category: 'bengali',
    image: '/images/food_sandwich.jpeg'
  },
  {
    id: 'bengali-3',
    nameEn: 'Fish Kabiraji',
    nameBn: 'ফিশ কবিরাজি',
    descriptionEn: 'Premium Basa fish fillet marinated in Bengali spices, coated in a crispy egg net.',
    descriptionBn: 'বাঙালি মশলায় ম্যারিনেট করা ফিশ ফিলে, ডিমের মুচমুচে জালের কোটিং সহ।',
    price: 160,
    isVeg: false,
    category: 'bengali',
    image: '/images/food_crispy_chicken.jpeg',
    isChefSpecial: true
  },

  // Chinese
  {
    id: 'chinese-1',
    nameEn: 'Chilli Chicken Dry/Gravy',
    nameBn: 'চিলি চিকেন ড্রাই/গ্রেভি',
    descriptionEn: 'Diced chicken tossed with colorful bell peppers, onions, and green chillies in soy sauce.',
    descriptionBn: 'সয়া সসে ক্যাপসিকাম, পেঁয়াজ ও কাঁচালঙ্কা দিয়ে তৈরি জিভে জল আনা চিলি চিকেন।',
    price: 180,
    isVeg: false,
    category: 'chinese',
    image: '/images/food_chilli_chicken.jpeg',
    isPopular: true
  },
  {
    id: 'chinese-2',
    nameEn: 'Hakka Noodles (Chicken/Egg)',
    nameBn: 'হাক্কা নুডলস (চিকেন/ডিম)',
    descriptionEn: 'Wok-tossed stir-fried noodles with fresh vegetables, egg scrambles, and shredded chicken.',
    descriptionBn: 'তাজা সবজি, ডিম ও চিকেন দিয়ে তৈরি ওক-টসড সুস্বাদু চাইনিজ নুডলস।',
    price: 140,
    isVeg: false,
    category: 'chinese',
    image: '/images/food_chowmein.jpeg'
  },
  {
    id: 'chinese-3',
    nameEn: 'Chicken Manchurian Gravy',
    nameBn: 'চিকেন মাঞ্চুরিয়ান গ্রেভি',
    descriptionEn: 'Soft chicken dumplings cooked in a savory, tangy and sweet Manchurian sauce.',
    descriptionBn: 'নরম চিকেন বল দিয়ে তৈরি টক-মিষ্টি-ঝাল মাঞ্চুরিয়ান গ্রেভি।',
    price: 170,
    isVeg: false,
    category: 'chinese',
    image: '/images/food_crispy_chicken.jpeg',
    isChefSpecial: true
  },

  // Rolls & Wraps
  {
    id: 'rolls-1',
    nameEn: 'Signature Chicken Shawarma Wrap',
    nameBn: 'সিগনেচার চিকেন শর্মা র‍্যাপ',
    descriptionEn: 'Slow-grilled chicken, shredded and wrapped in flatbread with homemade garlic mayo and pickles.',
    descriptionBn: 'গ্রিলড চিকেন, হোমমেড গার্লিক মেওনিজ ও সসের সাথে পরোটায় মোড়ানো অসাধারণ র‍্যাপ।',
    price: 120,
    isVeg: false,
    category: 'rolls',
    image: '/images/food_wrap_drink.jpeg',
    isPopular: true
  },
  {
    id: 'rolls-2',
    nameEn: 'Haveli Double Chicken Double Egg Roll',
    nameBn: 'হাভেলি ডাবল চিকেন ডাবল এগ রোল',
    descriptionEn: 'Flaky paratha layered with double egg, stuffed with heavily spiced grilled chicken chunks.',
    descriptionBn: 'দুটি ডিমের লেয়ারযুক্ত পরোটা, মশলাদার চিকেন স্টাফিং ও লেবুর রস দিয়ে তৈরি রোল।',
    price: 140,
    isVeg: false,
    category: 'rolls',
    image: '/images/food_rolls.jpeg',
    isPopular: true
  },
  {
    id: 'rolls-3',
    nameEn: 'Paneer Tikka Roll',
    nameBn: 'পনির টিক্কা রোল',
    descriptionEn: 'Char-grilled cottage cheese cubes wrapped with mint chutney, sliced onions, and spices.',
    descriptionBn: 'তন্দুরি পনির কিউব, পুদিনা চাটনি ও পেঁয়াজ দিয়ে তৈরি ক্লাসিক রোল।',
    price: 110,
    isVeg: true,
    category: 'rolls',
    image: '/images/food_momo_wrap.jpeg'
  },

  // Pizza
  {
    id: 'pizza-1',
    nameEn: 'Haveli Special Veggie Feast Pizza',
    nameBn: 'হাভেলি স্পেশাল ভেজি ফিস্ট পিজ্জা',
    descriptionEn: 'Loaded with mozzarella cheese, mushrooms, sweet corn, olives, bell peppers, and onions.',
    descriptionBn: 'প্রচুর মজারেলা চিজ, মাশরুম, সুইট কর্ন, জলপাই ও ক্যাপসিকাম ঠাসা পিজ্জা।',
    price: 199,
    isVeg: true,
    category: 'pizza',
    image: '/images/food_pizza.jpeg'
  },
  {
    id: 'pizza-2',
    nameEn: 'Spicy Tandoori Chicken Pizza',
    nameBn: 'স্পাইসি তন্দুরি চিকেন পিজ্জা',
    descriptionEn: 'Tender tandoori chicken chunks, spicy jalapeños, onions, and rich melting cheese.',
    descriptionBn: 'তন্দুরি চিকেন, ঝাল হ্যালপেনো, পেঁয়াজ ও গলানো চিজের ভরপুর সুস্বাদু পিজ্জা।',
    price: 249,
    isVeg: false,
    category: 'pizza',
    image: '/images/food_pizza.jpeg',
    isPopular: true
  },

  // Burger
  {
    id: 'burger-1',
    nameEn: 'Crispy Double Cheese Chicken Burger',
    nameBn: 'ক্রিস্পি ডাবল চিজ চিকেন বার্গার',
    descriptionEn: 'Crispy chicken patty with double cheddar cheese, lettuce, tomatoes, and chef\'s secret burger sauce.',
    descriptionBn: 'মুচমুচে চিকেন প্যাটি, ডাবল চিজ স্লাইস, লেটুস ও সিক্রেট বার্গার সসে ভরপুর বার্গার।',
    price: 129,
    isVeg: false,
    category: 'burger',
    image: '/images/food_sandwich.jpeg',
    isPopular: true
  },
  {
    id: 'burger-2',
    nameEn: 'Spicy Paneer Crunch Burger',
    nameBn: 'স্পাইসি পনির ক্রাঞ্চ বার্গার',
    descriptionEn: 'Crispy fried spiced paneer slab topped with spicy mayo, jalapeños, and crunchy onions.',
    descriptionBn: 'মুচমুচে ফ্রাইড পনির স্ল্যাব, ঝাল মেও ও হ্যালপেনো দিয়ে তৈরি পনির বার্গার।',
    price: 119,
    isVeg: true,
    category: 'burger',
    image: '/images/food_sandwich.jpeg'
  },

  // Coffee
  {
    id: 'coffee-1',
    nameEn: 'Premium Cold Coffee with Ice Cream',
    nameBn: 'প্রিমিয়াম কোল্ড কফি উইথ আইসক্রিম',
    descriptionEn: 'Rich, creamy blended cold coffee topped with a scoop of vanilla ice cream and chocolate drizzle.',
    descriptionBn: 'ভ্যানিলা আইসক্রিম ও চকলেট সস দেওয়া ঠাণ্ডা ও ক্রিমি প্রিমিয়াম ব্লেন্ডেড কফি।',
    price: 120,
    isVeg: true,
    category: 'coffee',
    image: '/images/beverage_coffee.jpeg',
    isPopular: true
  },
  {
    id: 'coffee-2',
    nameEn: 'Classic Hot Cappuccino',
    nameBn: 'ক্লাসিক হট ক্যাপুচিনো',
    descriptionEn: 'Freshly brewed espresso shot topped with smooth, thick steamed milk foam.',
    descriptionBn: 'তাজা ব্রুড এস্প্রেসো শট এবং ক্রিমি ঘন গরম দুধের ফোম দিয়ে তৈরি ক্যাপুচিনো।',
    price: 90,
    isVeg: true,
    category: 'coffee',
    image: '/images/beverage_coffee.jpeg'
  },

  // Tea
  {
    id: 'tea-1',
    nameEn: 'Haveli Special Kesar Milk Tea',
    nameBn: 'হাভেলি স্পেশাল কেশর দুধ চা',
    descriptionEn: 'Creamy slow-boiled milk tea infused with saffron strands and aromatic cardamom.',
    descriptionBn: 'কেশর ও এলাচের সুগন্ধযুক্ত ঘন ও ক্রিমি হাভেলি স্পেশাল দুধ চা।',
    price: 40,
    isVeg: true,
    category: 'tea',
    image: '/images/beverage_tea.jpeg',
    isPopular: true
  },
  {
    id: 'tea-2',
    nameEn: 'Masala Tandoori Chai',
    nameBn: 'মশলা তন্দুরি চা',
    descriptionEn: 'Hot tea poured into a clay pot (kulhad) smoked in the tandoor oven for an earthy flavor.',
    descriptionBn: 'মাটির ভাঁড়ে তন্দুরি হিটে তৈরি হওয়া ধোঁয়া ওঠা মাটির গন্ধযুক্ত মশলা চা।',
    price: 50,
    isVeg: true,
    category: 'tea',
    image: '/images/beverage_tea.jpeg'
  },

  // Mocktails
  {
    id: 'mocktail-1',
    nameEn: 'Signature Sunset Layered Mocktail',
    nameBn: 'সিগনেচার সানসেট লেয়ারড মকটেল',
    descriptionEn: 'A stunning three-layered fizzy drink with orange, cranberry, and lime notes, garnished with cucumber.',
    descriptionBn: 'কমলা, ক্র্যানবেরি এবং লেবুর স্বাদে তৈরি চোখ জুড়ানো তিনটি লেয়ারের রিফ্রেশিং মকটেল।',
    price: 130,
    isVeg: true,
    category: 'mocktails',
    image: '/images/beverage_mocktail.jpeg',
    isPopular: true
  },
  {
    id: 'mocktail-2',
    nameEn: 'Refreshing Mint Virgin Mojito',
    nameBn: 'রিফ্রেশিং মিন্ট ভার্জিন মোহিতো',
    descriptionEn: 'Fresh mint leaves, lime chunks, and sugar muddled together, topped with sparkling soda and ice.',
    descriptionBn: 'তাজা পুদিনা পাতা, লেবুর টুকরো ও বরফ সহ সোডা জলের সতেজ পানীয়।',
    price: 110,
    isVeg: true,
    category: 'mocktails',
    image: '/images/beverage_mocktail.jpeg'
  },

  // Desserts
  {
    id: 'dessert-1',
    nameEn: 'Sizzling Hot Brownie with Vanilla Ice Cream',
    nameBn: 'সিজলিং হট ব্রাউনি উইথ ভ্যানিলা আইসক্রিম',
    descriptionEn: 'Fudgy warm chocolate brownie served on a hot sizzler plate, topped with vanilla ice cream and hot fudge.',
    descriptionBn: 'গরম লোহার প্লেটে সিজলিং চকোলেট ব্রাউনি, উপরে ভ্যানিলা আইসক্রিম ও গরম চকোলেট সস।',
    price: 150,
    isVeg: true,
    category: 'desserts',
    image: '/images/beverage_coffee.jpeg', // fallback
    isPopular: true
  },
  {
    id: 'dessert-2',
    nameEn: 'Hot Gulab Jamun (2 Pcs)',
    nameBn: 'গরম গোলাপ জামুন (২ পিস)',
    descriptionEn: 'Soft, golden berry-sized milk dumplings soaked in a warm rose-cardamom sugar syrup.',
    descriptionBn: 'গোলাপ জল ও এলাচ দেওয়া চিনির রসে ভেজানো গরম নরম তুলতুলে গোলাপ জামুন।',
    price: 50,
    isVeg: true,
    category: 'desserts',
    image: '/images/beverage_tea.jpeg' // fallback
  },

  // Combos
  {
    id: 'combo-1',
    nameEn: 'Chilli Chicken & Egg Fried Rice Combo',
    nameBn: 'চিলি চিকেন ও এগ ফ্রাইড রাইস কম্বো',
    descriptionEn: 'A satisfying single-serve meal combo of Egg Fried Rice served with 4 pieces of Chilli Chicken.',
    descriptionBn: 'ঝরঝরে এগ ফ্রাইড রাইস এবং সাথে ৪ পিস চিলি চিকেনের পেটভরা কম্বো মিল।',
    price: 199,
    isVeg: false,
    category: 'combos',
    image: '/images/food_chilli_chicken.jpeg',
    isPopular: true,
    isChefSpecial: true
  },
  {
    id: 'combo-2',
    nameEn: 'Haveli Grand Family Feast (For 4)',
    nameBn: 'হাভেলি গ্র্যান্ড ফ্যামিলি ফিস্ট (৪ জনের জন্য)',
    descriptionEn: 'Double Chicken Rolls, Chicken Hakka Noodles, Chilli Chicken, Double Cheese Pizza, and 4 special mocktails.',
    descriptionBn: '২টি চিকেন রোল, চিকেন নুডলস, চিলি চিকেন, ডাবল চিজ পিজ্জা এবং ৪টি মকটেলের রাজকীয় ফ্যামিলি প্যাক।',
    price: 799,
    isVeg: false,
    category: 'combos',
    image: '/images/food_pizza.jpeg',
    isChefSpecial: true
  }
];
