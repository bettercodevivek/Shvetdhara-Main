import React, { useRef, useEffect } from "react";
import { FaLeaf, FaHandsHelping, FaAward } from "react-icons/fa";

const AboutUsFarmToGlass = () => {
  const sectionRefs = useRef([]);

  // IntersectionObserver for fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const pushRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  const founders = [
    {
      name: "",
      role: "Founder",
      quote:
        "Our vision was to deliver fresh, pure milk to every household while supporting local farmers.",
      img: "https://i.ibb.co/NgknQqhP/walk-a2-Kb-Rr-G8-C-w-unsplash.jpg",
    },
    {
      name: "",
      role: "CEO",
      quote:
        "We are committed to sustainable farming and bringing quality dairy products directly to our customers.",
      img: "https://i.ibb.co/NgknQqhP/walk-a2-Kb-Rr-G8-C-w-unsplash.jpg",
    },
  ];

  const milestones = [
    { year: "2008", event: "Founded the dairy brand" },
    { year: "2012", event: "First milk delivery to local markets" },
    { year: "2015", event: "Expanded to nearby villages" },
    { year: "2020", event: "Launched dairy product range" },
  ];

  const values = [
    {
      icon: <FaLeaf size={30} />,
      title: "Purity",
      desc: "Providing pure, unadulterated milk and dairy products.",
    },
    {
      icon: <FaHandsHelping size={30} />,
      title: "Sustainability",
      desc: "Supporting local farmers and eco-friendly practices.",
    },
    {
      icon: <FaAward size={30} />,
      title: "Quality",
      desc: "Rigorous quality control for the best dairy experience.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-black flex items-center justify-center">
        <video
          src="https://res.cloudinary.com/dhqffqq46/video/upload/v1758212561/Untitled_video_-_Made_with_Clipchamp_1_dcnt39.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            From Our Farms to Your Glass
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-md">
            Fresh, wholesome, and pure dairy products you can trust
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        ref={pushRef}
        className="max-w-6xl mx-auto my-16 px-4 md:px-0 flex flex-col md:flex-row items-center gap-12 opacity-0"
      >
        <img
          src="https://i.ibb.co/NgknQqhP/walk-a2-Kb-Rr-G8-C-w-unsplash.jpg"
          alt="Farm Fresh Dairy"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg">
            Since 2008, our dairy brand has worked closely with local Indian
            farmers to bring the freshest, purest milk and dairy products
            directly to your home. From humane farming practices to rigorous
            quality checks, every drop of milk and spoon of curd reflects our
            commitment to purity and sustainability.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section
        ref={pushRef}
        className="bg-green-50 py-16 px-4 opacity-0"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
            Founder's Message
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((f, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden"
              >
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                />
                <div className="p-6 flex flex-col justify-center md:w-1/2">
                  <h3 className="text-2xl font-semibold text-green-700 mb-1">
                    {f.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{f.role}</p>
                  <p className="text-gray-700">{f.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones / Timeline Section */}
      <section
        ref={pushRef}
        className="max-w-6xl mx-auto py-16 px-4 opacity-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
          Our Milestones
        </h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-green-200"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                  {m.year}
                </div>
                <p className="text-gray-700 max-w-xs">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={pushRef}
        className="bg-green-50 py-16 px-4 opacity-0"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition"
              >
                <div className="text-green-700 mb-4">{v.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-700">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsFarmToGlass;
