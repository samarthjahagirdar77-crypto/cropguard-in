import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Building2, 
  Smartphone, 
  CreditCard, 
  CheckCircle,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import { useToast } from "@/hooks/use-toast";

const paymentMethods = [
  {
    id: "upi",
    name: "UPI",
    description: "Pay using any UPI app",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png",
    color: "bg-orange-50 border-orange-200",
  },
  {
    id: "gpay",
    name: "Google Pay",
    description: "Fast & secure payments",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: "phonepe",
    name: "PhonePe",
    description: "India's payment app",
    icon: "https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png",
    color: "bg-purple-50 border-purple-200",
  },
  {
    id: "netbanking",
    name: "Net Banking",
    description: "All major banks supported",
    icon: null,
    iconComponent: Building2,
    color: "bg-green-50 border-green-200",
  },
  {
    id: "bank",
    name: "Bank Transfer",
    description: "Direct bank transfer (NEFT/RTGS)",
    icon: null,
    iconComponent: CreditCard,
    color: "bg-slate-50 border-slate-200",
  },
];

const banks = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Punjab National Bank",
  "Bank of Baroda",
  "Canara Bank",
  "Union Bank of India",
];

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [upiId, setUpiId] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const plan = location.state?.plan || {
    name: "Standard Protection",
    premium: "₹1,200",
    sumInsured: "₹1,00,000",
  };

  // Parse premium amount from string (e.g., "₹1,200" → 1200)
  const parsePremium = (premiumStr: string): number => {
    return parseInt(premiumStr.replace(/[₹,]/g, ""), 10) || 0;
  };

  const premiumAmount = parsePremium(plan.premium);
  const gstRate = 0.18;
  const gstAmount = Math.round(premiumAmount * gstRate);
  const totalAmount = premiumAmount + gstAmount;

  const formatCurrency = (amount: number): string => {
    return `₹${amount.toLocaleString("en-IN")}`
  };

  const handlePayment = () => {
    if (!selectedMethod) {
      toast({
        title: "Select Payment Method",
        description: "Please select a payment method to continue",
        variant: "destructive",
      });
      return;
    }

    if (selectedMethod === "upi" && !upiId) {
      toast({
        title: "Enter UPI ID",
        description: "Please enter your UPI ID to continue",
        variant: "destructive",
      });
      return;
    }

    if (selectedMethod === "netbanking" && !selectedBank) {
      toast({
        title: "Select Bank",
        description: "Please select your bank to continue",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Payment Successful!",
        description: "Your insurance policy has been activated.",
      });
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      {/* Header */}
      <div className="bg-card shadow-sm sticky top-0 z-50">
        <div className="container-main py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold">Payment</h1>
          </div>
        </div>
      </div>

      <div className="container-main py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Methods */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollAnimation animation="fade-up">
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-accent" />
                    Select Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedMethod === method.id
                          ? "border-accent bg-accent/5 shadow-md"
                          : `${method.color} hover:border-accent/50`
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm">
                          {method.icon ? (
                            <img
                              src={method.icon}
                              alt={method.name}
                              className="w-10 h-10 object-contain"
                            />
                          ) : method.iconComponent ? (
                            <method.iconComponent className="w-8 h-8 text-accent" />
                          ) : null}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{method.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedMethod === method.id
                              ? "border-accent bg-accent"
                              : "border-muted-foreground/30"
                          }`}
                        >
                          {selectedMethod === method.id && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </div>

                      {/* UPI Input */}
                      {selectedMethod === "upi" && method.id === "upi" && (
                        <div className="mt-4 pt-4 border-t">
                          <Label htmlFor="upi">Enter UPI ID</Label>
                          <Input
                            id="upi"
                            placeholder="yourname@upi"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            className="mt-2"
                          />
                        </div>
                      )}

                      {/* Bank Selection */}
                      {selectedMethod === "netbanking" && method.id === "netbanking" && (
                        <div className="mt-4 pt-4 border-t">
                          <Label>Select Your Bank</Label>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            {banks.map((bank) => (
                              <div
                                key={bank}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedBank(bank);
                                }}
                                className={`p-3 rounded-lg border text-sm cursor-pointer transition-colors ${
                                  selectedBank === bank
                                    ? "border-accent bg-accent/10"
                                    : "border-muted hover:border-accent/50"
                                }`}
                              >
                                {bank}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* GPay/PhonePe info */}
                      {(selectedMethod === "gpay" || selectedMethod === "phonepe") && 
                       (method.id === "gpay" || method.id === "phonepe") && 
                       selectedMethod === method.id && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Smartphone className="h-4 w-4" />
                            <span>You will be redirected to {method.name} app</span>
                          </div>
                        </div>
                      )}

                      {/* Bank Transfer info */}
                      {selectedMethod === "bank" && method.id === "bank" && (
                        <div className="mt-4 pt-4 border-t space-y-2">
                          <p className="text-sm font-medium">Bank Details:</p>
                          <div className="bg-secondary/50 rounded-lg p-3 text-sm space-y-1">
                            <p><span className="text-muted-foreground">Account Name:</span> CropGuard Insurance Ltd</p>
                            <p><span className="text-muted-foreground">Account No:</span> 1234567890123456</p>
                            <p><span className="text-muted-foreground">IFSC Code:</span> SBIN0001234</p>
                            <p><span className="text-muted-foreground">Bank:</span> State Bank of India</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <ScrollAnimation animation="fade-up" delay={200}>
              <Card className="border-accent sticky top-24">
                <CardHeader className="bg-accent/10 rounded-t-lg">
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Plan</span>
                      <span className="font-medium">{plan.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sum Insured</span>
                      <span className="font-medium">{plan.sumInsured}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Premium (per acre)</span>
                      <span className="font-medium">{plan.premium}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">GST (18%)</span>
                      <span className="font-medium">{formatCurrency(gstAmount)}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Amount</span>
                      <span className="text-2xl font-bold text-accent">{formatCurrency(totalAmount)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">
                      (Inclusive of all taxes)
                    </p>
                  </div>
                  <Button 
                    className="w-full bg-accent hover:bg-forest text-white h-12 text-base"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Pay ${formatCurrency(totalAmount)}`}
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Shield className="h-3 w-3" />
                    <span>100% Secure Payment</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}