import { useNavigate } from "react-router-dom";
import { ArrowLeft, Watch, Activity, Brain, Bell, Wifi } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const futureFeatures = [
  { icon: Watch, title: "Wearable SOS Device", description: "A wrist-worn button that sends SOS alerts even without a phone, synced to the app." },
  { icon: Activity, title: "Fall Detection", description: "Automatic detection of falls using phone sensors, triggering an immediate alert to caregivers." },
  { icon: Brain, title: "AI Health Alerts", description: "AI-powered analysis of health patterns to predict and warn about potential health issues early." },
  { icon: Bell, title: "Smart Reminders", description: "Context-aware reminders based on user behavior — hydration, movement, sleep patterns." },
  { icon: Wifi, title: "Full Offline Mode", description: "Complete offline functionality with SMS-based SOS and cached medical data." },
];

const FutureScope = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 gradient-header rounded-b-[2rem]" />

      <div className="relative z-10">
        <div className="page-header">
          <button onClick={() => navigate("/settings")} className="flex items-center gap-2 text-primary-foreground/80 mb-4 min-h-[48px]">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-elderly-sm font-semibold">Back</span>
          </button>
          <h1 className="text-elderly-xl font-bold text-primary-foreground animate-fade-in">🚀 Future Scope</h1>
          <p className="text-primary-foreground/70 text-elderly-sm mt-2">
            Planned features for upcoming versions
          </p>
        </div>

        <div className="px-6 space-y-4">
          {futureFeatures.map((feature, i) => (
            <Card key={i} className="bg-card border-0 rounded-2xl card-elevated animate-fade-in">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="icon-circle bg-primary/10">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-elderly-sm font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureScope;
