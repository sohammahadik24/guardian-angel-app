import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, Type, Users, User, ChevronRight, Rocket, LogOut } from "lucide-react";
import CaretakerBottomNav from "@/components/CaretakerBottomNav";
import { useUserRole } from "@/context/UserRoleContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { userData } from "@/data/mockData";

const languages = ["English", "हिन्दी (Hindi)", "தமிழ் (Tamil)", "తెలుగు (Telugu)", "ಕನ್ನಡ (Kannada)"];

const Settings = () => {
  const navigate = useNavigate();
  const { logout } = useUserRole();
  const [fontSize, setFontSize] = useState<"large" | "extra-large">("large");
  const [selectedLang, setSelectedLang] = useState("English");

  return (
    <div className="min-h-screen pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 gradient-header rounded-b-[2rem]" />

      <div className="relative z-10">
        <div className="page-header">
          <h1 className="text-elderly-xl font-bold text-primary-foreground animate-fade-in">⚙️ Settings</h1>
        </div>

        <div className="px-6 space-y-4">
          {/* Profile */}
          <Card className="bg-card border-0 rounded-2xl card-elevated">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="icon-circle-lg bg-primary/10">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-elderly-lg font-bold">{userData.name}</p>
                <p className="text-muted-foreground">Elderly User</p>
              </div>
            </CardContent>
          </Card>

          {/* Language */}
          <Card className="bg-card border-0 rounded-2xl card-elevated">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-primary" />
                <h3 className="text-elderly-sm font-bold">Language</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang}
                    variant={selectedLang === lang ? "default" : "secondary"}
                    className="rounded-2xl h-12 text-elderly-sm shadow-sm"
                    onClick={() => setSelectedLang(lang)}
                  >
                    {lang}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Font size */}
          <Card className="bg-card border-0 rounded-2xl card-elevated">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <Type className="w-6 h-6 text-primary" />
                <h3 className="text-elderly-sm font-bold">Font Size</h3>
              </div>
              <div className="flex gap-3">
                <Button
                  variant={fontSize === "large" ? "default" : "secondary"}
                  className="rounded-2xl h-14 flex-1 text-elderly-sm shadow-sm"
                  onClick={() => setFontSize("large")}
                >
                  Large
                </Button>
                <Button
                  variant={fontSize === "extra-large" ? "default" : "secondary"}
                  className="rounded-2xl h-14 flex-1 text-elderly-lg shadow-sm"
                  onClick={() => setFontSize("extra-large")}
                >
                  Extra Large
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Caregiver Dashboard */}
          <Card
            className="bg-primary/5 border-0 rounded-2xl card-elevated cursor-pointer"
            onClick={() => navigate("/caregiver")}
          >
            <CardContent className="flex items-center gap-4 p-5">
              <Users className="w-8 h-8 text-primary" />
              <div className="flex-1">
                <p className="text-elderly-sm font-bold">Caregiver Dashboard</p>
                <p className="text-sm text-muted-foreground">Manage contacts, alerts & health</p>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </CardContent>
          </Card>

          {/* Future Scope */}
          <Card
            className="bg-accent border-0 rounded-2xl card-elevated cursor-pointer"
            onClick={() => navigate("/future")}
          >
            <CardContent className="flex items-center gap-4 p-5">
              <Rocket className="w-8 h-8 text-accent-foreground" />
              <div className="flex-1">
                <p className="text-elderly-sm font-bold">Future Features</p>
                <p className="text-sm text-muted-foreground">Planned enhancements</p>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </CardContent>
          </Card>

          {/* Logout */}
          <Button
            variant="outline"
            className="w-full h-14 rounded-2xl text-elderly-sm text-sos border-sos/30 hover:bg-sos/10"
            onClick={() => { logout(); navigate("/login"); }}
          >
            <LogOut className="w-5 h-5 mr-2" /> Log Out
          </Button>
        </div>
      </div>

      <CaretakerBottomNav />
    </div>
  );
};

export default Settings;
