import { Shield, Target, Heart, Users, Award, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "Clear policies with no hidden terms. You know exactly what you're getting.",
  },
  {
    icon: Heart,
    title: "Farmer First",
    description: "Every decision we make is centered around the farmer's benefit.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Simple processes and local language support for all farmers.",
  },
];

const stats = [
  { number: "50,000+", label: "Farmers Covered" },
  { number: "₹100Cr+", label: "Claims Settled" },
  { number: "15+", label: "Districts Served" },
  { number: "98%", label: "Satisfaction Rate" },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About CropGuard</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering farmers with simple, transparent, and affordable crop insurance solutions
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                CropGuard is a dedicated platform helping farmers access crop insurance in a simple and transparent way. We understand the challenges farmers face – unpredictable weather, pest attacks, and market uncertainties.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our goal is to reduce the financial risk farmers face due to uncertain weather and crop failure. We work with government schemes and insurance providers to bring you the best coverage at the most affordable rates.
              </p>
              <p className="text-lg text-muted-foreground">
                Founded by agricultural experts and technology professionals, we combine deep understanding of farming with modern digital tools to make insurance accessible to every farmer.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="w-24 h-24 text-forest" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-main">
          <div className="bg-accent text-white rounded-3xl p-8 sm:p-12 text-center">
            <Target className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              "To empower every farmer with affordable, easy-to-understand crop insurance solutions that protect their livelihood and secure their family's future."
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-primary/30">
                <CardContent className="p-6">
                  <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Farmers Trust Us</h2>
            <p className="text-muted-foreground">Our core values guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover gradient-card border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-forest" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Sahayak Network</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We have a dedicated network of Sahayaks (helpers) across Karnataka who speak your language and understand your farming needs. They are available to:
              </p>
              <ul className="space-y-3">
                {[
                  "Help you understand insurance policies",
                  "Assist with enrollment and documentation",
                  "Guide you through the claim process",
                  "Provide weather and crop advisories",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-forest" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-primary/30">
              <CardContent className="p-8 text-center">
                <Headphones className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Our Sahayak team is available Monday to Saturday, 9 AM to 6 PM
                </p>
                <p className="text-2xl font-bold text-accent">+91-8088512345</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
