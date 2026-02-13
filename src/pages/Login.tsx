import { useNavigate } from "react-router-dom";
import { User, Users, Heart, Shield } from "lucide-react";
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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="text-center mb-10 animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Heart className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-elderly-2xl font-extrabold text-foreground">
          Elderly Care
        </h1>
        <p className="text-elderly-sm text-muted-foreground mt-2">
          & Support
        </p>
      </div>

      <p className="text-elderly-base font-bold text-foreground mb-6 text-center">
        Who are you?
      </p>

      <div className="w-full max-w-sm space-y-4 animate-scale-in">
        <Card
          className="bg-card border-2 border-primary/20 shadow-md cursor-pointer hover:border-primary hover:shadow-lg active:scale-[0.98] transition-all"
          onClick={() => handleLogin("elderly")}
        >
          <CardContent className="flex items-center gap-5 p-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
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
          className="bg-card border-2 border-accent/40 shadow-md cursor-pointer hover:border-accent-foreground/30 hover:shadow-lg active:scale-[0.98] transition-all"
          onClick={() => handleLogin("caretaker")}
        >
          <CardContent className="flex items-center gap-5 p-6">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shrink-0">
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

      <div className="mt-10 flex items-center gap-2 text-muted-foreground">
        <Shield className="w-4 h-4" />
        <span className="text-sm">Your data stays on this device</span>
      </div>
    </div>
  );
};

export default Login;
