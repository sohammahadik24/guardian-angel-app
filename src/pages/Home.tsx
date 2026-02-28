import { useNavigate } from "react-router-dom";
import { Phone, Stethoscope, Pill, Mic } from "lucide-react";
import CaretakerBottomNav from "@/components/CaretakerBottomNav";
import { Card } from "@/components/ui/card";
import { userData } from "@/data/mockData";

const Home = () => {
  const navigate = useNavigate();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const quickActions = [
    { icon: Phone, label: "Call Family", color: "bg-primary/10 text-primary", action: () => navigate("/social") },
    { icon: Stethoscope, label: "Call Doctor", color: "bg-accent text-accent-foreground", action: () => navigate("/nearby") },
    { icon: Pill, label: "Medications", color: "bg-secondary text-secondary-foreground", action: () => navigate("/health") },
    { icon: Mic, label: "Voice Help", color: "bg-calm-green text-foreground", action: () => navigate("/voice") },
  ];

  return (
    <div className="min-h-screen pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-48 gradient-header rounded-b-[2.5rem]" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 pt-8 pb-4 animate-fade-in">
          <p className="text-primary-foreground/70 text-elderly-sm">{time}</p>
          <h1 className="text-elderly-2xl font-bold text-primary-foreground">
            {greeting}, {userData.name} 👋
          </h1>
        </div>

        {/* SOS Button */}
        <div className="flex justify-center py-8 animate-scale-in">
          <button
            onClick={() => navigate("/sos")}
            className="w-40 h-40 rounded-full flex flex-col items-center justify-center sos-pulse shadow-2xl active:scale-95 transition-transform"
            style={{ background: 'radial-gradient(circle at 40% 40%, hsl(0 80% 62%), hsl(0 80% 48%))' }}
            aria-label="Emergency SOS - tap for help"
          >
            <span className="text-elderly-3xl font-extrabold text-white">SOS</span>
            <span className="text-elderly-sm mt-1 text-white/90">Tap for Help</span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="px-6 animate-fade-in">
          <h2 className="text-elderly-lg font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action) => (
              <Card
                key={action.label}
                className={`${action.color} border-0 cursor-pointer card-elevated rounded-2xl`}
                onClick={action.action}
              >
                <div className="flex flex-col items-center justify-center p-6 gap-3 min-h-[120px]">
                  <div className="icon-circle bg-white/30">
                    <action.icon className="w-7 h-7" />
                  </div>
                  <span className="text-elderly-sm font-bold text-center">{action.label}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <CaretakerBottomNav />
    </div>
  );
};

export default Home;
