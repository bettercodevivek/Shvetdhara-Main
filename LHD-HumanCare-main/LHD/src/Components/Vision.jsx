import React, { useRef, useEffect, useState } from "react";
import { Leaf, Users, Award, Calendar, Quote, ArrowRight, Heart, Shield } from "lucide-react";

const AboutUsFarmToGlass = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  // Enhanced IntersectionObserver for staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
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

  const founders = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Visionary",
      quote: "Our vision was to deliver fresh, pure milk to every household while supporting local farmers and preserving traditional dairy practices.",
      img: "https://i.ibb.co/NgknQqhP/walk-a2-Kb-Rr-G8-C-w-unsplash.jpg",
      gradient: "from-green-600 to-emerald-500"
    },
    {
      name: "Priya Sharma", 
      role: "CEO & Operations",
      quote: "We are committed to sustainable farming and bringing quality dairy products directly to our customers with complete transparency.",
      img: "https://i.ibb.co/NgknQqhP/walk-a2-Kb-Rr-G8-C-w-unsplash.jpg",
      gradient: "from-blue-600 to-cyan-500"
    },
  ];

  const milestones = [
    { year: "2008", event: "Founded with a vision to revolutionize dairy farming", icon: "🌱" },
    { year: "2012", event: "First milk delivery to 100+ local families", icon: "🚚" },
    { year: "2015", event: "Expanded to serve 500+ households across villages", icon: "🏘️" },
    { year: "2020", event: "Launched premium dairy product range", icon: "🏆" },
  ];

  const values = [
    {
      icon: <Leaf size={32} />,
      title: "Purity & Freshness",
      desc: "Every drop of milk is tested for purity and freshness, ensuring you get nature's best in every glass.",
      gradient: "from-green-500 to-emerald-400",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <Users size={32} />,
      title: "Community First",
      desc: "Supporting local farmers with fair prices and sustainable practices that benefit entire communities.",
      gradient: "from-blue-500 to-cyan-400", 
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Award size={32} />,
      title: "Premium Quality",
      desc: "Rigorous quality control and traditional methods ensure the highest standards in every product.",
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-50 to-pink-50"
    },
  ];

  const stats = [
    { number: "1000+", label: "Happy Families", icon: <Heart size={24} /> },
    { number: "50+", label: "Partner Farms", icon: <Leaf size={24} /> },
    { number: "15+", label: "Years Experience", icon: <Calendar size={24} /> },
    { number: "100%", label: "Pure & Natural", icon: <Shield size={24} /> },
  ];

  return (
    <div className="font-sans bg-white overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            src="https://res.cloudinary.com/dhqffqq46/video/upload/v1758212561/Untitled_video_-_Made_with_Clipchamp_1_dcnt39.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-screen object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium border border-green-500/30">
              Premium Dairy Since 2008
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            From Our <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Farms</span> to Your <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Glass</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fresh, wholesome, and pure dairy products crafted with love and delivered with care to families across the region
          </p>

          <button className="group flex items-center gap-3 mx-auto px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Discover Our Story
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={(el) => pushRef(el, 'stats')}
        className="relative -mt-20 z-20 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 transform ${
            visibleSections.has('stats') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-green-600 flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={(el) => pushRef(el, 'story')}
        className="max-w-7xl mx-auto my-20 sm:my-32 px-4 sm:px-8"
      >
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 transition-all duration-1000 transform ${
          visibleSections.has('story') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://i.ibb.co/NgknQqhP/walk-a2-Kb-Rr-G8-C-w-unsplash.jpg"
                alt="Farm Fresh Dairy"
                className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-400 rounded-3xl opacity-20 blur-xl"></div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Our Journey
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Our <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Story</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              Since 2008, our dairy brand has worked closely with local Indian farmers to bring the freshest, purest milk and dairy products directly to your home.
            </p>
            
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
              From humane farming practices to rigorous quality checks, every drop of milk and spoon of curd reflects our unwavering commitment to purity, sustainability, and the well-being of our farming communities.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-green-600">
                <Leaf size={20} />
                <span className="font-medium">100% Natural</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Users size={20} />
                <span className="font-medium">Farmer Supported</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <Award size={20} />
                <span className="font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section 
        ref={(el) => pushRef(el, 'founders')}
        className="bg-gradient-to-br from-gray-50 to-white py-20 sm:py-32 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            visibleSections.has('founders') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Founders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate leaders dedicated to revolutionizing the dairy industry with integrity and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className={`group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:scale-105 ${
                  visibleSections.has('founders') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${founder.gradient} opacity-60`}></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-white/90 font-medium">{founder.role}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <Quote size={32} className="text-gray-300 mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed italic">
                    "{founder.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        ref={(el) => pushRef(el, 'timeline')}
        className="max-w-7xl mx-auto py-20 sm:py-32 px-4 sm:px-8"
      >
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          visibleSections.has('timeline') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Key <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Milestones</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center group transition-all duration-700 transform ${
                  visibleSections.has('timeline') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                  <div className="text-4xl absolute -top-2 -right-2">
                    {milestone.icon}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 max-w-xs">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={(el) => pushRef(el, 'values')}
        className="bg-gradient-to-br from-gray-50 to-white py-20 sm:py-32 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            visibleSections.has('values') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Our Foundation
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Core <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do, from farm to your family's table
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-700 hover:scale-105 ${
                  visibleSections.has('values') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.gradient} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {value.desc}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${value.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsFarmToGlass;