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
    <div className="min-h-screen bg-background pb-8">
      <div className="px-6 pt-8 pb-4">
        <button onClick={() => navigate("/settings")} className="flex items-center gap-2 text-primary mb-4 min-h-[48px]">
          <ArrowLeft className="w-6 h-6" />
          <span className="text-elderly-sm font-semibold">Back</span>
        </button>
        <h1 className="text-elderly-xl font-bold animate-fade-in">🚀 Future Scope</h1>
        <p className="text-muted-foreground text-elderly-sm mt-2">
          Planned features for upcoming versions of the app
        </p>
      </div>

      <div className="px-6 space-y-4">
        {futureFeatures.map((feature, i) => (
          <Card key={i} className="bg-card border-0 shadow-sm animate-fade-in">
            <CardContent className="flex items-start gap-4 p-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
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
  );
};

export default FutureScope;
