import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, FileText, User, MapPin, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";

const eligibilityRequirements = [
  {
    icon: User,
    title: "Farmer Types Eligible",
    items: [
      "Owner farmers with land records",
      "Tenant farmers with valid lease agreement",
      "Sharecroppers with proof of cultivation",
    ],
  },
  {
    icon: FileText,
    title: "Documents Required",
    items: [
      "Land ownership documents (RTC/Pahani)",
      "Identity proof (Aadhaar Card)",
      "Bank account details (for claim transfer)",
      "Crop sowing certificate (from Gram Panchayat)",
    ],
  },
  {
    icon: MapPin,
    title: "Land Requirements",
    items: [
      "Land survey number / Khasra number",
      "Clear ownership or tenancy records",
      "Land should be used for cultivation",
    ],
  },
  {
    icon: Wheat,
    title: "Crop Requirements",
    items: [
      "Crop should be notified under insurance scheme",
      "Crop type and variety declaration",
      "Sowing must be done within notified dates",
    ],
  },
];

const checklistItems = [
  { id: "land", label: "I have land documents (RTC/Pahani/Patta)" },
  { id: "aadhaar", label: "I have Aadhaar card" },
  { id: "bank", label: "I have a bank account" },
  { id: "crop", label: "I know my crop type and area" },
  { id: "season", label: "I am planning to sow in the upcoming season" },
];

export default function Eligibility() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheck = (id: string, checked: boolean) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    }
  };

  const allChecked = checkedItems.length === checklistItems.length;

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Check Your Eligibility</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find out if you qualify for crop insurance and what documents you need to apply
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Who Can Apply for Crop Insurance?</h2>
              <p className="text-muted-foreground">All farmers cultivating notified crops are eligible</p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8">
            {eligibilityRequirements.map((req, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <Card className="border-primary/30 card-hover h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <req.icon className="w-5 h-5 text-forest" />
                      </div>
                      {req.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {req.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollAnimation animation="scale">
            <div className="max-w-2xl mx-auto">
              <Card className="border-primary/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Quick Eligibility Check</CardTitle>
                  <p className="text-muted-foreground">
                    Answer these simple questions to check if you're eligible
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {checklistItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 transition-colors hover:bg-secondary">
                        <Checkbox
                          id={item.id}
                          checked={checkedItems.includes(item.id)}
                          onCheckedChange={(checked) => handleCheck(item.id, checked as boolean)}
                        />
                        <label
                          htmlFor={item.id}
                          className="text-sm font-medium cursor-pointer flex-1"
                        >
                          {item.label}
                        </label>
                        {checkedItems.includes(item.id) ? (
                          <CheckCircle className="w-5 h-5 text-accent" />
                        ) : (
                          <XCircle className="w-5 h-5 text-muted-foreground/30" />
                        )}
                      </div>
                    ))}
                  </div>

                  {allChecked ? (
                    <div className="text-center p-4 bg-primary/30 rounded-lg mb-4 animate-fade-in">
                      <CheckCircle className="w-12 h-12 text-accent mx-auto mb-2" />
                      <p className="font-semibold text-accent">
                        Great! You appear to be eligible for crop insurance.
                      </p>
                    </div>
                  ) : (
                    <div className="text-center p-4 bg-muted rounded-lg mb-4">
                      <p className="text-muted-foreground">
                        Please check all items to confirm your eligibility
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/plans" className="flex-1">
                      <Button className="w-full bg-accent hover:bg-forest text-white" disabled={!allChecked}>
                        View Insurance Plans
                      </Button>
                    </Link>
                    <Link to="/contact" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Need Help? Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <ScrollAnimation animation="fade-up">
            <div className="bg-primary/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Eligibility may vary based on state and scheme guidelines
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Government subsidy is available for eligible farmers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Final eligibility is confirmed after document verification
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  Contact our Sahayak team for personalized assistance
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
