import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I manage unexpected delays in construction?",
    answer:
      "At BrickMason, we pride ourselves on timely delivery and effective project management. While unexpected delays can happen due to various factors like weather or unforeseen site conditions, we handle them through clear communication, detailed scheduling, and regular updates to keep your project on track."
  },
  {
    question: "Do BrickMason packages include help with approvals if needed?",
    answer:
      "Yes! At BrickMason, we offer end-to-end solutions. While we don’t handle approvals directly, our verified construction partners guide you through every step of the approval process to ensure a smooth experience."
  },
  {
    question: "Does BrickMason provide loans as well?",
    answer:
      "BrickMason assists clients with documentation required for loan approvals. We collaborate with multiple banking partners and NBFCs to help you secure financing easily and at competitive interest rates."
  },
  {
    question: "Are there any hidden fees when using BrickMason?",
    answer:
      "Transparency is our core principle. BrickMason provides a detailed cost breakdown of materials, labor, and services upfront. There are no hidden charges — you’ll always know what you’re paying for."
  },
  {
    question:
      "Does BrickMason include interior design with the construction package?",
    answer:
      "BrickMason offers separate interior design packages. We collaborate with trusted designer studios to provide stylish and affordable interiors that perfectly complement your new home."
  },
  {
    question:
      "Who will guide me with day-to-day operations on-site during construction?",
    answer:
      "Our in-house project management team and site engineers handle daily supervision, ensuring that resources, materials, and timelines are all managed seamlessly."
  },
  {
    question: "Approximately how long does it take to complete one floor?",
    answer:
      "It takes around 5 months to complete the ground floor and approximately 1.5 months for each additional floor. The total timeline depends on factors such as built-up area, location, and design complexity."
  },
  {
    question: "Do I have to pay the full amount before the project starts?",
    answer:
      "No. BrickMason follows a stage-based payment system aligned with construction progress. You pay an initial booking amount and then make milestone payments after each stage is completed."
  },
  {
    question: "Is a compound wall included in the package?",
    answer:
      "Not necessarily. Many homes don’t require a compound wall on all sides. BrickMason provides this as an optional add-on so you only pay for what you need."
  },
  {
    question:
      "What happens if I want a different brand of materials than the package?",
    answer:
      "Our construction packages are modular. You can easily customize materials and finishes based on your preference and budget. Our technical experts will guide you through available options."
  },
  {
    question: "How do I get a quote from BrickMason?",
    answer:
      "You can request a free quote directly on our website or by contacting us at +91 7505-205-205. Our team will get in touch to understand your requirements and provide an accurate estimate."
  },
  {
    question:
      "How can I measure quality control during my home construction?",
    answer:
      "BrickMason uses advanced quality assessment systems with 400+ checkpoints per floor. Our mobile app also lets you monitor construction progress, site inspections, and material quality in real time."
  },
  {
    question:
      "How does BrickMason incorporate sustainability into construction?",
    answer:
      "We ensure eco-friendly construction practices — from sustainable materials to energy-efficient designs — to minimize environmental impact and create greener homes."
  },
  {
    question: "Are there any refund policies?",
    answer:
      "Yes, BrickMason follows a fair refund policy. Refunds are processed according to the cancellation terms in your agreement, and any applicable deductions are communicated transparently."
  },
  {
    question:
      "What type of safety measures does BrickMason undertake for workers?",
    answer:
      "We prioritize on-site safety through certified construction partners, safety gear, and compliance with labor and safety regulations at every stage of construction."
  },
  {
    question: "What kind of warranty do you offer?",
    answer:
      "BrickMason provides a 10-year structural warranty and a 1-year maintenance warranty, ensuring long-term reliability and peace of mind after project completion."
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes, we provide 1-year post-construction maintenance support to address any issues promptly and ensure your home remains in perfect condition."
  },
  {
    question:
      "Can I request modifications during the construction process?",
    answer:
      "Yes. BrickMason allows up to three free design or specification revisions during construction. Additional changes can be accommodated at minimal extra cost."
  },
  {
    question:
      "What are the main factors that affect house construction cost?",
    answer:
      "Key factors include total built-up area, structural design, material choice, and current market rates of steel, cement, and concrete."
  },
  {
    question:
      "How does BrickMason ensure my project stays within budget?",
    answer:
      "Our experts list all materials and prices during the contract phase, ensuring transparency and avoiding mid-project surprises. We also offer cost-control tools via the BrickMason dashboard."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 text-center mb-12 text-lg">
          Common questions about <span className="font-semibold">House Construction</span> with BrickMason
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer"
            >
              <div
                className="flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors">
                  {index + 1}. {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3"
                  >
                    <p className="text-gray-600 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
