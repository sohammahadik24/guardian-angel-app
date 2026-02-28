import { useNavigate } from "react-router-dom";
import { Phone, Pill, Mic, LogOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { userData } from "@/data/mockData";
import { useUserRole } from "@/context/UserRoleContext";

const ElderlyHome = () => {
  const navigate = useNavigate();
  const { logout } = useUserRole();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  const quickActions = [
    { icon: Phone, label: "Call Family", emoji: "📞", color: "bg-primary/10 text-primary", action: () => navigate("/social") },
    { icon: Pill, label: "Medications", emoji: "💊", color: "bg-secondary text-secondary-foreground", action: () => navigate("/health") },
    { icon: Mic, label: "Voice Help", emoji: "🎤", color: "bg-calm-green text-foreground", action: () => navigate("/voice") },
  ];

  return (
    <div className="min-h-screen pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-56 gradient-header rounded-b-[2.5rem]" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 pt-8 pb-4 animate-fade-in flex items-start justify-between">
          <div>
            <p className="text-primary-foreground/80 text-elderly-sm">Welcome back</p>
            <h1 className="text-elderly-2xl font-bold text-primary-foreground">
              {greeting}, {userData.name} 👋
            </h1>
            <p className="text-primary-foreground/70 text-elderly-sm mt-1">How can we help you today?</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="min-w-[48px] min-h-[48px] text-primary-foreground/80 hover:bg-white/10"
            onClick={() => { logout(); navigate("/login"); }}
            aria-label="Log out"
          >
            <LogOut className="w-6 h-6" />
          </Button>
        </div>

        {/* Giant SOS Button */}
        <div className="flex justify-center py-8 animate-scale-in">
          <button
            onClick={() => navigate("/sos")}
            className="w-48 h-48 rounded-full flex flex-col items-center justify-center sos-pulse shadow-2xl active:scale-95 transition-transform"
            style={{ background: 'radial-gradient(circle at 40% 40%, hsl(0 80% 62%), hsl(0 80% 48%))' }}
            aria-label="Emergency SOS - tap for help"
          >
            <span className="text-elderly-3xl font-extrabold text-white">SOS</span>
            <span className="text-elderly-base mt-2 text-white/90">Tap for Help</span>
          </button>
        </div>

        {/* 3 big action cards */}
        <div className="px-6 animate-fade-in">
          <div className="space-y-4">
            {quickActions.map((action) => (
              <Card
                key={action.label}
                className={`${action.color} border-0 cursor-pointer card-elevated rounded-2xl`}
                onClick={action.action}
              >
                <div className="flex items-center gap-5 p-6 min-h-[80px]">
                  <div className="icon-circle bg-white/30">
                    <action.icon className="w-7 h-7" />
                  </div>
                  <span className="text-elderly-lg font-bold">{action.label}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderlyHome;
