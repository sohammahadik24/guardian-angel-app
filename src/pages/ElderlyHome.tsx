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
    { icon: Phone, label: "Call Family", color: "bg-primary/10 text-primary", action: () => navigate("/social") },
    { icon: Pill, label: "Medications", color: "bg-secondary text-secondary-foreground", action: () => navigate("/health") },
    { icon: Mic, label: "Voice Help", color: "bg-calm-green text-foreground", action: () => navigate("/voice") },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 animate-fade-in flex items-start justify-between">
        <div>
          <h1 className="text-elderly-2xl font-bold text-foreground">
            {greeting}, {userData.name} 👋
          </h1>
          <p className="text-muted-foreground text-elderly-sm mt-1">How can we help you today?</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="min-w-[48px] min-h-[48px] text-muted-foreground"
          onClick={() => { logout(); navigate("/login"); }}
          aria-label="Log out"
        >
          <LogOut className="w-6 h-6" />
        </Button>
      </div>

      {/* Giant SOS Button */}
      <div className="flex justify-center py-10 animate-scale-in">
        <button
          onClick={() => navigate("/sos")}
          className="w-52 h-52 rounded-full bg-sos text-sos-foreground flex flex-col items-center justify-center sos-pulse shadow-2xl active:scale-95 transition-transform"
          aria-label="Emergency SOS - tap for help"
        >
          <span className="text-elderly-3xl font-extrabold">SOS</span>
          <span className="text-elderly-base mt-2">Tap for Help</span>
        </button>
      </div>

      {/* 3 big action cards */}
      <div className="px-6 animate-fade-in">
        <div className="space-y-4">
          {quickActions.map((action) => (
            <Card
              key={action.label}
              className={`${action.color} border-0 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform`}
              onClick={action.action}
            >
              <div className="flex items-center gap-5 p-6 min-h-[80px]">
                <action.icon className="w-10 h-10 shrink-0" />
                <span className="text-elderly-lg font-bold">{action.label}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElderlyHome;
