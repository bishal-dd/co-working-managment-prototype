"use client"

import { useState } from "react"
import { Users, CreditCard, MapPin, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Sidebar } from "@/components/sidebar"
import { WorkspaceBooking } from "@/components/workspace-booking"
import { MeetingRoomBooking } from "@/components/meeting-room-booking"
import { VisitorManagement } from "@/components/visitor-management"
import { AccessControl } from "@/components/access-control"
import { BillingDashboard } from "@/components/billing-dashboard"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 overflow-auto">
        <div className="p-3 sm:p-4 lg:p-6">
          <div className="mb-4 lg:mb-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Co-Working Space Management</h1>
            <p className="text-sm lg:text-base text-gray-600 mt-1">Manage your workspace efficiently</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="overview">
              <OverviewDashboard />
            </TabsContent>

            <TabsContent value="workspace-booking">
              <WorkspaceBooking />
            </TabsContent>

            <TabsContent value="meeting-rooms">
              <MeetingRoomBooking />
            </TabsContent>

            <TabsContent value="visitors">
              <VisitorManagement />
            </TabsContent>

            <TabsContent value="access-control">
              <AccessControl />
            </TabsContent>

            <TabsContent value="billing">
              <BillingDashboard />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

function OverviewDashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workspace Occupancy</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <Progress value={78} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,580</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visitors Today</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">5 currently in building</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 lg:gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Latest workspace and meeting room reservations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Sarah Johnson", type: "Hot Desk", time: "9:00 AM - 5:00 PM", status: "active" },
                { name: "Tech Team", type: "Conference Room A", time: "2:00 PM - 4:00 PM", status: "upcoming" },
                { name: "Mike Chen", type: "Private Office", time: "All Day", status: "active" },
                { name: "Design Sprint", type: "Workshop Room", time: "10:00 AM - 6:00 PM", status: "upcoming" },
              ].map((booking, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg space-y-2 sm:space-y-0"
                >
                  <div>
                    <p className="font-medium text-sm sm:text-base">{booking.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {booking.type} • {booking.time}
                    </p>
                  </div>
                  <Badge
                    variant={booking.status === "active" ? "default" : "secondary"}
                    className="self-start sm:self-center"
                  >
                    {booking.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Important notifications and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "warning", message: "HVAC maintenance scheduled for tomorrow 8 AM", time: "2 hours ago" },
                { type: "info", message: "New member registration: Alex Thompson", time: "4 hours ago" },
                { type: "error", message: "Access card reader malfunction in Room B", time: "6 hours ago" },
                { type: "success", message: "Monthly billing completed successfully", time: "1 day ago" },
              ].map((alert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <AlertCircle
                    className={`h-4 w-4 mt-0.5 ${
                      alert.type === "error"
                        ? "text-red-500"
                        : alert.type === "warning"
                          ? "text-yellow-500"
                          : alert.type === "success"
                            ? "text-green-500"
                            : "text-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
