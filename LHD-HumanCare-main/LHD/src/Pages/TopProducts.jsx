import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Info, Play, Pause } from "lucide-react";

const HeroCarousel = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Cow Milk",
      tagline: "Pure and Natural Daily Nutrition",
      video: "https://res.cloudinary.com/dhqffqq46/video/upload/v1758461155/tmp0yudspjd_d3hoyj.mp4",
      details: "Fresh milk delivered daily from local farms. Rich in protein, calcium, and vitamins your family needs.",
      features: ["100% Pure", "Local Farms", "Daily Fresh", "No Preservatives"],
      price: "₹45/Ltr"
    },
    {
      id: 2,
      name: "Fresh Curd",
      tagline: "Creamy, Healthy & Delicious",
      video: "https://res.cloudinary.com/dhqffqq46/video/upload/v1758463846/tmp2b7gdlgg_fh31qj.mp4",
      details: "Smooth, creamy curd made from our fresh milk. Perfect for meals and great for digestion.",
      features: ["Probiotic Rich", "Smooth Texture", "Digestive Health", "Traditional Process"],
      price: "₹55/kg"
    },
    {
      id: 3,
      name: "Flavored Milk",
      tagline: "Kids' Favorite Healthy Treat",
      video: "https://res.cloudinary.com/dhqffqq46/video/upload/f_auto,q_auto/tmpqralb80y_vdltzu.mp4",
      details: "Delicious chocolate and strawberry milk that kids love. Made with real ingredients and fresh milk.",
      features: ["Real Flavors", "Kid Friendly", "Nutritious", "Energy Boost"],
      price: "₹35/500ml"
    },
    {
      id: 4,
      name: "Premium A2 Milk",
      tagline: "Easy to Digest, Pure Goodness",
      video: "https://res.cloudinary.com/dhqffqq46/video/upload/v1758209645/tmpm10lfujw_jnfipj.mp4",
      details: "Premium A2 milk from specially selected cows. Easier on the stomach and naturally pure.",
      features: ["A2 Protein", "Easy Digest", "Premium Quality", "Natural"],
      price: "₹65/Ltr"
    },
    {
      id: 5,
      name: "Premium Chhaach",
      tagline: "Easy to Digest, Pure Goodness",
      video: "https://res.cloudinary.com/dhqffqq46/video/upload/v1759090311/tmp1hz9egp0_e1lrh3.mp4",
      details: "Premium Chhaach from specially selected cows. Easier on the stomach and naturally pure.",
      features: ["Protein Rich", "Easy Digest", "Premium Quality", "Natural"],
      price: "₹60/Ltr"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(new Set());

  const currentProduct = products[currentIndex];

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
      setShowDetails(false);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [isPlaying, products.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setShowDetails(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setShowDetails(false);
  }, [products.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setShowDetails(false);
  }, [products.length]);

  const handleVideoLoad = useCallback((index) => {
    setLoadedVideos(prev => new Set([...prev, index]));
  }, []);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-sky-50">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #0ea5e9 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #0ea5e9 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
           
            {/* Video Side */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Video Container */}
                <div className="relative aspect-[4/5] w-full">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                    <video
                      key={currentProduct.id}
                      src={currentProduct.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      onLoadedData={() => handleVideoLoad(currentIndex)}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Simple overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Loading State */}
                    {!loadedVideos.has(currentIndex) && (
                      <div className="absolute inset-0 bg-sky-100 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>

                  {/* Simple accent */}
                  <div className="absolute -inset-4 bg-sky-200 rounded-2xl opacity-30 blur-xl -z-10"></div>
                </div>
              </div>
            </div>
             {/* Content Side */}
            <div className="space-y-6 text-center lg:text-left">
              {/* Product Name */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  <span className="text-sky-600">
                    {currentProduct.name}
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                  {currentProduct.tagline}
                </p>

                <div className="text-2xl sm:text-3xl font-bold text-sky-600">
                  {currentProduct.price}
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
                {currentProduct.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-sky-200 shadow-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className={`flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    showDetails 
                      ? 'bg-gray-100 text-gray-700 border-2 border-gray-300' 
                      : 'bg-sky-600 text-white hover:bg-sky-700 shadow-lg'
                  }`}
                >
                  <Info size={18} />
                  {showDetails ? "Hide Details" : "Learn More"}
                </button>

                <button
                  onClick={togglePlayback}
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>

              {/* Details Panel */}
              <div className={`overflow-hidden transition-all duration-500 ease-out max-w-lg mx-auto lg:mx-0 ${
                showDetails ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 bg-white rounded-lg border border-sky-200 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">
                    {currentProduct.details}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 flex items-center z-30">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-all duration-300 shadow-lg border border-gray-200"
          aria-label="Previous product"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center z-30">
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white text-gray-600 hover:text-sky-600 hover:bg-sky-50 transition-all duration-300 shadow-lg border border-gray-200"
          aria-label="Next product"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-3 px-6 py-3 bg-white/90 rounded-full border border-sky-200 shadow-lg">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-sky-600 scale-125' 
                  : 'bg-gray-300 hover:bg-sky-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div> */}

      {/* Simple Progress Bar */}
      {isPlaying && (
        <div className="absolute top-0 left-0 w-full h-1 bg-sky-200 z-20">
          <div 
            className="h-full bg-sky-600 transition-all duration-100 ease-linear"
            style={{
              animation: 'progressBar 8s linear infinite'
            }}
          ></div>
        </div>
      )}

      <style jsx>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;