import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Trusted } from "@/components/Trusted";
import { WhyMe } from "@/components/WhyMe";
import { Flex, Button } from "@mantine/core";

export default function Home() {
  return (
    <div className="w-full overflow-hidden flex items-center flex-col">
      <Header />
      <Hero />
      <WhyMe />
      <Features />
      <Trusted />
      <FAQ />
    </div>
  );
}
