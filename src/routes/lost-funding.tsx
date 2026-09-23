import { createFileRoute } from "@tanstack/react-router";
import { StakeDetail } from "@/components/site/StakeDetail";
import { getStakePage } from "@/data/stakePages";

const page = getStakePage("lost-funding")!;
const title = "Lost Health Care Funding | 340B Matters";
const description =
  "Big Pharma's illegal 340B discount cuts are having a profoundly negative effect on America's healthcare safety net.";

export const Route = createFileRoute("/lost-funding")({
  component: () => <StakeDetail page={page} />,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/lost-funding" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/lost-funding" }],
  }),
});
