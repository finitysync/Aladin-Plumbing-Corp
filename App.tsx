import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Truck, 
  Wrench, 
  Thermometer, 
  Droplets, 
  Star, 
  ShieldCheck, 
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { Button } from './components/Button';
import { ChatWidget } from './components/ChatWidget';
import { ServicePlan, BlogPost, Testimonial } from './types';

// --- Data Constants ---
const SERVICE_PLANS: ServicePlan[] = [
  {
    name: "One Wish",
    price: "$29/mo",
    features: [
      "Annual Heating Inspection",
      "Priority Scheduling",
      "10% Discount on Repairs",
      "No Trip Charge"
    ]
  },
  {
    name: "Two Wishes",
    price: "$49/mo",
    features: [
      "Annual Heating & AC Inspection",
      "Priority Scheduling",
      "15% Discount on Repairs",
      "No Trip Charge",
      "Water Heater Flush"
    ],
    recommended: true
  },
  {
    name: "Three Wishes",
    price: "$79/mo",
    features: [
      "Heating, AC & Plumbing Inspection",
      "Same-Day Priority Scheduling",
      "20% Discount on Repairs",
      "No Trip Charge",
      "Extended Warranty on Parts"
    ]
  }
];

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "4 Tips for Choosing the Right Replacement Boiler",
    excerpt: "Replacing a boiler in a Brooklyn brownstone requires specific expertise. Here is what you need to know.",
    date: "Oct 12, 2023",
    imageUrl: "https://picsum.photos/id/195/600/400"
  },
  {
    id: 2,
    title: "Can You Give a Water Softener as a Gift?",
    excerpt: "It might sound unusual, but soft water is the gift that keeps on giving for skin and appliance health.",
    date: "Sep 28, 2023",
    imageUrl: "https://picsum.photos/id/514/600/400"
  },
  {
    id: 3,
    title: "Winterizing Your Brownstone Plumbing",
    excerpt: "Protect your historic home's pipes from freezing temperatures with this essential checklist.",
    date: "Nov 05, 2023",
    imageUrl: "https://picsum.photos/id/164/600/400"
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Park Slope Homeowner",
    content: "Aladdin saved us during a heating emergency in January. The technician was polite, wore boot covers, and fixed it in one visit!",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Restaurant Owner",
    content: "We use Aladdin for our commercial kitchen grease traps and HVAC. Reliable, honest, and the GPS tracking lets us know exactly when they arrive.",
    rating: 5
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Top Bar */}
      <div className="bg-aladdin-blue text-white py-2 px-4 text-xs sm:text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Clock size={14} className="text-aladdin-gold" /> 24/7 Emergency Service</span>
            <span className="hidden sm:flex items-center gap-1"><MapPin size={14} className="text-aladdin-gold" /> Serving Brooklyn & NYC Metro</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <a href="tel:718-555-0123" className="flex items-center gap-1 hover:text-aladdin-gold transition-colors">
              <Phone size={14} /> 718-555-0123
            </a>
            <a href="#careers" className="text-aladdin-gold hover:text-white transition-colors hidden sm:block">We're Hiring!</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder - Text based for code */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif font-bold text-aladdin-blue tracking-tight leading-none">ALADDIN</h1>
              <span className="text-xs uppercase tracking-widest text-aladdin-gold font-bold">Plumbing Corp.</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#services" className="hover:text-aladdin-gold transition-colors">Services</a>
            <a href="#plans" className="hover:text-aladdin-gold transition-colors">Service Plans</a>
            <a href="#about" className="hover:text-aladdin-gold transition-colors">About Us</a>
            <a href="#blog" className="hover:text-aladdin-gold transition-colors">Blog</a>
            <Button size="sm">Book Appointment</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-aladdin-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4 shadow-lg absolute w-full">
            <a href="#services" className="block py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#plans" className="block py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Service Plans</a>
            <a href="#about" className="block py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#blog" className="block py-2 text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <Button fullWidth onClick={() => setMobileMenuOpen(false)}>Book Appointment</Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-aladdin-blue text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            {/* Abstract Plumbing/Piping Background */}
            <img src="https://picsum.photos/id/156/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-aladdin-gold/20 text-aladdin-gold border border-aladdin-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              NYC Licensed Plumbers #1234
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Expert Plumbing, Heating & Cooling <span className="text-aladdin-gold">Services.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              Brooklyn’s most trusted experts for Brownstone renovations and emergency repairs. Serving Park Slope and NYC for over 45 years with reliable, zero-contact service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Book an Appointment</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-aladdin-blue">
                Contact NYC Plumber
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video / Trust Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-slate-500 text-sm font-semibold uppercase tracking-wide mb-2">As Seen On</span>
                <h3 className="text-2xl font-bold text-aladdin-blue">This Old House</h3>
                <p className="text-slate-600 mt-2 max-w-md">
                    Featured for our expertise in historic Brooklyn Brownstone plumbing renovations and heating system upgrades.
                </p>
            </div>
            <div className="relative group cursor-pointer w-full max-w-md rounded-xl overflow-hidden shadow-xl">
                <img src="https://picsum.photos/id/164/800/450" alt="This Old House Feature" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-aladdin-blue border-b-[10px] border-b-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-aladdin-blue mb-4">Complete Home & Commercial Services</h2>
            <p className="text-slate-600 text-lg">From minor leaks to major commercial installations, our licensed technicians have seen it all.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 text-aladdin-blue rounded-lg flex items-center justify-center mb-6 group-hover:bg-aladdin-blue group-hover:text-white transition-colors">
                <Droplets size={28} />
              </div>
              <h3 className="text-xl font-bold text-aladdin-blue mb-3">Residential Plumbing</h3>
              <p className="text-slate-600 mb-6">
                Expert repairs for historic brownstones and modern apartments. Leak detection, fixture installation, and water heater replacements.
              </p>
              <a href="#" className="inline-flex items-center text-aladdin-gold font-semibold hover:underline">
                Explore Residential <ArrowRight size={16} className="ml-2" />
              </a>
            </div>

            {/* Heating & Cooling */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 group">
              <div className="w-14 h-14 bg-amber-100 text-aladdin-gold rounded-lg flex items-center justify-center mb-6 group-hover:bg-aladdin-gold group-hover:text-white transition-colors">
                <Thermometer size={28} />
              </div>
              <h3 className="text-xl font-bold text-aladdin-blue mb-3">Heating & Cooling</h3>
              <p className="text-slate-600 mb-6">
                High-efficiency boiler installations, mini-split systems, and central air maintenance to keep your home comfortable year-round.
              </p>
              <a href="#" className="inline-flex items-center text-aladdin-gold font-semibold hover:underline">
                View HVAC Services <ArrowRight size={16} className="ml-2" />
              </a>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 border border-gray-100 group">
              <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                <Wrench size={28} />
              </div>
              <h3 className="text-xl font-bold text-aladdin-blue mb-3">Commercial Services</h3>
              <p className="text-slate-600 mb-6">
                RPZ testing, violation removal, grease trap maintenance, and large-scale mechanical systems for NYC businesses.
              </p>
              <a href="#" className="inline-flex items-center text-aladdin-gold font-semibold hover:underline">
                Commercial Solutions <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GPS Fleet & Why Choose Us */}
      <section className="py-20 bg-aladdin-blue text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
               <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Neighbors Trust Aladdin</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex gap-4">
                          <CheckCircle className="text-aladdin-gold shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-lg">Licensed & Insured</h4>
                              <p className="text-slate-300 text-sm">Fully licensed NYC Master Plumbers.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <Truck className="text-aladdin-gold shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-lg">GPS-Equipped Fleet</h4>
                              <p className="text-slate-300 text-sm">Real-time tracking for punctual arrivals.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <ShieldCheck className="text-aladdin-gold shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-lg">Virtual Estimates</h4>
                              <p className="text-slate-300 text-sm">Safe, zero-contact quotes for your convenience.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <Star className="text-aladdin-gold shrink-0" size={24} />
                          <div>
                              <h4 className="font-bold text-lg">Family Owned</h4>
                              <p className="text-slate-300 text-sm">45+ years serving the community.</p>
                          </div>
                      </div>
                  </div>
                  <div className="mt-8">
                     <Button size="lg" variant="primary">Schedule Service Now</Button>
                  </div>
               </div>
               <div className="lg:w-1/2 relative">
                   <div className="relative rounded-lg overflow-hidden border-4 border-white/10 shadow-2xl">
                       <img src="https://picsum.photos/id/352/800/600" alt="Aladdin Plumbing Truck" className="w-full h-auto" />
                       <div className="absolute bottom-4 left-4 bg-white text-aladdin-blue px-4 py-2 rounded-lg shadow-lg font-bold flex items-center gap-2">
                           <Clock size={16} className="text-green-600" /> On Time, Every Time
                       </div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Service Plans */}
      <section id="plans" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-aladdin-gold font-bold uppercase tracking-wider text-sm">Memberships</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-aladdin-blue mt-2 mb-4">The "Aladdin's Lamp" Service Plans</h2>
                <p className="text-slate-600">Peace of mind for your home's most vital systems. Choose the level of protection that fits your needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {SERVICE_PLANS.map((plan, index) => (
                    <div key={index} className={`relative flex flex-col bg-white rounded-2xl shadow-lg border-2 ${plan.recommended ? 'border-aladdin-gold transform md:-translate-y-4' : 'border-transparent'} overflow-hidden`}>
                        {plan.recommended && (
                            <div className="bg-aladdin-gold text-white text-center py-2 text-sm font-bold uppercase tracking-wide">
                                Most Popular
                            </div>
                        )}
                        <div className="p-8 flex-1">
                            <h3 className="text-2xl font-bold text-aladdin-blue mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                                <span className="text-slate-500">/year (starting at)</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                                        <span className="text-slate-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 pt-0 mt-auto">
                            <Button fullWidth variant={plan.recommended ? 'primary' : 'outline'}>Choose {plan.name}</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-16 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-aladdin-blue mb-2">Flexible Financing Available</h3>
                  <p className="text-slate-600">Don't let budget constraints delay essential repairs. We partner with top lenders to offer low fixed interest rates for qualified customers.</p>
              </div>
              <div className="md:w-1/3 flex justify-end">
                  <Button variant="outline">Apply for Financing</Button>
              </div>
          </div>
      </section>

      {/* Blog & Articles */}
      <section id="blog" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-aladdin-blue mb-10 text-center">Latest Plumbing & HVAC Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                        <div className="overflow-hidden h-48">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-6">
                            <span className="text-xs text-aladdin-gold font-bold uppercase">{post.date}</span>
                            <h3 className="text-lg font-bold text-aladdin-blue mt-2 mb-3 leading-snug group-hover:text-aladdin-gold transition-colors">{post.title}</h3>
                            <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                            <a href="#" className="text-aladdin-blue text-sm font-semibold hover:underline">Read Article</a>
                        </div>
                    </article>
                ))}
            </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-aladdin-blue text-white">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-serif font-bold mb-12">What Your Neighbors Are Saying</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {TESTIMONIALS.map((t) => (
                      <div key={t.id} className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-left border border-white/10">
                          <div className="flex gap-1 text-aladdin-gold mb-4">
                              {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                          </div>
                          <p className="text-lg italic text-slate-100 mb-6">"{t.content}"</p>
                          <div>
                              <p className="font-bold">{t.name}</p>
                              <p className="text-sm text-slate-400">{t.role}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Hiring Section */}
      <section id="careers" className="py-16 bg-aladdin-gold/10">
          <div className="container mx-auto px-4 text-center">
              <span className="bg-white text-aladdin-gold px-3 py-1 rounded-full text-xs font-bold uppercase">We're Hiring</span>
              <h2 className="text-3xl font-bold text-aladdin-blue mt-4 mb-4">Join the Aladdin Team</h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                  Are you a skilled technician looking for a company that values its employees? We offer competitive pay, benefits, and a family atmosphere.
              </p>
              <Button variant="secondary">View Open Positions</Button>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-aladdin-blue text-slate-300 pt-16 pb-8 border-t border-slate-800">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                  <div>
                      <h3 className="text-white text-2xl font-serif font-bold mb-6">ALADDIN <span className="text-aladdin-gold text-base font-sans font-normal block">Plumbing Corp.</span></h3>
                      <p className="text-sm mb-6">
                          Providing premier plumbing, heating, and cooling services to Brooklyn and the NYC Metro area for over 45 years.
                      </p>
                      <div className="flex gap-4">
                          <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                          <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                          <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                          <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                      </div>
                  </div>

                  <div>
                      <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
                      <ul className="space-y-3 text-sm">
                          <li><a href="#" className="hover:text-aladdin-gold transition-colors">Residential Plumbing</a></li>
                          <li><a href="#" className="hover:text-aladdin-gold transition-colors">Heating & Boilers</a></li>
                          <li><a href="#" className="hover:text-aladdin-gold transition-colors">Air Conditioning</a></li>
                          <li><a href="#" className="hover:text-aladdin-gold transition-colors">Brownstone Renovation</a></li>
                          <li><a href="#" className="hover:text-aladdin-gold transition-colors">Commercial HVAC</a></li>
                          <li><a href="#" className="hover:text-aladdin-gold transition-colors">Emergency Service</a></li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                      <ul className="space-y-4 text-sm">
                          <li className="flex items-start gap-3">
                              <MapPin size={18} className="text-aladdin-gold shrink-0 mt-0.5" />
                              <span>379 5th Ave<br />Brooklyn, NY 11215</span>
                          </li>
                          <li className="flex items-center gap-3">
                              <Phone size={18} className="text-aladdin-gold shrink-0" />
                              <a href="tel:7185550123" className="hover:text-white">718-555-0123</a>
                          </li>
                          <li className="flex items-center gap-3">
                              <Clock size={18} className="text-aladdin-gold shrink-0" />
                              <span>Mon-Fri: 7am - 6pm<br /><span className="text-xs">24/7 Emergency Operators</span></span>
                          </li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
                      <p className="text-sm mb-4">Subscribe for seasonal tips and exclusive discounts.</p>
                      <div className="flex flex-col gap-2">
                          <input type="email" placeholder="Your Email Address" className="px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-aladdin-gold text-white" />
                          <Button size="sm">Subscribe</Button>
                      </div>
                  </div>
              </div>

              <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                  <div className="mb-4 md:mb-0">
                      &copy; {new Date().getFullYear()} Aladdin Plumbing Corp. All rights reserved. NYC Master Plumber Lic #1234.
                  </div>
                  <div className="flex gap-6">
                      <a href="#" className="hover:text-white">Privacy Policy</a>
                      <a href="#" className="hover:text-white">Terms of Service</a>
                      <a href="#" className="hover:text-white">Accessibility</a>
                  </div>
              </div>
          </div>
      </footer>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;