import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CreditCard } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="px-6 py-16 animate-fade-in [animation-delay:800ms]"
      style={{animationFillMode: 'both'}}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            💰 <span className="bg-gradient-primary bg-clip-text text-transparent">SIMPLE PRICING</span>
          </h2>
        </div>

        {/* Pricing card */}
        <Card className="bg-gradient-card border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-glow-primary max-w-lg mx-auto">
          <CardContent className="p-8 text-center">
            {/* Price */}
            <div className="mb-6">
              <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                £15
              </div>
              <p className="text-xl text-foreground font-semibold">Complete PC Optimization</p>
            </div>

            {/* Payment method */}
            <div className="mb-8">
              <Badge 
                variant="secondary" 
                className="bg-gradient-secondary text-foreground border-none px-4 py-2 text-base font-medium"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                💳 PayPal Preferred
              </Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Want another payment method? Open a ticket and ask!
              </p>
            </div>

            {/* CTA button */}
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full animate-glow-pulse"
              onClick={() => window.open('https://discord.gg/fvkCKqNZBV', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};