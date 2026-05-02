import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/Button";

const ROUTES = [
  { from: "Lagos", to: "Abuja", price: "₦18,500", duration: "10-12 hrs", firstBus: "06:30 AM" },
  { from: "Lagos", to: "Enugu", price: "₦15,000", duration: "8-9 hrs", firstBus: "06:00 AM" },
  { from: "Lagos", to: "Onitsha", price: "₦14,500", duration: "8-9 hrs", firstBus: "06:00 AM" },
  { from: "Lagos", to: "Owerri", price: "₦15,500", duration: "9-10 hrs", firstBus: "06:30 AM" },
  { from: "Abuja", to: "Lagos", price: "₦18,500", duration: "10-12 hrs", firstBus: "07:00 AM" },
  { from: "Abuja", to: "Enugu", price: "₦14,000", duration: "7-8 hrs", firstBus: "07:00 AM" },
  { from: "Abuja", to: "Onitsha", price: "₦14,000", duration: "7-8 hrs", firstBus: "07:00 AM" },
  { from: "Enugu", to: "Lagos", price: "₦15,000", duration: "8-9 hrs", firstBus: "06:00 AM" },
  { from: "Enugu", to: "Abuja", price: "₦14,000", duration: "7-8 hrs", firstBus: "06:00 AM" },
  { from: "Port Harcourt", to: "Lagos", price: "₦16,500", duration: "10 hrs", firstBus: "06:30 AM" },
];

export function Routes() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoutes = ROUTES.filter(
    route => 
      route.from.toLowerCase().includes(searchTerm.toLowerCase()) || 
      route.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Routes & Schedules</h1>
          <p className="text-slate-600 text-lg">
            Find the most convenient buses across Nigeria.
            Search your preferred route for the latest pricing and departure times.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Search by city (e.g. Lagos, Abuja)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Table View (Desktop) & Card View (Mobile) */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-5 p-4 py-5 bg-slate-100 border-b border-slate-200 text-sm font-bold text-slate-700 uppercase tracking-wider">
            <div className="col-span-2">Route</div>
            <div>Estimated Arrival</div>
            <div>Price</div>
            <div className="text-right">Action</div>
          </div>

          {/* List */}
          <div className="divide-y divide-slate-100">
            {filteredRoutes.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                No routes found matching your search.
              </div>
            ) : (
              filteredRoutes.map((route, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-5 p-4 md:items-center hover:bg-slate-50 transition-colors">
                  
                  <div className="col-span-2 mb-4 md:mb-0 flex items-start space-x-3">
                    <div className="bg-blue-50 p-2 rounded shrink-0 mt-1 hidden sm:block">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg md:text-base mb-1 md:mb-0">
                        {route.from} &rarr; {route.to}
                      </div>
                      <div className="text-sm text-slate-500">First bus: {route.firstBus}</div>
                    </div>
                  </div>

                  <div className="mb-2 md:mb-0 text-sm">
                    <span className="md:hidden font-medium text-slate-700 inline-block w-24">Duration:</span>
                    <span className="text-slate-600">{route.duration}</span>
                  </div>

                  <div className="mb-4 md:mb-0 text-green-600 font-bold">
                    <span className="md:hidden font-medium text-slate-700 inline-block w-24">Price:</span>
                    {route.price}
                  </div>

                  <div className="text-left md:text-right">
                    <Link to={`/book?from=${route.from}&to=${route.to}`}>
                      <Button variant="outline" className="w-full md:w-auto hover:bg-blue-50 hover:text-blue-700 border-blue-200 text-blue-600">
                        Book Now
                      </Button>
                    </Link>
                  </div>

                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
