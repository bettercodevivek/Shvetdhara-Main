import React from "react";
import { 
  Leaf, 
  Shield, 
  Users, 
  Truck, 
  Award, 
  Heart,
  CheckCircle 
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Leaf size={32} />,
      title: "Farm Fresh & Natural",
      desc: "Direct farm-to-table supply chain ensuring optimal freshness, nutritional integrity, and traceability across all product lines.",
    },
    {
      icon: <Shield size={32} />,
      title: "Quality Assurance",
      desc: "Comprehensive quality control protocols with rigorous testing procedures meeting international safety and purity standards.",
    },
    {
      icon: <Users size={32} />,
      title: "Trusted Partnership",
      desc: "Established market presence since 2016, building long-term relationships with customers through consistent quality delivery.",
    },
    {
      icon: <Truck size={32} />,
      title: "Supply Chain Excellence",
      desc: "Advanced cold-chain logistics infrastructure ensuring product integrity from processing facility to end consumer.",
    },
    {
      icon: <Award size={32} />,
      title: "Industry Recognition",
      desc: "Certified quality management systems with adherence to international standards and commitment to operational excellence.",
    },
    {
      icon: <Heart size={32} />,
      title: "Sustainable Operations",
      desc: "Environmentally responsible practices supporting ethical farming, animal welfare, and community development initiatives.",
    },
  ];

  return (
    <div className="bg-green-50 pt-16 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-6">
            Why Partner With Us
          </div>
          <h1 className="text-2xl lg:text-5xl font-normal text-gray-900 mb-2 leading-tight">
            Why Choose <span className="text-green-600 font-semibold">Shvetdhara</span>
          </h1>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Distinguished by our commitment to excellence, innovation, and sustainable practices, 
            we deliver superior dairy solutions that exceed industry standards and customer expectations.
          </p> */}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-green-100 p-8 hover:border-green-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-3 bg-green-50 text-green-600 rounded-lg inline-block mb-6 group-hover:bg-green-100 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl border border-green-100 p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">20+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">100K+</div>
              <div className="text-gray-600 font-medium">Satisfied Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-gray-600 font-medium">Quality Assurance</div>
            </div>
          </div>
        </div>

        {/* Quality Commitment Section */}
       
      </div>
    </div>
  );
};

export default WhyChooseUs;