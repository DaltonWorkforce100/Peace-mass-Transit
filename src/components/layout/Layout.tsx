import { Link, Outlet, useLocation } from "react-router-dom";
import { Bus, MapPin, Phone, HelpCircle, FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Book Ticket", path: "/book" },
    { name: "Routes", path: "/routes" },
    { name: "Branches", path: "/branches" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Bar for trust & quick contact */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> 0700 PEACE MASS</span>
          <span className="hidden sm:flex items-center"><HelpCircle className="w-3 h-3 mr-1" /> Support</span>
        </div>
        <div className="flex items-center space-x-4 text-slate-300">
          <span>Safe & Reliable Transport across Nigeria</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-lg mr-2 text-white">
                  <Bus className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold text-blue-900 tracking-tight">Peace Mass Transit</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    location.pathname === link.path ? "text-blue-600" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                className="bg-green-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-green-700 transition-colors shadow-sm"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium",
                    location.pathname === link.path ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center text-white">
                <div className="bg-blue-600 p-1.5 rounded-md mr-2">
                  <Bus className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold">PMT</span>
              </div>
              <p className="text-sm">
                Nigeria's most reliable and safest transport company. Connecting cities safely and affordably.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/book" className="hover:text-white transition-colors">Book a Ticket</Link></li>
                <li><Link to="/routes" className="hover:text-white transition-colors">Routes & Schedules</Link></li>
                <li><Link to="/branches" className="hover:text-white transition-colors">Terminal Locations</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 text-blue-400" />
                  <span>HQ: Emene, Enugu State, Nigeria</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  <span>0700 PEACE MASS</span>
                </li>
                <li className="flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-blue-400" />
                  <span>support@pmt.ng</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Peace Mass Transit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
