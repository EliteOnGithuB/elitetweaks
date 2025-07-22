import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="flex justify-center pt-8 pb-4 animate-fade-in">
      <Badge 
        variant="secondary" 
        className="bg-gradient-secondary text-foreground border-secondary/20 shadow-glow-secondary px-4 py-2 text-sm font-medium"
      >
        🔥 Professional PC Optimization Service by <span className="font-bold">ELITE</span>
      </Badge>
    </header>
  );
};