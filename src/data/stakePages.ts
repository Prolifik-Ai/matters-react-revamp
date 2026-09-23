import stakeCommunities from "@/assets/stake-communities.jpg";
import stakeFunding from "@/assets/stake-funding.jpg";
import stakeHospitals from "@/assets/stake-hospitals.jpg";

export type StakePage = {
  slug: string;
  navLabel: string;
  title: string;
  image: string;
  alt: string;
  body: string[];
  stat?: { value: string; label: string };
  sourceHref?: string;
};

export const stakePages: StakePage[] = [
  {
    slug: "lost-funding",
    navLabel: "Lost Health Care Funding",
    title: "Lost Health Care Funding",
    image: stakeFunding,
    alt: "Pharmacist counting pills beside prescription bottles and a calculator",
    body: [
      "Big Pharma's illegal 340B discount cuts to hospitals and clinics that contract with local pharmacies is having a profoundly negative effect on America's healthcare safety net. Over the past two years, manufacturers have stolen more than $6 billion that should have gone to helping providers care for uninsured and underinsured patients.",
      "Many of the hospitals that provide discounted drugs to low-income patients through community and specialty pharmacies report drug company restrictions are leading to patient care problems, including delayed access to medicines, financial hardships from higher bills and worsened health outcomes. Rural hospitals are particularly hard hit as they struggle with longstanding budget shortfalls. Nearly 150 have closed since 2010, and many more are expected to shut their doors in the near future.",
      "All this is happening against a backdrop of soaring Big Pharma revenues. For example, Merck posted 2022 year-end revenues of $59 billion, up 22 percent. Novo Nordisk was up 26 percent on revenues of $25 billion and AstraZeneca posted revenues of $44 billion, up 25 percent. Many manufacturers have explicitly told investors that the cuts are driving higher profits.",
      "There's something seriously wrong with this picture.",
    ],
  },
  {
    slug: "fewer-hospitals",
    navLabel: "Fewer Hospitals",
    title: "Fewer Hospitals",
    image: stakeHospitals,
    alt: "Small rural community health clinic beside a two-lane road",
    body: [
      "Dozens of hospitals and clinics will close without the 340B drug discount program, and all safety-net hospitals will have to reduce services for vulnerable patients.",
      "Rural hospitals and clinics will see the greatest impact, with patients in remote areas throughout the country having to travel greater distances to receive care.",
      "In order to better understand the impacts of previous proposals to reduce 340B discounts like what was found in the mega-guidance in 2015, 340B Health conducted a study of its 1,200 member hospitals. The study revealed that almost 3/4 of the surveyed hospitals would be forced to cut staff without 340B savings. In fact, without 340B savings, 41% of the surveyed hospitals anticipate that they would have to close one or more clinics.",
    ],
    stat: {
      value: "100+",
      label: "rural hospitals have been forced to shut their doors from 2013-2020 alone",
    },
    sourceHref: "http://www.340bhealth.org/files/Savings_Survey_Report.pdf",
  },
  {
    slug: "impacted-communities",
    navLabel: "Impacted Communities",
    title: "Impacted Communities",
    image: stakeCommunities,
    alt: "Community members gathered outside a neighborhood clinic",
    body: [
      "Virtually all communities in the U.S. are home to healthcare providers that participate in 340B. This includes inner-city and suburban nonprofit safety-net hospitals, rural hospitals, and community health clinics. All provide services to patients regardless of ability to pay.",
      "Many 340B providers are in medically underserved areas that treat a disproportionate share of vulnerable and special needs populations, including minorities, refugees, and those with disabilities. As 340B discounts are illegally squeezed by big pharmaceutical companies, these healthcare providers have fewer resources to carry out their missions. More than 75 percent of hospitals surveyed report that they likely will need to make cuts to vital health services and patient support programs. A third of smaller, mostly rural hospitals say that the restrictions put their facilities at risk of closure. Patients with diabetes and the safety-net providers who care for them are bearing the brunt of the drug companies' actions.",
      "Infusion centers that provide services such as chemo, transfusions and dialysis \u2013particularly in rural areas \u2013 are at risk of closure, which would force many patients to travel long distances for treatment. Adding insult to injury, infusion drugs tend to be extremely expensive, and these patients are often no longer eligible for discounts they formerly received through the 340B program.",
    ],
    sourceHref:
      "https://www.340bhealth.org/files/Diabetes_and_340B_Community_Pharmacies_Report_09-15-21.pdf",
  },
];

export function getStakePage(slug: string) {
  return stakePages.find((page) => page.slug === slug);
}
