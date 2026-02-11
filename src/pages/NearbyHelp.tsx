import { useState } from "react";
import { MapPin, Phone, Building2, Stethoscope, Cross, Ambulance } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { nearbyFacilities } from "@/data/mockData";

const typeIcons: Record<string, React.ReactNode> = {
  Hospital: <Building2 className="w-6 h-6" />,
  Clinic: <Stethoscope className="w-6 h-6" />,
  Pharmacy: <Cross className="w-6 h-6" />,
  Ambulance: <Ambulance className="w-6 h-6" />,
};

const typeColors: Record<string, string> = {
  Hospital: "bg-primary/10 text-primary",
  Clinic: "bg-accent text-accent-foreground",
  Pharmacy: "bg-calm-green text-foreground",
  Ambulance: "bg-sos/10 text-sos",
};

const filters = ["All", "Hospital", "Clinic", "Pharmacy", "Ambulance"];

const NearbyHelp = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? nearbyFacilities
    : nearbyFacilities.filter((f) => f.type === activeFilter);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-6 pt-8 pb-4">
        <h1 className="text-elderly-xl font-bold animate-fade-in">📍 Nearby Help</h1>
        <p className="text-muted-foreground text-elderly-sm mt-1">Hospitals, clinics & more near you</p>
      </div>

      {/* Filters */}
      <div className="px-6 flex gap-2 mb-6 overflow-x-auto pb-1">
        {filters.map((f) => (
          <Button
            key={f}
            variant={activeFilter === f ? "default" : "outline"}
            className="rounded-2xl h-12 text-elderly-sm px-5 shrink-0"
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <div className="px-6 space-y-3">
        {filtered.map((facility) => (
          <Card key={facility.id} className="bg-card border-0 shadow-sm animate-fade-in">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${typeColors[facility.type]}`}>
                  {typeIcons[facility.type]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-elderly-sm font-bold">{facility.name}</h3>
                  <p className="text-sm text-muted-foreground">{facility.type} • {facility.distance}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {facility.address}
                  </p>
                </div>
              </div>
              <Button
                className="w-full mt-4 h-14 rounded-2xl text-elderly-sm bg-primary text-primary-foreground"
                onClick={() => window.open(`tel:${facility.phone}`)}
              >
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default NearbyHelp;
