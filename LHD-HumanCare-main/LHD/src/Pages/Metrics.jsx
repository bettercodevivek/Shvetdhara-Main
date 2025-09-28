import React from "react";
import { 
  Droplets, 
  Package2, 
  Coffee, 
  Wheat, 
  Milk, 
  Leaf, 
  ShoppingCart,
  ArrowRight 
} from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      icon: <Droplets size={32} />,
      name: "Premium Milk",
      desc: "Farm-sourced, quality-assured milk products meeting the highest industry standards for nutrition and purity.",
    },
    {
      icon: <Package2 size={32} />,
      name: "Paneer Products",
      desc: "Artisanally crafted paneer products designed for culinary excellence in commercial and domestic applications.",
    },
    {
      icon: <Coffee size={32} />,
      name: "Cultured Dairy",
      desc: "Probiotic-enriched yogurt and curd products supporting health-conscious consumer preferences and dietary requirements.",
    },
    {
      icon: <Wheat size={32} />,
      name: "Butter & Ghee",
      desc: "Traditional clarified butter and premium butter products manufactured using time-tested processes and quality ingredients.",
    },
    {
      icon: <Milk size={32} />,
      name: "Flavored Varieties",
      desc: "Innovative flavored milk solutions catering to diverse consumer tastes while maintaining nutritional integrity.",
    },
    {
      icon: <Leaf size={32} />,
      name: "Organic Collection",
      desc: "Certified organic dairy products supporting sustainable agriculture and meeting premium market segment demands.",
    },
  ];

  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-white text-sky-800 border-sky-300 border text-sm font-medium rounded-full mb-6">
            Product Portfolio
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of premium dairy products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-sky-300 p-8 hover:border-sky-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sky-100 text-sky-600 rounded-lg group-hover:bg-sky-50 transition-colors">
                  {product.icon}
                </div>
                <h3 className="text-lg font-normal text-gray-900 ml-4">
                  {product.name}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.desc}
              </p>
              <button className="flex items-center text-sky-600 font-medium hover:text-sky-700 transition-colors group">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductShowcase;