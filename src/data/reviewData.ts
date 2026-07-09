export interface CustomerReview {
  id: string;
  name: string;
  avatarUrl?: string;
  rating: number;
  textEn: string;
  textBn: string;
  date: string;
  tags?: string[];
}

export const customerReviews: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Sayantan Mukherjee',
    avatarUrl: '/images/interior_mural.jpeg', // fallback or placeholder
    rating: 5,
    textEn: "Ambiance is awesome! Especially the wall painting of girl holding DSLR camera ta darun. Chicken Shawarma wrap ta khub tasty chilo, and the cold coffee with vanilla ice cream was top-notch! Best cafe in Midnapore, pocket-friendly price.",
    textBn: "অ্যাম্বিয়েন্স জাস্ট অসাধারণ! বিশেষ করে ডিএসএলআর হাতে মেয়ের দেওয়াল ছবিটা দারুণ। চিকেন শর্মা র‍্যাপটা খুব টেস্টি ছিল, আর ভ্যানিলা আইসক্রিম দেওয়া কোল্ড কফিটা ছিল দুর্দান্ত! মেদিনীপুরের সেরা ক্যাফে, বাজেট ফ্রেন্ডলি দাম।",
    date: '2 weeks ago',
    tags: ['Chicken Shawarma', 'Cold Coffee', 'Beautiful Ambiance']
  },
  {
    id: 'rev-2',
    name: 'Priyanka Dey',
    avatarUrl: '/images/beverage_mocktail.jpeg',
    rating: 5,
    textEn: "Haveli Cafe is my absolute favorite spot. Special Kesar Milk Tea and Tandoori Chai ta sheer love! Bikeler adda r jonno perfect place. The cat washbasin mural is so funny and creative. Must visit with friends and family!",
    textBn: "হাভেলি ক্যাফে আমার ভীষণ প্রিয় একটা জায়গা। স্পেশাল কেশর চা আর তন্দুরি চা-টা জাস্ট লাভেবল! বিকালের আড্ডার জন্য পারফেক্ট প্লেস। বিড়ালের সানগ্লাস পরা বেসিন পেইন্টিংটা ভীষণ কিউট ও ক্রিয়েটিভ। বন্ধুদের সাথে অবশ্যই যাওয়ার জায়গা!",
    date: '3 weeks ago',
    tags: ['Tandoori Chai', 'Adda Zone', 'Creative Decor']
  },
  {
    id: 'rev-3',
    name: 'Amit Baran Das',
    avatarUrl: '/images/food_chilli_chicken.jpeg',
    rating: 5,
    textEn: "First time visit korlam, the Chilli Chicken and Egg Fried Rice combo ta khub bhalo legeche. Portion size is great and foods are freshly prepared. Staff behavior was very polite. Will definitely visit again.",
    textBn: "প্রথমবার ভিজিট করলাম, চিলি চিকেন আর এগ ফ্রাইড রাইস কম্বোটা খুব ভালো লেগেছে। খাবারের পরিমাণ বেশ ভালো আর একদম ফ্রেশ রান্না। স্টাফদের ব্যবহার খুবই নম্র ও অমায়িক ছিল। আবার আসব নিশ্চয়ই।",
    date: '1 month ago',
    tags: ['Chilli Chicken Combo', 'Fresh Food', 'Polite Staff']
  },
  {
    id: 'rev-4',
    name: 'Ankita Sen',
    avatarUrl: '/images/interior_tables.jpeg',
    rating: 4,
    textEn: "Best cafe in Midnapore for college students. Quick service and pocket-friendly menu items. Mocktail er sunset layered drink ta asadharon dekhte ebong refreshingly tasty! Interior design is extremely premium.",
    textBn: "মেদিনীপুরের কলেজ স্টুডেন্টদের জন্য বেস্ট ক্যাফে। কুইক সার্ভিস আর বেশ সস্তা মেনু। মকটেল সানসেট লেয়ারড ড্রিংকটা দেখতে যেমন সুন্দর, খেতেও তেমন রিফ্রেশিং! ভেতরের ডেকরেশন খুব প্রিমিয়াম ফিল দেয়।",
    date: '1 month ago',
    tags: ['Mocktails', 'Student Friendly', 'Instagrammable']
  },
  {
    id: 'rev-5',
    name: 'Rajesh Das',
    avatarUrl: '/images/food_pizza.jpeg',
    rating: 5,
    textEn: "Family dinner er jonno gechilam. Baccha ra pizza r double cheese burger khub enjoy koreche. The tire seats are very unique and comfortable. Overall environment is cozy and clean. Recommended!",
    textBn: "ফ্যামিলি ডিনারের জন্য গিয়েছিলাম। বাচ্চারা পিজ্জা আর ডাবল চিজ বার্গার খুব এনজয় করেছে। চাকার বসার সিটগুলো বেশ অভিনব ও আরামদায়ক। চারপাশটা খুব গোছানো আর পরিষ্কার। রিকমেন্ডেড!",
    date: '2 months ago',
    tags: ['Double Cheese Burger', 'Family Dining', 'Cozy Vibe']
  },
  {
    id: 'rev-6',
    name: 'Sohini & Subho',
    avatarUrl: '/images/beverage_coffee.jpeg',
    rating: 5,
    textEn: "Couple friendly cozy spots are there, perfect for quiet dates. Lighting is very warm and beautiful. Fried chicken bite size are very crispy and spicy. Highly satisfied with Haveli hospitality!",
    textBn: "কাপল ফ্রেন্ডলি সুন্দর নিরিবিলি বসার জায়গা আছে, ডেট-এর জন্য একদম আইডিয়াল। আলো আঁধারি পরিবেশটা খুব সুন্দর। ক্রিস্পি ফ্রাইড চিকেনগুলো খুব মুচমুচে আর স্পাইসি ছিল। হাভেলির আতিথেয়তায় ভীষণ সন্তুষ্ট!",
    date: '2 months ago',
    tags: ['Crispy Chicken', 'Couple Friendly', 'Warm Lighting']
  }
];
