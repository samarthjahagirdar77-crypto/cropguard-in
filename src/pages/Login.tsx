import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Phone, KeyRound, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

export default function Login() {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"password" | "otp">("password");
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData({ ...formData, mobile: value });
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setFormData({ ...formData, otp: value });
  };

  const handleSendOTP = () => {
    if (formData.mobile.length === 10) {
      setIsLoading(true);
      setTimeout(() => {
        setOtpSent(true);
        setIsLoading(false);
        toast({
          title: "OTP Sent!",
          description: "Please check your mobile for the 6-digit OTP.",
        });
      }, 1000);
    } else {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.mobile.length !== 10) {
      toast({
        title: "Invalid Mobile Number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    if (loginMethod === "password" && !formData.password) {
      toast({
        title: "Password Required",
        description: "Please enter your password.",
        variant: "destructive",
      });
      return;
    }

    if (loginMethod === "otp" && formData.otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Login Successful!",
      description: "Redirecting to your dashboard...",
    });
  };

  const handleTabChange = (method: "password" | "otp") => {
    setLoginMethod(method);
    setOtpSent(false);
    setFormData({ ...formData, otp: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/30 via-primary/50 to-mint-dark/30">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-mint-dark/20 rounded-full blur-3xl" />
      
      <Card className="w-full max-w-[420px] md:max-w-[450px] border-0 shadow-2xl rounded-3xl bg-card/95 backdrop-blur-sm relative z-10">
        <CardContent className="p-6 sm:p-8">
          {/* Logo & Branding */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-3">
              <img 
                src={logo} 
                alt="CropGuard Logo" 
                className="h-20 w-auto drop-shadow-md"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
              Welcome Back
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Login to your CropGuard account
            </p>
          </div>

          {/* Tab Switcher - Pill Style */}
          <div className="bg-muted rounded-full p-1 flex mb-6">
            <button
              type="button"
              onClick={() => handleTabChange("password")}
              className={`flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                loginMethod === "password"
                  ? "bg-accent text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Password
            </button>
            <button
              type="button"
              onClick={() => handleTabChange("otp")}
              className={`flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                loginMethod === "otp"
                  ? "bg-accent text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              OTP
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Mobile Number Field */}
            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-sm font-medium">
                Mobile Number <span className="text-muted-foreground">(ಮೊಬೈಲ್)</span>
              </Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
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
                {loginMethod === "otp" && (
                  <Button
                    type="button"
                    onClick={handleSendOTP}
                    disabled={formData.mobile.length !== 10 || isLoading}
                    className="h-12 px-4 bg-accent hover:bg-mint-dark text-white rounded-xl whitespace-nowrap"
                  >
                    {isLoading ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : otpSent ? (
                      "Resend"
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-1" />
                        Get OTP
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>

            {/* Password Tab Content */}
            {loginMethod === "password" && (
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
                <div className="text-right">
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-accent hover:text-mint-dark hover:underline transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            )}

            {/* OTP Tab Content */}
            {loginMethod === "otp" && otpSent && (
              <div className="space-y-2 animate-fade-in">
                <Label htmlFor="otp" className="text-sm font-medium">
                  OTP <span className="text-muted-foreground">(ಒಟಿಪಿ)</span>
                </Label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter 6-digit OTP"
                    className="pl-10 h-12 rounded-xl border-border/50 focus:border-accent focus:ring-accent/20 tracking-widest text-center text-lg font-semibold"
                    maxLength={6}
                    value={formData.otp}
                    onChange={handleOtpChange}
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  OTP sent to +91 {formData.mobile}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-accent hover:bg-mint-dark text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base"
              disabled={
                formData.mobile.length !== 10 ||
                (loginMethod === "password" && !formData.password) ||
                (loginMethod === "otp" && (!otpSent || formData.otp.length !== 6))
              }
            >
              {loginMethod === "password" ? "Login" : "Login with OTP"}
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
        </CardContent>
      </Card>
    </div>
  );
}
