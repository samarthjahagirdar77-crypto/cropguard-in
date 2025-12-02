import { Link } from "react-router-dom";
import { AlertTriangle, FileText, Search, CreditCard, Clock, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const claimSteps = [
  {
    icon: AlertTriangle,
    title: "Report Crop Loss",
    description: "Inform us within 72 hours of crop damage through helpline, app, or nearest center",
    timeline: "Within 72 hours",
  },
  {
    icon: FileText,
    title: "Submit Claim Form",
    description: "Fill the claim form online or at the nearest help center with required documents",
    timeline: "1-3 days",
  },
  {
    icon: Search,
    title: "Field Inspection",
    description: "Authorized officer visits your field to assess the damage",
    timeline: "7-14 days",
  },
  {
    icon: CreditCard,
    title: "Claim Settlement",
    description: "After approval, claim amount is transferred directly to your bank account",
    timeline: "15-30 days",
  },
];

const documentsRequired = [
  "Policy certificate / Policy number",
  "Land ownership documents (RTC/Pahani)",
  "Aadhaar card",
  "Bank account details",
  "Photos of damaged crop (if available)",
  "Crop sowing certificate",
  "Loss declaration form",
];

const claimReasons = [
  "Drought (inadequate rainfall)",
  "Flood / Excess rainfall",
  "Pest attack",
  "Disease outbreak",
  "Hailstorm",
  "Cyclone / Storm",
  "Fire",
  "Landslide",
];

export default function Claims() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Claim Process</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple and transparent claim process to help you recover from crop loss quickly
          </p>
        </div>
      </section>

      {/* When to Claim */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">When Can I File a Claim?</h2>
            <p className="text-muted-foreground">You can file a claim for crop loss due to any of these reasons</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {claimReasons.map((reason, index) => (
              <Card key={index} className="border-primary/30">
                <CardContent className="p-4 text-center">
                  <AlertTriangle className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium">{reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Claim Process Steps</h2>
            <p className="text-muted-foreground">Follow these simple steps to file your claim</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimSteps.map((step, index) => (
              <Card key={index} className="relative card-hover border-primary/30">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <CardContent className="pt-8 p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <div className="flex items-center gap-2 text-xs text-accent">
                    <Clock className="w-4 h-4" />
                    <span>{step.timeline}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Documents Required</h2>
              <p className="text-muted-foreground mb-6">
                Keep these documents ready for a smooth claim process
              </p>
              <ul className="space-y-3">
                {documentsRequired.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-accent bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Phone className="w-6 h-6" />
                  Need Help Filing a Claim?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our Sahayak team is ready to assist you throughout the claim process.
                  Call us immediately after crop loss for faster processing.
                </p>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-sm text-muted-foreground">Helpline Number</p>
                  <p className="text-2xl font-bold text-accent">+91-8088512345</p>
                  <p className="text-sm text-muted-foreground mt-1">Available 24/7 for claim reporting</p>
                </div>
                <Link to="/login">
                  <Button className="w-full bg-accent hover:bg-forest text-white">
                    File a Claim Online
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-main">
          <div className="bg-primary/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Expected Claim Timeline</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">72 hrs</p>
                <p className="text-sm text-muted-foreground">Report Loss</p>
              </div>
              <div className="text-2xl text-muted-foreground">→</div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">7-14 days</p>
                <p className="text-sm text-muted-foreground">Inspection</p>
              </div>
              <div className="text-2xl text-muted-foreground">→</div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">15-30 days</p>
                <p className="text-sm text-muted-foreground">Settlement</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              * Timeline may vary based on the extent of damage and documentation completeness
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
