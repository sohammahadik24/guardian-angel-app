import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, Type, Users, User, ChevronRight, Rocket } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { userData } from "@/data/mockData";

const languages = ["English", "हिन्दी (Hindi)", "தமிழ் (Tamil)", "తెలుగు (Telugu)", "ಕನ್ನಡ (Kannada)"];

const Settings = () => {
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState<"large" | "extra-large">("large");
  const [selectedLang, setSelectedLang] = useState("English");

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-4">
        <h1 className="text-elderly-xl font-bold animate-fade-in">⚙️ Settings</h1>
      </div>

      <div className="px-6 space-y-4">
        {/* Profile */}
        <Card className="bg-card border-0 shadow-sm">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-elderly-lg font-bold">{userData.name}</p>
              <p className="text-muted-foreground">Elderly User</p>
            </div>
          </CardContent>
        </Card>

        {/* Language */}
        <Card className="bg-card border-0 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-primary" />
              <h3 className="text-elderly-sm font-bold">Language</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Button
                  key={lang}
                  variant={selectedLang === lang ? "default" : "outline"}
                  className="rounded-2xl h-12 text-elderly-sm"
                  onClick={() => setSelectedLang(lang)}
                >
                  {lang}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Font size */}
        <Card className="bg-card border-0 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <Type className="w-6 h-6 text-primary" />
              <h3 className="text-elderly-sm font-bold">Font Size</h3>
            </div>
            <div className="flex gap-3">
              <Button
                variant={fontSize === "large" ? "default" : "outline"}
                className="rounded-2xl h-14 flex-1 text-elderly-sm"
                onClick={() => setFontSize("large")}
              >
                Large
              </Button>
              <Button
                variant={fontSize === "extra-large" ? "default" : "outline"}
                className="rounded-2xl h-14 flex-1 text-elderly-lg"
                onClick={() => setFontSize("extra-large")}
              >
                Extra Large
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Caregiver Dashboard */}
        <Card
          className="bg-primary/5 border-0 shadow-sm cursor-pointer hover:bg-primary/10 transition-colors"
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
          className="bg-accent border-0 shadow-sm cursor-pointer hover:bg-accent/80 transition-colors"
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
      </div>

      <BottomNav />
    </div>
  );
};

export default Settings;
