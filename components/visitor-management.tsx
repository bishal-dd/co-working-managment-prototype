"use client"

import { useState } from "react"
import { UserCheck, Clock, Building, Plus, QrCode } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function VisitorManagement() {
  const [visitors, setVisitors] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "+1 234 567 8901",
      company: "Tech Corp",
      host: "John Doe",
      purpose: "Business Meeting",
      checkIn: "9:30 AM",
      checkOut: null,
      status: "checked-in",
      badge: "V001",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@startup.com",
      phone: "+1 234 567 8902",
      company: "StartupXYZ",
      host: "Sarah Wilson",
      purpose: "Interview",
      checkIn: "10:15 AM",
      checkOut: "11:45 AM",
      status: "checked-out",
      badge: "V002",
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@design.co",
      phone: "+1 234 567 8903",
      company: "Design Co",
      host: "Mike Chen",
      purpose: "Design Consultation",
      checkIn: "2:00 PM",
      checkOut: null,
      status: "checked-in",
      badge: "V003",
    },
  ])

  const expectedVisitors = [
    {
      id: 4,
      name: "David Wilson",
      email: "david@client.com",
      company: "Client Corp",
      host: "John Doe",
      expectedTime: "3:00 PM",
      purpose: "Project Review",
    },
    {
      id: 5,
      name: "Emma Brown",
      email: "emma@vendor.com",
      company: "Vendor Inc",
      host: "Sarah Wilson",
      expectedTime: "4:30 PM",
      purpose: "Vendor Meeting",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Visitor Management</h2>
            <p className="text-sm sm:text-base text-gray-600">Track and manage visitor check-ins and check-outs</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                  <QrCode className="h-4 w-4 mr-2" />
                  QR Check-in
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>QR Code Check-in</DialogTitle>
                  <DialogDescription>Generate QR code for visitor self-check-in</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <QrCode className="h-16 w-16 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    Visitors can scan this QR code to check themselves in
                  </p>
                  <Button>Generate New QR Code</Button>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Visitor
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Register New Visitor</DialogTitle>
                  <DialogDescription>Add a new visitor to the system</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input placeholder="First name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input placeholder="Last name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" placeholder="visitor@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input type="tel" placeholder="+1 234 567 8900" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input placeholder="Company name" />
                  </div>
                  <div>
                    <Label htmlFor="host">Host</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select host" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Doe</SelectItem>
                        <SelectItem value="sarah">Sarah Wilson</SelectItem>
                        <SelectItem value="mike">Mike Chen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="purpose">Purpose of Visit</Label>
                    <Textarea placeholder="Reason for visit..." />
                  </div>
                  <Button className="w-full">Register & Check In</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card className="hover:shadow-sm transition-shadow">
          <CardContent className="p-3 sm:p-4">
            <div className="flex items-center space-x-2">
              <UserCheck className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold">2</p>
                <p className="text-xs sm:text-sm text-gray-600 truncate">Currently In</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">Expected Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-sm text-gray-600">Total Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserCheck className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-gray-600">Checked Out</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex-1">
          <Input placeholder="Search visitors..." className="w-full" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="checked-in">Checked In</SelectItem>
            <SelectItem value="checked-out">Checked Out</SelectItem>
            <SelectItem value="expected">Expected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Current Visitors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="h-5 w-5" />
            Current Visitors
          </CardTitle>
          <CardDescription>Visitors currently in the building</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {visitors
              .filter((v) => v.status === "checked-in")
              .map((visitor) => (
                <div
                  key={visitor.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarFallback className="text-sm font-medium">
                        {visitor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{visitor.name}</h4>
                      <p className="text-sm text-gray-600 truncate">{visitor.company}</p>
                      <p className="text-sm text-gray-600 truncate">Host: {visitor.host}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge className="self-start sm:self-end text-xs">Badge: {visitor.badge}</Badge>
                    <p className="text-sm text-gray-600">Checked in: {visitor.checkIn}</p>
                    <Button size="sm" className="w-full sm:w-auto">
                      Check Out
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Expected Visitors */}
      <Card>
        <CardHeader>
          <CardTitle>Expected Visitors</CardTitle>
          <CardDescription>Visitors scheduled to arrive today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expectedVisitors.map((visitor) => (
              <div key={visitor.id} className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>
                      {visitor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{visitor.name}</h4>
                    <p className="text-sm text-gray-600">{visitor.company}</p>
                    <p className="text-sm text-gray-600">Host: {visitor.host}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Expected: {visitor.expectedTime}</p>
                  <p className="text-sm text-gray-600">{visitor.purpose}</p>
                  <Button size="sm" className="mt-2">
                    Pre-Check In
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
