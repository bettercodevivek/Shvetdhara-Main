import React from "react";
import {
  Droplets,
  Package2,
  Coffee,
  Wheat,
  Milk,
  Leaf,
  ArrowRight,
  CheckCircle
} from "lucide-react";

import {useNavigate} from 'react-router-dom'

const ProductShowcase = () => {

  const navigate = useNavigate();

  const products = [
    {
      icon: <Droplets size={36} />,
      name: "Fresh Milk",
      category: "milk", // Add category ID
      desc: "Pure, farm-fresh milk delivered daily. Rich in calcium, protein, and essential vitamins for your family's health.",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop"
    },
    {
      icon: <Coffee size={36} />,
      name: "Curd & Yogurt",
      category: "curd", // Add category ID
      desc: "Traditional curd and yogurt with live cultures. Good for digestion and perfect for daily meals.",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop"
    },
    {
      icon: <Wheat size={36} />,
      name: "Butter & Ghee",
      category: "ghee", // Add category ID
      desc: "Pure butter and golden ghee made from fresh cream. Traditional taste for authentic cooking.",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=300&fit=crop"
    },
    {
      icon: <Milk size={36} />,
      name: "Flavored Milk",
      category: "flavored", // Add category ID
      desc: "Delicious chocolate and strawberry milk that kids love. Made with real ingredients and fresh milk.",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop"
    },
    {
      icon: <Droplets size={36} />,
      name: "Butter Milk",
      category: "chhaach", // Add category ID
      desc: "Premium organic dairy products from certified farms. Pure, natural, and good for you.",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop"
    },
     {
      icon: <Leaf size={36} />,
      name: "Other Products",
      category: "others", // Add category ID
      desc: "Premium organic dairy products from certified farms. Pure, natural, and good for you.",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop"
    },
  ];

   const handleViewProducts = (categoryId) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <div className="bg-gradient-to-b from-white to-sky-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Premium Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border-2 border-sky-200 text-sky-700 text-sm font-semibold rounded-full mb-6 shadow-sm">
            <Leaf size={16} />
            Our Product Range
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Fresh From Our Farms
            <span className="block text-sky-600 mt-2">To Your Family</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quality dairy products made with care, delivered with trust. 
            Every product crafted to bring health and happiness to your home.
          </p>
        </div>

        {/* Premium Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-sky-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Product Image Header */}
              <div className="relative h-48 bg-gradient-to-br from-sky-100 to-blue-100 overflow-hidden">
                <div className="absolute inset-0 bg-sky-50 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <div className="text-sky-600">
                      {product.icon}
                    </div>
                  </div>
                </div>
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-tr-full"></div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 min-h-[4.5rem]">
                  {product.desc}
                </p>

                {/* Quality Indicators */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <CheckCircle size={14} className="text-sky-600" />
                    <span>Fresh Daily</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <CheckCircle size={14} className="text-sky-600" />
                    <span>Quality Tested</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <CheckCircle size={14} className="text-sky-600" />
                    <span>Pure & Natural</span>
                  </div>
                </div>

                {/* Call to Action */}
                <button 
                  onClick={() => handleViewProducts(product.category)} // Updated handler
                  className="w-full flex items-center justify-center gap-2 text-sky-600 font-semibold hover:text-sky-700 transition-colors group/btn py-3 px-4 rounded-lg hover:bg-sky-50"
                >
                  View Products
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Bar
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-sky-600">8+</div>
              <div className="text-gray-600 font-medium">Years of Trust</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-sky-600">50K+</div>
              <div className="text-gray-600 font-medium">Happy Families</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-sky-600">100%</div>
              <div className="text-gray-600 font-medium">Pure & Natural</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-sky-600">Daily</div>
              <div className="text-gray-600 font-medium">Fresh Delivery</div>
            </div>
          </div>
        </div> */}

        {/* Premium CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-sky-600 to-blue-700 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
              <Leaf size={16} />
              Farm Fresh Quality
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience the Shvetdhara Difference
            </h3>
            <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of families who trust us for their daily dairy needs. 
              Fresh, pure, and delivered with care.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-sky-600 font-bold rounded-xl hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Subscription
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Call Us: +91 98765 43210
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;