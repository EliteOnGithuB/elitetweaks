import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Monitor, CheckCircle, Clock } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Create Discord Ticket",
    description: "Join our Discord and open a ticket to get started",
    color: "text-blue-400"
  },
  {
    number: "2", 
    icon: Monitor,
    title: "AnyDesk Connection",
    description: "We'll remotely access your PC to perform all optimizations",
    color: "text-green-400"
  },
  {
    number: "3",
    icon: CheckCircle,
    title: "Complete Optimization", 
    description: "Enjoy your optimized system with maximum performance",
    color: "text-purple-400"
  }
];

export const Process = () => {
  return (
    <section className="px-6 py-16 bg-muted/30 animate-fade-in [animation-delay:600ms]"
      style={{animationFillMode: 'both'}}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ⚡ <span className="bg-gradient-secondary bg-clip-text text-transparent">THE PROCESS</span>
          </h2>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/20 hover:border-secondary/20 transition-all duration-300 hover:shadow-glow-secondary group text-center animate-fade-in"
              style={{
                animationDelay: `${800 + index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-muted/50 flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-foreground font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service time info */}
        <Card className="bg-gradient-card border-border/20 max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Clock className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Service Time</h3>
            </div>
            <p className="text-2xl font-bold text-accent mb-1">Up to 1h 30min</p>
            <p className="text-sm text-muted-foreground">Professional optimization process</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};