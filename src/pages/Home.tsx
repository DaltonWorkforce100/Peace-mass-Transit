import { ShieldCheck, Clock, Map, Star, ChevronRight, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { BookingWidget } from "@/src/components/ui/BookingWidget";
import { Button } from "@/src/components/ui/Button";

const POPULAR_ROUTES = [
  { from: "Lagos", to: "Abuja", price: "₦18,500", time: "10-12 hrs" },
  { from: "Lagos", to: "Enugu", price: "₦15,000", time: "8-9 hrs" },
  { from: "Abuja", to: "Onitsha", price: "₦14,000", time: "7-8 hrs" },
  { from: "Port Harcourt", to: "Lagos", price: "₦16,500", time: "10 hrs" },
];

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 overflow-hidden">
          {/* Faux background image styling to look like a road/bus */}
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
            alt="Bus on highway" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 font-semibold text-sm rounded-full mb-6 border border-green-500/30">
              Nigeria's #1 Transport Company
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Travel Safely, <br />
              <span className="text-blue-400">Arrive on Time.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience the most reliable bus service across Nigeria. Affordable prices, comfortable rides, and a commitment to your safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/routes">
                <Button variant="outline" className="w-full sm:w-auto h-12 px-8 text-base bg-white/10 text-white border-white/20 hover:bg-white/20">
                  View All Routes
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "100% Safe", desc: "Speed limiters installed" },
              { icon: Users, title: "10M+ Passengers", desc: "Served across Nigeria" },
              { icon: Map, title: "Nationwide", desc: "Over 60+ terminals" },
              { icon: Clock, title: "On-Time", desc: "Strict departure schedules" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900">{stat.title}</h3>
                <p className="text-sm text-slate-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Routes</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Book our most frequently traveled routes instantly. Prices are subject to change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_ROUTES.map((route, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">{route.time}</span>
                    <span className="font-semibold text-green-600">{route.price}</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex-1 font-bold text-slate-900">{route.from}</div>
                    <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div className="flex-1 font-bold text-slate-900 text-right">{route.to}</div>
                  </div>
                  <Link to={`/book?from=${route.from}&to=${route.to}`}>
                    <Button className="w-full group-hover:bg-blue-700 transition-colors">
                      Book Route
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download / Promo */}
      <section className="py-20 bg-blue-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Travel smoother with the PMT App
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Book faster, track your luggage, and get exclusive discounts when you use our mobile app. Available for iOS and Android.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-6 h-auto">
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-slate-300">Download on the</span>
                    <span className="text-lg font-bold">App Store</span>
                  </div>
                </Button>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-6 h-auto">
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-slate-300">GET IT ON</span>
                    <span className="text-lg font-bold">Google Play</span>
                  </div>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative h-[400px]">
              {/* Abstract phone mockup styling */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-[500px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                 <div className="bg-blue-600 p-4 text-center border-b border-white/10 shrink-0">
                   <h3 className="font-bold">PMT Mobile</h3>
                 </div>
                 <div className="flex-1 bg-slate-50 p-4 flex flex-col space-y-4">
                   <div className="h-24 bg-white rounded-lg shadow-sm border border-slate-100 p-3">
                     <div className="h-4 w-1/2 bg-slate-200 rounded mb-2"></div>
                     <div className="h-6 w-full bg-slate-100 rounded"></div>
                   </div>
                   <div className="h-24 bg-white rounded-lg shadow-sm border border-slate-100 p-3">
                     <div className="h-4 w-1/3 bg-slate-200 rounded mb-2"></div>
                     <div className="h-6 w-full bg-slate-100 rounded"></div>
                   </div>
                   <div className="mt-auto h-12 bg-blue-600 rounded-lg"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Passengers Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Millions of Nigerians trust PMT everyday.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Chinedu O.", text: "The most organized transport company right now. Booking online was seamless.", rating: 5 },
              { name: "Sarah B.", text: "I felt completely safe during my trip to Abuja. The driver didn't overspeed.", rating: 5 },
              { name: "Emeka A.", text: "Cheap, reliable, and their buses are actually comfortable. Highly recommended.", rating: 4 },
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-6">"{review.text}"</p>
                <div className="font-semibold text-slate-900">{review.name}</div>
                <div className="text-sm text-slate-500">Verified Passenger</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
