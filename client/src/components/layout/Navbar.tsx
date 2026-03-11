import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import prestigeLogo from "@assets/prestige-imports-logo-removebg-preview_1765990871063.png";

const inventoryDropdown = [
  { label: "New Arrivals", href: "/inventory?filter=new" },
  { label: "Certified Pre-Owned", href: "/inventory?filter=cpo" },
  { label: "Hypercars", href: "/inventory?filter=hypercars" },
  { label: "SUVs & Lifestyle", href: "/inventory?filter=suv" },
  { label: "View All Inventory", href: "/inventory" },
];

const serviceDropdown = [
  { label: "Service Center", href: "/service" },
  { label: "Maintenance Programs", href: "/service/maintenance" },
  { label: "Detailing Services", href: "/service/detailing" },
  { label: "Concierge Pickup", href: "/service/concierge" },
];

const consignDropdown = [
  { label: "Sell Your Vehicle", href: "/consign" },
  { label: "Consignment Process", href: "/consign/process" },
  { label: "Free Appraisal", href: "/consign/appraisal" },
];

const aboutDropdown = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Contact", href: "/about/contact" },
  { label: "Careers", href: "/about/careers" },
];

interface NavItemProps {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
  isDarkTheme: boolean;
}

function NavItem({ label, href, dropdown, isDarkTheme }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!dropdown) {
    return (
      <Link 
        href={href} 
        className={cn(
          "relative py-2 px-3 font-semibold text-sm tracking-[0.15em] uppercase transition-colors duration-200",
          "hover:text-primary",
          "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200",
          "hover:after:w-full",
          isDarkTheme ? "text-white" : "text-foreground"
        )}
        data-testid={`link-${label.toLowerCase()}`}
      >
        {label}
      </Link>
    );
  }

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className={cn(
          "relative flex items-center gap-1.5 py-2 px-3 font-semibold text-sm tracking-[0.15em] uppercase transition-colors duration-200",
          "hover:text-primary",
          "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200",
          "hover:after:w-full",
          isDarkTheme ? "text-white" : "text-foreground"
        )}
        data-testid={`link-${label.toLowerCase()}`}
      >
        {label}
        <ChevronDown className={cn(
          "h-3.5 w-3.5 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      <div className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300",
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
      )}>
        <div className={cn(
          "rounded shadow-lg min-w-[200px] py-2",
          isDarkTheme ? "bg-[#1a1a1a] border border-white/10" : "bg-white border border-gray-100"
        )}>
          {dropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-5 py-2.5 text-sm font-medium tracking-wide transition-colors",
                isDarkTheme 
                  ? "text-white hover:bg-white/10 hover:text-primary" 
                  : "text-gray-700 hover:bg-gray-50 hover:text-primary"
              )}
              data-testid={`dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isHomepage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  const isDarkTheme = isHomepage ? !isScrolled : true;
  const showDarkBg = !isHomepage || isScrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isHomepage
          ? isScrolled 
            ? "bg-white shadow-sm py-3" 
            : "bg-transparent py-5"
          : "bg-[#111] py-4 border-b border-white/10"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className={cn("lg:hidden transition-colors p-2", isDarkTheme ? "text-white" : "text-foreground")}
          onClick={() => setIsMobileMenuOpen(true)}
          data-testid="button-mobile-menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo - Left Side */}
        <Link href="/" className="flex-shrink-0" data-testid="link-logo">
          <img 
            src={prestigeLogo} 
            alt="Prestige Imports" 
            className={cn(
              "transition-all duration-300 object-contain",
              isHomepage
                ? isScrolled ? "h-12 invert" : "h-16"
                : "h-12"
            )}
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-1">
          <NavItem label="Home" href="/" isDarkTheme={isDarkTheme} />
          <NavItem label="Inventory" href="/inventory" dropdown={inventoryDropdown} isDarkTheme={isDarkTheme} />
          <NavItem label="Consign" href="/consign" dropdown={consignDropdown} isDarkTheme={isDarkTheme} />
          <NavItem label="Service" href="/service" dropdown={serviceDropdown} isDarkTheme={isDarkTheme} />
          <NavItem label="Store" href="/store" isDarkTheme={isDarkTheme} />
          <NavItem label="About" href="/about" dropdown={aboutDropdown} isDarkTheme={isDarkTheme} />
        </div>

        {/* Right Side - Search & Phone */}
        <div className={cn(
          "hidden lg:flex items-center gap-4 flex-shrink-0 transition-colors duration-300",
          isDarkTheme ? "text-white" : "text-foreground"
        )}>
          <button 
            className="p-2 hover:text-primary transition-colors"
            data-testid="button-search"
          >
            <Search className="h-5 w-5" />
          </button>
          <a 
            href="tel:+13055551234" 
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold tracking-wide uppercase transition-all",
              isDarkTheme
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-primary text-white hover:bg-primary/90"
            )}
            data-testid="button-phone"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">Call Us</span>
          </a>
        </div>
        
        {/* Mobile Icons */}
        <div className={cn("lg:hidden flex items-center gap-2 transition-colors", isDarkTheme ? "text-white" : "text-foreground")}>
          <a href="tel:+13055551234" className="p-2">
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#111] z-50 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <img 
              src={prestigeLogo} 
              alt="Prestige Imports" 
              className="h-10 object-contain"
            />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white" data-testid="button-close-menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex flex-col p-6">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 text-lg font-semibold tracking-wide uppercase border-b border-white/10 text-white hover:text-primary transition-colors"
            >
              Home
            </Link>

            {/* Inventory Accordion */}
            <div className="border-b border-white/10">
              <button 
                onClick={() => toggleMobileDropdown('inventory')}
                className="flex items-center justify-between w-full py-4 text-lg font-semibold tracking-wide uppercase text-white"
              >
                Inventory
                <ChevronDown className={cn("h-5 w-5 transition-transform", mobileExpanded === 'inventory' && "rotate-180")} />
              </button>
              {mobileExpanded === 'inventory' && (
                <div className="pb-4 pl-4 space-y-3">
                  {inventoryDropdown.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white/60 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Consign Accordion */}
            <div className="border-b border-white/10">
              <button 
                onClick={() => toggleMobileDropdown('consign')}
                className="flex items-center justify-between w-full py-4 text-lg font-semibold tracking-wide uppercase text-white"
              >
                Consign
                <ChevronDown className={cn("h-5 w-5 transition-transform", mobileExpanded === 'consign' && "rotate-180")} />
              </button>
              {mobileExpanded === 'consign' && (
                <div className="pb-4 pl-4 space-y-3">
                  {consignDropdown.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white/60 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Accordion */}
            <div className="border-b border-white/10">
              <button 
                onClick={() => toggleMobileDropdown('service')}
                className="flex items-center justify-between w-full py-4 text-lg font-semibold tracking-wide uppercase text-white"
              >
                Service
                <ChevronDown className={cn("h-5 w-5 transition-transform", mobileExpanded === 'service' && "rotate-180")} />
              </button>
              {mobileExpanded === 'service' && (
                <div className="pb-4 pl-4 space-y-3">
                  {serviceDropdown.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white/60 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/store" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-4 text-lg font-semibold tracking-wide uppercase border-b border-white/10 text-white hover:text-primary transition-colors"
            >
              Store
            </Link>

            {/* About Accordion */}
            <div className="border-b border-white/10">
              <button 
                onClick={() => toggleMobileDropdown('about')}
                className="flex items-center justify-between w-full py-4 text-lg font-semibold tracking-wide uppercase text-white"
              >
                About
                <ChevronDown className={cn("h-5 w-5 transition-transform", mobileExpanded === 'about' && "rotate-180")} />
              </button>
              {mobileExpanded === 'about' && (
                <div className="pb-4 pl-4 space-y-3">
                  {aboutDropdown.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-white/60 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Phone CTA */}
            <a 
              href="tel:+13055551234" 
              className="mt-6 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded font-semibold tracking-wide uppercase"
            >
              <Phone className="h-5 w-5" />
              Call (305) 555-1234
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
