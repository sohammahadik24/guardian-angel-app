import { useNavigate } from "react-router-dom";
import { User, Users, Heart, Shield, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useUserRole } from "@/context/UserRoleContext";

const Login = () => {
  const navigate = useNavigate();
  const { setRole } = useUserRole();

  const handleLogin = (role: "elderly" | "caretaker") => {
    setRole(role);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 w-full max-w-sm">
        <div className="text-center mb-10 animate-fade-in">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-5 shadow-lg">
            <Heart className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-elderly-2xl font-extrabold text-foreground">
            Elderly Care
          </h1>
          <p className="text-elderly-sm text-muted-foreground mt-1 flex items-center justify-center gap-1">
            <Sparkles className="w-4 h-4" /> & Support
          </p>
        </div>

        <p className="text-elderly-base font-bold text-foreground mb-6 text-center">
          Who are you?
        </p>

        <div className="space-y-4 animate-scale-in">
          <Card
            className="card-elevated bg-card cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => handleLogin("elderly")}
          >
            <CardContent className="flex items-center gap-5 p-6">
              <div className="icon-circle-lg bg-primary/10">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-elderly-lg font-bold text-foreground">I need help</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Simple & easy interface for elderly users
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="card-elevated bg-card cursor-pointer rounded-2xl overflow-hidden"
            onClick={() => handleLogin("caretaker")}
          >
            <CardContent className="flex items-center gap-5 p-6">
              <div className="icon-circle-lg bg-accent">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <div>
                <p className="text-elderly-lg font-bold text-foreground">I'm a caretaker</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Full dashboard for family & caregivers
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span className="text-sm">Your data stays on this device</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
