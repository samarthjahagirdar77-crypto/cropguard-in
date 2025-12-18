import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Eligibility from "./pages/Eligibility";
import Calculator from "./pages/Calculator";
import Claims from "./pages/Claims";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
}

// Public route that redirects if authenticated
function PublicOnlyRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Auth pages without header/footer - redirect to home if already logged in */}
      <Route path="/login" element={
        <PublicOnlyRoute>
          <Login />
        </PublicOnlyRoute>
      } />
      <Route path="/register" element={
        <PublicOnlyRoute>
          <Register />
        </PublicOnlyRoute>
      } />
      
      {/* Protected pages with header/footer */}
      <Route element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
      
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
