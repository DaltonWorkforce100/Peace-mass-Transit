import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/src/lib/utils";

interface BookingWidgetProps {
  className?: string;
  horizontal?: boolean;
}

const TERMINALS = [
  "Lagos (Jibowu)",
  "Lagos (Ajah)",
  "Abuja (Utako)",
  "Abuja (Kubwa)",
  "Enugu (Emene)",
  "Onitsha (Upper Iweka)",
  "Owerri (Control Post)",
  "Aba",
  "Port Harcourt",
];

export function BookingWidget({ className, horizontal = false }: BookingWidgetProps) {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (from && to && date) {
      navigate(`/book?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${encodeURIComponent(date)}&pax=${passengers}`);
    }
  };

  return (
    <div className={cn("bg-white p-6 rounded-xl shadow-xl", className)}>
      <h2 className="text-xl font-bold text-slate-800 mb-4 hidden md:block">
        Book Your Trip
      </h2>
      
      <form onSubmit={handleSearch} className={cn("grid gap-4", horizontal ? "md:grid-cols-5 items-end" : "grid-cols-1")}>
        {/* From */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700 block">Traveling From</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
            >
              <option value="" disabled>Select terminal...</option>
              {TERMINALS.map(t => <option key={`from-${t}`} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        {/* To */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700 block">Traveling To</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
            >
              <option value="" disabled>Select terminal...</option>
              {TERMINALS.map(t => <option key={`to-${t}`} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700 block">Departure Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
            />
          </div>
        </div>

        {/* Passengers */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700 block">Passengers</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
            >
              {[1, 2, 3, 4, 5].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-2 md:mt-0">
          <Button type="submit" className="w-full h-[46px] bg-green-600 hover:bg-green-700 text-base font-semibold shadow-md">
            <Search className="w-5 h-5 mr-2" />
            Search Buses
          </Button>
        </div>
      </form>
    </div>
  );
}
