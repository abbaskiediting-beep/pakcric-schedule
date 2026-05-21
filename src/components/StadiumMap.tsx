import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Minus, 
  Compass, 
  MapPin, 
  Hotel, 
  UtensilsCrossed, 
  Train, 
  Trees, 
  Layers, 
  Maximize2, 
  Sparkles,
  Navigation
} from 'lucide-react';
import L from 'leaflet';

interface Amenity {
  name: string;
  type: 'Stay' | 'Food' | 'Transit' | 'Nature' | 'Market';
  coords: [number, number];
  desc: string;
}

interface StadiumGeoData {
  name: string;
  center: [number, number];
  amenities: Amenity[];
}

// Complete geographic coordinates & amenities matching VENUES_DATA in page
const STADIUM_MAPS_DATABASE: Record<string, StadiumGeoData> = {
  "Gaddafi Stadium": {
    name: "Gaddafi Stadium",
    center: [31.5125, 74.3314],
    amenities: [
      { name: "Pearl Continental Lahore", type: "Stay", coords: [31.5095, 74.3400], desc: "Luxury 5-star bilateral team lodge & dining suites." },
      { name: "Kalma Chowk Metro Station", type: "Transit", coords: [31.5039, 74.3318], desc: "Rapid transport bus station connecting Lahore hotspots." },
      { name: "M.M. Alam Road Diner Strip", type: "Food", coords: [31.5152, 74.3486], desc: "Bustling foodie avenue featuring global & traditional cuisines." },
      { name: "Liberty Bazaar Market", type: "Market", coords: [31.5110, 74.3444], desc: "Famous commercial enclave ideal for souvenirs & local silks." }
    ]
  },
  "National Bank Stadium": {
    name: "National Bank Stadium",
    center: [24.8938, 67.0789],
    amenities: [
      { name: "Millennium Mall Terminal", type: "Transit", coords: [24.9011, 67.1147], desc: "Connecting taxi ranks and express intercity coach drops." },
      { name: "Karsaz Metro Flyover Station", type: "Transit", coords: [24.8872, 67.0858], desc: "Suburban transit route intersection close to the stadium." },
      { name: "NBS Gate Food Bazaar", type: "Food", coords: [24.8920, 67.0740], desc: "Dynamic cluster of Karachi Biryani and fast-chai tea spots." },
      { name: "Avari Towers & Gym Suites", type: "Stay", coords: [24.8480, 67.0270], desc: "First-rate accommodation featuring elite players sports spa." }
    ]
  },
  "Rawalpindi Cricket Stadium": {
    name: "Rawalpindi Cricket Stadium",
    center: [33.6361, 73.0764],
    amenities: [
      { name: "Shamsabad Metro Station", type: "Transit", coords: [33.6390, 73.0792], desc: "Metrobus corridor connection across Rawalpindi and Islamabad." },
      { name: "Double Road Food Street", type: "Food", coords: [33.6340, 73.0785], desc: "Traditional food street legendary for clay-oven mutton & tea." },
      { name: "Rawal National Lake Park", type: "Nature", coords: [33.6705, 73.1114], desc: "Vibrant wetlands reservoir offering boating & gardens." },
      { name: "Isb-Pindi Expressway Station", type: "Transit", coords: [33.6441, 73.0712], desc: "Primary taxi stand connecting international bypass corridors." }
    ]
  },
  "Multan Cricket Stadium": {
    name: "Multan Cricket Stadium",
    center: [30.1333, 71.4333],
    amenities: [
      { name: "Ramada Hotel Multan Cantt", type: "Stay", coords: [30.1983, 71.4682], desc: "Premium suites hosting touring international captains." },
      { name: "Multan Cantonment Bus Depot", type: "Transit", coords: [30.1872, 71.4428], desc: "Major city coach links serving fans from outer suburbs." },
      { name: "Shah Rukn-e-Alam Tomb Trail", type: "Nature", coords: [30.2017, 71.4789], desc: "Spectacular 13th-century blue-glazed glazed tiles monument." }
    ]
  },
  "Sher-e-Bangla National Cricket Stadium": {
    name: "Sher-e-Bangla Stadium",
    center: [23.8069, 90.3643],
    amenities: [
      { name: "Mirpur-10 Metro Station", type: "Transit", coords: [23.8071, 90.3684], desc: "High-speed sky-rail line bypassing Dhaka traffic jams." },
      { name: "Grand Prince Mirpur Hotel", type: "Stay", coords: [23.8021, 90.3592], desc: "Reliable, security-cleared boarding home close to pitch." },
      { name: "Dhaka Stadium Kacchi Corner", type: "Food", coords: [23.8055, 90.3630], desc: "Famous local eatery serving authentic Dhaka mutton Kacchi." }
    ]
  },
  "Sylhet International Cricket Stadium": {
    name: "Sylhet International Stadium",
    center: [24.9197, 91.8517],
    amenities: [
      { name: "Rose View Sylhet Hotel", type: "Stay", coords: [24.8906, 91.8839], desc: "Five-star hotel serving premium foreign delegation pools." },
      { name: "Lakkatura Tea Garden Hills", type: "Nature", coords: [24.9221, 91.8488], desc: "Tranquil sprawling green tea gardens flanking stadium gates." },
      { name: "Sylhet General Railway Terminal", type: "Transit", coords: [24.8763, 91.8679], desc: "Primary trains hub linking Sylhet with outer port regions." }
    ]
  },
  "Brian Lara Stadium": {
    name: "Brian Lara Stadium",
    center: [10.2806, -61.4281],
    amenities: [
      { name: "C3 Centre Cinema Mall", type: "Market", coords: [10.2974, -61.4447], desc: "Shopping paradise featuring world diners & transport hubs." },
      { name: "San Fernando Water Jetty", type: "Transit", coords: [10.2769, -61.4658], desc: "High-speed water taxi docks straight to Port of Spain." },
      { name: "South Park Trinidad Center", type: "Food", coords: [10.2991, -61.4402], desc: "Vast outdoor retail circle for Caribbean spicy street foods." }
    ]
  },
  "Headingley Cricket Ground": {
    name: "Headingley Cricket Ground",
    center: [53.8172, -1.5831],
    amenities: [
      { name: "Headingley Train Station", type: "Transit", coords: [53.8152, -1.5947], desc: "Short rail transfer lines straight from Leeds Central Hub." },
      { name: "The Original Oak Pub & Garden", type: "Food", coords: [53.8202, -1.5794], desc: "Iconic matching day fan tavern with a massive screen garden." },
      { name: "Headingley Lodge Ground Stay", type: "Stay", coords: [53.8166, -1.5815], desc: "Comfortable hotel rooms with views looking over the pitch." }
    ]
  },
  "Lord's Cricket Ground": {
    name: "Lord's Cricket Ground",
    center: [51.5303, -0.1717],
    amenities: [
      { name: "St. John's Wood Underground", type: "Transit", coords: [51.5347, -0.1741], desc: "London Underground tube station under 5 minutes walk." },
      { name: "Regent's Royal Botanical Park", type: "Nature", coords: [51.5300, -0.1550], desc: "Vast landscaped gardens, rose lakes, and pathways." },
      { name: "The Danubius London Hotel", type: "Stay", coords: [51.5280, -0.1710], desc: "Regal classic lodgings flanking the Lord's media pavilions." }
    ]
  },
  "Edgbaston Stadium": {
    name: "Edgbaston Stadium",
    center: [52.4578, -1.9025],
    amenities: [
      { name: "Cannon Hill Park Grounds", type: "Nature", coords: [52.4542, -1.9015], desc: "Lush city park featuring woodlands, minigolf & boating." },
      { name: "Birmingham University Station", type: "Transit", coords: [52.4510, -1.9288], desc: "Connecting train routes running to Birmingham New Street." },
      { name: "Edgbaston Park Luxury Stay", type: "Stay", coords: [52.4522, -1.9212], desc: "Tranquil lodging enshrouded by beautiful red-brick trees." }
    ]
  },
  "R. Premadasa Stadium": {
    name: "R. Premadasa Stadium",
    center: [6.9397, 79.8719],
    amenities: [
      { name: "Cinnamon Lakeside Colombo", type: "Stay", coords: [6.9312, 79.8492], desc: "Elite 5-star lakeside resort with multi-cuisine catering." },
      { name: "Fort Central Railway Station", type: "Transit", coords: [6.9344, 79.8503], desc: "Largest national rail crossroads for Sri Lanka travelers." },
      { name: "Floating Market Pettah Plaza", type: "Market", coords: [6.9304, 79.8552], desc: "Beautiful wooden bridge walkways hosting local craft traders." }
    ]
  },
  "Pallekele International Cricket Stadium": {
    name: "Pallekele Stadium",
    center: [7.2806, 80.7225],
    amenities: [
      { name: "Amaya Hills Kandy", type: "Stay", coords: [7.2570, 80.6124], desc: "Scenic mountain peak paradise hotel overlooking green plains." },
      { name: "Pallekele Industrial Crossing", type: "Transit", coords: [7.2842, 80.7101], desc: "Key highway bus terminal connecting outer tea-estate zones." },
      { name: "Balaji Dosai Local Treat", type: "Food", coords: [7.2932, 80.6366], desc: "Traditional Srilankan crispy dosas and spicy chutneys." }
    ]
  },
  "Kingsmead": {
    name: "Kingsmead Stadium",
    center: [-29.8497, 31.0289],
    amenities: [
      { name: "Southern Sun Elangeni Hotel", type: "Stay", coords: [-29.8471, 31.0372], desc: "Premium high rise hotel looking directly onto Durban seashores." },
      { name: "Marine Parade Durban Beach", type: "Nature", coords: [-29.8505, 31.0398], desc: "Famous Durban Golden Mile sandy beaches with sun attractions." },
      { name: "Durban Station Link Terminus", type: "Transit", coords: [-29.8398, 31.0261], desc: "Connecting city transit coaches and regional bus ranks." }
    ]
  },
  "SuperSport Park": {
    name: "SuperSport Park",
    center: [-25.8601, 28.2045],
    amenities: [
      { name: "Centurion Gautrain Station", type: "Transit", coords: [-25.8608, 28.1932], desc: "Prestige bullet rail shuttle to JoBurg International airport." },
      { name: "Centurion Shopping Mall", type: "Market", coords: [-25.8604, 28.1882], desc: "Massive lakeside commercial center with open-air diners." },
      { name: "Protea Hotel Bypass Centurion", type: "Stay", coords: [-25.8624, 28.1894], desc: "Chic modern business rooms with direct ground shuttle paths." }
    ]
  },
  "Wanderers Stadium": {
    name: "Wanderers Stadium",
    center: [-26.1347, 28.0514],
    amenities: [
      { name: "Rosebank Gautrain Terminal", type: "Transit", coords: [-26.1451, 28.0435], desc: "Rapid transport platform connecting directly to Pretoria." },
      { name: "Melrose Arch Plaza Street", type: "Food", coords: [-26.1311, 28.0673], desc: "Vibrant pedestrian streets packed with designer cafes & steaks." },
      { name: "Capital Wanderers Guest Club", type: "Stay", coords: [-26.1332, 28.0532], desc: "Sleek hotel rooms sharing borders with the country club turf." }
    ]
  },
  "Newlands": {
    name: "Newlands Stadium",
    center: [-33.9744, 18.4683],
    amenities: [
      { name: "Newlands Train Station Terminal", type: "Transit", coords: [-33.9760, 18.4674], desc: "Traditional stone rail line platform flanking north pavilion." },
      { name: "Cavendish Square Mall", type: "Market", coords: [-33.9806, 18.4651], desc: "Vast upmarket shopping mall packed with diners & boutiques." },
      { name: "Vineyard Garden Hotel Cape Town", type: "Stay", coords: [-33.9818, 18.4590], desc: "Historic luxury lodge with lush table-mountain viewing pools." }
    ]
  }
};

interface StadiumMapProps {
  venueName: string;
}

export default function StadiumMap({ venueName }: StadiumMapProps) {
  const mapElementId = 'leaflet-interactive-stadium-map';
  const mapRef = useRef<L.Map | null>(null);
  const markersGroupRef = useRef<L.FeatureGroup | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const [mapTheme, setMapTheme] = useState<'dark' | 'standard'>('dark');
  const [activeTypeFilter, setActiveTypeFilter] = useState<'All' | 'Stay' | 'Food' | 'Transit' | 'Nature'>('All');
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);

  // Dynamic Leaflet CSS Injector
  useEffect(() => {
    const linkId = 'leaflet-css-cdn-injector';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
  }, []);

  // Fetch geographic profile from DB
  const geoData = useMemo(() => {
    return STADIUM_MAPS_DATABASE[venueName] || {
      name: venueName,
      center: [31.5125, 74.3314] as [number, number],
      amenities: [] as Amenity[]
    };
  }, [venueName]);

  const filteredAmenities = useMemo(() => {
    if (activeTypeFilter === 'All') return geoData.amenities;
    return geoData.amenities.filter(amenity => amenity.type === activeTypeFilter);
  }, [geoData, activeTypeFilter]);

  // Leaflet custom SVGs icons (avoids broken PNG bundles in production builds)
  const markerIcons = useMemo(() => {
    const stadiumHtml = `
      <div class="flex items-center justify-center w-9 h-9 rounded-full bg-pak-green text-white shadow-xl border-2 border-white ring-4 ring-pak-green/30 animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="drop-shadow"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>
    `;

    const getAmenityHtml = (color: string, iconSvg: string) => `
      <div class="flex items-center justify-center w-7 h-7 rounded-full ${color} text-white shadow-lg border border-white">
        ${iconSvg}
      </div>
    `;

    const stayIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9M10 8v9"/></svg>`;
    const foodIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`; // Utensil/Cash
    const foodIconUtensils = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v4M21 15V2v0a5 5 0 0 0-5 5v8c0 1.1.9 2 2 2h3M12 15v7M18 17v5"/></svg>`;
    const transitIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 18h6M10 22l1-4M14 22l-1-4M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><circle cx="12" cy="14" r="1"/></svg>`;
    const natureIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M10 2v8M14 2v8M4 10a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H4Z"/><circle cx="12" cy="16" r="2"/></svg>`;

    return {
      stadium: L.divIcon({ className: 'stadium-div-icon', html: stadiumHtml, iconSize: [36, 36], iconAnchor: [18, 36] }),
      Stay: L.divIcon({ className: 'custom-stay-icon', html: getAmenityHtml('bg-amber-500', stayIconSvg), iconSize: [28, 28], iconAnchor: [14, 14] }),
      Food: L.divIcon({ className: 'custom-food-icon', html: getAmenityHtml('bg-rose-500', foodIconUtensils), iconSize: [28, 28], iconAnchor: [14, 14] }),
      Transit: L.divIcon({ className: 'custom-transit-icon', html: getAmenityHtml('bg-blue-500', transitIconSvg), iconSize: [28, 28], iconAnchor: [14, 14] }),
      Nature: L.divIcon({ className: 'custom-nature-icon', html: getAmenityHtml('bg-emerald-500', natureIconSvg), iconSize: [28, 28], iconAnchor: [14, 14] }),
      Market: L.divIcon({ className: 'custom-market-icon', html: getAmenityHtml('bg-orange-500', stayIconSvg), iconSize: [28, 28], iconAnchor: [14, 14] })
    };
  }, []);

  // Initialize and Update Map
  useEffect(() => {
    // 1. Reset map container if present
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const container = document.getElementById(mapElementId);
    if (!container) return;

    // 2. Spawn Map instance
    const map = L.map(mapElementId, {
      center: geoData.center,
      zoom: 14,
      zoomControl: false, // Customized control buttons rendered in our React overlay
      attributionControl: false
    });

    mapRef.current = map;

    // 3. Tile Layer Styling
    const darkTileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    const standardTileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const activeTileUrl = mapTheme === 'dark' ? darkTileUrl : standardTileUrl;

    L.tileLayer(activeTileUrl, {
      maxZoom: 19
    }).addTo(map);

    // 4. Mark Stadium Center Point
    const stadiumMarker = L.marker(geoData.center, { icon: markerIcons.stadium })
      .addTo(map)
      .bindTooltip(`<div class="font-sans font-black uppercase text-[10px] tracking-wider bg-black/95 text-white border-none p-2 rounded-lg shadow-xl">${geoData.name}</div>`, {
        permanent: true,
        direction: 'top',
        className: 'custom-tooltip-styled'
      });

    // 5. Populate Amenities Pins Group
    const markersGroup = L.featureGroup().addTo(map);
    markersGroupRef.current = markersGroup;

    filteredAmenities.forEach((amenity) => {
      const typeKey = amenity.type as keyof typeof markerIcons;
      const icon = markerIcons[typeKey] || markerIcons.Stay;
      
      const pin = L.marker(amenity.coords, { icon })
        .addTo(markersGroup)
        .bindPopup(`
          <div class="p-2 min-w-[150px] font-sans">
            <h5 class="font-black text-xs uppercase tracking-wide text-zinc-900 mb-0.5">${amenity.name}</h5>
            <span class="inline-block text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 mb-1.5">${amenity.type}</span>
            <p class="text-[9px] text-zinc-500 leading-normal font-semibold">${amenity.desc}</p>
          </div>
        `);
      
      pin.on('click', () => {
        setSelectedAmenity(amenity);
      });
    });

    // Auto fit bounds to see all if there are amenities, else center on stadium
    if (filteredAmenities.length > 0) {
      const groupBounds = L.latLngBounds([geoData.center, ...filteredAmenities.map(a => a.coords)]);
      map.fitBounds(groupBounds, { padding: [40, 40] });
    } else {
      map.setView(geoData.center, 14);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [geoData, mapTheme, filteredAmenities, markerIcons]);

  // Map Controls Helpers
  const handleZoomIn = () => mapRef.current?.zoomIn();
  const handleZoomOut = () => mapRef.current?.zoomOut();
  const handleRecenter = () => {
    setSelectedAmenity(null);
    mapRef.current?.flyTo(geoData.center, 14, { duration: 1.5 });
  };

  const handleFocusAmenity = (amenity: Amenity) => {
    setSelectedAmenity(amenity);
    mapRef.current?.flyTo(amenity.coords, 16, { duration: 1.2 });
  };

  const getFilterIcon = (type: string) => {
    switch (type) {
      case 'Stay': return <Hotel className="w-3.5 h-3.5" />;
      case 'Food': return <UtensilsCrossed className="w-3.5 h-3.5" />;
      case 'Transit': return <Train className="w-3.5 h-3.5" />;
      case 'Nature': return <Trees className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  const getAmenityColorClass = (type: string) => {
    switch (type) {
      case 'Stay': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      case 'Food': return 'text-rose-500 bg-rose-500/10 border-rose-500/20';
      case 'Transit': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'Nature': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      default: return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Map Control bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-black/40 border border-card-border rounded-2xl">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-pak-green" />
          <span className="text-[10px] font-black uppercase tracking-[2px]">Interactive Stadium Map</span>
        </div>

        {/* Custom Toolbar */}
        <div className="flex items-center gap-3">
          {/* Map Style Theme Toggle */}
          <div className="flex items-center gap-1 bg-neutral-900 border border-white/5 rounded-lg p-1">
            <button
              onClick={() => setMapTheme('dark')}
              className={`px-3 py-1.5 rounded text-[8px] font-black uppercase tracking-widest transition-all ${
                mapTheme === 'dark' ? 'bg-pak-green text-white shadow' : 'text-zinc-500 hover:text-white'
              }`}
            >
              Dark Grid
            </button>
            <button
              onClick={() => setMapTheme('standard')}
              className={`px-3 py-1.5 rounded text-[8px] font-black uppercase tracking-widest transition-all ${
                mapTheme === 'standard' ? 'bg-pak-green text-white shadow' : 'text-zinc-500 hover:text-white'
              }`}
            >
              Street Map
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Map Container View Grid-8 */}
        <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-card-border bg-[#111] h-[350px] sm:h-[450px]">
          
          {/* MAP CANVAS DIV */}
          <div id={mapElementId} className="w-full h-full z-10" />

          {/* Map float zoom overlay */}
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-1.5">
            <button
              onClick={handleZoomIn}
              className="w-8 h-8 rounded-lg bg-[#111112]/95 border border-white/10 flex items-center justify-center text-white hover:bg-neutral-900 hover:border-pak-green transition-colors cursor-pointer"
              title="Zoom In"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="w-8 h-8 rounded-lg bg-[#111112]/95 border border-white/10 flex items-center justify-center text-white hover:bg-neutral-900 hover:border-pak-green transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <Minus className="w-4 h-4" />
            </button>
            <button
              onClick={handleRecenter}
              className="w-8 h-8 rounded-lg bg-[#111112]/95 border border-white/10 flex items-center justify-center text-pak-green hover:bg-neutral-900 hover:border-pak-green transition-colors cursor-pointer"
              title="Recenter Map"
            >
              <Navigation className="w-4 h-4" />
            </button>
          </div>

          {/* Active selected point indicator overlay */}
          <AnimatePresence>
            {selectedAmenity && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="absolute bottom-4 left-4 right-4 z-20 mx-auto max-w-sm bg-black/90 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md flex items-start gap-3"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 mt-0.5 ${getAmenityColorClass(selectedAmenity.type)}`}>
                  {getFilterIcon(selectedAmenity.type)}
                </div>
                <div className="min-w-0 flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-xs font-black text-white uppercase tracking-tight truncate">{selectedAmenity.name}</span>
                    <span className="text-[7.5px] font-black uppercase tracking-widest text-[#9c9c9c] bg-white/5 border border-white/5 px-1.5 py-0.5 rounded shrink-0">{selectedAmenity.type}</span>
                  </div>
                  <p className="text-[10px] font-medium text-ink/70 leading-relaxed">{selectedAmenity.desc}</p>
                </div>
                <button 
                  onClick={() => setSelectedAmenity(null)}
                  className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white"
                >
                  <span className="text-[9px] font-bold">×</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar Amenity Info Panel Grid-4 */}
        <div className="lg:col-span-4 bg-[#111]/45 border border-card-border rounded-3xl p-5 flex flex-col justify-between space-y-4">
          
          {/* Subheader */}
          <div>
            <span className="text-[9px] font-extrabold text-pak-green uppercase tracking-[2px] block mb-1">Fan Zone Amenities Guide</span>
            <h4 className="text-sm font-black text-white uppercase tracking-tight mb-2">Nearby Stadium Facilities</h4>
            <p className="text-[11px] text-[#868686] leading-relaxed font-semibold">
              Planning your visit to the wickets? Here are key verified food stalls, luxury team accommodation hotels, and transit lines:
            </p>
          </div>

          {/* Category Filter list */}
          <div className="flex flex-wrap gap-1 bg-black/30 border border-white/5 p-1 rounded-xl">
            {['All', 'Stay', 'Food', 'Transit', 'Nature'].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setActiveTypeFilter(type as any);
                  setSelectedAmenity(null);
                }}
                className={`flex-1 min-w-[50px] py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                  activeTypeFilter === type 
                    ? 'bg-pak-green/20 text-pak-green border border-pak-green/25 font-black' 
                    : 'text-[#888] hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Amenities scroll list */}
          <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1 flex-grow custom-scrollbar">
            {filteredAmenities.length > 0 ? (
              filteredAmenities.map((amenity, i) => (
                <button
                  key={i}
                  onClick={() => handleFocusAmenity(amenity)}
                  className="w-full text-left p-2.5 rounded-xl bg-neutral-900/60 border border-white/5 hover:border-pak-green/25 hover:bg-neutral-900 transition-all flex items-start gap-3 group cursor-pointer"
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 mt-0.5 transition-colors group-hover:bg-pak-green/10 group-hover:text-pak-green ${getAmenityColorClass(amenity.type)}`}>
                    {getFilterIcon(amenity.type)}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-black text-white group-hover:text-pak-green transition-colors block uppercase tracking-tight leading-tight truncate">
                      {amenity.name}
                    </span>
                    <span className="text-[9px] text-[#737373] line-clamp-1 block leading-normal mt-0.5">
                      {amenity.desc}
                    </span>
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center py-6 border border-dashed border-white/5 rounded-xl bg-black/15">
                <p className="text-[10px] font-black text-[#565657] uppercase tracking-wider">No amenities found in this filter.</p>
              </div>
            )}
          </div>

          {/* Match Day navigation help footer */}
          <div className="p-3 bg-pak-green/5 border border-pak-green/15 rounded-xl">
            <div className="flex gap-2 items-start">
              <Compass className="w-4 h-4 text-pak-green mt-0.5 shrink-0" />
              <p className="text-[9.5px] text-[#aeaeae] leading-relaxed font-semibold">
                Click any asset above to fly to its exact map location. Zoom in for absolute details. Nearby spots are curated for match-day ticketing fans.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
