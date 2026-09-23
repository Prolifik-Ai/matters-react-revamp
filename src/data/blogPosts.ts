import heroDoctor from "@/assets/hero-doctor.jpg";
import stakeCommunities from "@/assets/stake-communities.jpg";
import stakeFunding from "@/assets/stake-funding.jpg";
import stakeHospitals from "@/assets/stake-hospitals.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  alt: string;
  body: string[];
};

// The 10 most recent posts from the live site, newest first.
export const blogPosts: BlogPost[] = [
  {
    slug: "big-pharmas-newest-target-the-community-health-center-down-the-road",
    title: "Big Pharma's Newest Target: The Community Health Center Down the Road",
    date: "2026-09-14",
    excerpt:
      "You have probably driven past one without knowing it: a storefront clinic in a strip mall, a converted house on a rural two-lane road, or a mobile van parked outside a school.",
    image: stakeHospitals,
    alt: "Small rural community health clinic beside a two-lane road",
    body: [
      "You have probably driven past one without knowing it: a storefront clinic in a strip mall, a converted house on a rural two-lane road, or a mobile van parked outside a school. These are America's community health centers. Last year, they cared for 34.4 million people—roughly one in every ten Americans—across more than 17,400 communities that much of the healthcare system has left behind.",
      "Who walks through their doors? Nine in 10 patients are low-income. More than 6 million are uninsured, representing about one in five uninsured people in the country. They are farmworkers with untreated diabetes, mothers who need asthma inhalers for their children, and veterans who live an hour from the nearest hospital. Community health centers turn none of them away because federal law requires them to serve everyone who comes through their doors, regardless of ability to pay.",
      "They do all of this with limited resources. One of the few tools that makes the math work is the 340B drug discount program.",
      "The program allows health centers to purchase prescription drugs at a discount and reinvest the savings into patient care. Those savings help provide insulin at a fraction of retail cost, fund mobile clinics in counties without pharmacies, support behavioral health counselors, and keep transportation services running for seniors. More than three-quarters of health centers use 340B savings to sustain rural services. Remove those savings, and there is no alternative source of funding. The van stops running. The clinic closes.",
      "Consider what that means for someone like Gina Moore, a Type 1 diabetic who receives care at PrimaryOne Health in Columbus, Ohio. Through the center's prescription assistance program, funded by 340B savings, she has been able to pick up a 90-day supply of the insulin she cannot live without for less than $15, medicine that would cost more than $1,000 elsewhere. \u201cI need insulin every day,\u201d she said, \u201cand without it my kidneys will shut down. I will die.\u201d Her story is one of millions. This is what these clinics actually do.",
      "The 340B program uses no federal tax dollars, and community health centers account for less than 6% of the program\u2014under $6 billion of roughly $100 billion in annual purchases.",
      "Yet some pharmaceutical companies have a problem with these clinics.",
      "On Sept. 9, Johnson & Johnson, one of the world's largest drugmakers with more than $94 billion in annual pharmaceutical sales, announced that it would extend its 340B restrictions to grantees: community health centers, Ryan White HIV clinics, hemophilia treatment centers\u2014the safety net's safety net.",
      "Johnson & Johnson is not alone, nor is it the first. Genentech has taken similar action. So has Boehringer Ingelheim. Bayer has expanded its claims-data requirements to grantees. AbbVie has restricted grantee pharmacies since last year. For years, even as manufacturers imposed restrictions on hospitals, grantees remained untouched\u2014an unwritten line that no one crossed.",
      "That line is now gone.",
      "Understand what this means. The 340B statute requires drug manufacturers to provide these discounts to eligible health centers. It is part of the agreement for participating in Medicare and Medicaid, taxpayer-funded programs that generate billions in revenue for pharmaceutical companies. Now, they want the benefits of that arrangement without honoring the obligations. They have created data requirements and pharmacy restrictions that are not authorized by the statute and are using them to reclaim discounts from some of the poorest clinics in the country.",
      "Call it what it is: multibillion-dollar corporations reaching into a rural exam room and taking medicine off the shelf. Not to lower patients' costs, but to protect margins that are already among the highest in American business.",
      "Johnson & Johnson can afford to leave community health centers, and the hospitals that serve vulnerable patients, alone. It is choosing not to. Remember that the next time the company says it cares about patients. It doesn't.",
    ],
  },
  {
    slug: "rfk-jr-bends-the-knee-to-big-pharma-trump-country-will-pay-the-price",
    title: "RFK Jr. Bends the Knee to Big Pharma. Trump Country Will Pay the Price.",
    date: "2026-08-06",
    excerpt:
      "Buried in the Federal Register, Robert F. Kennedy Jr.'s health agency handed Big Pharma the prize it has chased for years: a revived and expanded 340B rebate scheme.",
    image: heroDoctor,
    alt: "Clinician holding a stethoscope in a hospital corridor",
    body: [
      "On Monday morning, buried in the Federal Register, Robert F. Kennedy Jr.'s health agency handed Big Pharma the prize it has chased for years: a revived and expanded 340B rebate scheme that lets drug companies stop discounting medicines for safety-net hospitals up front and force those hospitals to chase their own money instead.",
      "A federal court blocked the first version of this pilot. Secretary Kennedy's answer was not to back down. It was to double down: from 10 drugs and 8 manufacturers to roughly 25 products from 13 manufacturers, effective January 1, 2027.",
      "Here is what changes. For more than 30 years, the 340B Drug Discount program has required drugmakers to sell outpatient drugs to rural and safety-net providers at a discount, right at the point of purchase. Under Kennedy's pilot, that requirement ends for the covered drugs. America's rural hospitals will now pay full sticker price up front, hand over its claims data to Big Pharma\u2019s artificial intelligence agents and then wait for Big Pharma to send the money back.",
      "Read that again. Nonprofit hospitals running on margins measured in pennies will be forced to float interest-free loans to the most profitable industry in America. The drug company holds the cash. The safety net holds an IOU. Every day a manufacturer sits on that rebate is a day of free money, financed by a nonprofit hospital that cannot afford it.",
      "Big Pharma could not win this on its own. Just two weeks ago, the federal D.C. Circuit Court told Novartis, Eli Lilly and Bristol Myers Squibb they may not switch to rebates without government approval. The drug companies lost in court. So they went shopping for a Secretary instead. Kennedy delivered and submissively bent his knee.",
      "Who exactly needs this loan? Johnson & Johnson, maker of Stelara and Xarelto, paid its CEO $32.6 million last year. AbbVie paid its CEO $32.5 million. Pfizer paid its CEO $27.6 million. Thirteen of the wealthiest corporations on earth, sitting on tens of billions of dollars in annual profits, will now enjoy involuntary financing from the charity hospitals of rural America.",
      "Adding insult to injury, HRSA's own notice estimates the scheme will cost covered entities $523 million a year to administer, roughly $34,320 per provider. That is not a rounding error. In a critical access hospital, that is a nurse. In a rural clinic, that is real care taken away.",
      "Do not take our word for it. Take Wall Street's. Analysts at Raymond James warned this week that the pilot could squeeze rural, safety-net and smaller providers, the ones with the least cash on hand to front Big Pharma's loans. The American Hospital Association says the government's cost analysis dramatically understates the true costs. Kennedy's agency published the notice anyway.",
      "The political betrayal of President Trump\u2019s voters is even more astounding. Donald Trump carried 93 percent of America's rural counties in 2024, his third straight election above 90 percent. Those counties are 340B country. They are the places where the hospital is the largest employer, where the nearest alternative is an hour away, and where a cash-flow squeeze does not mean a bad quarter. It means a closed maternity ward, a shuttered pharmacy, a hospital that never reopens.",
      "Robert F. Kennedy Jr. came to Washington promising to make America healthy again and to stand up to the drug companies he spent a career attacking. Instead, he has become their puppet. He is not asleep at the switch. This is his agency, his notice, his scheme, built to Big Pharma's specifications and delivered on Big Pharma's timeline.",
      "Big Pharma asked Secretary Kennedy to bend the knee. He did. And the rural Americans who put this administration in office will be handed the bill that they can\u2019t afford to pay.",
    ],
  },
  {
    slug: "healthcare-safety-net-needs-champions-like-arkansas-ag-tim-griffin",
    title: "Healthcare Safety Net Needs Champions Like Arkansas AG Tim Griffin",
    date: "2026-08-03",
    excerpt:
      "Thirteen of the most powerful drug companies on Earth got served with a lawsuit that could cost them billions of dollars. The complaint was filed on behalf of patients.",
    image: stakeCommunities,
    alt: "Neighbors talking with a nurse outside a community clinic",
    body: [
      "Something unusual happened last week. Thirteen of the most powerful drug companies on Earth got served with a lawsuit that could cost them billions of dollars. The complaint was filed in a courthouse in Polk County, AR by a man who was done watching Big Pharma bully the hospitals and clinics that serve his state.",
      "His name is Tim Griffin. He\u2019s the Republican Attorney General of Arkansas and the rare elected official willing to make the richest industry in America answer for its quiet crimes against ordinary people.",
      "For years, drug manufacturers like AbbVie, Amgen, AstraZeneca, Eli Lilly, Merck, Pfizer and seven others have been chipping away at the federal 340B Drug Discount Program that lets safety-net hospitals and clinics buy medicine at a discount so they can stretch every dollar for the patients who need it most. The 340B law has strong bipartisan support. So Big Pharma has been strangling it on the down low instead, with restrictions on your pharmacy, demands for your private prescription data and a maze of requirements engineered to make hospital compliance impossible.",
      "Arkansas saw it coming. Back in 2021, it became the first state in the nation to pass a law that made such manufacturer restrictions illegal. The drug industry sued to kill it and lost. A federal appeals court upheld the Arkansas law, unanimously. The Supreme Court refused to touch it.",
      "And now Griffin is enforcing it, hard.",
      "The lawsuit alleges more than 300,000 separate violations of Arkansas law. Each one carries a penalty of up to $10,000. Griffin did the math. \u201cI expect this will be a billion-dollar case ultimately,\u201d he said in a July 22 press conference. Then he uttered the part that should make every American stand up and cheer: \u201cThe penalties are about making it so punitive that they never want to do this again in our state.\u201d The complaint also charges that the pharma-funded data platform Second Sight \u201cknowingly facilitated, assisted, intermediated and aided\u201d in the violations.",
      "This is the fight we\u2019ve been waiting for someone to pick. Thirteen corporations with more lawyers than most states have legislators are being told that their money won\u2019t buy them a pass. A single attorney general, standing between Big Pharma and the rural hospital down the road that is one bad quarter from closing its doors.",
      "Griffin didn\u2019t wait for Washington to fix this problem. Congress has spent years wringing its hands while manufacturers ran circles around federal regulators. He predicts other states will follow. Let every attorney general in America look at what Tim Griffin just did and ask themselves: Whose side am I on, drug companies or the people whose votes I asked for?",
      "Because that is the game now. Big Pharma versus the patient. The billion-dollar boardroom versus local healthcare providers. And for once, someone with the power to do something about it stood up and refused to blink.",
      "Tim Griffin deserves a cape \u2013 and our undying respect.",
    ],
  },
  {
    slug: "big-pharma-terrifies-with-its-own-100b-shadow",
    title: "Big Pharma Terrifies with Its Own $100B Shadow",
    date: "2026-07-27",
    excerpt:
      "The Health Resources and Services Administration published a number last week, and Big Pharma's echo chamber lit up like Christmas. One hundred billion dollars. That is the amount safety-net hospitals purchased under 340B.",
    image: stakeFunding,
    alt: "Pharmacist counting pills beside prescription bottles and a calculator",
    body: [
      "The Health Resources and Services Administration published a number last week, and Big Pharma's echo chamber lit up like Christmas. One hundred billion dollars. That is the amount safety-net hospitals and clinics purchased under the 340B Drug Discount Program in 2025. Up 22 percent. Hospitals accounted for 87 percent of it.",
      "Within days, the figure was everywhere. Skyrocketing. Monstrous. One drug-industry analyst literally put a picture of Godzilla on it. Here is what none of them will tell you: That $100 billion is not money your hospital made. It is money your hospital paid. To Eli Lilly, AbbVie, and Johnson & Johnson and others. Every dollar is drug industry revenue.",
      "And the drug companies want you outraged about it. They are holding up their own sales receipt and demanding you call it a crime scene. Why did the 340B purchase number grow?",
      "The National Pharmaceutical Council \u2014 the drug industry's own research arm \u2014 partially funded a peer-reviewed study asking whether 340B growth comes from rising prices or from utilization. The answer, in their own data: utilization. Volume drove roughly 80 percent of 340B's growth measured at list price, and essentially all of it measured at what hospitals actually pay.",
      "Utilization means more medicine. Reaching more patients. Through more doors.",
      "Big Pharma commissioned a study that proved safety-net hospitals are getting more drugs to more sick people than ever. And then they published it like a rap sheet. One of the study's three authors sits on the board of directors of Kalderos \u2014 the company that invented the 340B \u201crebate model\u201d back in 2020, and that today sells drug companies the very platform they want your patients' claims data funneled through. Pharma bought the research. A director of the company selling the cure helped write the diagnosis.",
      "Nearly 90 percent of every 340B dollar buys specialty drugs. Cancer drugs. Hemophilia drugs. Multiple sclerosis drugs. The most expensive medicines on earth \u2014 priced that way by the same companies now clutching their pearls about the total spend. Big Pharma created this number. It set the price of every item on the receipt and then acts shocked at the sum.",
      "Somehow HRSA never publishes the most important numbers of all: patients served, prescriptions written, chemotherapy infusions delivered in a county with one oncologist and no hospital for sixty miles.",
      "Drug companies took in roughly $1.7 trillion in revenue in 2024. The entire 340B discount program comes to under five percent of that total. That\u2019s a sliver \u2013 not an existential threat.",
      "One hundred billion dollars is not the story of a program out of control. It is the tale of what Big Pharma charged America's safety-net hospitals in a single year, and of how much medicine those hospitals put into patients' hands.",
      "Drug companies want you frightened of their own $100 billion shadow.",
    ],
  },
  {
    slug: "rfk-jr-hands-millions-of-patient-records-to-big-pharma",
    title: "RFK Jr. Hands Millions of Patient Records to Big Pharma",
    date: "2026-07-15",
    excerpt:
      "The most valuable commodity in America today isn't oil or gold. It's your medical records. And Big Pharma is taking it, without consent and without privacy protections.",
    image: heroDoctor,
    alt: "Clinician reviewing patient records on a tablet",
    body: [
      "The most valuable commodity in America today isn't oil or gold. It's your medical records.",
      "Every prescription you fill, every diagnosis code attached to it, every date of service, every drug your doctor orders \u2014 that data is worth billions of dollars to companies building the AI systems that will shape medicine, pricing, and profit for the next generation. And right now, with Health and Human Services Secretary Robert F. Kennedy, Jr.\u2019s full knowledge and complete inaction, Big Pharma is taking your data \u2014 without your consent, without any patient privacy protections, and with zero mechanism to ever get it back.",
      "On June 17, Boehringer Ingelheim sent a letter to every safety-net healthcare facility in America \u2014 more than 53,000 hospital, clinic, and community health center sites nationwide. The message: Hand over your patients' complete prescription claims data \u2014 every drug, every patient, every transaction \u2014 or lose access to BI products at 340B discounted prices. Deadline: July 6. No exceptions, unless you're in one of the 13 states that have passed laws to stop exactly this kind of extraction.",
      "BI is the 12th drug company to do so. GSK, Eli Lilly, Amgen, Novartis, Johnson & Johnson, and others have sent versions of the same letter. More than 40 manufacturers are now imposing some form of claims data requirement on the safety-net providers who serve America's most vulnerable patients. Soon, if you run a rural health clinic in Alabama or a federally qualified health center in Appalachia, you will pay for your drugs twice: once in dollars, and once in your patients' health records.",
      "This is a profit-driven, ruthless shakedown.",
      "The stated justification is \u201cduplicate discount prevention.\u201d The argument goes like this: Drug companies need claims data to make sure they aren't being double billed between 340B and Medicaid. That argument has a fatal flaw. If duplicate discounts were the genuine concern, the data request would be focused on Medicaid claims only \u2014 because a duplicate discount can only occur when a Medicaid-covered prescription is also claimed under 340B.",
      "Instead, these drug companies are demanding data on all prescriptions, from all patients, regardless of insurance status. Amgen has gone further still \u2014 demanding clinical service data that describes what care was actually delivered. That is a market research department's wish list. It is commercial intelligence disguised as compliance.",
      "The data demanded by these companies flows into proprietary platforms \u2014 most prominently 340B ESP, operated by a company called Second Sight Solutions \u2014 and from there into pharmaceutical companies' commercial and analytics operations. Each of these companies has committed billions of dollars to AI systems for drug pricing, commercial strategy, prescribing-pattern analysis and market intelligence.",
      "Every member of Congress must understand: When data is populated into an AI system, you cannot take it back. You can\u2019t unlearn the data inside an AI model. Once your patient data enters Big Pharma's AI, it will never, ever come out.",
      "Even worse, no one can guarantee that those records will be safeguarded from unauthorized access once Big Pharma has them. Recently, Axios reported that the electronic-records giant Epic is suing a data-sharing company for letting third parties posing as health providers siphon more than 300,000 patient medical files.",
      "Is there anyone in Washington willing to hold Secretary Kennedy accountable for allowing your personal patient health information to be permanently fed into Big Pharma's AI maw?",
      "Kennedy built his brand on one idea: the pharmaceutical industry had too much power over American health, and someone needed to have the courage to stand up to it. He wrote books. He gave speeches. He built a movement. And now he is Secretary of Health and Human Services \u2014 the official responsible for the Health Resources and Services Administration, which administers 340B \u2014 while 40 drug companies extract patient health data from the country's safety-net providers and route it into AI systems it will never leave.",
      "The Department of Health and Human Services has filed legal briefs in federal court \u2014 on behalf of the drug companies \u2014 arguing that states don't have the right to stop this theft. The department has raised no HIPAA objections and sought no privacy protections.",
      "We urge Congress to step in and stop this travesty.",
    ],
  },
  {
    slug: "america-turns-250-here-are-the-251-members-of-congress-who-stood-up-for-its-healthcare-safety-net",
    title:
      "America Turns 250. Here Are the 251 Members of Congress Who Stood Up for Its Healthcare Safety Net.",
    date: "2026-06-29",
    excerpt:
      "This year, America celebrates 250 years of independence. So we went looking for something worth celebrating in Washington. We found 251 of them.",
    image: stakeCommunities,
    alt: "Community members gathered outside a neighborhood clinic",
    body: [
      "This year, America celebrates 250 years of independence.",
      "So we went looking for something worth celebrating in Washington. We found 251 of them.",
      "Two hundred fifty-one members of Congress, Republicans and Democrats, have stood up in recent years for the 340B drug discount program. They signed the letters. They sponsored the bills. They told Big Pharma no. And they did it for the parts of this country that carry America on their backs.",
      "Think about where 340B does its work. It works in the rural county where the nearest hospital is the only one for 50 miles. It works in the farm towns that grow the food on your table and the big cities that power our economy. It works in the communities where putting on the uniform is still the highest honor a young person can imagine. It works in the small cities and the forgotten corners where a safety-net clinic is the difference between getting care and going without.",
      "This is the heart of America. And 340B helps keep it beating.",
      "Here is the part Big Pharma never wants you to hear. The 340B program does not cost taxpayers a single penny. Not one. The discounts are paid by the drug manufacturers, not by you. It is the deal they accepted to sell their products to taxpayer-funded programs in the first place. Hospitals and clinics turn those savings into more cancer treatment, more insulin, more open clinic hours, more nurses in towns that cannot recruit them. No new spending. No new bureaucracy. Just more care for the people who need it most.",
      "So why does Big Pharma spend millions trying to kill it? Because it works. Because every dollar a rural hospital saves is a dollar that did not land in a drug company\u2019s quarterly earnings. So they have tried rebate schemes. They have tried to choke off contract pharmacies. They have demanded your private health records as the price of a discount the law already requires them to give. They have run dark-money ads dressed up as concern for the very patients they are trying to cut off.",
      "All this from an industry that charges Americans 4.2 times more for brand-name drugs than to patients in other developed countries \u2014 which doesn\u2019t strike us as being very patriotic.",
      "Through all of it, 251 members of Congress refused to look away. They come from red states and blue states, coastal cities and farm country. They sit on opposite sides of almost everything else in this town. On most days they agree on nothing. On this, they agreed: you do not balance Big Pharma\u2019s books on the backs of rural hospitals and the patients who depend on them.",
      "That kind of agreement is rare in Washington. It is worth stopping to honor.",
      "So to all 251: thank you. From every rural hospital still standing. From every community health center keeping the lights on. From every veteran, every farmer, every working family who got their medicine because you held the line.",
      "Two hundred fifty years ago, a handful of Americans decided that ordinary people were worth fighting for. This Fourth of July, 251 members of Congress proved that idea is still alive.",
      "Happy birthday, America. Your heartland has friends, and this year they earned the fireworks.",
    ],
  },
  {
    slug: "cassidy-sends-his-resume-to-big-pharma",
    title: "Cassidy Sends His Resume to Big Pharma",
    date: "2026-06-26",
    excerpt:
      "Sen. Bill Cassidy is looking for a job. This week the chairman of the Senate Health Committee released an 88-page draft bill to overhaul the 340B drug discount program.",
    image: heroDoctor,
    alt: "Exterior of a U.S. Capitol committee hearing room",
    body: [
      "Sen. Bill Cassidy is looking for a job.",
      "This week the chairman of the Senate Health Committee released an 88-page draft bill to overhaul the 340B drug discount program. Strip away the title and the section headings, and what's left reads less like legislation than like a cover letter. Addressed to Big Pharma. Signed by a man who will be unemployed in a few months.",
      "Cassidy lost his primary, and he is on his way out the door, the lamest of lame ducks, with only a few weeks left on the legislative calendar for this Congress. He knows this bill is going nowhere. No markup. No path. No time. And he is still asking the public to send in comments by August 28, as if any of it is real. It is a swan song that will be completely ignored.",
      "Look at what the draft would actually do. It would let drug manufacturers claw back the 340B discounts that keep rural hospitals and safety-net clinics open across his own state. It hands Big Pharma the rebate scheme the industry has wanted for years. It is everything they have lobbied for, bundled up and stamped with a committee chairman\u2019s name while he still has a chairmanship to stamp it with. That is not policy. That is a job application.",
      "Cassidy\u2019s betrayal is breathtaking. Before politics, Cassidy spent years as a doctor at Earl K. Long, the Baton Rouge charity hospital that cared for patients who could not pay, and he later co-founded a free clinic for the uninsured. The safety-net providers his bill would hollow out are the likes of his own former employer. He understands better than almost anyone in the Senate who these discounts keep alive. Yet he is shamelessly selling them out anyway.",
      "While Cassidy polishes his credentials with Big Pharma, a bipartisan group of his colleagues called the Gang of Six \u2014 Sens. Tim Kaine, John Hickenlooper, Tammy Baldwin, Shelley Moore Capito, Jerry Moran, and John Boozman \u2014 have worked to modernize the 340B program the right way. Cassidy did not join that effort. He launched his own self-interested solo audition instead.",
      "There was a version of this where Cassidy would spend his final months in office with some dignity, finishing the job for the patients and providers who counted on him. He has chosen a different, disgraceful exit. He is choosing to spend the time he has left not serving but ignominiously building a case to his next employer.",
      "Everyone in Washington knows exactly what he is doing with this bill. Big Pharma is hiring. And Bill Cassidy is applying.",
    ],
  },
  {
    slug: "richest-industry-in-america-attacks-safety-net-hospitals",
    title: "Richest Industry in America Attacks Safety-Net Hospitals",
    date: "2026-06-24",
    excerpt:
      "When you've lost the argument on every factual front, you pivot to comedy. A new pharma ad accuses safety-net hospital CEOs of profiteering on 340B. That's rich.",
    image: stakeHospitals,
    alt: "Exterior of a nonprofit safety-net hospital",
    body: [
      "Hand it to Big Pharma. When you\u2019ve lost the argument on every factual front, when the courts keep ruling against you, when nearly two dozen states have passed laws to stop your contract pharmacy restrictions, when 100 members of Congress have signed a letter to defund your favorite federal rebate scheme \u2014 you pivot to comedy.",
      "In a recent TV ad that doubtlessly left most watchers bewildered, the industry accused the CEOs of safety-net hospitals of profiteering on the 340B Drug Discount Program.",
      "That\u2019s rich.",
      "Steve Ubl, the CEO of PhRMA \u2014 the trade group that made the ad \u2014 took home $7.64 million in total compensation in 2024, according to the organization\u2019s IRS filings. He\u2019s a lobbyist. Actual pharmaceutical CEOs? Eli Lilly\u2019s David Ricks earned $36.7 million in 2025 \u2014 a 26 percent raise from the year before. Johnson & Johnson\u2019s Joaquin Duato: $32.8 million. Pfizer\u2019s Albert Bourla: $27.6 million. Amgen\u2019s Robert Bradway: $24.7 million.",
      "These are the people running an industry that charged American patients 2.78 times more for prescription drugs than citizens in other developed countries. For brand-name drugs, the gap is even wider: 4.2 times higher than prices in comparable nations, according to a 2024 RAND Corporation study. When a European patient pays $100 for a medication, an American pays $422.",
      "And when these same companies aren\u2019t gouging Americans, they\u2019re spending $10 billion annually on consumer advertising to tell you how much they care about patients. That\u2019s roughly one of every four minutes of prime-time television. This is the industry pointing the finger at non-profit, safety-net hospitals. Forget policy arguments. This is a con.",
      "The 340B program exists to help safety-net hospitals, rural health clinics, federally qualified health centers, Ryan White HIV clinics and children\u2019s hospitals stretch scarce resources to serve the most vulnerable patients in America. In rural Missouri, Golden Valley Memorial Healthcare delivers approximately 350 babies a year, and without 340B the nearest birthing center is more than 90 minutes away. In Kentucky, University of Louisville Health operates one of the largest psychiatric hospitals east of the Mississippi River, sustained by 340B savings. At Our Lady of the Lake in Baton Rouge, uninsured patients pay an average of $7.77 for retail prescriptions with 340B, versus $78.13 without it \u2014 and for specialty medications the difference is $48.05 versus $3,937.10. Adirondack Health runs the only outpatient oncology department in the region, funding both chemotherapy care and a travel assistance fund with 340B savings. At Grady Memorial Hospital in Atlanta, no uninsured patient ever pays more than $5 for any formulary prescription because of 340B; in 2023 alone, Grady filled nearly 900,000 low-cost prescriptions.",
      "The 340B discounts that drug companies provide to these 2,700 hospitals represent just 3 percent of their global revenues. Only in Washington can the most profitable industry in the world make an ad about greed and keep a straight face.",
    ],
  },
  {
    slug: "secretary-kennedy-is-cooking-the-books",
    title: "Secretary Kennedy Is Cooking the Books",
    date: "2026-06-09",
    excerpt:
      "HRSA asked for public comment on its proposed 340B rebate model. It received 5,576 comments \u2014 and has released fewer than half. Half of what it did release was auto-generated.",
    image: stakeFunding,
    alt: "Stack of public comment documents on a desk",
    body: [
      "The public comment process is one of the last guardrails between federal agencies and corporate capture. The idea is simple: Before the government makes a major policy change, it has to ask the public what it thinks. It's not perfect, but it's supposed to mean something.",
      "Secretary Robert F. Kennedy Jr.\u2019s Health Resources and Services Agency is working to make sure it doesn't.",
      "Here's what we know. HRSA asked for public comment on its proposed 340B rebate model \u2014 a scheme that would force safety-net hospitals, rural clinics, and federally qualified health centers to pay drug companies full price upfront and then beg for a refund later. The public responded with 5,576 comments. And HRSA has, to date, publicly released fewer than half of them.",
      "That's right. Of the comments received, HRSA has posted only 2,451 to the public docket. The rest? Sitting in an agency review queue, invisible to the public and unavailable for scrutiny. We don't know why. We don't know when they'll be released. This is not transparent rulemaking.",
      "Here\u2019s what we found when we analyzed the comments HRSA did release \u2014 and it's the part that should make every member of Congress sit up. The comments HRSA has made public are 50 percent auto-generated.",
      "We pulled every comment in the public docket directly from regulations.gov and analyzed them. What we found were two coordinated astroturf waves \u2014 filing spikes on April 3 and April 13\u201314 \u2014 in which 94 percent and 91 percent of comments, respectively, were word-for-word identical. The same template. The same sentences. Filed by hundreds of different names, in rapid sequence, clearly generated by a pharma-funded patient advocacy group.",
      "We've seen this playbook before. It's the same one Big Pharma used in state contract pharmacy proceedings. Flood the zone with manufactured \u201cpatient\u201d voices. Make it look like the public is divided. Then let a captured agency do the rest.",
      "The names on those comments read like a comedy sketch. Multiple filings from the same household. Suspicious patterns that should be flagged immediately by anyone applying basic scrutiny. And yet HRSA's own system has not tagged a single one of these comments as a duplicate. In Secretary Kennedy\u2019s HRSA, every astroturf letter is being counted as an individual, authentic voice.",
      "Once you strip out the manufactured comments, the math is not close. Of the 1,222 legitimate comments in the public record, 99.8 percent oppose the rebate model. Zero pro-rebate organizational submissions were identified in any filing window outside the astroturf campaign. The authentic record is, effectively, unanimous. But no matter. The rebate plan has already been sent to the White House Office of Management and Budget for review.",
      "Secretary Kennedy \u2014 who built his brand on being the one guy willing to take on the pharmaceutical industry, who promised to drain a swamp that was making Americans sick \u2014 is now running an agency that withholds public comments, declines to flag obvious astroturf as duplicates, and appears poised to count manufactured pharma propaganda as legitimate public input on a policy that will gut funding for rural hospitals and safety-net clinics serving the most vulnerable patients in America.",
      "Don't cook the books, Secretary Kennedy. Release all 5,576 comments. Tag the duplicates. Count the real voices \u2014 all 99.8 percent of them. That's the American public telling you that the 340B rebate scheme is wrong.",
    ],
  },
  {
    slug: "secretary-kennedy-surrenders-patient-data-to-big-pharma",
    title: "Secretary Kennedy Surrenders Patient Data to Big Pharma",
    date: "2026-06-01",
    excerpt:
      "Health and Human Services Secretary Robert F. Kennedy Jr. built a political brand as a maverick ready to take on the pharmaceutical cartel. That rhetoric has evaporated.",
    image: heroDoctor,
    alt: "Doctor reviewing a patient chart in a hospital hallway",
    body: [
      "Health and Human Services Secretary Robert F. Kennedy Jr. built a political brand as a maverick ready to take on the pharmaceutical cartel. But that rhetoric has evaporated, replaced by a pattern of capitulation. In his latest abdication of duty, Secretary Kennedy is allowing drug manufacturers to extract detailed patient data from hospitals and clinics.",
      "Big Pharma is now demanding that safety-net providers hand over sensitive, claims-level patient data, coercing providers into a compliance trap under the threat of losing life-saving discounts under the 340B Drug Discount Program.",
      "For more than 30 years, drug companies seeking to verify compliance have followed an audit process overseen by the Health Resources and Services Administration. Now manufacturers are bypassing the agency entirely and demanding sensitive data directly from safety-net providers as a precondition for receiving the 340B pricing to which they are legally entitled.",
      "Major manufacturers like Amgen are instituting draconian mandates forcing providers to surrender detailed information on patient diagnoses, billing records, dates of service, and specific healthcare settings, expanding their demands to include even in-house pharmacy use and clinical service data. This is not routine bookkeeping. It is a calculated assault on healthcare providers with one goal: denying discounts.",
      "This corporate overreach follows the blueprint laid out by Eli Lilly, which shocked safety-net providers by demanding extensive claims-level data for all in-house pharmacy prescriptions and threatening hospitals with the \u201cimminent loss\u201d of discounted pricing if they failed to comply. Pharma executives regularly invoke the tired bogeyman of \u201cduplicate discounts\u201d\u2014the idea that a drug receives both a 340B reduction and a Medicaid rebate\u2014to justify their intrusion. But if this were truly about Medicaid compliance, why are these broad data requests targeting all prescriptions, regardless of whether a patient is enrolled in Medicaid?",
      "The most disturbing aspect of this corporate overreach is the total complicity of HHS leadership. It is incomprehensible that a health secretary who claims to fight corporate corruption cannot find an ounce of concern for safety-net hospitals or the wholesale transfer of patient medical data to private drug companies. What are these corporations doing with this data? Why should they have unfettered, direct access to private patient information?",
      "It gets worse. While Secretary Kennedy allows drug companies to run wild, his department is actively working to dismantle 340B protections at the state level. In ongoing federal court battles across the country, HHS and the Department of Justice have repeatedly sided with pharmaceutical companies, filing legal briefs seeking to strike down state laws in Colorado, Rhode Island, and Louisiana that were explicitly enacted to protect the 340B benefits of local clinics and community pharmacies.",
      "This is pure betrayal. The man who promised to disrupt the pharmaceutical industry has gone native, becoming a facilitator for Big Pharma\u2019s anti-340B agenda. We believe Mr. Kennedy hopes no one notices that he is quietly supporting a regime that decimates the financial lifelines of safety-net providers. Rural hospitals are at particular risk.",
      "Mr. Kennedy is not fighting Big Pharma; he is coddling it. And America\u2019s most vulnerable patients will pay the price.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, count);
}

export function formatPostDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
