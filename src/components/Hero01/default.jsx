import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay, RotateCwSquareIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import RotatingText from "../RotatingText";



const Hero01 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <Badge variant="secondary" className="rounded-full py-1 border-border" asChild>
          
        </Badge>
        <h1
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          CoreBench
        </h1>
        <p className="mt-6 md:text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
  Getting you Fractional Experts from their busy lives to scale your business. 
</p>

        <h1
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          <RotatingText />
        </h1>
        
        <div className="mt-12 flex items-center justify-center gap-4">
  <Button size="lg" className="rounded-full text-base">
    Join Our Early Beta  <ArrowUpRight className="size-5" />
  </Button>
  <Button
    variant="outline"
    size="lg"
    className="rounded-full text-base shadow-none"
    asChild>
    <a href="mailto:hello@corebench.net">Email Us</a>
  </Button>
</div>
      </div>
    </div>
  );
};

export default Hero01;
