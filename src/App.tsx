import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DesignSystem from "./pages/DesignSystem";
import StarkenTechDashboard from "./pages/StarkenTechDashboard";
import NotFound from "./pages/NotFound";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackVirtualPageView } from "@/lib/gtm";

const queryClient = new QueryClient();

// Componente para rastrear mudanças de rotas na SPA
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Pequeno atraso para garantir que o título da página foi atualizado no DOM
    const handlePageView = () => {
      trackVirtualPageView(
        location.pathname + location.search,
        document.title
      );
    };

    const timer = setTimeout(handlePageView, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/starken-tech" element={<StarkenTechDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
