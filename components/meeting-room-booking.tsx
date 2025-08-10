"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Video,
  Wifi,
  Coffee,
  Plus,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function MeetingRoomBooking() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const meetingRooms = [
    {
      id: 1,
      name: "Conference Room A",
      capacity: 12,
      amenities: ["Video Conference", "Whiteboard", "WiFi", "Coffee"],
      price: 50,
      bookings: [
        {
          time: "9:00 AM - 11:00 AM",
          title: "Team Standup",
          organizer: "John Doe",
        },
        {
          time: "2:00 PM - 4:00 PM",
          title: "Client Meeting",
          organizer: "Sarah Wilson",
        },
      ],
    },
    {
      id: 2,
      name: "Conference Room B",
      capacity: 8,
      amenities: ["Video Conference", "Whiteboard", "WiFi"],
      price: 35,
      bookings: [
        {
          time: "10:00 AM - 12:00 PM",
          title: "Design Review",
          organizer: "Mike Chen",
        },
      ],
    },
    {
      id: 3,
      name: "Workshop Room",
      capacity: 20,
      amenities: ["Projector", "Sound System", "WiFi", "Coffee"],
      price: 80,
      bookings: [],
    },
    {
      id: 4,
      name: "Phone Booth 1",
      capacity: 1,
      amenities: ["WiFi", "Power Outlet"],
      price: 15,
      bookings: [
        {
          time: "11:00 AM - 11:30 AM",
          title: "Client Call",
          organizer: "Alex Thompson",
        },
      ],
    },
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Video Conference":
        return <Video className="h-4 w-4" />;
      case "WiFi":
        return <Wifi className="h-4 w-4" />;
      case "Coffee":
        return <Coffee className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">
            Meeting Room Booking
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Reserve meeting rooms and conference spaces
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Book Room
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Book Meeting Room</DialogTitle>
              <DialogDescription>
                Reserve a meeting room for your event
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="room">Meeting Room</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select room" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="room-a">
                      Conference Room A - $50/hour
                    </SelectItem>
                    <SelectItem value="room-b">
                      Conference Room B - $35/hour
                    </SelectItem>
                    <SelectItem value="workshop">
                      Workshop Room - $80/hour
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="title">Meeting Title</Label>
                <Input placeholder="Enter meeting title" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label htmlFor="attendees">Attendees</Label>
                  <Input type="number" placeholder="Number of attendees" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startTime">Start Time</Label>
                  <Input type="time" />
                </div>
                <div>
                  <Label htmlFor="endTime">End Time</Label>
                  <Input type="time" />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea placeholder="Meeting description..." />
              </div>
              <Button className="w-full">Book Room</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Date Selector */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-sm">Select Date:</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:flex-1">
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full sm:w-auto"
            />
            <span className="text-sm text-gray-600">
              Showing availability for{" "}
              {new Date(selectedDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </Card>

      {/* Meeting Rooms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6">
        {meetingRooms.map((room) => (
          <Card key={room.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div className="flex-1">
                  <CardTitle className="text-lg sm:text-xl">
                    {room.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Users className="h-4 w-4 flex-shrink-0" />
                    <span>Up to {room.capacity} people</span>
                  </CardDescription>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-2xl font-bold">${room.price}</div>
                  <div className="text-sm text-gray-600">per hour</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Amenities */}
                <div>
                  <h4 className="font-medium mb-2">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="flex items-center space-x-1"
                      >
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Today's Bookings */}
                <div>
                  <h4 className="font-medium mb-2">Today&apos;s Schedule</h4>
                  {room.bookings.length > 0 ? (
                    <div className="space-y-2">
                      {room.bookings.map((booking, index) => (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-2 bg-gray-50 rounded space-y-1 sm:space-y-0"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-xs sm:text-sm">
                              {booking.title}
                            </div>
                            <div className="text-xs text-gray-600">
                              {booking.organizer}
                            </div>
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 flex items-center">
                            <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                            <span className="truncate">{booking.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600">No bookings today</p>
                  )}
                </div>

                <Button className="w-full">Book This Room</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
