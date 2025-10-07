import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import RotatingText from "../RotatingText";

const Hero01 = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-24 md:py-32 lg:py-48">
      <div className="w-full max-w-5xl text-center">
        <Badge
          variant="secondary"
          className="rounded-full py-1 px-3 border-border text-sm sm:text-base"
        >
          Early Access Beta
        </Badge>

        <h1 className="mt-6 text-[clamp(2rem,6vw,4rem)] font-semibold tracking-tighter">
          CoreBench
        </h1>

        <p
          className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Getting you Fractional Experts from their busy lives to scale your
          business.
        </p>

        <h1 className="mt-6 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tighter">
          <RotatingText />
        </h1>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Button size="lg" className="rounded-full text-base flex items-center">
            Join Our Early Beta
            <ArrowUpRight className="size-5 ml-2" />
          </Button>

          <p className="text-sm sm:text-base">
            Email us:{" "}
            <a
              href="mailto:hello@corebench.net"
              className="underline underline-offset-2 hover:text-primary transition-colors"
            >
              hello@corebench.net
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero01;
