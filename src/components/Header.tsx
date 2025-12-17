import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Globe, LogOut, User } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Insurance Plans", path: "/plans" },
  { name: "Eligibility", path: "/eligibility" },
  { name: "Premium Calculator", path: "/calculator" },
  { name: "Claim Process", path: "/claims" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "kn", name: "ಕನ್ನಡ" },
  { code: "hi", name: "हिंदी" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Welcome Message & Logo */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="CropGuard Logo" className="h-12 lg:h-14 w-auto" />
            </Link>
            {isAuthenticated && user && (
              <div className="hidden sm:block text-sm font-medium text-accent animate-fade-in">
                Welcome, <span className="font-bold">{user.name}</span>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={currentLang === lang.code ? "bg-primary/20" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    {user?.name.split(" ")[0]}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="bg-accent hover:bg-forest text-accent-foreground">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-primary/50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            {/* Mobile Welcome */}
            {isAuthenticated && user && (
              <div className="px-4 py-2 mb-2 text-sm font-medium text-accent border-b">
                Welcome, <span className="font-bold">{user.name}</span>
              </div>
            )}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-2 px-4 pt-4 mt-2 border-t">
                {isAuthenticated ? (
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                ) : (
                  <>
                    <Link to="/login" className="flex-1">
                      <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                        Login
                      </Button>
                    </Link>
                    <Link to="/register" className="flex-1">
                      <Button className="w-full bg-accent hover:bg-forest" onClick={() => setIsOpen(false)}>
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
