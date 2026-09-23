export type Faq = {
  question: string;
  answer: string;
  list?: string[];
};

export const faqs: Faq[] = [
  {
    question: "Who Will Be Hurt Most If The 340B Discounts Are Cut?",
    answer:
      "Our country's most vulnerable citizens will be negatively impacted. The 340B program assists safety-net hospitals, health centers and clinics (many serving rural communities) as well as HIV/AIDS programs. All of these entities serve tens of millions of our nation's uninsured and under-insured patients. These Americans will lose affordable healthcare options and in many instances, all access to healthcare.",
  },
  {
    question: "Who Benefits From Cutting 340B Discounts?",
    answer:
      "Drug companies, plain and simple. Eliminating the 340B discounts would increase drug prices for safety-net hospitals by 40-50%.",
  },
  {
    question: "Do Taxpayer Dollars Fund The 340B Program?",
    answer:
      "No. The entire cost of the program relies on the drug manufacturers to provide the discounts. In fact, 340B allows hospitals to stretch their limited resources and rely LESS on taxpayer dollars \u2013 which was Congress' stated purpose for the program.",
  },
  {
    question: "Does 340B Need To Be Reformed?",
    answer:
      "YES. 340B does need to be reformed so that all stakeholders have greater clarity on how the program should work. However, reducing the 340B discounts as found in previous proposals like the mega-guidance would in effect end the program.",
  },
  {
    question: "What Specific Financial Impact Would Cuts to 340B Have In My Area?",
    answer:
      "The Health Resources & Services Administration (HRSA) has not provided information regarding the financial impact and impact on access to care the cuts to 340B discount would have in local areas.",
  },
  {
    question: "What Types Of Facilities Will Be Impacted By Reducing 340B Discounts?",
    answer: "",
    list: [
      "Disproportionate Share Hospitals (DSH)",
      "Federally Qualified Health Centers (FQHC)",
      "Rural Referral Centers (RRCs)",
      "Sole Community Hospitals (SCHs)",
      "Community Health Centers Hemophilia Treatment Facilities",
      "Ryan White AIDS Clinics",
    ],
  },
];
