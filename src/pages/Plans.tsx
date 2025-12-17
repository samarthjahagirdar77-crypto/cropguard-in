import { Link } from "react-router-dom";
import { Check, Shield, Star, Crown, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";
import cropsImage from "@/assets/crops-illustration.png";

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
  {
    id: "starter",
    name: "Starter Plan",
    icon: Zap,
    description: "Entry-level coverage for new farmers",
    idealFor: "Up to 1 acre",
    sumInsured: "₹25,000",
    premium: "₹399",
    badge: "New",
    features: [
      "Basic drought protection",
      "Flood coverage",
      "SMS notifications",
      "Online claim filing",
    ],
    color: "bg-blue-500",
  },
  {
    id: "elite",
    name: "Elite Protection",
    icon: Award,
    description: "Premium coverage for commercial farms",
    idealFor: "25+ acres",
    sumInsured: "₹5,00,000",
    premium: "₹4,999",
    badge: "Elite",
    features: [
      "All Comprehensive features",
      "Multi-crop coverage",
      "Equipment protection",
      "Livestock add-on available",
      "Dedicated relationship manager",
      "Priority satellite assessment",
      "Free crop advisory",
      "Legal assistance",
    ],
    color: "bg-purple-600",
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
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <ScrollAnimation animation="fade-up">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Insurance Plans</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Choose a crop insurance plan based on your crop type, land size, and risk. All plans include government subsidy benefits.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="scale" delay={200}>
              <div className="hidden lg:flex justify-center">
                <img 
                  src={cropsImage} 
                  alt="Crops illustration" 
                  className="w-80 h-auto rounded-2xl shadow-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <ScrollAnimation key={plan.id} animation="fade-up" delay={index * 100}>
                <Card className={`relative card-hover border-2 h-full ${plan.badge === "Most Popular" ? "border-accent" : "border-primary/30"}`}>
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
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
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
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Covered Crops */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Covered Crops</h2>
              <p className="text-muted-foreground">Our insurance covers major crops grown in Karnataka and other states</p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {crops.map((crop, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 50}>
                <Card className="border-primary/30 card-hover">
                  <CardContent className="p-4 text-center">
                    <p className="font-semibold">{crop.name}</p>
                    <p className="text-sm text-muted-foreground">{crop.season}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent text-white">
        <div className="container-main text-center">
          <ScrollAnimation animation="scale">
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
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
