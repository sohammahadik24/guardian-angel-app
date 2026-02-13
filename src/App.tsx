import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserRoleProvider, useUserRole } from "@/context/UserRoleContext";
import Login from "./pages/Login";
import ElderlyHome from "./pages/ElderlyHome";
import Home from "./pages/Home";
import SOSAlert from "./pages/SOSAlert";
import Voice from "./pages/Voice";
import Health from "./pages/Health";
import NearbyHelp from "./pages/NearbyHelp";
import Social from "./pages/Social";
import CaregiverDashboard from "./pages/CaregiverDashboard";
import Settings from "./pages/Settings";
import FutureScope from "./pages/FutureScope";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { role } = useUserRole();

  if (!role) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  if (role === "elderly") {
    return (
      <Routes>
        <Route path="/" element={<ElderlyHome />} />
        <Route path="/sos" element={<SOSAlert />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/health" element={<Health />} />
        <Route path="/social" element={<Social />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  // caretaker — full access
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sos" element={<SOSAlert />} />
      <Route path="/voice" element={<Voice />} />
      <Route path="/health" element={<Health />} />
      <Route path="/nearby" element={<NearbyHelp />} />
      <Route path="/social" element={<Social />} />
      <Route path="/caregiver" element={<CaregiverDashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/future" element={<FutureScope />} />
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <UserRoleProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </UserRoleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
