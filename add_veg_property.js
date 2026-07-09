const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'menuData.ts');
if (!fs.existsSync(filePath)) {
  console.error('File not found:', filePath);
  process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

// 1. Update MenuItem interface to include isVeg
content = content.replace(
  'isChefSpecial?: boolean;\n}',
  'isChefSpecial?: boolean;\n  isVeg?: boolean;\n}'
);

// 2. Define list of vegetarian item IDs
const vegItemIds = [
  'starter-3', // Crispy Veg Pakora
  'bengali-1', // Luchi Alur Dum
  'rolls-3',   // Paneer Tikka Roll
  'pizza-1',   // Haveli Special Veggie Feast Pizza
  'burger-2',  // Spicy Paneer Crunch Burger
  'coffee-1',  // Premium Cold Coffee with Ice Cream
  'coffee-2',  // Classic Hot Cappuccino
  'tea-1',     // Haveli Special Kesar Milk Tea
  'tea-2',     // Masala Tandoori Chai
  'mocktail-1',// Signature Sunset Layered Mocktail
  'mocktail-2',// Refreshing Mint Virgin Mojito
  'dessert-1', // Sizzling Hot Brownie with Vanilla Ice Cream
  'dessert-2'  // Hot Gulab Jamun (2 Pcs)
];

// 3. Parse and insert isVeg property into each item block in the array
// We find each object inside the menuItems array by its 'id: ...' key and inject 'isVeg: true/false'
vegItemIds.forEach(id => {
  const regex = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?)(isPopular|isChefSpecial|category|image)`, 'g');
  content = content.replace(regex, (match, p1, p2) => {
    return `${p1}isVeg: true,\n    ${p2}`;
  });
});

// Non-veg items injection (isVeg: false)
const nonVegItemIds = [
  'starter-1',
  'starter-2',
  'bengali-2',
  'bengali-3',
  'chinese-1',
  'chinese-2',
  'chinese-3',
  'rolls-1',
  'rolls-2',
  'pizza-2',
  'burger-1',
  'combo-1',
  'combo-2'
];

nonVegItemIds.forEach(id => {
  const regex = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?)(isPopular|isChefSpecial|category|image)`, 'g');
  content = content.replace(regex, (match, p1, p2) => {
    return `${p1}isVeg: false,\n    ${p2}`;
  });
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated menuData.ts with isVeg properties!');
