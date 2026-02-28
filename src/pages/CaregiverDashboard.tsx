import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, AlertTriangle, Heart, MapPin, Phone, Plus, Trash2, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { emergencyContacts, alertHistory, medications, userData } from "@/data/mockData";

const CaregiverDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"contacts" | "alerts" | "health" | "location">("contacts");
  const [contacts, setContacts] = useState(emergencyContacts);

  const removeContact = (id: string) => setContacts(contacts.filter((c) => c.id !== id));

  const tabs = [
    { key: "contacts" as const, label: "Contacts", icon: Users },
    { key: "alerts" as const, label: "Alerts", icon: AlertTriangle },
    { key: "health" as const, label: "Health", icon: Heart },
    { key: "location" as const, label: "Location", icon: MapPin },
  ];

  return (
    <div className="min-h-screen pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 gradient-header rounded-b-[2rem]" />

      <div className="relative z-10">
        <div className="page-header">
          <button onClick={() => navigate("/settings")} className="flex items-center gap-2 text-primary-foreground/80 mb-4 min-h-[48px]">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-elderly-sm font-semibold">Back</span>
          </button>
          <h1 className="text-elderly-xl font-bold text-primary-foreground animate-fade-in">👨‍👩‍👧 Caregiver Dashboard</h1>
          <p className="text-primary-foreground/70 text-elderly-sm mt-1">Managing care for {userData.name}</p>
        </div>

        <div className="px-6 flex gap-2 mb-6 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? "default" : "secondary"}
              className="rounded-2xl h-12 text-elderly-sm px-4 shrink-0 shadow-sm"
              onClick={() => setActiveTab(tab.key)}
            >
              <tab.icon className="w-5 h-5 mr-1" /> {tab.label}
            </Button>
          ))}
        </div>

        <div className="px-6">
          {activeTab === "contacts" && (
            <div className="animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h2 className="section-title mb-0">Emergency Contacts</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="rounded-2xl h-12 shadow-sm"><Plus className="w-5 h-5 mr-1" /> Add</Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-2xl">
                    <DialogHeader><DialogTitle className="text-elderly-lg">Add Contact</DialogTitle></DialogHeader>
                    <div className="space-y-4 pt-2">
                      <div><Label className="text-elderly-sm">Name</Label><Input className="h-14 text-elderly-base rounded-xl mt-1" /></div>
                      <div><Label className="text-elderly-sm">Phone</Label><Input className="h-14 text-elderly-base rounded-xl mt-1" /></div>
                      <div><Label className="text-elderly-sm">Relation</Label><Input className="h-14 text-elderly-base rounded-xl mt-1" /></div>
                      <Button className="w-full h-14 text-elderly-base rounded-2xl">Save Contact</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="space-y-3">
                {contacts.map((c) => (
                  <Card key={c.id} className="bg-card border-0 rounded-2xl card-elevated">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="icon-circle bg-primary/10">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold">{c.name}</p>
                        <p className="text-sm text-muted-foreground">{c.phone}</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeContact(c.id)} className="text-sos min-w-[48px] min-h-[48px]">
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "alerts" && (
            <div className="animate-fade-in">
              <h2 className="section-title">Alert History</h2>
              <div className="space-y-3">
                {alertHistory.map((alert) => (
                  <Card key={alert.id} className={`border-0 rounded-2xl card-elevated ${alert.status === "Cancelled" ? "bg-muted" : "bg-card"}`}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                          alert.type === "SOS" ? "bg-sos/10 text-sos" : "bg-primary/10 text-primary"
                        }`}>{alert.type}</span>
                        <span className="text-sm text-muted-foreground">{alert.date} • {alert.time}</span>
                      </div>
                      <p className="text-elderly-sm mt-2">{alert.notes}</p>
                      <p className="text-sm text-muted-foreground mt-1">Responded by: {alert.respondedBy}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "health" && (
            <div className="animate-fade-in">
              <h2 className="section-title">Health Overview</h2>
              <Card className="bg-card border-0 rounded-2xl card-elevated mb-4">
                <CardHeader><CardTitle>Health Records</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div><span className="text-sm text-muted-foreground">Blood Type:</span> <span className="font-bold">{userData.bloodType}</span></div>
                  <div><span className="text-sm text-muted-foreground">Allergies:</span> <span className="font-bold">{userData.allergies.join(", ")}</span></div>
                  <div><span className="text-sm text-muted-foreground">Conditions:</span> <span className="font-bold">{userData.conditions.join(", ")}</span></div>
                </CardContent>
              </Card>
              <h3 className="text-elderly-base font-bold mb-3">Medications</h3>
              <div className="space-y-2">
                {medications.map((m) => (
                  <Card key={m.id} className={`border-0 rounded-2xl card-elevated ${m.taken ? "bg-calm-green/50" : "bg-card"}`}>
                    <CardContent className="flex justify-between items-center p-4">
                      <div>
                        <p className="font-bold">{m.name} — {m.dosage}</p>
                        <p className="text-sm text-muted-foreground">{m.time}</p>
                      </div>
                      <span className={`text-sm font-bold ${m.taken ? "text-secondary-foreground" : "text-sos"}`}>
                        {m.taken ? "✅ Taken" : "⏳ Pending"}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "location" && (
            <div className="animate-fade-in">
              <h2 className="section-title">Location Tracking</h2>
              <Card className="bg-card border-0 rounded-2xl card-elevated">
                <CardContent className="p-5">
                  <div className="bg-primary/5 rounded-2xl p-8 flex flex-col items-center gap-4 mb-4">
                    <div className="icon-circle-lg bg-primary/10">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-elderly-sm font-bold text-center">Last Known Location</p>
                    <p className="text-muted-foreground text-center">Green Park, Block B, New Delhi</p>
                    <p className="text-sm text-muted-foreground">Updated 5 minutes ago</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    📍 Location updates are simulated for this prototype
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaregiverDashboard;
