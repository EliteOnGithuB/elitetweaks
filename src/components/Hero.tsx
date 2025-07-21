import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, DollarSign, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative px-6 py-16 text-center animate-fade-in [animation-delay:200ms]"
      style={{animationFillMode: 'both'}}>
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50 pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto">
        {/* Main heading with gradient text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            UNLOCK YOUR PC'S
          </span>
          <br />
          <span className="bg-gradient-secondary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            TRUE POTENTIAL
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-3xl mx-auto leading-relaxed">
          Transform your gaming experience with professional system optimization.
          <br />
          Better FPS, smoother gameplay, and maximum performance guaranteed.
        </p>
        
        {/* ELITE branding */}
        <div className="mb-8">
          <p className="text-lg text-accent font-bold tracking-wider">
            — Powered by ELITE —
          </p>
        </div>

        {/* Main CTA */}
        <div className="mb-8">
          <Button 
            variant="discord" 
            size="xl" 
            className="animate-glow-pulse"
            onClick={() => window.open('https://discord.gg/fvkCKqNZBV', '_blank')}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Join Discord & Create Ticket
          </Button>
        </div>

        {/* Service highlights */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <span>Up to 1h 30min service time</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-medium">£15 Fixed Price</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400">💳</span>
            <span>PayPal Preferred</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-secondary" />
            <span>AnyDesk Remote Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};