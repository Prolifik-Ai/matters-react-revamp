export type Principle = {
  number: string;
  text: string;
};

export type PrincipleGroup = {
  heading: string;
  principles: Principle[];
};

export const principleGroups: PrincipleGroup[] = [
  {
    heading: "Stability",
    principles: [
      {
        number: "01",
        text: "Define contract pharmacy and ensure its availability to safety-net hospitals and clinics.",
      },
      {
        number: "02",
        text: "Clarify that the 340B benefit is intended for healthcare providers, their patients and communities \u2014 not third parties.",
      },
    ],
  },
  {
    heading: "Equity",
    principles: [
      {
        number: "03",
        text: "Prohibit manufacturers from imposing special data requirements or other restrictions on contract pharmacies and healthcare providers that limit access or prevent discounts at the point of purchase.",
      },
      {
        number: "04",
        text: "Ensure that the definition of a patient, for the purposes of 340B eligibility, includes modalities for virtual care.",
      },
      {
        number: "05",
        text: "Prohibit discriminatory actions by Pharmacy Benefit Managers or insurers against healthcare providers and their contract pharmacy network.",
      },
      {
        number: "06",
        text: "Prohibit hidden direct and indirect remuneration (DIR) fees on 340B claims.",
      },
      {
        number: "07",
        text: "Require that 340B eligibility follows a manufacturer's product, regardless of packaging or manufacturer acquisition/merger.",
      },
    ],
  },
  {
    heading: "Transparency",
    principles: [
      {
        number: "08",
        text: "Develop a mechanism by which healthcare providers can share information on 340B program benefits to the Health Resources and Services Administration on an annual basis.",
      },
      {
        number: "09",
        text: "Prevent duplicate discounts in Medicaid through a government-managed clearinghouse.",
      },
      {
        number: "10",
        text: "Create and maintain a central location for Medicaid Managed Care BIN/PCN/Group identification codes to avoid duplicate discounts.",
      },
    ],
  },
];
