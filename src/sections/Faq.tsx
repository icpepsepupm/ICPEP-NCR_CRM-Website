import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is ICPEP",
    answer:
      "The Institute of Computer Engineers of the Philippines (ICpEP) is a non-stock, non-profit professional organization registered under the Securities and Exchange Commission (SEC Reg. No. 201120675). It serves as the parent organization of the ICpEP Student Edition (ICpEP.SE).",
  },
  {
    question: "What is ICpEP.SE?",
    answer:
      "The Institute of Computer Engineers of the Philippines – Student Edition (ICpEP.SE) is the official student chapter of ICpEP, established to bridge academic institutions across the country.",
  },
  {
    question: "What is ICpEP.se NCR?",
    answer:
      "The Institute of Computer Engineers of the Philippines Student Edition – National Capital Region (ICpEP.se–NCR) serves as the unifying regional body for all Computer Engineering schools and local student chapters within the National Capital Region.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "Details regarding the membership fee will be announced soon. Please stay tuned to our official announcements and updates for the latest information about fees and payment procedures.",
  },
  {
    question: "What are the benefits of joining ICpEP.se NCR?",
    answer:
      "Members enjoy access to exclusive workshops, networking opportunities with industry professionals, participation in competitions and hackathons, mentorship programs, career development resources, and a vibrant community of like-minded computer engineering students. You'll also have opportunities to develop leadership skills and contribute to meaningful projects.",
  },
  {
    question: "How do I join ICpEP.se NCR?",
    answer:
      "Membership details will be announced soon. Stay tuned through our facebook page for updates!",
  },
];

export default function Faq() {
  return (
    <main className="min-h-screen flex justify-center items-center p-8 md:p-24">
      <section className="container max-w-4xl">
        <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {/* Header */}
          <div className="w-full flex flex-col justify-center gap-4 lg:gap-8">
            <h2 className="w-full text-center text-xl md:text-2xl lg:text-4xl font-extrabold text-primary text-glow tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs md:text-sm lg:text-lg text-foreground/60 mx-auto max-w-2xl text-center">
              Find answers to common questions about ICpEP.se NCR, membership,
              events, and more.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-primary/20 rounded-lg px-4 md:px-6 bg-card/50 hover:bg-card/70 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 md:py-6">
                    <span className="text-sm md:text-base lg:text-lg font-bold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 text-sm md:text-base leading-relaxed pb-4 md:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
