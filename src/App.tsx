import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index.tsx";
const Answers = lazy(() => import("./pages/Answers.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const FaqArticle = lazy(() => import("./pages/FaqArticle.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="pbsrk-theme" disableTransitionOnChange>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<main className="min-h-screen bg-background flex items-center justify-center" role="status">Loading…</main>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/answers" element={<Answers />} />
          <Route path="/answers/:slug" element={<FaqArticle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
