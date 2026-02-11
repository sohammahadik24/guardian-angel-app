import { Link, useLocation } from "react-router-dom";
import { Home, Heart, MapPin, Users, Settings } from "lucide-react";

const tabs = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/health", icon: Heart, label: "Health" },
  { path: "/nearby", icon: MapPin, label: "Nearby" },
  { path: "/social", icon: Users, label: "Social" },
  { path: "/settings", icon: Settings, label: "Settings" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="flex justify-around items-center max-w-lg mx-auto h-20">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[48px] rounded-xl px-3 py-2 transition-colors ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary"
              }`}
              aria-label={tab.label}
            >
              <tab.icon className="w-7 h-7" />
              <span className="text-xs font-semibold">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
