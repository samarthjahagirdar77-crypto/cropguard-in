import { Link } from "react-router-dom";
import { Shield, Droplets, Bug, CloudRain, ArrowRight, CheckCircle, Users, Clock, Languages } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Shield,
    title: "Low Premiums",
    description: "Affordable premiums especially for small & marginal farmers",
  },
  {
    icon: Clock,
    title: "Fast Claims",
    description: "Transparent and quick claim settlement process",
  },
  {
    icon: Languages,
    title: "Local Language",
    description: "Support available in English, Kannada, and Hindi",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Sahayak team to guide you at every step",
  },
];

const coverageItems = [
  { icon: CloudRain, text: "Drought & Flood Protection" },
  { icon: Bug, text: "Pest & Disease Coverage" },
  { icon: Droplets, text: "Excess Rainfall Protection" },
];

const steps = [
  { number: "1", title: "Check Eligibility", description: "Verify if you qualify for crop insurance" },
  { number: "2", title: "Choose a Plan", description: "Select the best plan for your needs" },
  { number: "3", title: "Buy Policy & Relax", description: "Complete payment and get covered" },
];

const testimonials = [
  {
    quote: "CropGuard helped me understand crop insurance in simple terms. The claim process was smooth when my paddy crop was damaged by floods.",
    name: "Ramappa",
    location: "Raichur, Karnataka",
  },
  {
    quote: "I was skeptical about insurance, but the low premium and Kannada support made it easy. Got my claim within 3 weeks!",
    name: "Lakshmi",
    location: "Mandya, Karnataka",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              {/* Logo with animation */}
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src={logo} 
                  alt="CropGuard Logo" 
                  className="h-16 sm:h-20 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Secure Your Harvest.{" "}
                <span className="text-gradient">Protect Your Future.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl">
                Simple and affordable crop insurance for farmers to reduce financial risk from crop loss due to natural calamities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/plans">
                  <Button className="btn-secondary text-lg px-8 py-6">
                    Buy Insurance
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/eligibility">
                  <Button variant="outline" className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-white">
                    Check Eligibility
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center animate-float">
              <div className="relative">
                <div className="w-80 h-80 bg-accent/20 rounded-full absolute -top-4 -right-4" />
                <div className="w-72 h-72 bg-primary rounded-full flex items-center justify-center relative">
                  <Shield className="w-32 h-32 text-forest" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Crop Insurance */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Do Farmers Need Crop Insurance?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Protect yourself from unforeseen losses and ensure financial stability for your family.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6">
            {coverageItems.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <Card className="card-hover gradient-card border-primary/30 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-forest" />
                    </div>
                    <p className="font-medium text-lg">{item.text}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="mt-8 bg-primary/30 rounded-2xl p-6 sm:p-8">
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Protects against crop failure due to drought, flood, pests, or disease",
                  "Provides financial support for re-sowing and recovery",
                  "Reduces stress and dependency on loans",
                  "Government subsidy available on premiums",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground">Three simple steps to protect your crops</p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 150}>
                <div className="text-center relative">
                  <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-10 -right-4 w-8 h-8 text-primary" />
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-muted-foreground">What makes CropGuard special</p>
            </div>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <Card className="card-hover border-primary/30 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-forest" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Farmers Say</h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} animation={index === 0 ? "slide-left" : "slide-right"} delay={index * 100}>
                <Card className="gradient-card border-primary/30 h-full">
                  <CardContent className="p-6">
                    <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold">{testimonial.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Protect Your Crops?</h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Join thousands of farmers who have secured their harvest with CropGuard
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/plans">
                <Button className="bg-primary text-primary-foreground hover:bg-mint-dark hover:text-white text-lg px-8 py-6">
                  View Insurance Plans
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-accent">
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
