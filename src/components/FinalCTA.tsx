import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="px-6 py-20 text-center relative animate-fade-in [animation-delay:1200ms]"
      style={{animationFillMode: 'both'}}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1)_0%,transparent_70%)]" />
      
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to Unlock{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Maximum Performance
          </span>
          ?
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
          Get professional PC optimization with 3+ years of experience from ELITE optimization services.
        </p>
        
        {/* ELITE signature */}
        <div className="mb-10">
          <p className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent tracking-wider">
            ELITE OPTIMIZATION SERVICES
          </p>
        </div>

        <Button 
          variant="discord" 
          size="xl" 
          className="animate-glow-pulse shadow-[0_0_50px_rgba(88,101,242,0.6)]"
          onClick={() => window.open('https://discord.gg/fvkCKqNZBV', '_blank')}
        >
          <ExternalLink className="mr-2 h-6 w-6" />
          Join Discord & Get Started
        </Button>

        {/* Trust indicators */}
        <div className="mt-8 text-sm text-muted-foreground space-y-1">
          <p>✅ Thousands of satisfied ELITE customers</p>
          <p>⚡ Professional ELITE optimization guaranteed</p>
          <p>🔒 Safe & secure ELITE remote access</p>
        </div>
      </div>
    </section>
  );
};