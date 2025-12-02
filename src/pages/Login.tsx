import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

  const handleSendOTP = () => {
    if (formData.mobile.length === 10) {
      setOtpSent(true);
      toast({
        title: "OTP Sent!",
        description: "Please check your mobile for the OTP.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful!",
      description: "Redirecting to your dashboard...",
    });
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-primary/30">
        <CardHeader className="text-center">
          <img src={logo} alt="CropGuard" className="h-16 w-auto mx-auto mb-4" />
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <p className="text-muted-foreground">Login to your CropGuard account</p>
        </CardHeader>
        <CardContent>
          <Tabs value={loginMethod} onValueChange={(v) => setLoginMethod(v as "password" | "otp")}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="otp">OTP</TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      className="pl-10"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <TabsContent value="password" className="mt-0 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <Link to="/forgot-password" className="text-sm text-accent hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                </TabsContent>

                <TabsContent value="otp" className="mt-0 space-y-4">
                  {!otpSent ? (
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={handleSendOTP}
                      disabled={formData.mobile.length !== 10}
                    >
                      Send OTP
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        maxLength={6}
                        value={formData.otp}
                        onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                      />
                      <button
                        type="button"
                        className="text-sm text-accent hover:underline"
                        onClick={handleSendOTP}
                      >
                        Resend OTP
                      </button>
                    </div>
                  )}
                </TabsContent>

                <Button type="submit" className="w-full bg-accent hover:bg-forest text-white">
                  Login
                </Button>
              </div>
            </form>
          </Tabs>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-accent font-medium hover:underline">
                Register Now
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
