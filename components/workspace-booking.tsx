"use client"

import { useState } from "react"
import { MapPin, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function WorkspaceBooking() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

  const workspaces = [
    { id: 1, name: "Hot Desk 1", type: "Hot Desk", price: 25, status: "available", floor: "1st Floor" },
    {
      id: 2,
      name: "Hot Desk 2",
      type: "Hot Desk",
      price: 25,
      status: "occupied",
      floor: "1st Floor",
      occupant: "John Doe",
    },
    { id: 3, name: "Private Office A", type: "Private Office", price: 80, status: "available", floor: "2nd Floor" },
    {
      id: 4,
      name: "Private Office B",
      type: "Private Office",
      price: 80,
      status: "reserved",
      floor: "2nd Floor",
      occupant: "Sarah Wilson",
    },
    { id: 5, name: "Dedicated Desk 1", type: "Dedicated Desk", price: 45, status: "available", floor: "1st Floor" },
    {
      id: 6,
      name: "Dedicated Desk 2",
      type: "Dedicated Desk",
      price: 45,
      status: "occupied",
      floor: "1st Floor",
      occupant: "Mike Chen",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Workspace Booking</h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Manage workspace reservations and availability</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto sm:min-w-[140px]">
                <Plus className="h-4 w-4 mr-2" />
                New Booking
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Booking</DialogTitle>
                <DialogDescription>Book a workspace for a member</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="member">Member</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select member" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Doe</SelectItem>
                      <SelectItem value="sarah">Sarah Wilson</SelectItem>
                      <SelectItem value="mike">Mike Chen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="workspace">Workspace</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select workspace" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hotdesk1">Hot Desk 1 - $25/day</SelectItem>
                      <SelectItem value="office1">Private Office A - $80/day</SelectItem>
                      <SelectItem value="dedicated1">Dedicated Desk 1 - $45/day</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input type="date" />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input type="date" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea placeholder="Additional notes..." />
                </div>
                <Button className="w-full">Create Booking</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:gap-4">
          <div className="flex-1">
            <Input placeholder="Search workspaces..." className="w-full h-10" />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-44 h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="hotdesk">Hot Desk</SelectItem>
                <SelectItem value="private">Private Office</SelectItem>
                <SelectItem value="dedicated">Dedicated Desk</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-44 h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="occupied">Occupied</SelectItem>
                <SelectItem value="reserved">Reserved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
          {workspaces.map((workspace) => (
            <Card key={workspace.id} className="relative hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base sm:text-lg truncate">{workspace.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {workspace.type} • {workspace.floor}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={
                      workspace.status === "available"
                        ? "default"
                        : workspace.status === "occupied"
                          ? "destructive"
                          : "secondary"
                    }
                    className="flex-shrink-0 text-xs"
                  >
                    {workspace.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold">${workspace.price}</span>
                    <span className="text-sm text-gray-600">per day</span>
                  </div>

                  {workspace.occupant && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">Current: {workspace.occupant}</span>
                    </div>
                  )}

                  <Button className="w-full h-9" variant={workspace.status === "available" ? "default" : "outline"}>
                    {workspace.status === "available" ? "Book Now" : "View Details"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
