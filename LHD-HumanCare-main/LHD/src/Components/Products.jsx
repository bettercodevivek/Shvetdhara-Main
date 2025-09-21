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
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-green-500 to-emerald-400",
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
      image: "https://images.unsplash.com/photo-1571212515416-38281f6c2851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-blue-500 to-cyan-400",
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
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-amber-500 to-orange-400",
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
      image: "https://images.unsplash.com/photo-1553787518-6ba3bf20eea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-pink-500 to-rose-400",
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
      name: "Greek Yogurt Premium",
      category: "premium",
      tagline: "Luxury Texture, Premium Nutrition",
      image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      gradient: "from-purple-500 to-indigo-400",
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
      gradient: "from-emerald-500 to-teal-400",
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
    }
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
            <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-60 rounded-t-3xl`}></div>
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
                    <Leaf className="text-green-500" size={20} />
                    Product Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <Heart className="text-red-500" size={20} />
                    Health Benefits
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {product.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
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
                    <Clock className="text-purple-500" size={20} />
                    <span className="font-medium">Best Time:</span>
                    <span className="text-gray-700">{product.bestTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="text-orange-500" size={20} />
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
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 sm:py-32 px-4 sm:px-8 overflow-hidden">
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
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium border border-white/20">
              Premium Dairy Collection
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Shvetdhara</span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Products</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our range of premium dairy products, crafted with love and delivered with the promise of purity and freshness
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-blue-200">
              <Leaf size={20} />
              <span>100% Natural</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
              <Award size={20} />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200">
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
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
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
              className={`group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer ${
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                  {categories.find(cat => cat.id === product.category)?.name}
                </div>
                
                {/* Premium Badge */}
                {product.category === 'premium' && (
                  <div className="absolute top-4 right-4 p-2 bg-yellow-500/90 rounded-full">
                    <Award size={16} className="text-white" />
                  </div>
                )}
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
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${product.gradient} rounded-full`}></div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Button */}
                <button className={`w-full py-3 bg-gradient-to-r ${product.gradient} text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Quality</span> Promise
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
                gradient: "from-green-500 to-emerald-400"
              },
              {
                icon: <Leaf size={40} />,
                title: "100% Natural",
                description: "No artificial preservatives or additives",
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                icon: <Users size={40} />,
                title: "Trusted by Families",
                description: "Serving thousands of happy families daily",
                gradient: "from-purple-500 to-pink-400"
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
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-16 px-4 sm:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Experience the <span className="text-yellow-300">Shvetdhara</span> Difference
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of families who choose Shvetdhara for their daily dairy needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default ShvetdharaProductsPage;