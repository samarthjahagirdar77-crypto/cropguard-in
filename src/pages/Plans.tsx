import { Link } from "react-router-dom";
import { Check, Shield, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    id: "basic",
    name: "Basic Protection",
    icon: Shield,
    description: "Essential coverage for small farmers",
    idealFor: "1-3 acres",
    sumInsured: "₹50,000",
    premium: "₹750",
    badge: null,
    features: [
      "Drought protection",
      "Flood damage coverage",
      "Pest attack coverage",
      "Basic claim support",
      "SMS alerts",
    ],
    color: "bg-primary",
  },
  {
    id: "standard",
    name: "Standard Protection",
    icon: Star,
    description: "Comprehensive coverage for medium farmers",
    idealFor: "3-10 acres",
    sumInsured: "₹1,00,000",
    premium: "₹1,200",
    badge: "Most Popular",
    features: [
      "All Basic features",
      "Weather-based coverage",
      "Disease protection",
      "Priority claim processing",
      "Dedicated Sahayak support",
      "Weather risk notifications",
    ],
    color: "bg-accent",
  },
  {
    id: "comprehensive",
    name: "Comprehensive Protection",
    icon: Crown,
    description: "Maximum protection for large farmers",
    idealFor: "10+ acres",
    sumInsured: "₹2,00,000",
    premium: "₹2,500",
    badge: "Premium",
    features: [
      "All Standard features",
      "Post-harvest loss coverage",
      "Market price protection",
      "Express claim settlement",
      "24/7 priority support",
      "Personal account manager",
      "Annual health checkup",
    ],
    color: "bg-forest",
  },
];

const crops = [
  { name: "Paddy (Rice)", season: "Kharif" },
  { name: "Wheat", season: "Rabi" },
  { name: "Maize", season: "Kharif/Rabi" },
  { name: "Groundnut", season: "Kharif" },
  { name: "Cotton", season: "Kharif" },
  { name: "Jowar", season: "Kharif/Rabi" },
  { name: "Ragi", season: "Kharif" },
  { name: "Sugarcane", season: "Annual" },
];

export default function Plans() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Insurance Plans</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose a crop insurance plan based on your crop type, land size, and risk. All plans include government subsidy benefits.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative card-hover border-2 ${plan.badge === "Most Popular" ? "border-accent" : "border-primary/30"}`}>
                {plan.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white">
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted-foreground">Sum Insured (per acre)</p>
                    <p className="text-4xl font-bold text-accent">{plan.sumInsured}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Starting from <span className="font-semibold">{plan.premium}/acre</span>
                    </p>
                    <p className="text-xs text-muted-foreground">Ideal for: {plan.idealFor}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/calculator">
                    <Button className="w-full bg-accent hover:bg-forest text-white">
                      Calculate Premium
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Covered Crops */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Covered Crops</h2>
            <p className="text-muted-foreground">Our insurance covers major crops grown in Karnataka and other states</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {crops.map((crop, index) => (
              <Card key={index} className="border-primary/30">
                <CardContent className="p-4 text-center">
                  <p className="font-semibold">{crop.name}</p>
                  <p className="text-sm text-muted-foreground">{crop.season}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Plan to Choose?</h2>
          <p className="text-lg mb-8 text-white/80">
            Our Sahayak team can help you select the best plan based on your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/calculator">
              <Button className="bg-primary text-primary-foreground hover:bg-mint-dark hover:text-white">
                Calculate Your Premium
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
                Talk to Sahayak
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
