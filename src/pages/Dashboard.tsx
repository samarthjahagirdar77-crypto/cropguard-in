import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  CreditCard,
  AlertCircle,
  Bell,
  User,
  LogOut,
  ChevronRight,
  Shield,
  Calendar,
  Clock,
  CheckCircle,
  CloudRain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

const menuItems = [
  { icon: FileText, label: "My Policies", id: "policies" },
  { icon: CreditCard, label: "Premium Payments", id: "payments" },
  { icon: AlertCircle, label: "Claims & Status", id: "claims" },
  { icon: Bell, label: "Notifications", id: "notifications" },
  { icon: User, label: "Profile", id: "profile" },
];

const mockPolicies = [
  {
    id: "CG-2024-001",
    crop: "Paddy",
    area: "2.5 acres",
    premium: "₹1,875",
    sumInsured: "₹1,25,000",
    startDate: "Jun 15, 2024",
    endDate: "Nov 30, 2024",
    status: "Active",
  },
  {
    id: "CG-2024-002",
    crop: "Groundnut",
    area: "1 acre",
    premium: "₹2,500",
    sumInsured: "₹50,000",
    startDate: "Jun 20, 2024",
    endDate: "Oct 31, 2024",
    status: "Active",
  },
];

const mockClaims = [
  {
    id: "CLM-2024-001",
    policyId: "CG-2024-001",
    dateOfLoss: "Aug 10, 2024",
    reason: "Excess Rainfall",
    status: "Under Review",
    amount: "₹35,000",
  },
];

const mockNotifications = [
  {
    id: 1,
    type: "alert",
    message: "⚠️ Heavy rain alert in your district. Take precautions.",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "reminder",
    message: "📅 Your policy CG-2024-001 expires on Nov 30, 2024. Renew now!",
    time: "1 day ago",
  },
  {
    id: 3,
    type: "info",
    message: "✅ Your premium payment of ₹1,875 was successful.",
    time: "5 days ago",
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("policies");

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-background to-primary/5">
      {/* Top Bar */}
      <header className="bg-card/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-primary/10">
        <div className="container-main flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="CropGuard" className="h-10 w-auto" />
            <span className="hidden sm:block text-lg font-semibold text-accent">Dashboard</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="relative hover:bg-primary/20">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                3
              </span>
            </Button>
            <div className="flex items-center gap-2 bg-primary/20 px-3 py-1.5 rounded-full">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="font-semibold text-sm text-white">R</span>
              </div>
              <span className="hidden sm:inline font-medium text-sm">Ramappa</span>
            </div>
            <Link to="/">
              <Button variant="ghost" size="sm" className="hover:bg-destructive/10 hover:text-destructive">
                <LogOut className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container-main py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="p-2">
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                        activeTab === item.id
                          ? "bg-accent text-white shadow-md shadow-accent/30"
                          : "hover:bg-primary/30 text-foreground"
                      }`}
                    >
                      <item.icon className={`h-5 w-5 ${activeTab === item.id ? "text-white" : "text-accent"}`} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent">2</p>
                      <p className="text-sm text-muted-foreground">Active Policies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-500/10 to-amber-500/5 overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-amber-600">1</p>
                      <p className="text-sm text-muted-foreground">Pending Claims</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500/10 to-blue-500/5 overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-600">Nov 30</p>
                      <p className="text-sm text-muted-foreground">Next Renewal</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weather Alert */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <CloudRain className="h-8 w-8 text-amber-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-amber-800 flex items-center gap-2">
                    Weather Alert
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  </p>
                  <p className="text-sm text-amber-700">
                    Heavy rainfall expected in your district (Bengaluru Rural) in the next 48 hours.
                  </p>
                </div>
                <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white shadow-md">
                  View Details
                </Button>
              </CardContent>
            </Card>

            {/* Content based on active tab */}
            {activeTab === "policies" && (
              <Card className="border-0 shadow-lg">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl">My Policies</span>
                    <Link to="/plans">
                      <Button size="sm" className="bg-accent hover:bg-forest text-white shadow-md">
                        + Buy New Policy
                      </Button>
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {mockPolicies.map((policy) => (
                      <div
                        key={policy.id}
                        className="p-5 bg-gradient-to-r from-secondary/50 to-secondary/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                              <Shield className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                              <p className="font-semibold text-lg">{policy.crop}</p>
                              <Badge className="bg-accent/20 text-accent border-0">{policy.status}</Badge>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Policy: {policy.id} | Area: {policy.area}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Coverage: {policy.startDate} - {policy.endDate}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right bg-accent/10 px-4 py-2 rounded-lg">
                            <p className="text-xs text-muted-foreground">Sum Insured</p>
                            <p className="font-bold text-lg text-accent">{policy.sumInsured}</p>
                          </div>
                          <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-white">
                            View <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "claims" && (
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Claims & Status</span>
                    <Button size="sm" className="bg-accent hover:bg-forest text-white">
                      File New Claim
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockClaims.map((claim) => (
                      <div
                        key={claim.id}
                        className="p-4 bg-secondary/50 rounded-lg"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <p className="font-semibold">Claim #{claim.id}</p>
                              <Badge variant="outline" className="border-amber-500 text-amber-600">
                                {claim.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Policy: {claim.policyId} | Loss Date: {claim.dateOfLoss}
                            </p>
                            <p className="text-sm text-muted-foreground">Reason: {claim.reason}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Requested Amount</p>
                            <p className="font-semibold text-accent">{claim.amount}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "notifications" && (
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockNotifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="p-4 bg-secondary/50 rounded-lg flex items-start gap-3"
                      >
                        <div className="flex-1">
                          <p>{notif.message}</p>
                          <p className="text-sm text-muted-foreground mt-1">{notif.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "payments" && (
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle>Premium Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockPolicies.map((policy) => (
                      <div
                        key={policy.id}
                        className="p-4 bg-secondary/50 rounded-lg flex items-center justify-between"
                      >
                        <div>
                          <p className="font-semibold">{policy.crop} - {policy.id}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            Premium Paid: {policy.premium}
                          </p>
                        </div>
                        <Badge className="bg-accent text-white">Paid</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "profile" && (
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-medium">Ramappa</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Mobile</p>
                        <p className="font-medium">+91 9876543210</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">District</p>
                        <p className="font-medium">Bengaluru Rural, Karnataka</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Language</p>
                        <p className="font-medium">ಕನ್ನಡ (Kannada)</p>
                      </div>
                      <div className="p-3 bg-secondary/50 rounded-lg sm:col-span-2">
                        <p className="text-sm text-muted-foreground">Bank Account</p>
                        <p className="font-medium">XXXX XXXX 1234 (State Bank of India)</p>
                      </div>
                    </div>
                    <Button variant="outline">Edit Profile</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
