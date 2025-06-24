import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, FileText, Package, Clock, CheckCircle } from "lucide-react"
import { SidebarToggleInfo } from "@/components/sidebar-toggle-info"
import Link from "next/link"

export default function HomePage() {
  const stats = [
    {
      title: "Total Requests",
      value: "24",
      description: "This month",
      icon: FileText,
      trend: "+12%",
    },
    {
      title: "Pending Approval",
      value: "8",
      description: "Awaiting review",
      icon: Clock,
      trend: "-5%",
    },
    {
      title: "Available Items",
      value: "156",
      description: "In inventory",
      icon: Package,
      trend: "+8%",
    },
    {
      title: "Approved Today",
      value: "3",
      description: "Completed requests",
      icon: CheckCircle,
      trend: "+2",
    },
  ]

  const quickActions = [
    {
      title: "New Request",
      description: "Submit a new item request",
      icon: Plus,
      href: "/new-request",
      color: "bg-primary-500 hover:bg-primary-600",
    },
    {
      title: "My Requests",
      description: "View your submitted requests",
      icon: FileText,
      href: "/my-requests",
      color: "bg-primary-400 hover:bg-primary-500",
    },
    {
      title: "Available Items",
      description: "Browse available inventory",
      icon: Package,
      href: "/available-items",
      color: "bg-primary-600 hover:bg-primary-700",
    },
    {
      title: "Pending Approval",
      description: "Review requests awaiting approval",
      icon: Clock,
      href: "/pending-approval",
      color: "bg-primary-300 hover:bg-primary-400",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your item requests.</p>
      </div>

      <SidebarToggleInfo />

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.trend} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <Card key={action.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-2`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={action.href}>Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest item request activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New request submitted", item: "Laptop - Dell XPS 13", time: "2 hours ago", status: "pending" },
              { action: "Request approved", item: "Office Chair - Ergonomic", time: "1 day ago", status: "approved" },
              { action: "Request delivered", item: "Monitor - 24 inch", time: "3 days ago", status: "completed" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.status === "pending"
                      ? "bg-yellow-500"
                      : activity.status === "approved"
                        ? "bg-green-500"
                        : "bg-blue-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.item}</p>
                </div>
                <div className="text-sm text-muted-foreground">{activity.time}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
