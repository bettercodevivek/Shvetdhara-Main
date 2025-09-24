import React from "react";
import { Quote, Star, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Nutritionist, Wellness Center",
      company: "Delhi Nutrition Institute",
      text: "Shvetdhara's commitment to quality and nutritional excellence makes it our preferred partner for institutional dairy requirements. Their products consistently meet our stringent health standards.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
    },
    {
      name: "Rohan Patel",
      role: "Operations Manager",
      company: "FitLife Gyms Chain",
      text: "The reliability and superior quality of Shvetdhara products have made them integral to our nutrition programs. Their professional service delivery exceeds industry benchmarks.",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
      rating: 5,
    },
    {
      name: "Chef Ananya Verma",
      role: "Executive Chef & Culinary Director",
      company: "Premium Hospitality Group",
      text: "Shvetdhara's premium dairy products elevate our culinary offerings. The consistency in quality and flavor profile is exceptional for our high-end restaurant operations.",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      role: "Procurement Director",
      company: "Corporate Catering Solutions",
      text: "Their efficient supply chain management and consistent product quality have streamlined our operations significantly. Shvetdhara demonstrates true business partnership values.",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
      rating: 5,
    },
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "500+", label: "Business Partners" },
    { number: "15+", label: "Industry Awards" },
    { number: "8", label: "Years of Excellence" },
  ];

  return (
    <div className="bg-green-50 pt-0 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-6">
            Client Testimonials
          </div>
        </div>


        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-green-100 p-8 hover:border-green-300 hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-green-600 p-3 rounded-full shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6 pt-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-green-200"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {review.name}
                  </h3>
                  <p className="text-green-600 font-medium text-sm mb-1">
                    {review.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {review.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;