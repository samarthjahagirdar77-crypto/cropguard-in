import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is crop insurance?",
        a: "Crop insurance is a financial protection scheme that compensates farmers when their crops fail due to natural calamities like drought, flood, pest attacks, or diseases. It helps farmers recover from losses and continue farming.",
      },
      {
        q: "Who can buy crop insurance?",
        a: "All eligible farmers including owner farmers, tenant farmers, and sharecroppers can buy crop insurance. You need to have valid land documents or cultivation proof to apply.",
      },
      {
        q: "Which crops are covered under insurance?",
        a: "Major food crops (paddy, wheat, maize, jowar, ragi), oilseeds (groundnut, sunflower), commercial crops (cotton, sugarcane), and horticultural crops grown in your region are covered. The specific list depends on your state and district notifications.",
      },
      {
        q: "Is crop insurance mandatory?",
        a: "Crop insurance is mandatory for farmers who have taken crop loans from banks. For other farmers, it is voluntary but highly recommended to protect against unforeseen losses.",
      },
    ],
  },
  {
    category: "Premium & Subsidy",
    questions: [
      {
        q: "How much premium do I need to pay?",
        a: "Premium rates vary by crop type: 2% for Kharif crops, 1.5% for Rabi crops, and 5% for commercial/horticultural crops. Use our Premium Calculator to get an accurate estimate for your specific situation.",
      },
      {
        q: "Do I get subsidy from the government?",
        a: "Yes! The central and state governments provide substantial subsidy on crop insurance premiums. Small and marginal farmers may get up to 50% or more subsidy depending on the scheme and state policies.",
      },
      {
        q: "When do I need to pay the premium?",
        a: "Premium must be paid before the cutoff date announced for each cropping season. For Kharif season, it's usually by July-August, and for Rabi season, it's by December-January.",
      },
      {
        q: "Can I pay premium in installments?",
        a: "Currently, the premium needs to be paid in full at the time of enrollment. However, our Sahayak team can guide you on available financing options if needed.",
      },
    ],
  },
  {
    category: "Claims",
    questions: [
      {
        q: "How will I receive the claim amount?",
        a: "The claim amount is transferred directly to your registered bank account after approval. Make sure your bank details are correct and updated in your policy.",
      },
      {
        q: "How long does claim settlement take?",
        a: "After reporting crop loss, field inspection is done within 7-14 days. Once approved, the claim amount is typically settled within 15-30 days after documentation is complete.",
      },
      {
        q: "What if my claim is rejected?",
        a: "If your claim is rejected, you will receive a detailed explanation. You can appeal the decision within 30 days by providing additional evidence or documentation. Our Sahayak team can help you with the appeal process.",
      },
      {
        q: "Can I track my claim status?",
        a: "Yes! You can track your claim status through your farmer dashboard on our website, via SMS updates, or by calling our helpline.",
      },
    ],
  },
  {
    category: "Enrollment & Documents",
    questions: [
      {
        q: "What documents do I need for enrollment?",
        a: "You need: 1) Land ownership documents (RTC/Pahani/Patta), 2) Aadhaar card, 3) Bank account details with passbook copy, 4) Passport size photo. Tenant farmers also need a lease agreement.",
      },
      {
        q: "Can tenant farmers apply for insurance?",
        a: "Yes, tenant farmers and sharecroppers can apply for crop insurance. They need to provide a valid lease agreement or a declaration from the land owner along with land documents.",
      },
      {
        q: "How do I enroll for crop insurance?",
        a: "You can enroll through: 1) Our website (register and complete KYC), 2) Visit your nearest bank branch, 3) Common Service Centers (CSC), or 4) Contact our Sahayak team for assistance.",
      },
      {
        q: "Can I insure multiple crops?",
        a: "Yes, you can insure multiple crops under separate policies. Each crop and land parcel needs to be enrolled separately with the appropriate plan.",
      },
    ],
  },
];

export default function FAQs() {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-main text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about crop insurance
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-card">
        <div className="container-main">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-accent" />
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${catIndex}-${index}`}
                      className="bg-white border border-primary/30 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding">
        <div className="container-main">
          <div className="bg-accent text-white rounded-3xl p-8 sm:p-12 text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Our Sahayak team is here to help you understand everything about crop insurance
              in your preferred language.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-mint-dark hover:text-white">
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+918088512345">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
                  Call: +91-8088512345
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
