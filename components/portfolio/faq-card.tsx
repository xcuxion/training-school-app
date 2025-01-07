import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface IFaq {
  question: string;
  answer: string;
}

const FaqCard = ({ question, answer }: IFaq) => {
  return (
    <Accordion type="single" collapsible className="border px-4 rounded-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqCard;
