import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-widest uppercase">Prestige Imports</h3>
              <span className="block text-xs tracking-[0.3em] text-primary font-bold uppercase mt-2">
                EST 1977
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Experience the pinnacle of automotive engineering and luxury. 
              We are dedicated to providing an exceptional ownership experience.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Discover</h4>
            <ul className="space-y-4 text-sm font-medium tracking-wide">
              <li><Link href="/inventory" className="hover:text-primary transition-colors">New Inventory</Link></li>
              <li><Link href="/pre-owned" className="hover:text-primary transition-colors">Pre-Owned</Link></li>
              <li><Link href="/classics" className="hover:text-primary transition-colors">Classics</Link></li>
              <li><Link href="/financing" className="hover:text-primary transition-colors">Financing</Link></li>
              <li><Link href="/specials" className="hover:text-primary transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          {/* Service Column */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Ownership</h4>
            <ul className="space-y-4 text-sm font-medium tracking-wide">
              <li><Link href="/service" className="hover:text-primary transition-colors">Service Center</Link></li>
              <li><Link href="/parts" className="hover:text-primary transition-colors">Genuine Parts</Link></li>
              <li><Link href="/accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link href="/lifestyle" className="hover:text-primary transition-colors">Lifestyle</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Contact</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-white/80">
                  123 Luxury Drive<br />
                  Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-white/80">+1 (888) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-white/80">concierge@prestigeimports.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Prestige Imports. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
