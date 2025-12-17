import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Phone, KeyRound, User, Shield, Leaf, CloudRain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

export default function Login() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
  });

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData({ ...formData, mobile: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return;
    }

    if (formData.mobile.length !== 10) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.password) {
      toast({
        title: "Password Required",
        description: "Please enter your password.",
        variant: "destructive",
      });
      return;
    }

    // Login and redirect to home
    login(formData.name, formData.mobile);
    
    toast({
      title: "Login Successful!",
      description: `Welcome back, ${formData.name}!`,
    });
    
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding (Hidden on mobile/tablet) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-accent via-mint-dark to-forest relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
        
        <div className="flex flex-col items-center justify-center w-full p-12 text-white relative z-10">
          {/* Logo area */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6">
              <Shield className="w-14 h-14 text-white" />
            </div>
          </div>
          
          {/* Tagline */}
          <h1 className="text-4xl xl:text-5xl font-bold text-center mb-4 leading-tight">
            Secure Your Harvest
          </h1>
          <p className="text-xl text-white/90 text-center max-w-md mb-8">
            Protect your future with simple and affordable crop insurance
          </p>
          
          {/* Feature highlights */}
          <div className="space-y-4 w-full max-w-sm">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-sm">Complete protection against crop loss</span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="text-sm">Government subsidized premiums</span>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <CloudRain className="w-5 h-5" />
              </div>
              <span className="text-sm">Weather risk notifications</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-primary/20 via-background to-primary/30 relative">
        {/* Mobile decorative circles */}
        <div className="lg:hidden absolute top-10 right-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
        <div className="lg:hidden absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="w-full max-w-[420px] bg-card/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 relative z-10">
          {/* Logo & Branding */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-3">
              <img 
                src={logo} 
                alt="CropGuard Logo" 
                className="h-16 sm:h-20 w-auto drop-shadow-md"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
              Welcome Back
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Login to your CropGuard account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name <span className="text-muted-foreground">(ಹೆಸರು)</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10 h-12 rounded-xl border-border/50 focus:border-accent focus:ring-accent/20"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Mobile Number Field */}
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-sm font-medium">
                Mobile Number <span className="text-muted-foreground">(ಮೊಬೈಲ್)</span>
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter 10-digit mobile number"
                  className="pl-10 h-12 rounded-xl border-border/50 focus:border-accent focus:ring-accent/20"
                  value={formData.mobile}
                  onChange={handleMobileChange}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-12 h-12 rounded-xl border-border/50 focus:border-accent focus:ring-accent/20"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Remember me & Forgot password row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label 
                  htmlFor="remember" 
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <Link 
                to="/forgot-password" 
                className="text-sm text-accent hover:text-mint-dark hover:underline transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-accent hover:bg-mint-dark text-accent-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base"
              disabled={!formData.name || formData.mobile.length !== 10 || !formData.password}
            >
              Login
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link 
                to="/register" 
                className="text-accent font-semibold hover:text-mint-dark hover:underline transition-colors"
              >
                Register Now
              </Link>
            </p>
          </div>

          {/* Language hint */}
          <p className="mt-4 text-xs text-center text-muted-foreground">
            ಸಹಾಯಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ: +91-8088512345
          </p>
        </div>
      </div>
    </div>
  );
}
