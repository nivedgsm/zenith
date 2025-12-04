import { Plane } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-gold-dark/20">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-gold-light" />
              <span className="font-serif text-xl font-bold text-platinum-light">
                Akhurath Zenith
              </span>
            </div>
            <p className="text-platinum-light/70 font-light text-sm leading-relaxed">
              Global aviation and investment consultancy delivering strategic solutions across emerging markets.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-platinum-light font-serif font-bold">Services</h4>
            <ul className="space-y-2 text-platinum-light/70 font-light text-sm">
              <li>
                <a href="#services" className="hover:text-gold-light transition-colors">
                  Aviation Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-light transition-colors">
                  Investment Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-light transition-colors">
                  Healthcare Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-light transition-colors">
                  Training Programs
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-platinum-light font-serif font-bold">Company</h4>
            <ul className="space-y-2 text-platinum-light/70 font-light text-sm">
              <li>
                <a href="#" className="hover:text-gold-light transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-light transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-light transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-light transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-platinum-light font-serif font-bold">Contact</h4>
            <ul className="space-y-2 text-platinum-light/70 font-light text-sm">
              <li>Email: info@akhurath.com</li>
              <li>Phone: +91 (0) XXX-XXXX-XXXX</li>
              <li className="pt-2">
                <a href="#" className="text-gold-light hover:text-gold-dark transition-colors">
                  Schedule a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-dark/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-platinum-light/70 font-light text-sm">
            <p>
              © {currentYear} Akhurath Zenith Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold-light transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gold-light transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
