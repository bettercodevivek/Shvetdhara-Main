import React, { useState, useRef, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Users, 
  Truck, 
  Heart,
  ChevronRight,
  Star,
  Leaf,
  Sun,
  Award,
  Shield
} from "lucide-react";

const ShvetdharaContactPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
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

  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: "Call Us",
      details: "+91 98765 43210",
      subDetails: "Mon-Sat: 6:00 AM - 8:00 PM",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: <Mail size={28} />,
      title: "Email Us",
      details: "hello@shvetdhara.com",
      subDetails: "We reply within 2-4 hours",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: <MapPin size={28} />,
      title: "Visit Our Farm",
      details: "123 Dairy Farm Road",
      subDetails: "Meerut, Uttar Pradesh 250001",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200"
    },
    {
      icon: <Clock size={28} />,
      title: "Delivery Hours",
      details: "6:00 AM - 8:00 PM",
      subDetails: "Fresh delivery 7 days a week",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200"
    }
  ];

  const farmValues = [
    {
      icon: <Leaf size={32} />,
      title: "100% Natural",
      description: "No artificial additives, just pure milk from happy cows",
      iconColor: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Sun size={32} />,
      title: "Farm Fresh Daily",
      description: "Collected every morning and delivered the same day",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: <Heart size={32} />,
      title: "Family Care",
      description: "A family business caring for families like yours",
      iconColor: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: <Shield size={32} />,
      title: "Quality Promise",
      description: "Rigorous testing ensures the highest quality standards",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Meerut",
      rating: 5,
      text: "The milk quality is outstanding! My children love the fresh taste and I trust Shvetdhara completely.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Rajesh Kumar",
      location: "Ghaziabad",
      rating: 5,
      text: "Fresh delivery every morning right to my doorstep. The curd is absolutely delicious and creamy.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Sunita Devi",
      location: "Muzaffarnagar",
      rating: 5,
      text: "Their A2 milk has been wonderful for our family's health. Pure, natural, and fresh every day.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative bg-green-50 py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
        {/* Subtle farm pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-green-700 text-sm font-medium shadow-sm border border-green-200">
              <Leaf size={16} />
              Farm Fresh • Family Owned
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-800">
            Connect with
            <span className="block text-green-600">Shvetdhara</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions about our farm-fresh dairy products? Want to know about delivery in your area? 
            We're here to help and would love to hear from you.
          </p>

          <div className="flex flex-wrap gap-8 justify-center text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <MessageCircle size={18} className="text-green-600" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users size={18} className="text-green-600" />
              <span>Personal Service</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Heart size={18} className="text-green-600" />
              <span>Family Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section 
        ref={(el) => pushRef(el, 'contact-info')}
        className="py-16 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Get in <span className="text-green-600">Touch</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Multiple ways to connect with us. Choose what's most convenient for you.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 transform ${
            visibleSections.has('contact-info') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {contactInfo.map((info, idx) => (
              <div 
                key={idx} 
                className={`${info.bgColor} rounded-2xl p-6 text-center border-2 ${info.borderColor} hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group ${
                  visibleSections.has('contact-info') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${info.iconColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{info.details}</p>
                <p className="text-sm text-gray-500">{info.subDetails}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Farm Image & Info */}
            <div 
              ref={(el) => pushRef(el, 'farm-info')}
              className={`transition-all duration-1000 transform ${
                visibleSections.has('farm-info') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 bg-green-100">
                  <img
                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Shvetdhara Dairy Farm"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Visit Our <span className="text-green-600">Farm</span>
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Come and see where the magic happens! Experience our farm-to-table process, meet our happy cows, 
                    and witness our commitment to quality and sustainability firsthand.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">123 Dairy Farm Road</p>
                        <p className="text-gray-600">Meerut, Uttar Pradesh 250001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-800">Visit Hours: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Monday to Saturday</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300">
                    Get Directions
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div 
              ref={(el) => pushRef(el, 'farm-values')}
              className={`transition-all duration-1000 transform ${
                visibleSections.has('farm-values') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
                Why Choose <span className="text-green-600">Shvetdhara?</span>
              </h3>
              
              <div className="space-y-6">
                {farmValues.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-6 ${item.bgColor} rounded-2xl border-2 border-opacity-20 hover:shadow-md transition-all duration-300 ${
                      visibleSections.has('farm-values') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 ${item.iconColor} rounded-xl flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section 
        ref={(el) => pushRef(el, 'testimonials')}
        className="py-16 sm:py-24 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              What Our <span className="text-green-600">Families</span> Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real stories from real families who trust Shvetdhara for their daily dairy needs
            </p>
          </div>
          
          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 transform ${
            visibleSections.has('testimonials') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                  visibleSections.has('testimonials') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section 
        ref={(el) => pushRef(el, 'delivery-areas')}
        className="bg-green-50 py-16 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${
            visibleSections.has('delivery-areas') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              We Deliver <span className="text-green-600">Fresh</span> to Your Door
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Currently serving families across these areas with fresh daily delivery
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Meerut', 'Ghaziabad', 'Muzaffarnagar', 'Hapur', 'Bulandshahr', 'Baghpat', 'Shamli', 'Saharanpur'].map((area, idx) => (
                <div 
                  key={idx}
                  className="bg-white px-4 py-3 rounded-xl shadow-sm border border-green-200 font-medium text-gray-700 hover:shadow-md transition-shadow duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {area}
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-gray-600">
              Don't see your area? <span className="text-green-600 font-medium">Contact us</span> - we're always expanding!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Ready to Experience <span className="text-green-600">Farm Fresh</span> Dairy?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of families who trust Shvetdhara for their daily dairy needs. 
            Pure, fresh, and delivered with care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <Phone size={20} />
              Call Us Now
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 rounded-xl font-semibold text-lg border-2 border-green-600 hover:bg-green-50 transition-all duration-300">
              <MapPin size={20} />
              Visit Our Farm
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShvetdharaContactPage;