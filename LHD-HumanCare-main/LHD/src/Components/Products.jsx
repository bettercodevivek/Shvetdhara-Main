import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Grid3X3, List, X, Award, Shield, Leaf, Users, Clock, Star, ArrowRight, Package, Truck, CheckCircle, Phone, Mail } from "lucide-react";

const ShvetdharaProductsPage = () => {
  
  const [searchParams] = useSearchParams(); // Add this hook
  const categoryFromURL = searchParams.get('category'); // Get category from URL 
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL || 'all'); // Initialize with URL param
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'all', name: 'All Products', count: 12 },
    { id: 'milk', name: 'Fresh Milk', count: 6},
    { id: 'curd', name: 'Curd & Yogurt', count: 4 },
    { id: 'flavored', name: 'Flavored Milk', count: 1 },
    { id: 'chhaach', name: 'Butter Milk', count: 1 },
    { id: 'ghee', name: 'Ghee', count: 2 },
    { id: 'others', name: 'Other Products', count: 1 }
  ];

  const products = [
    {
      id: 1,
      name: "Pasteurised Standardised Milk",
      category: "milk",
      tagline: "Pure and Natural",
      image: "https://i.ibb.co/1k2HTcy/IMG-1655-min.webp",
      price: "₹45/Ltr",
      description: "Fresh cow milk sourced daily from local farms. Rich in protein and calcium, perfect for your family's daily nutrition needs.",
      features: ["100% Pure", "Daily Fresh", "Rich in Protein", "Local Farms"],
      nutritionalInfo: {
        protein: "3.2g per 100ml",
        fat: "3.5g per 100ml",
        calcium: "120mg per 100ml",
        vitamins: "A, D, B12"
      },
      benefits: ["Strong Bones", "Energy Boost", "Natural Nutrition", "Family Health"],
      shelfLife: "2-3 days when refrigerated",
      bestFor: "Daily consumption for all family members"
    },
    {
      id: 2,
      name: "Pasteurised Toned Milk",
      category: "milk",
      tagline: "Healthy & Creamy",
      image: "https://i.ibb.co/D3psJw0/IMG-1654-min.webp",
      price: "₹55/kg",
      description: "Smooth and creamy curd made from our fresh milk. Rich in probiotics and perfect for digestion.",
      features: ["Smooth Texture", "Traditional Method", "Digestive Health"],
      nutritionalInfo: {
        protein: "4.1g per 100g",
        probiotics: "Live cultures",
        calcium: "150mg per 100g",
        vitamins: "B2, B12"
      },
      benefits: ["Better Digestion", "Gut Health", "Cooling Effect", "Protein Rich"],
      shelfLife: "3-4 days when refrigerated",
      bestFor: "Daily meals, especially lunch and dinner"
    },
    {
      id: 3,
      name: "Special Tea Milk",
      category: "flavored",
      tagline: "Kids' Favorite",
      image: "https://i.ibb.co/Kj5jd1hM/IMG-1652-min.webp",
      price: "₹35/500ml",
      description: "Delicious chocolate flavored milk that kids love. Made with real cocoa and fresh milk.",
      features: ["Real Cocoa", "Kid Friendly", "Energy Rich", "Natural Flavor"],
      nutritionalInfo: {
        protein: "3.5g per 100ml",
        carbs: "12g per 100ml",
        calcium: "110mg per 100ml",
        cocoa: "Natural"
      },
      benefits: ["Energy Boost", "Kids Love It", "Nutritious Treat", "After School Snack"],
      shelfLife: "5 days when refrigerated",
      bestFor: "Children's snack time and breakfast"
    },
    {
      id: 4,
      name: "Special Tea Milk",
      category: "milk",
      tagline: "Fresh & Fruity",
      image: "https://i.ibb.co/Q7PTP549/IMG-1651-min.webp",
      price: "₹35/500ml",
      description: "Refreshing strawberry flavored milk with natural fruit essence. A healthy treat for the whole family.",
      features: ["Natural Essence", "Refreshing", "Vitamin C", "Family Favorite"],
      nutritionalInfo: {
        protein: "3.3g per 100ml",
        vitamin_c: "15mg per 100ml",
        calcium: "115mg per 100ml",
        natural_flavors: "Yes"
      },
      benefits: ["Vitamin Boost", "Refreshing Taste", "Natural Goodness", "Healthy Treat"],
      shelfLife: "5 days when refrigerated",
      bestFor: "Evening refreshment and breakfast"
    },
    {
      id: 5,
      name: "Fresh Dahi",
      category: "curd",
      tagline: "Thick & Creamy",
      image: "https://i.ibb.co/XxbPxwmn/IMG-1660.jpg",
      price: "₹75/500g",
      description: "Thick, creamy yogurt with double protein. Made using traditional straining methods for best texture.",
      features: ["Double Protein", "Thick Texture", "Premium Quality", "Traditional Method"],
      nutritionalInfo: {
        protein: "8.5g per 100g",
        probiotics: "Live cultures",
        calcium: "180mg per 100g",
        fat: "5.2g per 100g"
      },
      benefits: ["High Protein", "Muscle Health", "Satisfying", "Premium Experience"],
      shelfLife: "7 days when refrigerated",
      bestFor: "Health-conscious individuals and fitness enthusiasts"
    },
    {
      id: 6,
      name: "Halwai Special Milk",
      category: "milk",
      tagline: "Easy to Digest",
      image: "https://i.ibb.co/WWtPsKdC/IMG-1665.jpg",
      price: "₹65/Ltr",
      description: "Premium A2 milk from specially selected cows. Easier to digest and naturally pure.",
      features: ["A2 Protein", "Easy Digest", "Premium Cows", "Natural"],
      nutritionalInfo: {
        protein: "3.8g per 100ml",
        a2_protein: "100%",
        calcium: "135mg per 100ml",
        omega_3: "Natural"
      },
      benefits: ["Better Digestion", "Pure Nutrition", "Gentle on Stomach", "Premium Quality"],
      shelfLife: "3-4 days when refrigerated",
      bestFor: "People with sensitive digestion"
    },
    {
      id: 8,
      name: "Lite Dahi",
      category: "curd",
      tagline: "Easy to Digest",
      image: "https://i.ibb.co/kVfQ4CF5/IMG-1663.jpg",
      price: "₹65/Ltr",
      description: "Premium A2 milk from specially selected cows. Easier to digest and naturally pure.",
      features: ["A2 Protein", "Easy Digest", "Premium Cows", "Natural"],
      nutritionalInfo: {
        protein: "3.8g per 100ml",
        a2_protein: "100%",
        calcium: "135mg per 100ml",
        omega_3: "Natural"
      },
      benefits: ["Better Digestion", "Pure Nutrition", "Gentle on Stomach", "Premium Quality"],
      shelfLife: "3-4 days when refrigerated",
      bestFor: "People with sensitive digestion"
    },
     {
      id: 9,
      name: "Diet Mast Matka Dahi",
      category: "curd",
      tagline: "Easy to Digest",
      image: "https://i.ibb.co/7tT0StYQ/IMG-1631-min.webp",
      price: "₹65/Ltr",
      description: "Premium A2 milk from specially selected cows. Easier to digest and naturally pure.",
      features: ["A2 Protein", "Easy Digest", "Premium Cows", "Natural"],
      nutritionalInfo: {
        protein: "3.8g per 100ml",
        a2_protein: "100%",
        calcium: "135mg per 100ml",
        omega_3: "Natural"
      },
      benefits: ["Better Digestion", "Pure Nutrition", "Gentle on Stomach", "Premium Quality"],
      shelfLife: "3-4 days when refrigerated",
      bestFor: "People with sensitive digestion"
    },
     {
      id: 10,
      name: "Shvetdhara Rabri",
      category: "other",
      tagline: "Easy to Digest",
      image: "https://i.ibb.co/84sq2Pv6/IMG-1642-min.webp",
      price: "₹65/Ltr",
      description: "Premium A2 milk from specially selected cows. Easier to digest and naturally pure.",
      features: ["A2 Protein", "Easy Digest", "Premium Cows", "Natural"],
      nutritionalInfo: {
        protein: "3.8g per 100ml",
        a2_protein: "100%",
        calcium: "135mg per 100ml",
        omega_3: "Natural"
      },
      benefits: ["Better Digestion", "Pure Nutrition", "Gentle on Stomach", "Premium Quality"],
      shelfLife: "3-4 days when refrigerated",
      bestFor: "People with sensitive digestion"
    },
     {
      id: 11,
      name: "Masala Chhaach",
      category: "chhaach",
      tagline: "Easy to Digest",
      image: "https://i.ibb.co/jP3NqM8M/IMG-1645-min.webp",
      price: "₹65/Ltr",
      description: "Premium A2 milk from specially selected cows. Easier to digest and naturally pure.",
      features: ["A2 Protein", "Easy Digest", "Premium Cows", "Natural"],
      nutritionalInfo: {
        protein: "3.8g per 100ml",
        a2_protein: "100%",
        calcium: "135mg per 100ml",
        omega_3: "Natural"
      },
      benefits: ["Better Digestion", "Pure Nutrition", "Gentle on Stomach", "Premium Quality"],
      shelfLife: "3-4 days when refrigerated",
      bestFor: "People with sensitive digestion"
    },
     {
      id: 12,
      name: "Slim Lite Milk",
      category: "milk",
      tagline: "Easy to Digest",
      image: "https://i.ibb.co/NgKjq6hL/IMG-1669-min.webp",
      price: "₹65/Ltr",
      description: "Premium A2 milk from specially selected cows. Easier to digest and naturally pure.",
      features: ["A2 Protein", "Easy Digest", "Premium Cows", "Natural"],
      nutritionalInfo: {
        protein: "3.8g per 100ml",
        a2_protein: "100%",
        calcium: "135mg per 100ml",
        omega_3: "Natural"
      },
      benefits: ["Better Digestion", "Pure Nutrition", "Gentle on Stomach", "Premium Quality"],
      shelfLife: "3-4 days when refrigerated",
      bestFor: "People with sensitive digestion"
    },
     {
      id: 13,
      name: "Pasteurised Full Cream Milk",
      category: "milk",
      tagline: "Easy to Digest",
      image: "https://i.ibb.co/jZhW7RZV/IMG-1648-min.webp",
      price: "₹65/Ltr",
      description: "Premium A2 milk from specially selected cows. Easier to digest and naturally pure.",
      features: ["A2 Protein", "Easy Digest", "Premium Cows", "Natural"],
      nutritionalInfo: {
        protein: "3.8g per 100ml",
        a2_protein: "100%",
        calcium: "135mg per 100ml",
        omega_3: "Natural"
      },
      benefits: ["Better Digestion", "Pure Nutrition", "Gentle on Stomach", "Premium Quality"],
      shelfLife: "3-4 days when refrigerated",
      bestFor: "People with sensitive digestion"
    },
    {
      id: 14,
      name: "Diet Mast Matka Dahi",
      category: "curd",
      tagline: "Easy to Digest",
      image: "https://i.ibb.co/9ksQ2JP5/IMG-1638-min.webp",
      price: "₹65/Ltr",
      description: "Premium A2 milk from specially selected cows. Easier to digest and naturally pure.",
      features: ["A2 Protein", "Easy Digest", "Premium Cows", "Natural"],
      nutritionalInfo: {
        protein: "3.8g per 100ml",
        a2_protein: "100%",
        calcium: "135mg per 100ml",
        omega_3: "Natural"
      },
      benefits: ["Better Digestion", "Pure Nutrition", "Gentle on Stomach", "Premium Quality"],
      shelfLife: "3-4 days when refrigerated",
      bestFor: "People with sensitive digestion"
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
        <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:bg-white"
            >
              <X size={18} />
            </button>
            <div className="absolute bottom-4 left-6">
              <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
              <p className="text-sky-200">{product.tagline}</p>
              <p className="text-white font-bold text-lg mt-1">{product.price}</p>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Package className="text-sky-600" size={18} />
                  Features
                </h4>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-sky-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                  <Shield className="text-sky-600" size={18} />
                  Benefits
                </h4>
                <div className="space-y-2">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Star className="text-sky-600" size={18} />
                  Nutrition (per 100ml/g)
                </h4>
                <div className="space-y-2 mb-6">
                  {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                      <span className="text-gray-600 capitalize">{key.replace('_', ' ')}</span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="text-sky-600" size={16} />
                    <span className="text-sm text-gray-700">{product.shelfLife}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-sky-600" size={16} />
                    <span className="text-sm text-gray-700">{product.bestFor}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-sky-700">
                Call to Order
              </button>
              <button className="flex-1 border-2 border-sky-600 text-sky-600 py-3 px-6 rounded-lg font-semibold hover:bg-sky-50">
                Get Info
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Simple Header */}
      <section className="bg-sky-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Dairy Products
          </h1>
          <p className="text-xl text-sky-100 max-w-2xl mx-auto">
            Fresh, pure, and nutritious dairy products made with love for your family
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg"
              >
                <Filter size={16} />
                Categories
              </button>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid3X3 size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Categories */}
          {showFilters && (
            <div className="sm:hidden mt-4 grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowFilters(false);
                  }}
                  className={`p-3 rounded-lg text-left ${
                    selectedCategory === category.id
                      ? 'bg-sky-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm opacity-70">{category.count} items</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden sm:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg ${
                      selectedCategory === category.id
                        ? 'bg-sky-600 text-white'
                        : 'hover:bg-sky-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? 'bg-white/20'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products */}
          <main className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
                {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white rounded-lg shadow-sm border hover:shadow-md cursor-pointer overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                        <span className="text-sky-600 font-bold">{product.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{product.tagline}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full bg-sky-600 text-white py-2 rounded-lg font-medium hover:bg-sky-700">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white rounded-lg shadow-sm border hover:shadow-md cursor-pointer p-4"
                  >
                    <div className="flex gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                          <span className="text-sky-600 font-bold">{product.price}</span>
                        </div>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <div className="flex gap-2">
                          {product.features.slice(0, 3).map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="text-gray-400 mt-2" size={20} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🥛</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or category filter</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700"
                >
                  Show All Products
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Simple CTA
      <section className="bg-sky-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want Fresh Dairy Products?</h2>
          <p className="text-sky-100 text-lg mb-8">
            Contact us for daily delivery of fresh milk and dairy products to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 flex items-center justify-center gap-2">
              <Phone size={18} />
              Call Us: +91 98765 43210
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10">
              Order Online
            </button>
          </div>
        </div>
      </section> */}

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default ShvetdharaProductsPage;