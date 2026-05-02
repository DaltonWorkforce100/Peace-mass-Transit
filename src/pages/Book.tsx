import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BusIcon, Check, ChevronRight, AlertCircle, Download } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { cn } from "@/src/lib/utils";

type Step = 1 | 2 | 3 | 4;

export function Book() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<Step>(1);
  
  // Params
  const queryFrom = searchParams.get("from") || "";
  const queryTo = searchParams.get("to") || "";
  const queryDate = searchParams.get("date") || "";

  // Selected Data
  const [selectedBus, setSelectedBus] = useState<number | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  
  // Passenger Form
  const [passenger, setPassenger] = useState({ name: "", email: "", phone: "", nextOfKin: "", nextOfKinPhone: "" });

  const MOCK_BUSES = [
    { id: 1, type: "Executive Hiace", time: "06:30 AM", price: "₦18,500", seatsLeft: 4, isFast: true },
    { id: 2, type: "Standard Hummer", time: "08:00 AM", price: "₦15,000", seatsLeft: 12, isFast: false },
    { id: 3, type: "Executive Sienna", time: "10:15 AM", price: "₦22,000", seatsLeft: 2, isFast: true },
  ];

  // If no params, show a message asking to search first from home
  if (!queryFrom || !queryTo) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
          <BusIcon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Start a Search</h2>
          <p className="text-slate-600 mb-6">Please go to the home page to search for available routes and dates.</p>
          <Button onClick={() => window.location.href = '/'} className="w-full">Go to Home</Button>
        </div>
      </div>
    );
  }

  const renderProgress = () => {
    const steps = ["Select Bus", "Choose Seat", "Details", "Payment Phase"];
    return (
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-10 rounded"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-green-500 -z-10 rounded transition-all duration-300" style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
          
          {steps.map((s, idx) => {
            const num = idx + 1;
            const active = step >= num;
            const current = step === num;
            return (
              <div key={s} className="flex flex-col items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors bg-white",
                  active ? "border-green-500 text-green-600" : "border-slate-300 text-slate-400",
                  current ? "bg-green-50 border-green-600 text-green-700 ring-4 ring-green-100" : ""
                )}>
                  {active && !current ? <Check className="w-4 h-4" /> : num}
                </div>
                <span className={cn(
                  "text-xs mt-2 font-medium hidden sm:block absolute -bottom-6 w-24 text-center -ml-8",
                  active ? "text-slate-800" : "text-slate-400"
                )}>{s}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 sm:py-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Summary */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-8 mt-4 sm:mt-0">
          <div className="flex flex-wrap flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                {queryFrom} <ChevronRight className="w-5 h-5 text-slate-400" /> {queryTo}
              </h1>
              <p className="text-slate-500 mt-1">{queryDate ? new Date(queryDate).toDateString() : "Any Date"}</p>
            </div>
            {step < 4 && (
              <Button variant="outline" onClick={() => window.location.href='/'} size="sm">Modify Search</Button>
            )}
          </div>
        </div>

        {renderProgress()}

        <div className="mt-12">
          {/* STEP 1: SELECT BUS */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Available Buses</h2>
              {MOCK_BUSES.map(bus => (
                <div 
                  key={bus.id} 
                  className={cn(
                    "bg-white rounded-xl border p-4 sm:p-6 transition-all hover:border-blue-300 hover:shadow-md cursor-pointer",
                    selectedBus === bus.id ? "border-blue-600 ring-1 ring-blue-600 shadow-md" : "border-slate-200 shadow-sm"
                  )}
                  onClick={() => setSelectedBus(bus.id)}
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-100 p-3 rounded-lg hidden sm:block">
                        <BusIcon className="w-6 h-6 text-slate-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-lg text-slate-900">{bus.time}</h3>
                          {bus.isFast && <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded flex items-center gap-1 font-medium"><Check className="w-3 h-3"/> Executive</span>}
                        </div>
                        <p className="text-slate-600 font-medium">{bus.type}</p>
                        <div className="flex items-center gap-2 text-sm mt-2">
                          <span className={cn(
                            "font-medium",
                            bus.seatsLeft <= 4 ? "text-orange-600" : "text-green-600"
                          )}>
                            {bus.seatsLeft} seats left
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-slate-100 pt-4 sm:pt-0">
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">{bus.price}</div>
                      <Button 
                        variant={selectedBus === bus.id ? "default" : "outline"} 
                        className="mt-0 sm:mt-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedBus(bus.id);
                          setStep(2);
                        }}
                      >
                        Select Bus
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* STEP 2: CHOOSE SEAT */}
          {step === 2 && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">Select Your Seat</h2>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Bus Graphic */}
                <div className="border border-slate-200 bg-slate-50 p-4 rounded-3xl w-full max-w-[280px] mx-auto md:mx-0 relative">
                  <div className="w-16 h-4 bg-slate-300 rounded-full mx-auto mb-8"></div> {/* Driver area mock */}
                  <div className="grid grid-cols-4 gap-3">
                    {[...Array(14)].map((_, i) => {
                      const num = i + 1;
                      const isBooked = [2, 5, 8].includes(num); // Mock booked seats
                      return (
                        <button
                          key={num}
                          disabled={isBooked}
                          onClick={() => setSelectedSeat(num)}
                          className={cn(
                            "w-12 h-12 rounded-t-xl rounded-b-md flex items-center justify-center font-bold text-sm transition-colors",
                            isBooked ? "bg-slate-200 text-slate-400 cursor-not-allowed" :
                            selectedSeat === num ? "bg-blue-600 text-white shadow-md shadow-blue-200" :
                            "bg-white border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600"
                          )}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {/* Details */}
                <div className="flex-1 space-y-6">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 text-blue-800">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Seats highlighted in gray are already booked. Selecting an earlier seat is recommended for front legroom.</p>
                  </div>
                  
                  {selectedSeat ? (
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <div className="text-sm text-slate-500 mb-1">Selected Seat</div>
                      <div className="text-3xl font-bold text-slate-900">Seat {selectedSeat}</div>
                    </div>
                  ) : (
                    <div className="bg-slate-50 border border-slate-200 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm mb-3">
                        <div className="w-6 h-6 border-2 border-slate-400 rounded"></div>
                      </div>
                      <div className="font-semibold text-slate-700 mb-1">No seat selected</div>
                      <div className="text-sm text-slate-500">Tap a seat on the layout to select it</div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                    <Button 
                      className="flex-1" 
                      onClick={() => setStep(3)} 
                      disabled={!selectedSeat}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DETAILS */}
          {step === 3 && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Passenger Details</h2>
              <form 
                className="space-y-6" 
                onSubmit={(e) => { e.preventDefault(); setStep(4); }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      value={passenger.name} 
                      onChange={e => setPassenger({...passenger, name: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      value={passenger.phone} 
                      onChange={e => setPassenger({...passenger, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" 
                      placeholder="0801 234 5678" 
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-slate-700">Email Address <span className="text-slate-400 font-normal">(for ticket receipt)</span></label>
                    <input 
                      required 
                      type="email" 
                      value={passenger.email} 
                      onChange={e => setPassenger({...passenger, email: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <hr className="border-slate-200" />
                <h3 className="text-lg font-medium text-slate-900">Next of Kin details</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Next of Kin Name</label>
                    <input 
                      required 
                      type="text" 
                      value={passenger.nextOfKin} 
                      onChange={e => setPassenger({...passenger, nextOfKin: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Next of Kin Phone</label>
                    <input 
                      required 
                      type="tel" 
                      value={passenger.nextOfKinPhone} 
                      onChange={e => setPassenger({...passenger, nextOfKinPhone: e.target.value})}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" 
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(2)}>Back</Button>
                  <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">Proceed to Payment Phase</Button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 4: PAYMENT (Mocked success) */}
          {step === 4 && (
            <div className="max-w-2xl mx-auto">
              {/* Fake payment processing/success screen */}
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Booking Reserved!</h2>
                <p className="text-slate-600 mb-8">
                  Your seat (#{selectedSeat}) has been temporarily reserved. Please complete your payment <br className="hidden sm:block"/> via bank transfer, USSD, or Card.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left max-w-sm mx-auto mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-500 text-sm">Amount to Pay</span>
                    <span className="font-bold text-slate-900">
                      {MOCK_BUSES.find(b => b.id === selectedBus)?.price}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-500 text-sm">Reference</span>
                    <span className="font-mono text-slate-900 text-sm font-semibold">PMT-4029-X</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 text-sm">Status</span>
                    <span className="text-yellow-600 font-medium text-sm bg-yellow-100 px-2 rounded">Awaiting Payment</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-600 min-w-[200px]" onClick={() => alert("Redirecting to Paystack/Flutterwave gateway...")}>
                    Pay Now
                  </Button>
                  <Button variant="outline" className="min-w-[200px]" onClick={() => alert("Downloading Proforma Invoice")}>
                    <Download className="w-4 h-4 mr-2" /> Download Ref
                  </Button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
