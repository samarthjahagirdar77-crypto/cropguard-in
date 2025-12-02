import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-forest text-white">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="CropGuard" className="h-16 w-auto mb-4 bg-white rounded-lg p-2" />
            <p className="text-sm text-white/80 mb-4">
              Empowering farmers with simple, affordable crop insurance solutions. 
              Protect your harvest, secure your future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Insurance Plans", path: "/plans" },
                { name: "Premium Calculator", path: "/calculator" },
                { name: "Claim Process", path: "/claims" },
                { name: "FAQs", path: "/faqs" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>+91-8088512345</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>support@cropguard.in</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Bengaluru Rural, Karnataka</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Clock className="h-4 w-4 mt-0.5 text-primary" />
                <span>9 AM – 6 PM (Mon-Sat)</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Farmer Support</h4>
            <p className="text-sm text-white/80 mb-4">
              Need help? Our Sahayak team is here to assist you in your preferred language.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-mint-dark hover:text-white transition-colors"
            >
              Get Help Now
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2024 CropGuard. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/60">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
