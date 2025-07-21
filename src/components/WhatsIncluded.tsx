import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, 
  Zap, 
  Target, 
  Wifi, 
  Shield, 
  TrendingUp, 
  Mouse, 
  Cpu, 
  Music, 
  MessageSquare, 
  Video, 
  Gauge 
} from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Custom OS",
    subtitle: "(Optional – Recommended for MAX Gains)",
    color: "text-purple-400"
  },
  {
    icon: Zap,
    title: "Debloated NVIDIA Driver",
    color: "text-green-400"
  },
  {
    icon: Target,
    title: "Optimized NVIDIA Settings",
    color: "text-orange-400"
  },
  {
    icon: Settings,
    title: "Deep System Debloat",
    color: "text-blue-400"
  },
  {
    icon: Wifi,
    title: "Network Optimization",
    color: "text-cyan-400"
  },
  {
    icon: Shield,
    title: "Max System Stability",
    color: "text-emerald-400"
  },
  {
    icon: TrendingUp,
    title: "Better 1% / 0.1% Lows",
    color: "text-yellow-400"
  },
  {
    icon: Mouse,
    title: "Improved Mouse Feel",
    color: "text-pink-400"
  },
  {
    icon: Cpu,
    title: "Win32 Priority Boost",
    color: "text-indigo-400"
  },
  {
    icon: Music,
    title: "Spotify Debloat (No Ads)",
    color: "text-green-400"
  },
  {
    icon: MessageSquare,
    title: "Discord Debloat",
    color: "text-blue-400"
  },
  {
    icon: Video,
    title: "Clipping App Optimization",
    color: "text-red-400"
  },
  {
    icon: Gauge,
    title: "10x Smoother Frame Pacing",
    color: "text-purple-400"
  }
];

export const WhatsIncluded = () => {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🔥 <span className="bg-gradient-primary bg-clip-text text-transparent">WHAT'S INCLUDED</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive optimization for maximum gaming performance
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-glow-primary group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-muted/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    {feature.subtitle && (
                      <p className="text-sm text-muted-foreground">
                        {feature.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};