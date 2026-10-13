/**
 * Centralized Restaurant Menu Data for Masineni Frnd
 * Clean, easily editable items across all 7 mandated categories.
 */

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Dishes', icon: 'Utensils' },
  { id: 'starters', label: 'Starters', icon: 'Flame' },
  { id: 'veg', label: 'Vegetarian Dishes', icon: 'Leaf' },
  { id: 'non-veg', label: 'Non-Vegetarian', icon: 'Drumstick' },
  { id: 'biryani', label: 'Biryani & Rice', icon: 'Sparkles' },
  { id: 'main-course', label: 'Main Course', icon: 'Soup' },
  { id: 'desserts', label: 'Desserts', icon: 'Cake' },
  { id: 'beverages', label: 'Beverages & Mocktails', icon: 'GlassWater' }
];

export const MENU_ITEMS = [
  // --- BIRYANI & RICE ---
  {
    id: 'biryani-1',
    name: 'Special Chicken Dum Biryani',
    description: 'Aromatic long-grain basmati rice layered with juicy farm-fresh chicken, infused with saffron, caramelized onions, and authentic secret spices.',
    price: 360,
    category: 'biryani',
    isVeg: false,
    spiceLevel: 'spicy',
    rating: 4.9,
    badge: "Chef's Special",
    isFeatured: true,
    prepTime: '15-20 min',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'biryani-2',
    name: 'Royal Mutton Biryani',
    description: 'Slow-cooked succulent mutton pieces gently simmered in pot-sealed dum style with whole spices, mint, and saffron ghee rice.',
    price: 460,
    category: 'biryani',
    isVeg: false,
    spiceLevel: 'spicy',
    rating: 4.9,
    badge: 'Popular',
    isFeatured: false,
    prepTime: '20-25 min',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'biryani-3',
    name: 'Shahi Paneer Tikka Biryani',
    description: 'Charcoal-grilled cottage cheese cubes cooked with seasoned golden basmati rice, roasted cashews, and aromatic herbs.',
    price: 320,
    category: 'biryani',
    isVeg: true,
    spiceLevel: 'medium',
    rating: 4.8,
    badge: 'Vegetarian Favorite',
    isFeatured: false,
    prepTime: '15-20 min',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'biryani-4',
    name: 'Kashmiri Jeera Pulao',
    description: 'Subtle and fragrant basmati rice tempered with roasted cumin seeds, pure desi ghee, and fresh coriander leaves.',
    price: 210,
    category: 'biryani',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.7,
    badge: null,
    isFeatured: false,
    prepTime: '12-15 min',
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80'
  },

  // --- STARTERS ---
  {
    id: 'starter-1',
    name: 'Crispy Chicken Starters (Andhra Style)',
    description: 'Crispy deep-fried boneless chicken nuggets tossed with fresh curry leaves, crushed garlic, and green chilies.',
    price: 310,
    category: 'starters',
    isVeg: false,
    spiceLevel: 'spicy',
    rating: 4.8,
    badge: 'Hot Seller',
    isFeatured: true,
    prepTime: '12-15 min',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'starter-2',
    name: 'Tandoori Chicken',
    description: 'Juicy chicken leg quarters marinated overnight in Kashmiri red chili, hung yogurt, and authentic tandoor spices, slow-roasted to charred perfection.',
    price: 390,
    category: 'starters',
    isVeg: false,
    spiceLevel: 'spicy',
    rating: 4.9,
    badge: 'Tandoor Signature',
    isFeatured: true,
    prepTime: '20-25 min',
    image: '/tandoori-chicken.png'
  },
  {
    id: 'starter-3',
    name: 'Crispy Corn Pepper Fry',
    description: 'Sweet corn kernels flash-fried until crunchy, tossed with cracked black pepper, bell peppers, and scallions.',
    price: 240,
    category: 'starters',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.7,
    badge: 'Quick Bite',
    isFeatured: false,
    prepTime: '10-12 min',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'starter-4',
    name: 'Paneer 65 Crispy Crunch',
    description: 'Soft cottage cheese chunks coated in seasoned batter, deep fried and sautéed with yogurt-chili reduction and mustard seeds.',
    price: 270,
    category: 'starters',
    isVeg: true,
    spiceLevel: 'medium',
    rating: 4.8,
    badge: 'Must Try',
    isFeatured: false,
    prepTime: '12-15 min',
    image: 'https://images.unsplash.com/photo-1567184109411-b28f21ee097a?auto=format&fit=crop&w=800&q=80'
  },

  // --- VEGETARIAN DISHES ---
  {
    id: 'veg-1',
    name: 'Paneer Butter Masala',
    description: 'Tender paneer cubes simmered in a luscious, mildly spiced satin gravy of ripe tomatoes, butter, and rich fresh cream.',
    price: 290,
    category: 'veg',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.9,
    badge: 'House Favorite',
    isFeatured: true,
    prepTime: '15-18 min',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'veg-2',
    name: 'Crispy Butter Masala Dosa',
    description: 'Traditional fermented golden rice-lentil crepe smeared with red chutney, stuffed with spiced potato mash, served with sambar & coconut chutneys.',
    price: 160,
    category: 'veg',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.8,
    badge: 'South Special',
    isFeatured: true,
    prepTime: '10-12 min',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'veg-3',
    name: 'Kaju Paneer Curry',
    description: 'Rich cashew nut paste and creamy cottage cheese simmered together in an aromatic onion-cashew brown gravy with saffron.',
    price: 330,
    category: 'veg',
    isVeg: true,
    spiceLevel: 'medium',
    rating: 4.8,
    badge: 'Royal Gravy',
    isFeatured: false,
    prepTime: '15-20 min',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'veg-4',
    name: 'Dal Makhani Special',
    description: 'Whole black lentils and kidney beans slow-simmered overnight over tandoor embers with butter, cream, and crushed ginger.',
    price: 250,
    category: 'veg',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.9,
    badge: '24-Hour Simmer',
    isFeatured: false,
    prepTime: '10-15 min',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
  },

  // --- NON-VEGETARIAN DISHES ---
  {
    id: 'nonveg-1',
    name: 'Andhra Kodi Kura (Country Chicken Curry)',
    description: 'Fiery Andhra-style chicken cooked with poppy seeds, fresh coconut, coriander, and freshly roasted Guntur spices.',
    price: 340,
    category: 'non-veg',
    isVeg: false,
    spiceLevel: 'spicy',
    rating: 4.9,
    badge: 'Authentic Andhra',
    isFeatured: false,
    prepTime: '18-20 min',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nonveg-2',
    name: 'Mutton Rogan Josh',
    description: 'Kashmiri delicacy of tender meat cooked in an aromatic gravy scented with dry ginger, asafoetida, and ratan jot root.',
    price: 440,
    category: 'non-veg',
    isVeg: false,
    spiceLevel: 'medium',
    rating: 4.8,
    badge: 'Heritage Recipe',
    isFeatured: false,
    prepTime: '20-25 min',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nonveg-3',
    name: 'Fish Malabar Curry',
    description: 'Fresh boneless seer fish cooked in a tangy and fragrant Kerala-style coconut milk gravy with kokum and curry leaves.',
    price: 380,
    category: 'non-veg',
    isVeg: false,
    spiceLevel: 'medium',
    rating: 4.7,
    badge: 'Coastal Delight',
    isFeatured: false,
    prepTime: '15-18 min',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },

  // --- MAIN COURSE (Breads & Accompaniments) ---
  {
    id: 'main-1',
    name: 'Butter Garlic Naan',
    description: 'Fluffy clay-oven baked bread topped with minced roasted garlic, fresh cilantro, and generous brush of pure butter.',
    price: 75,
    category: 'main-course',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.9,
    badge: 'Tandoor Fresh',
    isFeatured: false,
    prepTime: '5-8 min',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'main-2',
    name: 'Stuffed Amritsari Kulcha',
    description: 'Crispy layered tandoori flatbread stuffed with spiced potatoes, onions, and pomegranate seeds.',
    price: 110,
    category: 'main-course',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.8,
    badge: null,
    isFeatured: false,
    prepTime: '8-10 min',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'main-3',
    name: 'Methi Paratha (2 Pcs)',
    description: 'Wholesome whole wheat flatbread infused with fresh fenugreek leaves, ajwain seeds, and white butter.',
    price: 90,
    category: 'main-course',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.7,
    badge: null,
    isFeatured: false,
    prepTime: '8-10 min',
    image: 'https://images.unsplash.com/photo-1505253758473-96b3015f21c9?auto=format&fit=crop&w=800&q=80'
  },

  // --- DESSERTS ---
  {
    id: 'dessert-1',
    name: 'Royal Kesari Gulab Jamun (2 Pcs)',
    description: 'Warm golden milk dumplings soaked in cardamom-rose scented sugar syrup, garnished with silver leaf and sliced pistachios.',
    price: 140,
    category: 'desserts',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.9,
    badge: 'Sweet Finale',
    isFeatured: false,
    prepTime: '5 min',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dessert-2',
    name: 'Matka Kulfi with Falooda',
    description: 'Traditional slow-reduced dense saffron cream ice cream served chilled in an earthen pot with rose syrup and falooda sev.',
    price: 180,
    category: 'desserts',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.9,
    badge: 'House Special',
    isFeatured: false,
    prepTime: '5 min',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dessert-3',
    name: 'Saffron Rasmalai (2 Pcs)',
    description: 'Delicate cottage cheese patties soaked in saffron and cardamom scented sweetened milk, served chilled with toasted almonds.',
    price: 160,
    category: 'desserts',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.8,
    badge: null,
    isFeatured: false,
    prepTime: '5 min',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=800&q=80'
  },

  // --- BEVERAGES & MOCKTAILS ---
  {
    id: 'bev-1',
    name: 'Fresh Fruit Sunset Mocktail',
    description: 'Layered blend of fresh tropical mango, passion fruit, blood orange, and sparkling soda with a crushed mint rim.',
    price: 190,
    category: 'beverages',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.9,
    badge: 'Signature Cooler',
    isFeatured: true,
    prepTime: '5-7 min',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bev-2',
    name: 'Masala Spiced Butter Milk (Chaas)',
    description: 'Refreshing churned natural yogurt with roasted cumin seeds, green chilies, ginger, and fresh rock salt.',
    price: 90,
    category: 'beverages',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.8,
    badge: 'Traditional Drink',
    isFeatured: false,
    prepTime: '4-5 min',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bev-3',
    name: 'Virgin Mint Mojito Cooler',
    description: 'Muddled fresh garden mint leaves, freshly squeezed Persian lime, cane sugar syrup, and chilled bubbly club soda.',
    price: 160,
    category: 'beverages',
    isVeg: true,
    spiceLevel: 'mild',
    rating: 4.8,
    badge: null,
    isFeatured: false,
    prepTime: '5 min',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
  }
];
