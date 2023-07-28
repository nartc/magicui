import { PriceCard } from "@/components/price-card";
import { plans } from "@/config/pricing";
import { absoluteUrl, constructMetadata } from "@/lib/utils";
import FadeIn from "@/registry/components/magicui/fade-in";
import { MagicContainer } from "@/registry/components/magicui/magic-card";

const metadata = constructMetadata({
  title: "Lifetime Access to Beautifully Crafted Tailwind CSS Components",
  description:
    "Get lifetime access to beautifully crafted React + Tailwind CSS + Framer Motion components and templates for your next web project. Get lifetime access to all components and templates",
  image: absoluteUrl(`/api/og`),
});

export default function Buy() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h4 className="text-xl font-bold tracking-tight text-foreground">
              Magic UI
            </h4>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              Lifetime Access
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-xl leading-8 text-foreground/60">
              Get <strong>lifetime access</strong> to all components and
              templates available today , plus any new ones we add in the future
              for a simple one-time price.
            </p>
          </FadeIn>
        </div>
        <MagicContainer className="mt-16 w-[400px] mx-auto">
          {plans.map((item, idx) => (
            <PriceCard key={idx} item={item} />
          ))}
        </MagicContainer>
      </div>
    </section>
  );
}
