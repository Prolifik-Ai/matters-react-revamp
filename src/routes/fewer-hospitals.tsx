import { createFileRoute } from "@tanstack/react-router";
import { StakeDetail } from "@/components/site/StakeDetail";
import { getStakePage } from "@/data/stakePages";

const page = getStakePage("fewer-hospitals")!;
const title = "Fewer Hospitals | 340B Matters";
const description =
  "Dozens of hospitals and clinics will close without the 340B drug discount program, especially in rural areas.";

export const Route = createFileRoute("/fewer-hospitals")({
  component: () => <StakeDetail page={page} />,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fewer-hospitals" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/fewer-hospitals" }],
  }),
});
