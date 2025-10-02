import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline } from 'react-leaflet';
import { MapPin, Truck, Users, Award, Droplets, Building2, Clock, Package, ArrowRight } from "lucide-react";
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
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [32, 52],
  iconAnchor: [16, 52],
  popupAnchor: [1, -42],
  shadowSize: [52, 52]
});

// Custom icon for distribution cities
const cityIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const IndianMilkMap = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setMapReady(true), 100);
  }, []);

  const distributionCities = [
    {
      id: 1,
      name: "Dehradun",
      state: "Uttarakhand",
      position: [30.3165, 78.0322],
      stats: {
        families: "50,000+",
        since: "2016",
        delivery: "Morning & Evening",
        specialty: "Home of Shvetdhara - Our main dairy farm and headquarters serving the local community"
      },
      isHeadquarters: true,
      region: "central"
    },
    {
      id: 2,
      name: "Meerut",
      state: "Uttar Pradesh",
      position: [28.9845, 77.7064],
      stats: {
        families: "50,000+",
        since: "2016",
        delivery: "Morning & Evening",
        specialty: "Home of Shvetdhara - Our main dairy farm and headquarters serving the local community"
      },
      isHeadquarters: false,
      region: "central"
    },
    {
      id: 3,
      name: "Haridwar",
      state: "Uttarakhand",
      position: [29.9457, 78.1642],
      stats: {
        families: "12,000+",
        since: "2017",
        delivery: "Daily Fresh",
        specialty: "Serving the holy city with pure, quality milk for families and temples"
      },
      region: "north"
    },
    {
      id: 4,
      name: "Moradabad",
      state: "Uttar Pradesh",
      position: [28.8389, 78.7378],
      stats: {
        families: "20,000+",
        since: "2017",
        delivery: "Morning & Evening",
        specialty: "Major distribution hub serving the brass city with fresh dairy daily"
      },
      region: "west"
    },
    {
      id: 5,
      name: "Rampur",
      state: "Uttar Pradesh",
      position: [28.8103, 79.0250],
      stats: {
        families: "10,000+",
        since: "2018",
        delivery: "Daily Delivery",
        specialty: "Growing presence in this historic city known for its rich culture"
      },
      region: "east"
    },
    {
      id: 6,
      name: "Bareilly",
      state: "Uttar Pradesh",
      position: [28.3670, 79.4304],
      stats: {
        families: "15,000+",
        since: "2018",
        delivery: "Twice Daily",
        specialty: "Serving one of UP's major cities with reliable fresh milk supply"
      },
      region: "east"
    },
    {
      id: 7,
      name: "Budaun",
      state: "Uttar Pradesh",
      position: [28.0342, 79.1140],
      stats: {
        families: "8,000+",
        since: "2019",
        delivery: "Daily Fresh",
        specialty: "Bringing farm-fresh quality to this ancient historic town"
      },
      region: "south"
    },
    {
      id: 8,
      name: "Sambhal",
      state: "Uttar Pradesh",
      position: [28.5850, 78.5703],
      stats: {
        families: "7,000+",
        since: "2019",
        delivery: "Morning Delivery",
        specialty: "Expanding our reach to serve more families in the region"
      },
      region: "west"
    },
    {
      id: 9,
      name: "Amroha",
      state: "Uttar Pradesh",
      position: [28.9034, 78.4671],
      stats: {
        families: "9,000+",
        since: "2018",
        delivery: "Daily Fresh",
        specialty: "Trusted by local families for consistent quality and freshness"
      },
      region: "west"
    },
    {
      id: 10,
      name: "Bijnor",
      state: "Uttar Pradesh",
      position: [29.3730, 78.1318],
      stats: {
        families: "6,500+",
        since: "2019",
        delivery: "Morning & Evening",
        specialty: "Serving this sugarcane belt town with nutritious dairy products"
      },
      region: "north"
    },
    {
      id: 11,
      name: "Bulandshahr",
      state: "Uttar Pradesh",
      position: [28.4074, 77.8484],
      stats: {
        families: "8,500+",
        since: "2019",
        delivery: "Daily Delivery",
        specialty: "Close to home base, ensuring freshest possible delivery times"
      },
      region: "south"
    },
    {
      id: 12,
      name: "Hathras",
      state: "Uttar Pradesh",
      position: [27.5950, 78.0506],
      stats: {
        families: "5,000+",
        since: "2020",
        delivery: "Morning Delivery",
        specialty: "Our newest expansion bringing Shvetdhara quality to more families"
      },
      region: "south"
    }
  ];

  const centerPosition = [28.7, 78.3];
  const headquarters = distributionCities.find(c => c.isHeadquarters);

  const connectionLines = distributionCities
    .filter(city => !city.isHeadquarters)
    .map(city => [headquarters.position, city.position]);

  const filteredCities = activeTab === 'all' 
    ? distributionCities 
    : distributionCities.filter(c => c.region === activeTab || c.isHeadquarters);

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Hero Section */}
      <div className="border-b border-sky-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-inherit border border-sky-200 text-sky-700 text-sm font-normal tracking-wide mb-6">
              Our Distribution Network
            </div>
            <h1 className="text-3xl md:text-6xl font-light mb-6 text-gray-900 tracking-tight">
              Serving Northern India
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From our headquarters in Dehradun, we deliver premium dairy products to over 100,000 families across more than 12 cities, maintaining the highest standards of quality and freshness.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>Est. 2002</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>20+ Years of Excellence</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 mb-12 max-w-5xl mx-auto">
          {[
            { icon: <MapPin size={24} />, value: "12+", label: "Cities Served" },
            { icon: <Users size={24} />, value: "100K+", label: "Happy Families" },
            { icon: <Truck size={24} />, value: "365", label: "Days Active" },
            { icon: <Droplets size={24} />, value: "100%", label: "Quality" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-sky-100 hover:shadow-md hover:border-sky-200 transition-all group">
              <div className="mb-4 text-sky-400 group-hover:text-sky-600 transition-colors">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-4xl font-light text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mb-20">
          <div className="flex flex-col text-center sm:text-left md:flex-row items-start md:items-end justify-between mb-8 max-w-6xl mx-auto">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl font-light text-gray-900 mb-2">
                Distribution Map
              </h2>
              <p className="text-gray-600">
                Click on any location to view detailed information
              </p>
            </div>
            
            {/* Region Filter */}
            <div className="flex flex-row border border-sky-200 bg-white rounded-2xl overflow-hidden">
              {[
                { id: 'all', label: 'All Regions' },
                { id: 'north', label: 'North' },
                { id: 'south', label: 'South' },
                { id: 'east', label: 'East' },
                { id: 'west', label: 'West' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-sky-300 text-white' 
                      : 'bg-white text-gray-600 hover:bg-sky-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-sky-100 p-6 max-w-6xl mx-auto">
            <div className="h-[600px] bg-sky-50 rounded-lg overflow-hidden border border-sky-100">
              {mapReady && (
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
                  
                  <Circle
                    center={centerPosition}
                    radius={70000}
                    pathOptions={{
                      color: '#0284c7',
                      fillColor: '#0ea5e9',
                      fillOpacity: 0.05,
                      weight: 2,
                      dashArray: '5, 10'
                    }}
                  />
                  
                  <Circle
                    center={centerPosition}
                    radius={45000}
                    pathOptions={{
                      color: '#0284c7',
                      fillColor: '#0ea5e9',
                      fillOpacity: 0.08,
                      weight: 2,
                      dashArray: '5, 10'
                    }}
                  />

                  {connectionLines.map((line, idx) => (
                    <Polyline
                      key={idx}
                      positions={line}
                      pathOptions={{
                        color: '#0ea5e9',
                        weight: 1.5,
                        opacity: 0.4,
                        dashArray: '5, 5'
                      }}
                    />
                  ))}

                  {filteredCities.map((city) => (
                    <Marker
                      key={city.id}
                      position={city.position}
                      icon={city.isHeadquarters ? hqIcon : cityIcon}
                      eventHandlers={{
                        click: () => setSelectedCity(city),
                      }}
                    >
                      <Popup>
                        <div className="p-4 min-w-[320px]">
                          <div className="flex items-start justify-between mb-4 pb-4 border-b border-sky-100">
                            <div>
                              <h3 className="text-xl font-normal text-gray-900 mb-1">{city.name}</h3>
                              <p className="text-sm text-gray-500">{city.state}</p>
                            </div>
                            {city.isHeadquarters && (
                              <span className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white text-xs font-medium uppercase tracking-wide">
                                <Building2 size={12} />
                                HQ
                              </span>
                            )}
                          </div>

                          <div className="space-y-3 mb-4">
                            <div className="flex items-start gap-3">
                              <Users className="text-sky-500 mt-0.5" size={18} />
                              <div>
                                <div className="text-lg font-normal text-gray-900">{city.stats.families}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Families Served</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <Clock className="text-sky-500 mt-0.5" size={18} />
                              <div>
                                <div className="text-sm text-gray-900">{city.stats.delivery}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Delivery Schedule</div>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <Award className="text-sky-500 mt-0.5" size={18} />
                              <div>
                                <div className="text-sm text-gray-900">Since {city.stats.since}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">Operational Since</div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-sky-100">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {city.stats.specialty}
                            </p>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              )}
            </div>

            {/* Map Legend */}
            <div className="flex items-center gap-8 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
                <span>Headquarters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-sky-600 rounded-sm"></div>
                <span>Distribution Centers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 border-t border-dashed border-sky-400"></div>
                <span>Coverage Radius</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="border-t border-sky-100 pt-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-2">
              Our Locations
            </h2>
            <p className="text-gray-600">
              Detailed overview of all our distribution centers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {distributionCities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city)}
                className="text-left p-6 bg-white rounded-lg border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-normal text-gray-900 mb-1 group-hover:text-sky-600 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-500">{city.state}</p>
                  </div>
                  {city.isHeadquarters && (
                    <span className="px-2 py-1 bg-white border border-sky-300 text-sky-700 rounded-full text-xs font-medium uppercase tracking-wide">
                      HQ
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Families</span>
                    <span className="text-gray-900 font-medium">{city.stats.families}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Since</span>
                    <span className="text-gray-900 font-medium">{city.stats.since}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Delivery</span>
                    <span className="text-gray-900 font-medium">{city.stats.delivery}</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-400 group-hover:text-sky-600 transition-colors">
                  View Details
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </button>
            ))}
          </div>
        </div>

      
      </div>

      {/* Selected City Modal */}
      {selectedCity && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCity(null)}>
          <div className="bg-white max-w-2xl w-full p-8 rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-2">{selectedCity.name}</h3>
                <p className="text-gray-500">{selectedCity.state}</p>
              </div>
              <button 
                onClick={() => setSelectedCity(null)}
                className="text-gray-400 hover:text-gray-900 text-2xl w-8 h-8 flex items-center justify-center hover:bg-sky-50 rounded-full transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6 pb-6 border-b border-sky-100">
              <div>
                <div className="text-lg sm:text-2xl text-gray-900 mb-1">{selectedCity.stats.families}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Families</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl text-gray-900 mb-1">{selectedCity.stats.since}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Since</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl text-gray-900 mb-1">{selectedCity.stats.delivery}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Schedule</div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {selectedCity.stats.specialty}
            </p>

            {selectedCity.isHeadquarters && (
              <div className="bg-sky-50 border border-sky-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 size={20} className="text-sky-300" />
                  <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">Headquarters Location</span>
                </div>
                <p className="text-sm text-gray-600">
                  Our main dairy farm and distribution center, maintaining the highest standards of production and quality control.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IndianMilkMap;