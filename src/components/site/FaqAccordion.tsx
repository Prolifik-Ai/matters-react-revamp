import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FaqAccordion() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="rounded-3xl bg-card px-6 shadow-card sm:px-8">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`}>
            <AccordionTrigger className="font-display text-base font-semibold text-teal-deep sm:text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer && (
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              )}
              {faq.list && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
