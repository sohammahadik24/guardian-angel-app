import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Stethoscope, Pill, Mic } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 animate-fade-in">
        <p className="text-muted-foreground text-elderly-sm">{time}</p>
        <h1 className="text-elderly-2xl font-bold text-foreground">
          {greeting}, {userData.name} 👋
        </h1>
      </div>

      {/* SOS Button */}
      <div className="flex justify-center py-8 animate-scale-in">
        <button
          onClick={() => navigate("/sos")}
          className="w-44 h-44 rounded-full bg-sos text-sos-foreground flex flex-col items-center justify-center sos-pulse shadow-2xl active:scale-95 transition-transform"
          aria-label="Emergency SOS - tap for help"
        >
          <span className="text-elderly-3xl font-extrabold">SOS</span>
          <span className="text-elderly-sm mt-1">Tap for Help</span>
        </button>
      </div>

      {/* Quick Actions */}
      <div className="px-6 animate-fade-in">
        <h2 className="text-elderly-lg font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <Card
              key={action.label}
              className={`${action.color} border-0 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform`}
              onClick={action.action}
            >
              <div className="flex flex-col items-center justify-center p-6 gap-3 min-h-[120px]">
                <action.icon className="w-10 h-10" />
                <span className="text-elderly-sm font-bold text-center">{action.label}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
