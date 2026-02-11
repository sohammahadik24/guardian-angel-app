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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      {!alertSent ? (
        <div className="text-center animate-scale-in">
          <div className="w-32 h-32 rounded-full bg-sos/20 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-16 h-16 text-sos" />
          </div>
          <h1 className="text-elderly-2xl font-bold text-foreground mb-2">Sending SOS Alert...</h1>
          <p className="text-elderly-lg text-muted-foreground mb-8">
            Alert in <span className="text-sos font-extrabold text-elderly-3xl">{countdown}</span> seconds
          </p>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="w-full max-w-xs h-16 text-elderly-lg rounded-2xl"
          >
            <X className="w-6 h-6 mr-2" /> Cancel
          </Button>
        </div>
      ) : (
        <div className="text-center animate-fade-in w-full max-w-md">
          <div className="w-28 h-28 rounded-full bg-calm-green flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-14 h-14 text-secondary-foreground" />
          </div>
          <h1 className="text-elderly-2xl font-bold text-foreground mb-2">Alert Sent! ✅</h1>
          <p className="text-elderly-base text-muted-foreground mb-6">
            Help is on the way. Stay calm.
          </p>

          {/* Notified contacts */}
          <div className="bg-card rounded-2xl p-5 mb-6 shadow-sm border border-border text-left">
            <h3 className="text-elderly-sm font-bold mb-3">Notifying:</h3>
            {emergencyContacts.slice(0, 3).map((c) => (
              <div key={c.id} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
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
          <div className="bg-primary/5 rounded-2xl p-4 mb-6 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-primary shrink-0" />
            <p className="text-elderly-sm text-left">📍 Live location is being shared</p>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              className="w-full h-16 text-elderly-lg rounded-2xl bg-sos text-sos-foreground hover:bg-sos/90"
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
  );
};

export default SOSAlert;
