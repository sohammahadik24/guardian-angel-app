import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
