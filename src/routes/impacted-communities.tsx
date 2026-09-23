import { createFileRoute } from "@tanstack/react-router";
import { StakeDetail } from "@/components/site/StakeDetail";
import { getStakePage } from "@/data/stakePages";

const page = getStakePage("impacted-communities")!;
const title = "Impacted Communities | 340B Matters";
const description =
  "Virtually all communities in the U.S. are home to healthcare providers that participate in 340B.";

export const Route = createFileRoute("/impacted-communities")({
  component: () => <StakeDetail page={page} />,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/impacted-communities" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/impacted-communities" }],
  }),
});
