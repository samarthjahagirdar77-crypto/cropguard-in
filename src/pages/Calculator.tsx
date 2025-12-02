import { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator as CalcIcon, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const states = [
  "Karnataka",
  "Maharashtra",
  "Andhra Pradesh",
  "Tamil Nadu",
  "Telangana",
];

const crops = [
  { name: "Paddy", rate: 2 },
  { name: "Wheat", rate: 1.5 },
  { name: "Maize", rate: 2 },
  { name: "Groundnut", rate: 5 },
  { name: "Cotton", rate: 5 },
  { name: "Jowar", rate: 2 },
  { name: "Ragi", rate: 2 },
  { name: "Sugarcane", rate: 5 },
];

const plans = [
  { name: "Basic Protection", multiplier: 1, sumInsured: 50000 },
  { name: "Standard Protection", multiplier: 1.2, sumInsured: 100000 },
  { name: "Comprehensive Protection", multiplier: 1.5, sumInsured: 200000 },
];

export default function Calculator() {
  const [state, setState] = useState("");
  const [crop, setCrop] = useState("");
  const [area, setArea] = useState("");
  const [plan, setPlan] = useState("");
  const [result, setResult] = useState<{
    premium: number;
    sumInsured: number;
    subsidy: number;
    netPremium: number;
  } | null>(null);

  const calculatePremium = () => {
    if (!state || !crop || !area || !plan) return;

    const selectedCrop = crops.find((c) => c.name === crop);
    const selectedPlan = plans.find((p) => p.name === plan);

    if (!selectedCrop || !selectedPlan) return;

    const areaNum = parseFloat(area);
    const sumInsured = selectedPlan.sumInsured * areaNum;
    const basePremium = (sumInsured * selectedCrop.rate) / 100;
    const premium = basePremium * selectedPlan.multiplier;
    const subsidy = premium * 0.5; // 50% government subsidy
    const netPremium = premium - subsidy;

    setResult({
      premium: Math.round(premium),
      sumInsured,
      subsidy: Math.round(subsidy),
      netPremium: Math.round(netPremium),
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Premium Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your estimated crop insurance premium based on your crop, land area, and selected plan
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalcIcon className="w-6 h-6 text-accent" />
                  Enter Your Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="state">Select State</Label>
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="crop">Select Crop</Label>
                  <Select value={crop} onValueChange={setCrop}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your crop" />
                    </SelectTrigger>
                    <SelectContent>
                      {crops.map((c) => (
                        <SelectItem key={c.name} value={c.name}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area">Land Area (in acres)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Enter land area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    min="0.5"
                    step="0.5"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="plan">Select Plan</Label>
                  <Select value={plan} onValueChange={setPlan}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose insurance plan" />
                    </SelectTrigger>
                    <SelectContent>
                      {plans.map((p) => (
                        <SelectItem key={p.name} value={p.name}>
                          {p.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={calculatePremium}
                  className="w-full bg-accent hover:bg-forest text-white"
                  disabled={!state || !crop || !area || !plan}
                >
                  Calculate Premium
                </Button>
              </CardContent>
            </Card>

            {/* Result */}
            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle>Estimated Premium</CardTitle>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    <div className="bg-primary/30 rounded-xl p-6 text-center">
                      <p className="text-sm text-muted-foreground mb-2">Your Net Premium (after subsidy)</p>
                      <p className="text-5xl font-bold text-accent">₹{result.netPremium.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground mt-2">for {area} acre(s)</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between p-3 bg-secondary/50 rounded-lg">
                        <span className="text-muted-foreground">Sum Insured</span>
                        <span className="font-semibold">₹{result.sumInsured.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-secondary/50 rounded-lg">
                        <span className="text-muted-foreground">Gross Premium</span>
                        <span className="font-semibold">₹{result.premium.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-accent/20 rounded-lg">
                        <span className="text-muted-foreground">Government Subsidy (50%)</span>
                        <span className="font-semibold text-accent">-₹{result.subsidy.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link to="/register" className="flex-1">
                        <Button className="w-full bg-accent hover:bg-forest text-white">
                          Buy This Plan
                        </Button>
                      </Link>
                      <Link to="/contact" className="flex-1">
                        <Button variant="outline" className="w-full">
                          Talk to Sahayak
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <CalcIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Fill in the details and click "Calculate Premium" to see your estimated cost
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Note */}
          <div className="mt-8 flex items-start gap-3 p-4 bg-primary/20 rounded-lg">
            <Info className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Important Note</p>
              <p>
                This is an estimated premium for reference purposes only. Actual premium may vary based on
                specific scheme guidelines, crop variety, and district-level rates. Contact our Sahayak team
                for accurate premium calculation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
