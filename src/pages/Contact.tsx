import { HelpCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-600 text-lg">
            Have a question, missing luggage, or need help with a booking? 
            Our customer service team is available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Support Columns */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Call Us</h3>
            <p className="text-slate-600 text-sm mb-4">We're available round the clock for emergencies.</p>
            <p className="font-bold text-blue-600 border-b border-blue-100 inline-block">0700 PEACE MASS</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center relative overflow-hidden">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 1.94.55 3.75 1.49 5.27L2 22l4.87-1.42A9.97 9.97 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.06 18c-1.63 0-3.18-.42-4.52-1.16l-.32-.18-3.08.89.9-2.92-.2-.31A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-7.94 8zM16.5 14.5c-.24-.13-1.45-.72-1.67-.8-.22-.09-.39-.14-.55.11-.17.25-.63.8-.77.96-.14.17-.29.19-.53.06-1.22-.61-2.26-1.48-2.96-2.67-.14-.23.14-.21.36-.66.07-.15.03-.28-.03-.41-.06-.13-.55-1.32-.76-1.81-.2-.48-.41-.42-.55-.42h-.47c-.22 0-.58.08-.88.42-.3.33-1.15 1.12-1.15 2.74s1.18 3.19 1.34 3.4c.16.22 2.32 3.54 5.61 4.96.79.34 1.41.54 1.88.69.79.25 1.51.22 2.08.13.63-.1 1.45-.6 1.66-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/>
              </svg>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">WhatsApp Support</h3>
            <p className="text-slate-600 text-sm mb-4">Chat with our dedicated support staff instantly.</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-sm">
              Message us on WhatsApp
            </Button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Email</h3>
            <p className="text-slate-600 text-sm mb-4">Send us an email outlining your issue.</p>
            <a href="mailto:support@pmt.ng" className="font-bold text-blue-600 border-b border-blue-100 inline-block hover:text-blue-700 transition">support@pmt.ng</a>
          </div>
        </div>

        {/* Contact Form & Branches Info side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input required type="text" className="w-full px-4 py-2 mt-1 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email Option / Phone</label>
                <input required type="text" className="w-full px-4 py-2 mt-1 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Subject</label>
                <select className="w-full px-4 py-2 mt-1 border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition">
                  <option>Refund Request</option>
                  <option>Missing Luggage</option>
                  <option>General Booking Issue</option>
                  <option>Complaint</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea required rows={4} className="w-full px-4 py-2 mt-1 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"></textarea>
              </div>
              <Button type="submit" className="w-full bg-blue-600">Submit Request</Button>
            </form>
          </div>

          {/* Quick FAQ info & Map mockup */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">HQ & Terminals</h3>
            
            <div className="bg-slate-200 rounded-xl h-48 mb-6 relative overflow-hidden flex items-center justify-center border border-slate-300">
               {/* Map Mockup */}
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                 alt="Map"
                 className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
               />
               <div className="relative z-10 flex flex-col items-center bg-white/90 p-3 rounded-lg shadow-sm border border-slate-200">
                 <MapPin className="text-red-500 w-8 h-8 mb-1" />
                 <span className="font-bold text-slate-900 text-sm">PMT HQ Emene</span>
               </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-blue-600" /> Need Answers Fast?
              </h4>
              <p className="text-sm text-blue-800 mb-4">
                Visit our FAQ section to get answers to common questions about ticket modifications, travel restrictions, and parcel services.
              </p>
              <Button variant="outline" className="bg-white hover:bg-slate-50 text-blue-700 border-blue-200 w-full">Read FAQs</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
