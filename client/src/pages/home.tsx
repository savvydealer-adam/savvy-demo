import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/ferrari-background_1765916812136.avif";
import carbonTexture from "@assets/generated_images/dark_carbon_fiber_texture.png";
import paganiLogo from "@assets/Prestige-Pagani_1765916812136.png";
import lamborghiniLogo from "@assets/Prestige-Lambo_1765916812136.png";
import lotusLogo from "@assets/Prestige-Lotus_1765916812135.png";
import karmaLogo from "@assets/Prestige-Karma_1765916812135.png";
import czingerLogo from "@assets/Prestige-Czinger_1765916812135.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Static Background Image (fallback/poster) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Prestige Imports Red Ferrari" 
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
        
        {/* YouTube Video Background */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/uoxmkT1rbrU?autoplay=1&mute=1&loop=1&playlist=uoxmkT1rbrU&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1"
            title="Miami Concours Background Video"
            className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
            style={{ aspectRatio: '16/9' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
          />
        </div>
        
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 z-[2] bg-black/50" />

        {/* Hero Content */}
        <div className="container relative z-[10] px-6 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Prestige Imports
          </h1>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/80 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Miami Beach's Premier Luxury Dealer
          </p>
          
          {/* Search Bar */}
          <div 
            className="flex max-w-[500px] mx-auto mb-6 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '4px'
            }}
          >
            <input 
              type="text" 
              placeholder="Search inventory..." 
              className="flex-1 bg-transparent text-white text-[15px] border-none outline-none placeholder:text-white/50"
              style={{ padding: '16px 20px' }}
              data-testid="input-search-inventory"
            />
            <Button 
              className="bg-[#c41e3a] hover:bg-[#a8182f] text-white text-[13px] font-medium uppercase border-none rounded-none"
              style={{ padding: '16px 28px', letterSpacing: '2px' }}
              data-testid="button-search"
            >
              Search
            </Button>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            {[
              { label: "Inventory", href: "/inventory" },
              { label: "Consign", href: "#" },
              { label: "Service", href: "#" },
              { label: "Store", href: "#" }
            ].map((item, i) => (
              <Link 
                key={i}
                href={item.href}
                className="text-white text-[11px] font-medium uppercase cursor-pointer transition-all no-underline"
                style={{ 
                  padding: '12px 24px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  letterSpacing: '2px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                data-testid={`button-category-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos Bar */}
      <section className="relative py-8 bg-gray-200 border-t border-gray-300 overflow-hidden">
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-nowrap justify-between items-center gap-4 opacity-90 hover:opacity-100 transition-opacity duration-500">
            <img src={paganiLogo} alt="Pagani" className="h-16 md:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform cursor-pointer flex-shrink-0" />
            <div className="h-16 w-px bg-gray-400 flex-shrink-0"></div>
            <img src={lamborghiniLogo} alt="Lamborghini Miami" className="h-16 md:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform cursor-pointer flex-shrink-0" />
            <div className="h-16 w-px bg-gray-400 flex-shrink-0"></div>
            <img src={lotusLogo} alt="Lotus Miami" className="h-16 md:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform cursor-pointer flex-shrink-0" />
            <div className="h-16 w-px bg-gray-400 flex-shrink-0"></div>
            <img src={karmaLogo} alt="Karma Miami" className="h-16 md:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform cursor-pointer flex-shrink-0" />
            <div className="h-16 w-px bg-gray-400 flex-shrink-0"></div>
            <img src={czingerLogo} alt="Czinger Miami" className="h-16 md:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform cursor-pointer flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">Featured Models</h2>
            <div className="h-1 w-20 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "SF90 Stradale", subtitle: "Beyond Imagination", price: "Inquire for Price" },
              { title: "Roma Spider", subtitle: "La Nuova Dolce Vita", price: "Inquire for Price" },
              { title: "296 GTB", subtitle: "Defining Fun to Drive", price: "Inquire for Price" },
            ].map((car, index) => (
              <div key={index} className="group cursor-pointer relative overflow-hidden bg-secondary">
                <div className="aspect-[4/5] bg-neutral-200 relative overflow-hidden">
                  {/* Placeholder for car images - using a solid color for now to simulate layout */}
                  <div className={`absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700 ease-out`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-serif text-2xl font-bold mb-1">{car.title}</h3>
                    <p className="text-white/70 text-sm uppercase tracking-wider mb-4">{car.subtitle}</p>
                    <div className="w-full h-[1px] bg-white/30 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      <span className="text-sm font-medium">{car.price}</span>
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="link" className="text-foreground uppercase tracking-widest font-bold hover:text-primary transition-colors group">
              View All Inventory <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience / Services Split Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="bg-[#111] text-white p-16 md:p-24 flex flex-col justify-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">Service & Care</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Uncompromising <br />
            <span className="italic text-white/50">Maintenance</span>
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed max-w-md">
            Your vehicle deserves the finest care. Our certified technicians use only genuine parts and state-of-the-art diagnostic equipment to ensure your vehicle performs at its peak.
          </p>
          <ul className="space-y-4 mb-10">
            {["Certified Technicians", "Genuine Parts", "Concierge Service", "Climate Controlled Storage"].map((item, i) => (
              <li key={i} className="flex items-center text-sm tracking-wide uppercase text-white/80">
                <div className="h-1.5 w-1.5 bg-primary mr-4 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="self-start text-white border-white/20 hover:bg-white hover:text-black rounded-none uppercase tracking-wider h-12 px-8">
            Schedule Service
          </Button>
        </div>
        <div className="bg-neutral-100 relative h-full min-h-[400px]">
           {/* Placeholder for service image */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530906358829-e84b2769270f?q=80&w=2573&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125" />
           <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </div>
      </section>

      {/* Testimonial / Brand Section */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <Star className="h-8 w-8 text-primary mx-auto mb-8 fill-primary" />
          <h2 className="font-serif text-3xl md:text-5xl font-medium mb-10 max-w-4xl mx-auto leading-tight">
            "We don't just sell cars; we curate a lifestyle of excellence and passion for the road."
          </h2>
          <div className="flex flex-col items-center">
            <div className="h-px w-24 bg-foreground/20 mb-6" />
            <span className="font-bold uppercase tracking-widest text-sm">Prestige Imports</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1">EST 1977</span>
          </div>
        </div>
        {/* Abstract background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-50 pointer-events-none z-0" />
      </section>

      <Footer />
    </div>
  );
}
