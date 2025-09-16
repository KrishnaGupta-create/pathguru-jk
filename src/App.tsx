import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Assessment from "./pages/Assessment";
import Dashboard from "./pages/Dashboard";
import Colleges from "./pages/Colleges";
import NGOs from "./pages/NGOs";
import SupportCenters from "./pages/SupportCenters";
import CareerPaths from "./pages/CareerPaths";
import Timeline from "./pages/Timeline";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/ngos" element={<NGOs />} />
            <Route path="/support-centers" element={<SupportCenters />} />
            <Route path="/career-paths" element={<CareerPaths />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
