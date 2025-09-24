import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Info, Play, Pause } from "lucide-react";

const HeroCarousel = () => {
  const products = [
    {
      id: 1,
      name: "Pure Cow Milk",
      tagline: "Nature's Freshness in Every Drop",
      video: "https://res.cloudinary.com/dhqffqq46/video/upload/v1758461155/tmp0yudspjd_d3hoyj.mp4",
      details: "Sourced directly from grass-fed cows, unadulterated and fresh daily.",
      features: ["100% Pure", "Grass-Fed Cows", "Daily Fresh", "No Additives"],
      color: "from-sky-500 to-sky-600"
    },
    {
      id: 2,
      name: "Farm-Fresh Curd",
      tagline: "Smooth & Probiotic Powerhouse",
      video: "https://res.cloudinary.com/dhqffqq46/video/upload/v1758463846/tmp2b7gdlgg_fh31qj.mp4",
      details: "Traditional fermentation process, creamy texture, packed with probiotics.",
      features: ["Probiotic Rich", "Traditional Process", "Creamy Texture", "Digestive Health"],
      color: "from-sky-500 to-sky-600"
    },
    {
      id: 3,
      name: "Flavored Milk",
      tagline: "Refreshing Taste, Energizing Sip",
      video: "https://res.cloudinary.com/dhqffqq46/video/upload/f_auto,q_auto/tmpqralb80y_vdltzu.mp4",
      details: "Available in chocolate, strawberry, and vanilla – perfect anytime refreshment.",
      features: ["3 Flavors", "Energy Boost", "Perfect Refreshment", "All Natural"],
      color: "from-sky-500 to-sky-600"
    },
    {
      id: 4,
      name: "Flavored Milk",
      tagline: "Refreshing Taste, Energizing Sip",
      video: "https://res.cloudinary.com/dhqffqq46/video/upload/v1758209645/tmpm10lfujw_jnfipj.mp4",
      details: "Available in chocolate, strawberry, and vanilla – perfect anytime refreshment.",
      features: ["3 Flavors", "Energy Boost", "Perfect Refreshment", "All Natural"],
      color: "from-sky-500 to-sky-600"
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
    }, 10000);
    
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
    <section className="relative w-full 105vh overflow-hidden bg-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen lg:min-h-0">
            
            {/* Content Side */}
            <div className="w-full space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Product Name */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
                  <span className={`bg-gradient-to-r ${currentProduct.color} bg-clip-text text-transparent`}>
                    {currentProduct.name}
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-light max-w-lg mx-auto lg:mx-0">
                  {currentProduct.tagline}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
                {currentProduct.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-black border border-sky-800"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-lg mx-auto lg:mx-0">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className={`flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg border-black transition-all duration-300 transform hover:scale-105 ${
                    showDetails 
                      ? 'bg-inherit text-black border-black' 
                      : `bg-gradient-to-r ${currentProduct.color} text-white shadow-lg border-black hover:shadow-xl`
                  }`}
                >
                  <Info size={16} className="sm:w-5 sm:h-5" />
                  {showDetails ? "Hide Details" : "Learn More"}
                </button>

                <button
                  onClick={togglePlayback}
                  className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-black rounded-xl font-semibold text-sm sm:text-lg border border-sky-700 hover:bg-sky-200 transition-all duration-300"
                >
                  {isPlaying ? <Pause size={16} className="sm:w-5 sm:h-5" /> : <Play size={16} className="sm:w-5 sm:h-5" />}
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>

              {/* Details Panel */}
              <div className={`overflow-hidden transition-all duration-500 ease-out max-w-lg mx-auto lg:mx-0 ${
                showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-4 sm:p-6 bg-sky-300 backdrop-blur-md rounded-2xl border border-sky-800">
                  <p className="text-black text-sm sm:text-base lg:text-lg leading-relaxed">
                    {currentProduct.details}
                  </p>
                </div>
              </div>
            </div>

            {/* Video Side */}
            <div className="w-full flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-4 sm:mx-0">
                {/* Video Container */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] w-full">
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
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
                    
                    {/* Video Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Loading State */}
                    {!loadedVideos.has(currentIndex) && (
                      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>

                  {/* Decorative Glow */}
                  <div className={`absolute -inset-4 sm:-inset-6 bg-gradient-to-r ${currentProduct.color} rounded-2xl sm:rounded-3xl opacity-20 blur-xl -z-10`}></div>
                  
                  {/* Additional decorative elements for larger screens */}
                  <div className={`hidden lg:block absolute -inset-8 bg-gradient-to-r ${currentProduct.color} rounded-3xl opacity-10 blur-2xl -z-20`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center z-30">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm text-black hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-lg"
          aria-label="Previous product"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center z-30">
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm text-black hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-lg"
          aria-label="Next product"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Dots Navigation */}
      {/* <div className="absolute bottom-0 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && (
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentProduct.color} animate-pulse`}></div>
              )}
            </button>
          ))}
        </div>
      </div> */}

      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-white/10 z-20">
          <div 
            className={`h-full bg-gradient-to-r ${currentProduct.color} transition-all duration-100 ease-linear`}
            style={{
              width: `${((Date.now() % 10000) / 10000) * 100}%`,
              animation: 'progressBar 10s linear infinite'
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