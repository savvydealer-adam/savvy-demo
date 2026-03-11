import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Search, ChevronDown, ChevronUp, Grid3X3, List, Share2, SlidersHorizontal, X } from "lucide-react";

const filterCategories = [
  "Type", "Make", "Model", "Commercial", "Body Style", "Price", 
  "Years", "Mileage", "Engine", "Fuel Type", "Drive", "Transmission", 
  "Exterior Color", "Features"
];

const sampleVehicles = [
  {
    id: 1,
    name: "2025 Lotus Emira",
    image: "https://cdn.inventoryrsc.com/471446084_692b5734515444115bd5f87c.jpg",
    extColor: "Hethel Yellow",
    intColor: "Black Alcantara",
    vin: "SCCLEJAX1SHB10948",
    stock: "8308",
    engine: "3.5L V-6 Supercharged",
    transmission: "Manual",
    mileage: "5",
    driveType: "RWD",
    msrp: 125950,
    dealerSavings: 4000,
    bonusCash: 3000,
    yourPrice: 118950,
    badge: "NEW ARRIVAL"
  },
  {
    id: 2,
    name: "2025 Lotus Emira",
    image: "https://cdn.inventoryrsc.com/471446081_693b6c22be76342cf34dbfb3.jpg",
    extColor: "Shadow Grey",
    intColor: "Red Leather",
    vin: "SCCLEJAX1SHB11050",
    stock: "8310",
    engine: "3.5L V-6 Supercharged",
    transmission: "Manual",
    mileage: "25",
    driveType: "RWD",
    msrp: 126950,
    dealerSavings: 4000,
    bonusCash: 3000,
    yourPrice: 119950,
    badge: "IN STOCK"
  },
  {
    id: 3,
    name: "2025 Lotus Emira",
    image: "https://cdn.inventoryrsc.com/471446077_6908f531276fe98de6605b9a.jpg",
    extColor: "Seneca Blue",
    intColor: "Black Alcantara",
    vin: "SCCLEJAX2SHB10943",
    stock: "8303",
    engine: "3.5L V-6 Supercharged",
    transmission: "Manual",
    mileage: "25",
    driveType: "RWD",
    msrp: 119950,
    dealerSavings: 3500,
    bonusCash: 2500,
    yourPrice: 113950,
    badge: "IN STOCK"
  },
  {
    id: 4,
    name: "2025 Lotus Emira",
    image: "https://cdn.inventoryrsc.com/471446085_692b573b515444115bd5f8e8.jpg",
    extColor: "Magma Red",
    intColor: "Black Leather",
    vin: "SCCLEJAX2SHB11123",
    stock: "8311",
    engine: "3.5L V-6 Supercharged",
    transmission: "Manual",
    mileage: "25",
    driveType: "RWD",
    msrp: 126950,
    dealerSavings: 4000,
    bonusCash: 3000,
    yourPrice: 119950,
    badge: "NEW ARRIVAL"
  },
  {
    id: 5,
    name: "2025 Lotus Emira",
    image: "https://cdn.inventoryrsc.com/471446082_690e20f25e28c86fb74bfbaa.jpg",
    extColor: "Dark Verdant",
    intColor: "Tan Leather",
    vin: "SCCLEJAX7SHA10952",
    stock: "8306",
    engine: "3.5L V-6 Supercharged",
    transmission: "Manual",
    mileage: "7",
    driveType: "RWD",
    msrp: 125950,
    dealerSavings: 4000,
    bonusCash: 3000,
    yourPrice: 118950,
    badge: "IN STOCK"
  },
  {
    id: 6,
    name: "2025 Lotus Emira",
    image: "https://cdn.inventoryrsc.com/471446079_692dc0479c0dd078fe8b4f2c.jpg",
    extColor: "Nimbus Grey",
    intColor: "Black Alcantara",
    vin: "SCCLEJAX8SHA10720",
    stock: "8305",
    engine: "3.5L V-6 Supercharged",
    transmission: "Manual",
    mileage: "25",
    driveType: "RWD",
    msrp: 119950,
    dealerSavings: 3500,
    bonusCash: 2500,
    yourPrice: 113950,
    badge: "IN STOCK"
  },
  {
    id: 7,
    name: "2025 Lotus Emira",
    image: "https://cdn.inventoryrsc.com/471446080_691e44902b608bb0c6b32975.jpg",
    extColor: "Burnt Orange",
    intColor: "Black Leather",
    vin: "SCCLEJAX8SHB10767",
    stock: "8309",
    engine: "3.5L V-6 Supercharged",
    transmission: "Manual",
    mileage: "25",
    driveType: "RWD",
    msrp: 126950,
    dealerSavings: 4000,
    bonusCash: 3000,
    yourPrice: 119950,
    badge: "NEW ARRIVAL"
  },
  {
    id: 8,
    name: "2024 Lotus Emira",
    image: "https://cdn.inventoryrsc.com/434469712_685599fcf21147fca97431e5.jpg",
    extColor: "Hethel Yellow",
    intColor: "Black Alcantara",
    vin: "SCCLEKMX1RHB45095",
    stock: "8300",
    engine: "2.0L I-4 Turbo",
    transmission: "Automatic",
    mileage: "25",
    driveType: "RWD",
    msrp: 114950,
    dealerSavings: 5000,
    bonusCash: 5000,
    yourPrice: 104950,
    badge: "SPECIAL"
  }
];

export default function Inventory() {
  const [expandedFilters, setExpandedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [expandedDetails, setExpandedDetails] = useState<number[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleFilter = (filter: string) => {
    setExpandedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id)
        : [...prev, id]
    );
  };

  const toggleDetails = (id: number) => {
    setExpandedDetails(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id)
        : [...prev, id]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      
      {/* Mobile Filter Bar - Glass Effect */}
      <div className="lg:hidden sticky top-20 z-30 bg-white/30 backdrop-blur-xl border-b border-gray-300/40 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded shadow-sm text-gray-700 hover:bg-gray-50 transition-colors"
            data-testid="button-mobile-filters"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="font-medium text-sm">Filters</span>
          </button>
          <div className="flex items-center gap-2">
            <select 
              className="border border-gray-200 rounded px-3 py-2 text-sm bg-white cursor-pointer shadow-sm"
              data-testid="select-sort-mobile"
              title="Sort Results"
            >
              <option>Price (low to high)</option>
              <option>Price (high to low)</option>
              <option>Year (newest)</option>
              <option>Year (oldest)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Filter Panel Overlay */}
      {mobileFiltersOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50"
          onClick={() => setMobileFiltersOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          
          {/* Filter Panel */}
          <div 
            className="absolute bottom-0 left-0 right-0 max-h-[85vh] bg-white/95 backdrop-blur-xl rounded-t-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle Bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 pb-3 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                data-testid="button-close-filters"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            
            {/* Filter Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-8rem)] p-4">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white mb-4 rounded"
                data-testid="button-reset-all-mobile"
              >
                RESET ALL
              </Button>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search filters..." 
                  className="pl-10 bg-white border-gray-300 rounded"
                  data-testid="input-filter-search-mobile"
                />
              </div>
              
              {filterCategories.map((filter) => (
                <div key={filter} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFilter(filter)}
                    className="w-full flex items-center justify-between py-3 text-left text-gray-700 hover:text-gray-900"
                    data-testid={`button-filter-mobile-${filter.toLowerCase().replace(' ', '-')}`}
                  >
                    <span className="text-sm font-medium">{filter}</span>
                    {expandedFilters.includes(filter) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedFilters.includes(filter) && (
                    <div className="pb-3 pl-2">
                      <p className="text-sm text-gray-500">Filter options here</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Apply Button */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <Button 
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded"
                data-testid="button-apply-filters"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <main className="flex-1 pt-20 lg:pt-20">
        <div className="flex">
          {/* Left Sidebar - Filters */}
          <aside className="w-64 bg-white border-r border-gray-200 min-h-screen hidden lg:block sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-gray-700" />
                  <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                </div>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors" data-testid="link-share-page" title="Share This Page">
                  <Share2 className="h-5 w-5" />
                </a>
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white mb-4 rounded"
                data-testid="button-reset-all"
              >
                RESET ALL
              </Button>
              
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search" 
                  className="pl-10 bg-white border-gray-300 rounded"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-filter-search"
                />
              </div>
              
              {filterCategories.map((filter) => (
                <div key={filter} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFilter(filter)}
                    className="w-full flex items-center justify-between py-3 text-left text-gray-700 hover:text-gray-900"
                    data-testid={`button-filter-${filter.toLowerCase().replace(' ', '-')}`}
                  >
                    <span className="text-sm font-medium">{filter}</span>
                    {expandedFilters.includes(filter) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedFilters.includes(filter) && (
                    <div className="pb-3 pl-2">
                      <p className="text-sm text-gray-500">Filter options here</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 p-4 md:p-6 min-w-0 overflow-hidden">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h1 className="text-xl font-semibold text-gray-800" data-testid="text-vehicles-count">
                {sampleVehicles.length} Vehicles Found
              </h1>
              
              {/* Sort and View - Hidden on mobile since it's in the filter bar */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <select 
                    className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white cursor-pointer"
                    data-testid="select-sort"
                    title="Sort Results"
                  >
                    <option>Price (low to high)</option>
                    <option>Price (high to low)</option>
                    <option>Year (newest)</option>
                    <option>Year (oldest)</option>
                  </select>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-100 bg-white" data-testid="button-view-grid">
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-100 bg-white" data-testid="button-view-list">
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
              {sampleVehicles.map((vehicle) => (
                <div 
                  key={vehicle.id} 
                  className="bg-white border border-gray-200 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-full"
                  data-testid={`card-vehicle-${vehicle.id}`}
                >
                  {/* Vehicle Image */}
                  <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden w-full">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 max-w-full"
                    />
                    <span 
                      className="absolute top-2 left-2 bg-[#c41e3a] text-white text-[10px] font-bold px-2 py-1 italic rounded"
                    >
                      {vehicle.badge}
                    </span>
                    {/* Dealer Watermark */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                      <div className="flex items-center justify-between text-white text-xs">
                        <span className="font-semibold">PrestigeImports.com</span>
                        <span className="font-bold">305.555.1234</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vehicle Info */}
                  <div className="p-3">
                    {/* Title and Favorite */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 
                        className="text-[#c41e3a] font-bold text-lg leading-tight"
                        data-testid={`text-vehicle-name-${vehicle.id}`}
                      >
                        {vehicle.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-gray-500">{vehicle.stock}</span>
                        <button 
                          onClick={() => toggleFavorite(vehicle.id)}
                          className={`transition-colors ${favorites.includes(vehicle.id) ? 'text-[#c41e3a]' : 'text-gray-400 hover:text-[#c41e3a]'}`}
                          data-testid={`button-favorite-${vehicle.id}`}
                        >
                          <Heart className={`h-5 w-5 ${favorites.includes(vehicle.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Price Section */}
                    <div className="border-t border-gray-100 pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-[#c41e3a] font-bold text-sm">0% APR</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-[#c41e3a]">YOUR PRICE**</span>
                          <p className="font-bold text-gray-900 text-sm">{formatPrice(vehicle.yourPrice)}</p>
                          <button 
                            onClick={() => toggleDetails(vehicle.id)}
                            className="text-[10px] text-gray-500 underline cursor-pointer hover:text-gray-700"
                          >
                            Details {expandedDetails.includes(vehicle.id) ? '▲' : '▼'}
                          </button>
                        </div>
                      </div>

                      {/* Expanded Price Breakdown */}
                      {expandedDetails.includes(vehicle.id) && (
                        <div className="bg-gray-50 p-2 rounded text-[10px] mb-2 space-y-1">
                          <div className="flex justify-between">
                            <span className="font-semibold">MSRP</span>
                            <span>{formatPrice(vehicle.msrp)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold">Dealer & Handling Fee</span>
                            <span>+$699</span>
                          </div>
                          <div className="flex justify-between border-t border-gray-200 pt-1">
                            <span className="font-semibold">Total Retail</span>
                            <span>{formatPrice(vehicle.msrp + 699)}</span>
                          </div>
                          <div className="flex justify-between text-green-600">
                            <span className="font-semibold">Bonus Customer Cash</span>
                            <span>-{formatPrice(vehicle.bonusCash)}</span>
                          </div>
                          <div className="flex justify-between text-green-600">
                            <span className="font-semibold">Dealer Savings</span>
                            <span>-{formatPrice(vehicle.dealerSavings)}</span>
                          </div>
                          <div className="flex justify-between border-t border-gray-200 pt-1 font-bold">
                            <span>Your Price**</span>
                            <span>{formatPrice(vehicle.yourPrice)}</span>
                          </div>
                          <div className="flex justify-between text-[#c41e3a] font-bold">
                            <span>You Save</span>
                            <span>{formatPrice(vehicle.msrp - vehicle.yourPrice + 699)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      className="w-full bg-[#c41e3a] hover:bg-[#a01830] text-white rounded text-xs font-bold uppercase tracking-wide"
                      data-testid={`button-view-details-${vehicle.id}`}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Pagination */}
            <div className="flex justify-center items-center gap-1 mt-8 py-4 bg-white rounded shadow-sm border border-gray-200">
              <button className="px-3 py-1 text-gray-600 hover:text-gray-900 text-sm" data-testid="button-prev-page-bottom">
                « Prev
              </button>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-7 h-7 rounded text-sm ${
                    currentPage === page 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  data-testid={`button-page-bottom-${page}`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-1 text-gray-600 hover:text-gray-900 text-sm" data-testid="button-next-page-bottom">
                Next »
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
