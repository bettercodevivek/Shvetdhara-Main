import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline } from 'react-leaflet';
import { MapPin, Truck, Users, Award, Droplets, Building2, PhoneCall, Star, Clock } from "lucide-react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon for headquarters
const hqIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [30, 49],
  iconAnchor: [15, 49],
  popupAnchor: [1, -40],
  shadowSize: [49, 49]
});

// Custom icon for distribution cities
const cityIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const IndianMilkMap = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);

  const distributionCities = [
    {
      id: 1,
      name: "Meerut",
      state: "Uttar Pradesh",
      position: [28.9845, 77.7064],
      stats: {
        families: "50,000+",
        since: "2016",
        delivery: "Morning & Evening",
        specialty: "Home of Shvetdhara - Our main dairy farm and headquarters serving the local community"
      },
      isHeadquarters: true
    },
    {
      id: 2,
      name: "Haridwar",
      state: "Uttarakhand",
      position: [29.9457, 78.1642],
      stats: {
        families: "12,000+",
        since: "2017",
        delivery: "Daily Fresh",
        specialty: "Serving the holy city with pure, quality milk for families and temples"
      }
    },
    {
      id: 3,
      name: "Moradabad",
      state: "Uttar Pradesh",
      position: [28.8389, 78.7378],
      stats: {
        families: "20,000+",
        since: "2017",
        delivery: "Morning & Evening",
        specialty: "Major distribution hub serving the brass city with fresh dairy daily"
      }
    },
    {
      id: 4,
      name: "Rampur",
      state: "Uttar Pradesh",
      position: [28.8103, 79.0250],
      stats: {
        families: "10,000+",
        since: "2018",
        delivery: "Daily Delivery",
        specialty: "Growing presence in this historic city known for its rich culture"
      }
    },
    {
      id: 5,
      name: "Bareilly",
      state: "Uttar Pradesh",
      position: [28.3670, 79.4304],
      stats: {
        families: "15,000+",
        since: "2018",
        delivery: "Twice Daily",
        specialty: "Serving one of UP's major cities with reliable fresh milk supply"
      }
    },
    {
      id: 6,
      name: "Budaun",
      state: "Uttar Pradesh",
      position: [28.0342, 79.1140],
      stats: {
        families: "8,000+",
        since: "2019",
        delivery: "Daily Fresh",
        specialty: "Bringing farm-fresh quality to this ancient historic town"
      }
    },
    {
      id: 7,
      name: "Sambhal",
      state: "Uttar Pradesh",
      position: [28.5850, 78.5703],
      stats: {
        families: "7,000+",
        since: "2019",
        delivery: "Morning Delivery",
        specialty: "Expanding our reach to serve more families in the region"
      }
    },
    {
      id: 8,
      name: "Amroha",
      state: "Uttar Pradesh",
      position: [28.9034, 78.4671],
      stats: {
        families: "9,000+",
        since: "2018",
        delivery: "Daily Fresh",
        specialty: "Trusted by local families for consistent quality and freshness"
      }
    },
    {
      id: 9,
      name: "Bijnor",
      state: "Uttar Pradesh",
      position: [29.3730, 78.1318],
      stats: {
        families: "6,500+",
        since: "2019",
        delivery: "Morning & Evening",
        specialty: "Serving this sugarcane belt town with nutritious dairy products"
      }
    },
    {
      id: 10,
      name: "Bulandshahr",
      state: "Uttar Pradesh",
      position: [28.4074, 77.8484],
      stats: {
        families: "8,500+",
        since: "2019",
        delivery: "Daily Delivery",
        specialty: "Close to home base, ensuring freshest possible delivery times"
      }
    },
    {
      id: 11,
      name: "Hathras",
      state: "Uttar Pradesh",
      position: [27.5950, 78.0506],
      stats: {
        families: "5,000+",
        since: "2020",
        delivery: "Morning Delivery",
        specialty: "Our newest expansion bringing Shvetdhara quality to more families"
      }
    }
  ];

  const centerPosition = [28.7, 78.3];
  const headquarters = distributionCities.find(c => c.isHeadquarters);

  // Create connecting lines from HQ to all cities
  const connectionLines = distributionCities
    .filter(city => !city.isHeadquarters)
    .map(city => [headquarters.position, city.position]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-sky-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm border border-sky-400 text-sky-700 text-sm font-semibold rounded-full mb-8 shadow-lg">
              <Star size={16} className="text-sky-500" />
              Excellence in Dairy Since 2002
            </div>
            <h1 className="text-3xl md:text-5xl font-normal mb-6 tracking-tight">
              Our Distribution Network
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-3xl mb-6 mx-auto font-light leading-relaxed">
              Delivering premium dairy excellence across 11 cities in Northern India
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 mx-4">
          {[
            { icon: <MapPin size={28} />, value: "11+", label: "Cities Served", color: "from-sky-200 to-sky-300", glow: "purple" },
            { icon: <Users size={28} />, value: "100K+", label: "Happy Families", color: "from-sky-200 to-sky-300", glow: "blue" },
            { icon: <Truck size={28} />, value: "365", label: "Days a Year", color: "from-sky-200 to-sky-300", glow: "green" },
            { icon: <Droplets size={28} />, value: "100%", label: "Pure Quality", color: "from-sky-200 to-sky-300", glow: "cyan" },
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="group relative"
              onMouseEnter={() => setHoveredStat(idx)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-normal text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-normal text-gray-900 mb-3">
              Shvetdhara's Distribution Map
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our growing network of dairy excellence. Click any location to discover our local impact.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-sky-200 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-3 border-4 border-white">
              <div className="h-[500px] md:h-[650px] rounded-2xl overflow-hidden ring-1 ring-gray-200">
                <MapContainer 
                  center={centerPosition} 
                  zoom={9} 
                  style={{ height: '100%', width: '100%' }}
                  scrollWheelZoom={false}
                  className="z-0"
                >
                  <TileLayer
                    attribution='&copy; OpenStreetMap'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  {/* Animated coverage circles */}
                  <Circle
                    center={centerPosition}
                    radius={70000}
                    pathOptions={{
                      color: '#8b5cf6',
                      fillColor: '#c084fc',
                      fillOpacity: 0.05,
                      weight: 3,
                      dashArray: '20, 15'
                    }}
                  />
                  
                  <Circle
                    center={centerPosition}
                    radius={45000}
                    pathOptions={{
                      color: '#3b82f6',
                      fillColor: '#93c5fd',
                      fillOpacity: 0.08,
                      weight: 2,
                      dashArray: '15, 10'
                    }}
                  />

                  {/* Connection lines from HQ */}
                  {connectionLines.map((line, idx) => (
                    <Polyline
                      key={idx}
                      positions={line}
                      pathOptions={{
                        color: '#8b5cf6',
                        weight: 2,
                        opacity: 0.4,
                        dashArray: '8, 8'
                      }}
                    />
                  ))}

                  {/* City Markers */}
                  {distributionCities.map((city) => (
                    <Marker
                      key={city.id}
                      position={city.position}
                      icon={city.isHeadquarters ? hqIcon : cityIcon}
                      eventHandlers={{
                        click: () => setSelectedCity(city),
                      }}
                    >
                      <Popup>
                        <div className="p-3 min-w-[280px]">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1">{city.name}</h3>
                              <p className="text-sm text-gray-500 font-medium">{city.state}</p>
                            </div>
                            {city.isHeadquarters && (
                              <span className="flex items-center gap-1 px-3 py-1.5 bg-green-200 text-white text-xs font-bold rounded-full shadow-lg">
                                <Building2 size={12} />
                                HQ
                              </span>
                            )}
                          </div>

                          <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-3 p-2 bg-purple-50 rounded-lg">
                              <Users className="text-purple-600 flex-shrink-0" size={18} />
                              <div>
                                <div className="text-lg font-bold text-gray-900">{city.stats.families}</div>
                                <div className="text-xs text-gray-600">Families Served</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                              <Clock className="text-blue-600 flex-shrink-0" size={18} />
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{city.stats.delivery}</div>
                                <div className="text-xs text-gray-600">Delivery Schedule</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                              <Award className="text-green-600 flex-shrink-0" size={18} />
                              <div>
                                <div className="text-sm font-semibold text-gray-900">Since {city.stats.since}</div>
                                <div className="text-xs text-gray-600">Years of Service</div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-gray-200">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {city.stats.specialty}
                            </p>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Legend & Info */}
        <div className="grid md:grid-cols-1 gap-6 mb-16 md:mx-60">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 shadow-lg">
            <h3 className="text-xl font-normal text-gray-900 mb-6 flex items-center gap-2">
              <MapPin className="text-blue-600" size={24} />
              Map Legend
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <div className="w-8 h-10 bg-green-200 rounded-t-full shadow-lg"></div>
                <div>
                  <div className="font-semibold text-gray-900">Headquarters</div>
                  <div className="text-sm text-gray-600">Main Dairy Farm</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <div className="w-8 h-10 bg-sky-200 rounded-t-full shadow-lg"></div>
                <div>
                  <div className="font-semibold text-gray-900">Distribution Cities</div>
                  <div className="text-sm text-gray-600">10 Service Locations</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <div className="w-10 h-10 border-4 border-dashed border-purple-400 rounded-full bg-purple-50"></div>
                <div>
                  <div className="font-semibold text-gray-900">Coverage Area</div>
                  <div className="text-sm text-gray-600">Service Radius Zones</div>
                </div>
              </div>
            </div>
          </div>

        </div>

       
      </div>
    </div>
  );
};

export default IndianMilkMap;