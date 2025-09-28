import React, { useState, useRef, useEffect } from "react";
import { Droplets, Award, Leaf, Heart, Star, Clock, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";

const ShvetdharaProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sectionRefs = useRef([]);

  // Enhanced IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const pushRef = (el, sectionId) => {
    if (el && !sectionRefs.current.includes(el)) {
      el.dataset.section = sectionId;
      sectionRefs.current.push(el);
    }
  };

  const categories = [
    { id: 'all', name: 'All Products', icon: <Droplets size={20} /> },
    { id: 'milk', name: 'Fresh Milk', icon: <Droplets size={20} /> },
    { id: 'curd', name: 'Curd & Yogurt', icon: <Heart size={20} /> },
    { id: 'flavored', name: 'Flavored Milk', icon: <Star size={20} /> },
    { id: 'premium', name: 'Premium Range', icon: <Award size={20} /> }
  ];

 const products = [
  {
    id: 1,
    name: "Pure Cow Milk",
    category: "milk",
    tagline: "Nature's Perfection in Every Drop",
    image: "https://i.ibb.co/1k2HTcy/IMG-1655-min.webp",
    gradient: "from-sky-500 to-sky-400",
    bgGradient: "from-green-50 to-emerald-50",
    description: "Fresh, pure cow milk sourced from grass-fed cows in pristine rural farms. Rich in essential nutrients and completely natural.",
    features: ["100% Pure & Natural", "Grass-Fed Cows", "Rich in Protein", "Daily Fresh Supply"],
    nutritionalInfo: {
      protein: "3.2g per 100ml",
      fat: "3.5g per 100ml",
      calcium: "120mg per 100ml",
      vitamins: "A, D, B12"
    },
    benefits: ["Builds Strong Bones", "Boosts Immunity", "Rich in Protein", "Natural Energy Source"],
    bestTime: "Morning & Evening",
    shelfLife: "2-3 days refrigerated"
  },
  {
    id: 2,
    name: "Farm-Fresh Curd",
    category: "curd",
    tagline: "Probiotic Powerhouse for Wellness",
    image: "https://i.ibb.co/D3psJw0/IMG-1654-min.webp",
    gradient: "from-sky-500 to-sky-400",
    bgGradient: "from-blue-50 to-cyan-50",
    description: "Traditional fermented curd made from our pure milk using time-honored methods. Packed with probiotics for digestive health.",
    features: ["Traditional Fermentation", "Rich in Probiotics", "Creamy Texture", "Digestive Health"],
    nutritionalInfo: {
      protein: "4.1g per 100g",
      probiotics: "100M+ CFU",
      calcium: "150mg per 100g",
      vitamins: "B2, B12"
    },
    benefits: ["Improves Digestion", "Boosts Gut Health", "Rich in Protein", "Natural Probiotics"],
    bestTime: "Lunch & Dinner",
    shelfLife: "3-4 days refrigerated"
  },
  {
    id: 3,
    name: "Chocolate Milk Delight",
    category: "flavored",
    tagline: "Indulgent Taste, Natural Goodness",
    image: "https://i.ibb.co/Kj5jd1hM/IMG-1652-min.webp",
    gradient: "from-sky-500 to-sky-400",
    bgGradient: "from-amber-50 to-orange-50",
    description: "Rich chocolate flavored milk made with real cocoa and our premium fresh milk. Perfect treat for chocolate lovers of all ages.",
    features: ["Real Cocoa", "No Artificial Colors", "Energy Boost", "Kid's Favorite"],
    nutritionalInfo: {
      protein: "3.5g per 100ml",
      carbohydrates: "12g per 100ml",
      calcium: "110mg per 100ml",
      cocoa: "Natural"
    },
    benefits: ["Quick Energy", "Muscle Recovery", "Mood Enhancer", "Rich Taste"],
    bestTime: "Post-workout & Snack time",
    shelfLife: "3-5 days refrigerated"
  },
  {
    id: 4,
    name: "Strawberry Fresh",
    category: "flavored",
    tagline: "Berry Bliss in Every Sip",
    image: "https://i.ibb.co/Q7PTP549/IMG-1651-min.webp",
    gradient: "from-sky-500 to-sky-400",
    bgGradient: "from-pink-50 to-rose-50",
    description: "Delicious strawberry flavored milk with natural fruit essence. A refreshing and nutritious drink that kids and adults love.",
    features: ["Natural Fruit Essence", "No Preservatives", "Refreshing Taste", "Vitamin Rich"],
    nutritionalInfo: {
      protein: "3.3g per 100ml",
      vitamin_c: "15mg per 100ml",
      calcium: "115mg per 100ml",
      natural_flavors: "Yes"
    },
    benefits: ["Vitamin C Boost", "Antioxidants", "Natural Energy", "Refreshing"],
    bestTime: "Breakfast & Evening",
    shelfLife: "3-5 days refrigerated"
  },
  {
    id: 5,
    name: "Yogurt Premium",
    category: "premium",
    tagline: "Luxury Texture, Premium Nutrition",
    image: "https://i.ibb.co/XxbPxwmn/IMG-1660.jpg",
    gradient: "from-sky-500 to-sky-400",
    bgGradient: "from-purple-50 to-indigo-50",
    description: "Thick, creamy Greek-style yogurt with double the protein of regular yogurt. Made using traditional straining methods for superior texture.",
    features: ["Double Protein", "Thick & Creamy", "Strained Process", "Premium Quality"],
    nutritionalInfo: {
      protein: "8.5g per 100g",
      probiotics: "200M+ CFU",
      calcium: "180mg per 100g",
      fat: "5.2g per 100g"
    },
    benefits: ["High Protein", "Muscle Building", "Satiety", "Luxury Experience"],
    bestTime: "Post-workout & Breakfast",
    shelfLife: "5-7 days refrigerated"
  },
  {
    id: 6,
    name: "A2 Premium Milk",
    category: "premium",
    tagline: "The Purest Form of Milk",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    gradient: "from-sky-500 to-sky-400",
    bgGradient: "from-emerald-50 to-teal-50",
    description: "Premium A2 milk from specially selected indigenous cows. Easier to digest and closer to the original form of cow milk.",
    features: ["A2 Beta-Casein", "Easy Digestion", "Indigenous Cows", "Premium Quality"],
    nutritionalInfo: {
      protein: "3.8g per 100ml",
      a2_protein: "100%",
      calcium: "135mg per 100ml",
      omega_3: "Natural"
    },
    benefits: ["Better Digestion", "Premium Nutrition", "Natural A2", "Health Conscious"],
    bestTime: "Any time of day",
    shelfLife: "2-3 days refrigerated"
  },
  {
    id: 7,
    name: "Fresh Dairy Milk",
    category: "premium",
    tagline: "Farm Fresh Goodness",
    image: "https://i.ibb.co/TBcjhgbB/IMG-1643-min.webp",
    gradient: "from-blue-500 to-blue-400",
    bgGradient: "from-blue-50 to-indigo-50",
    description: "Premium fresh milk sourced directly from local dairy farms. Rich in nutrients and perfect for daily consumption.",
    features: ["Farm Fresh", "Rich Nutrients", "Daily Fresh", "Premium Quality"],
    nutritionalInfo: {
      protein: "3.5g per 100ml",
      fat: "3.2g per 100ml", 
      calcium: "120mg per 100ml",
      vitamins: "A, D, B12"
    },
    benefits: ["Strong Bones", "Muscle Growth", "Energy Boost", "Immune Support"],
    bestTime: "Morning and evening",
    shelfLife: "2-3 days refrigerated"
  },
  {
    id: 8,
    name: "Organic Pure Milk",
    category: "organic",
    tagline: "Nature's Pure Gift",
    image: "https://i.ibb.co/NgKjq6hL/IMG-1669-min.webp",
    gradient: "from-green-500 to-green-400",
    bgGradient: "from-green-50 to-emerald-50",
    description: "100% organic milk from grass-fed cows raised without hormones or antibiotics. Pure and natural nutrition.",
    features: ["100% Organic", "Grass-Fed Cows", "No Hormones", "Natural Nutrition"],
    nutritionalInfo: {
      protein: "3.6g per 100ml",
      organic_content: "100%",
      calcium: "125mg per 100ml",
      natural_fats: "3.0g per 100ml"
    },
    benefits: ["Chemical Free", "Natural Goodness", "Eco Friendly", "Pure Nutrition"],
    bestTime: "Any time of day",
    shelfLife: "3-4 days refrigerated"
  },
  {
    id: 9,
    name: "Full Cream Milk",
    category: "traditional",
    tagline: "Rich & Creamy Delight",
    image: "https://i.ibb.co/jZhW7RZV/IMG-1648-min.webp",
    gradient: "from-yellow-500 to-orange-400",
    bgGradient: "from-yellow-50 to-orange-50",
    description: "Rich and creamy full cream milk perfect for making tea, coffee, and desserts. Contains natural milk fats for enhanced taste.",
    features: ["Full Cream", "Rich Taste", "Natural Fats", "Creamy Texture"],
    nutritionalInfo: {
      protein: "3.4g per 100ml",
      fat: "4.0g per 100ml",
      calcium: "115mg per 100ml",
      calories: "65 per 100ml"
    },
    benefits: ["Rich Flavor", "Energy Dense", "Creamy Texture", "Traditional Taste"],
    bestTime: "Morning with breakfast",
    shelfLife: "2-3 days refrigerated"
  },
  {
    id: 10,
    name: "Low Fat Milk",
    category: "health",
    tagline: "Healthy Choice for You",
    image: "https://i.ibb.co/jP3NqM8M/IMG-1645-min.webp",
    gradient: "from-purple-500 to-purple-400",
    bgGradient: "from-purple-50 to-violet-50",
    description: "Low fat milk with reduced calories but retained nutritional benefits. Perfect for health-conscious individuals.",
    features: ["Low Fat", "Reduced Calories", "High Protein", "Health Focused"],
    nutritionalInfo: {
      protein: "3.7g per 100ml",
      fat: "1.5g per 100ml",
      calcium: "130mg per 100ml",
      calories: "42 per 100ml"
    },
    benefits: ["Weight Management", "Heart Healthy", "Low Calories", "Protein Rich"],
    bestTime: "Post workout",
    shelfLife: "3-4 days refrigerated"
  },
  {
    id: 11,
    name: "Buffalo Milk",
    category: "traditional",
    tagline: "Traditional Indian Richness",
    image: "https://i.ibb.co/84sq2Pv6/IMG-1642-min.webp",
    gradient: "from-amber-500 to-orange-400",
    bgGradient: "from-amber-50 to-yellow-50",
    description: "Rich buffalo milk with higher fat content and distinctive taste. Perfect for making traditional Indian sweets and curd.",
    features: ["Buffalo Milk", "High Fat Content", "Rich Protein", "Traditional"],
    nutritionalInfo: {
      protein: "4.2g per 100ml",
      fat: "6.8g per 100ml",
      calcium: "210mg per 100ml",
      calories: "97 per 100ml"
    },
    benefits: ["High Protein", "Rich Calcium", "Energy Dense", "Traditional Taste"],
    bestTime: "Morning and evening",
    shelfLife: "2-3 days refrigerated"
  },
  {
    id: 12,
    name: "Toned Milk",
    category: "balanced",
    tagline: "Perfect Balance of Nutrition",
    image: "https://i.ibb.co/7tT0StYQ/IMG-1631-min.webp",
    gradient: "from-teal-500 to-cyan-400",
    bgGradient: "from-teal-50 to-cyan-50",
    description: "Perfectly balanced toned milk with optimal fat content. Ideal for daily consumption and all family members.",
    features: ["Balanced Nutrition", "Optimal Fat", "Family Friendly", "Daily Use"],
    nutritionalInfo: {
      protein: "3.3g per 100ml",
      fat: "2.5g per 100ml",
      calcium: "118mg per 100ml",
      calories: "52 per 100ml"
    },
    benefits: ["Balanced Diet", "Family Health", "Moderate Calories", "Versatile Use"],
    bestTime: "Any time of day",
    shelfLife: "2-4 days refrigerated"
  },
  {
    id: 13,
    name: "Fortified Milk",
    category: "enhanced",
    tagline: "Enhanced with Extra Nutrition",
    image: "https://i.ibb.co/9ksQ2JP5/IMG-1638-min.webp",
    gradient: "from-rose-500 to-pink-400",
    bgGradient: "from-rose-50 to-pink-50",
    description: "Milk fortified with additional vitamins and minerals. Enhanced nutrition for growing children and active adults.",
    features: ["Vitamin Fortified", "Mineral Enhanced", "Extra Nutrition", "Growth Support"],
    nutritionalInfo: {
      protein: "3.8g per 100ml",
      vitamins: "A, D, E, B-Complex",
      calcium: "150mg per 100ml",
      iron: "2mg per 100ml"
    },
    benefits: ["Enhanced Immunity", "Better Growth", "Vitamin Rich", "Mineral Support"],
    bestTime: "Morning for children",
    shelfLife: "3-5 days refrigerated"
  },
  {
    id: 14,
    name: "Fortified Milk",
    category: "enhanced",
    tagline: "Enhanced with Extra Nutrition",
    image: "https://i.ibb.co/kVfQ4CF5/IMG-1663.jpg",
    gradient: "from-rose-500 to-pink-400",
    bgGradient: "from-rose-50 to-pink-50",
    description: "Milk fortified with additional vitamins and minerals. Enhanced nutrition for growing children and active adults.",
    features: ["Vitamin Fortified", "Mineral Enhanced", "Extra Nutrition", "Growth Support"],
    nutritionalInfo: {
      protein: "3.8g per 100ml",
      vitamins: "A, D, E, B-Complex",
      calcium: "150mg per 100ml",
      iron: "2mg per 100ml"
    },
    benefits: ["Enhanced Immunity", "Better Growth", "Vitamin Rich", "Mineral Support"],
    bestTime: "Morning for children",
    shelfLife: "3-5 days refrigerated"
  },
  {
    id: 15,
    name: "Fortified Milk",
    category: "enhanced",
    tagline: "Enhanced with Extra Nutrition",
    image: "https://i.ibb.co/ynDPdWzg/IMG-1656.jpg",
    gradient: "from-rose-500 to-pink-400",
    bgGradient: "from-rose-50 to-pink-50",
    description: "Milk fortified with additional vitamins and minerals. Enhanced nutrition for growing children and active adults.",
    features: ["Vitamin Fortified", "Mineral Enhanced", "Extra Nutrition", "Growth Support"],
    nutritionalInfo: {
      protein: "3.8g per 100ml",
      vitamins: "A, D, E, B-Complex",
      calcium: "150mg per 100ml",
      iron: "2mg per 100ml"
    },
    benefits: ["Enhanced Immunity", "Better Growth", "Vitamin Rich", "Mineral Support"],
    bestTime: "Morning for children",
    shelfLife: "3-5 days refrigerated"
  },
  {
    id: 16,
    name: "Fortified Milk",
    category: "enhanced",
    tagline: "Enhanced with Extra Nutrition",
    image: "https://i.ibb.co/WWtPsKdC/IMG-1665.jpg",
    gradient: "from-rose-500 to-pink-400",
    bgGradient: "from-rose-50 to-pink-50",
    description: "Milk fortified with additional vitamins and minerals. Enhanced nutrition for growing children and active adults.",
    features: ["Vitamin Fortified", "Mineral Enhanced", "Extra Nutrition", "Growth Support"],
    nutritionalInfo: {
      protein: "3.8g per 100ml",
      vitamins: "A, D, E, B-Complex",
      calcium: "150mg per 100ml",
      iron: "2mg per 100ml"
    },
    benefits: ["Enhanced Immunity", "Better Growth", "Vitamin Rich", "Mineral Support"],
    bestTime: "Morning for children",
    shelfLife: "3-5 days refrigerated"
  },
  {
    id: 17,
    name: "Fortified Milk",
    category: "enhanced",
    tagline: "Enhanced with Extra Nutrition",
    image: "https://i.ibb.co/C3fNwX8w/IMG-1629.jpg",
    gradient: "from-rose-500 to-pink-400",
    bgGradient: "from-rose-50 to-pink-50",
    description: "Milk fortified with additional vitamins and minerals. Enhanced nutrition for growing children and active adults.",
    features: ["Vitamin Fortified", "Mineral Enhanced", "Extra Nutrition", "Growth Support"],
    nutritionalInfo: {
      protein: "3.8g per 100ml",
      vitamins: "A, D, E, B-Complex",
      calcium: "150mg per 100ml",
      iron: "2mg per 100ml"
    },
    benefits: ["Enhanced Immunity", "Better Growth", "Vitamin Rich", "Mineral Support"],
    bestTime: "Morning for children",
    shelfLife: "3-5 days refrigerated"
  },
];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 sm:h-80 object-cover rounded-t-3xl"
            />
            <div className={`absolute inset-0  opacity-100 rounded-t-3xl`}></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ×
            </button>
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-lg text-gray-600 italic">{product.tagline}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Leaf className="text-sky-500" size={20} />
                    Product Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Heart className="text-sky-500" size={20} />
                    Health Benefits
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Award className="text-blue-500" size={20} />
                    Nutritional Information
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                        <span className="text-gray-600 capitalize">{key.replace('_', ' ')}</span>
                        <span className="font-medium text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="text-sky-500" size={20} />
                    <span className="font-medium">Best Time:</span>
                    <span className="text-gray-700">{product.bestTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="text-sky-500" size={20} />
                    <span className="font-medium">Shelf Life:</span>
                    <span className="text-gray-700">{product.shelfLife}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-sky-100 py-20 sm:py-32 px-4 sm:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center text-white relative z-10">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-black text-sm font-medium border border-sky-900">
              Premium Dairy Collection
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-sky-600 bg-clip-text text-transparent">Shvetdhara</span>
            <br />
            <span className="bg-sky-600 bg-clip-text text-transparent">Products</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-black mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our range of premium dairy products, crafted with love and delivered with the promise of purity and freshness
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-sky-900">
              <Leaf size={20} />
              <span>100% Natural</span>
            </div>
            <div className="flex items-center gap-2 text-sky-900">
              <Award size={20} />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2 text-sky-900">
              <Shield size={20} />
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section 
        ref={(el) => pushRef(el, 'filter')}
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 py-6 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`flex flex-wrap gap-3 justify-center transition-all duration-1000 transform ${
            visibleSections.has('filter') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-sky-200 text-black shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section 
        ref={(el) => pushRef(el, 'products')}
        className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-8"
      >
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 transform ${
          visibleSections.has('products') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className={`group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 cursor-pointer ${
                visibleSections.has('products') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                {/* <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div> */}
                
                {/* Category Badge */}
                {/* <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                  {categories.find(cat => cat.id === product.category)?.name}
                </div>
                 */}
                {/* Premium Badge */}
                {/* {product.category === 'premium' && (
                  <div className="absolute top-4 right-4 p-2 bg-gradient-to-r from-sky-500 to-sky-400rounded-full">
                    <Award size={16} className="text-white" />
                  </div>
                )} */}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm italic group-hover:text-gray-700 transition-colors">
                    {product.tagline}
                  </p>
                </div>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium group-hover:bg-gray-200 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-lg">
                      +{product.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Benefits Preview */}
                <div className="space-y-2 mb-6">
                  {product.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r from-sky-500 to-sky-400 rounded-full`}></div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <button className={`w-full py-3 bg-gradient-to-r from-sky-500 to-sky-400  text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🥛</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </section>

      {/* Quality Promise Section */}
      <section 
        ref={(el) => pushRef(el, 'promise')}
        className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            visibleSections.has('promise') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-sky-300 to-sky-400 bg-clip-text text-transparent">Quality</span> Promise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every Shvetdhara product undergoes rigorous quality checks to ensure you receive nothing but the finest dairy products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={40} />,
                title: "Quality Assured",
                description: "Rigorous testing and quality control at every step",
                gradient: "from-sky-300 to-sky-400"
              },
              {
                icon: <Leaf size={40} />,
                title: "100% Natural",
                description: "No artificial preservatives or additives",
                gradient: "from-sky-300 to-sky-400"
              },
              {
                icon: <Users size={40} />,
                title: "Trusted by Families",
                description: "Serving thousands of happy families daily",
                gradient: "from-sky-300 to-sky-400"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`text-center group transition-all duration-700 transform ${
                  visibleSections.has('promise') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.gradient} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default ShvetdharaProductsPage;