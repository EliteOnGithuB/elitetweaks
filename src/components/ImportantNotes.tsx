import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, XCircle, Info } from "lucide-react";

const removedApps = [
  "Windows Copilot",
  "Windows Error Reporting", 
  "Windows Defender & Security Center",
  "Windows Maps",
  "Windows Update",
  "OneDrive"
];

const unsupportedSoftware = [
  "Cheating Software",
  "Cracked Apps / Games",
  "Windows / Office Activators"
];

export const ImportantNotes = () => {
  return (
    <section className="px-6 py-16 bg-muted/30 animate-fade-in [animation-delay:1000ms]"
      style={{animationFillMode: 'both'}}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ⚠️ <span className="bg-gradient-primary bg-clip-text text-transparent">IMPORTANT NOTES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <Card className="bg-gradient-card border-border/20 hover:border-accent/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <Info className="h-6 w-6 text-accent" />
                Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg border border-accent/20">
                <p className="text-foreground mb-3 font-medium">
                  You'll need to <strong>factory reset</strong> if installing the custom OS.
                </p>
                <p className="text-muted-foreground mb-3">
                  The following apps will be removed:
                </p>
                <div className="flex flex-wrap gap-2">
                  {removedApps.map((app, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-muted/70 text-muted-foreground text-xs"
                    >
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="bg-gradient-card border-border/20 hover:border-destructive/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                ⛔ DISCLAIMER
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="text-foreground mb-3 font-medium">
                  The following <strong>may or may not work</strong> — use at your own risk.
                </p>
                <p className="text-destructive mb-3 font-medium">
                  No support or refunds if you ignore this.
                </p>
                <div className="flex flex-wrap gap-2">
                  {unsupportedSoftware.map((software, index) => (
                    <Badge 
                      key={index} 
                      variant="destructive" 
                      className="bg-destructive/20 text-destructive border-destructive/30 text-xs"
                    >
                      <XCircle className="mr-1 h-3 w-3" />
                      {software}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};