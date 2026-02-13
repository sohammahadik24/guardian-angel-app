import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pill, Heart, FileText, Plus, Check, ArrowLeft } from "lucide-react";
import RoleNav from "@/components/RoleNav";
import { useUserRole } from "@/context/UserRoleContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { medications as initialMeds, healthTips, userData } from "@/data/mockData";

const Health = () => {
  const navigate = useNavigate();
  const { role } = useUserRole();
  const [meds, setMeds] = useState(initialMeds);
  const [activeTab, setActiveTab] = useState<"meds" | "tips" | "records">("meds");

  const toggleMed = (id: string) => {
    setMeds(meds.map((m) => (m.id === id ? { ...m, taken: !m.taken } : m)));
  };

  const tabs = [
    { key: "meds" as const, label: "Medications", icon: Pill },
    { key: "tips" as const, label: "Health Tips", icon: Heart },
    { key: "records" as const, label: "Records", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-4">
        {role === "elderly" && (
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-primary mb-4 min-h-[48px]">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-elderly-sm font-semibold">Back</span>
          </button>
        )}
        <h1 className="text-elderly-xl font-bold animate-fade-in">❤️ Health & Medication</h1>
      </div>

      {/* Tabs */}
      <div className="px-6 flex gap-2 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            variant={activeTab === tab.key ? "default" : "outline"}
            className="rounded-2xl h-14 text-elderly-sm px-5 shrink-0"
            onClick={() => setActiveTab(tab.key)}
          >
            <tab.icon className="w-5 h-5 mr-2" /> {tab.label}
          </Button>
        ))}
      </div>

      <div className="px-6">
        {activeTab === "meds" && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-elderly-lg font-bold">Today's Medications</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="rounded-2xl h-12">
                    <Plus className="w-5 h-5 mr-1" /> Add
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-elderly-lg">Add Medication</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-2">
                    <div>
                      <Label className="text-elderly-sm">Medicine Name</Label>
                      <Input className="h-14 text-elderly-base rounded-xl mt-1" placeholder="e.g. Paracetamol" />
                    </div>
                    <div>
                      <Label className="text-elderly-sm">Dosage</Label>
                      <Input className="h-14 text-elderly-base rounded-xl mt-1" placeholder="e.g. 500mg" />
                    </div>
                    <div>
                      <Label className="text-elderly-sm">Time</Label>
                      <Input className="h-14 text-elderly-base rounded-xl mt-1" placeholder="e.g. 8:00 AM" />
                    </div>
                    <Button className="w-full h-14 text-elderly-base rounded-2xl">Save Medication</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-3">
              {meds.map((med) => (
                <Card
                  key={med.id}
                  className={`border-0 shadow-sm cursor-pointer transition-all ${
                    med.taken ? "bg-calm-green/50" : "bg-card"
                  }`}
                  onClick={() => toggleMed(med.id)}
                >
                  <CardContent className="flex items-center gap-4 p-5">
                    <Checkbox
                      checked={med.taken}
                      className="w-8 h-8 rounded-lg border-2"
                      onCheckedChange={() => toggleMed(med.id)}
                    />
                    <div className="flex-1">
                      <p className={`text-elderly-base font-bold ${med.taken ? "line-through text-muted-foreground" : ""}`}>
                        {med.name}
                      </p>
                      <p className="text-sm text-muted-foreground">{med.dosage} • {med.time}</p>
                    </div>
                    {med.taken && <Check className="w-6 h-6 text-secondary-foreground" />}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tips" && (
          <div className="space-y-3 animate-fade-in">
            <h2 className="text-elderly-lg font-bold mb-4">Daily Health Tips</h2>
            {healthTips.map((tip, i) => (
              <Card key={i} className="bg-card border-0 shadow-sm">
                <CardContent className="p-5">
                  <p className="text-elderly-base">{tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "records" && (
          <div className="animate-fade-in">
            <h2 className="text-elderly-lg font-bold mb-4">Health Records</h2>
            <Card className="bg-card border-0 shadow-sm">
              <CardContent className="p-5 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Blood Type</p>
                  <p className="text-elderly-base font-bold">{userData.bloodType}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Allergies</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {userData.allergies.map((a) => (
                      <span key={a} className="bg-sos/10 text-sos px-3 py-1 rounded-full text-sm font-semibold">{a}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Conditions</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {userData.conditions.map((c) => (
                      <span key={c} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{c}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Emergency Notes</p>
                  <p className="text-elderly-sm mt-1">{userData.emergencyNotes}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <RoleNav />
    </div>
  );
};

export default Health;
