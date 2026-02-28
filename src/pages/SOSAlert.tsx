import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, X, MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { emergencyContacts } from "@/data/mockData";

const SOSAlert = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);
  const [alertSent, setAlertSent] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setAlertSent(true);
    }
  }, [countdown]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sos/5 via-background to-background" />

      <div className="relative z-10 w-full max-w-md">
        {!alertSent ? (
          <div className="text-center animate-scale-in">
            <div className="w-36 h-36 rounded-full bg-sos/15 flex items-center justify-center mx-auto mb-6 border-4 border-sos/20">
              <AlertTriangle className="w-16 h-16 text-sos" />
            </div>
            <h1 className="text-elderly-2xl font-bold text-foreground mb-2">Sending SOS Alert...</h1>
            <p className="text-elderly-lg text-muted-foreground mb-8">
              Alert in <span className="text-sos font-extrabold text-elderly-3xl">{countdown}</span> seconds
            </p>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="w-full max-w-xs h-16 text-elderly-lg rounded-2xl mx-auto"
            >
              <X className="w-6 h-6 mr-2" /> Cancel
            </Button>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <div className="w-28 h-28 rounded-full bg-calm-green flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-14 h-14 text-secondary-foreground" />
            </div>
            <h1 className="text-elderly-2xl font-bold text-foreground mb-2">Alert Sent! ✅</h1>
            <p className="text-elderly-base text-muted-foreground mb-6">
              Help is on the way. Stay calm.
            </p>

            {/* Notified contacts */}
            <div className="bg-card rounded-2xl p-5 mb-5 card-elevated text-left">
              <h3 className="text-elderly-sm font-bold mb-3">Notifying:</h3>
              {emergencyContacts.slice(0, 3).map((c) => (
                <div key={c.id} className="flex items-center gap-3 py-3 border-b border-border last:border-0">
                  <div className="icon-circle bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-elderly-sm">{c.name}</p>
                    <p className="text-sm text-muted-foreground">{c.relation}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location sharing */}
            <div className="bg-primary/5 rounded-2xl p-4 mb-6 flex items-center gap-3 card-elevated">
              <MapPin className="w-6 h-6 text-primary shrink-0" />
              <p className="text-elderly-sm text-left">📍 Live location is being shared</p>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                className="w-full h-16 text-elderly-lg rounded-2xl bg-sos text-sos-foreground hover:bg-sos/90 shadow-lg"
                onClick={() => window.open("tel:112")}
              >
                <Phone className="w-6 h-6 mr-2" /> Call Emergency (112)
              </Button>
              <Button
                variant="outline"
                className="w-full h-14 text-elderly-base rounded-2xl"
                onClick={() => navigate("/")}
              >
                Go Back Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SOSAlert;
