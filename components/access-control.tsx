"use client";

import { useState } from "react";
import { Shield, Key, CheckCircle, XCircle, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AccessControl() {
  const [accessLogs] = useState([
    {
      id: 1,
      user: "John Doe",
      cardId: "C001",
      location: "Main Entrance",
      action: "Entry",
      status: "Granted",
      timestamp: "2024-01-15 09:15:23",
    },
    {
      id: 2,
      user: "Sarah Wilson",
      cardId: "C002",
      location: "Conference Room A",
      action: "Entry",
      status: "Granted",
      timestamp: "2024-01-15 09:30:45",
    },
    {
      id: 3,
      user: "Unknown",
      cardId: "C999",
      location: "Server Room",
      action: "Entry",
      status: "Denied",
      timestamp: "2024-01-15 10:22:11",
    },
    {
      id: 4,
      user: "Mike Chen",
      cardId: "C003",
      location: "Main Entrance",
      action: "Exit",
      status: "Granted",
      timestamp: "2024-01-15 11:45:33",
    },
  ]);

  const accessCards = [
    {
      id: 1,
      cardId: "C001",
      user: "John Doe",
      role: "Admin",
      status: "Active",
      permissions: [
        "Main Entrance",
        "All Floors",
        "Server Room",
        "Conference Rooms",
      ],
      issued: "2024-01-01",
      expires: "2024-12-31",
    },
    {
      id: 2,
      cardId: "C002",
      user: "Sarah Wilson",
      role: "Member",
      status: "Active",
      permissions: [
        "Main Entrance",
        "1st Floor",
        "2nd Floor",
        "Conference Rooms",
      ],
      issued: "2024-01-05",
      expires: "2024-12-31",
    },
    {
      id: 3,
      cardId: "C003",
      user: "Mike Chen",
      role: "Member",
      status: "Suspended",
      permissions: ["Main Entrance", "1st Floor"],
      issued: "2024-01-10",
      expires: "2024-12-31",
    },
  ];

  const accessPoints = [
    {
      id: 1,
      name: "Main Entrance",
      status: "Online",
      lastActivity: "2 min ago",
    },
    {
      id: 2,
      name: "Server Room",
      status: "Online",
      lastActivity: "15 min ago",
    },
    {
      id: 3,
      name: "Conference Room A",
      status: "Online",
      lastActivity: "5 min ago",
    },
    {
      id: 4,
      name: "Conference Room B",
      status: "Offline",
      lastActivity: "2 hours ago",
    },
    {
      id: 5,
      name: "2nd Floor Access",
      status: "Online",
      lastActivity: "1 min ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Access Control</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Manage access cards, permissions, and security logs
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Issue New Card
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Issue New Access Card</DialogTitle>
              <DialogDescription>
                Create a new access card for a member
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="member">Member</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select member" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alex">Alex Thompson</SelectItem>
                    <SelectItem value="emma">Emma Davis</SelectItem>
                    <SelectItem value="david">David Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="cardId">Card ID</Label>
                <Input placeholder="C004" />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="visitor">Visitor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="expires">Expiry Date</Label>
                <Input type="date" />
              </div>
              <div>
                <Label>Permissions</Label>
                <div className="space-y-2 mt-2">
                  {[
                    "Main Entrance",
                    "1st Floor",
                    "2nd Floor",
                    "Conference Rooms",
                    "Server Room",
                  ].map((permission) => (
                    <div
                      key={permission}
                      className="flex items-center space-x-2"
                    >
                      <Switch id={permission} />
                      <Label htmlFor={permission}>{permission}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full">Issue Card</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">4/5</p>
                <p className="text-sm text-gray-600">Access Points Online</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Key className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">247</p>
                <p className="text-sm text-gray-600">Active Cards</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-gray-600">Access Granted Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-600">Access Denied Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Access Points Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Access Points Status
          </CardTitle>
          <CardDescription>
            Real-time status of all access control points
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {accessPoints.map((point) => (
              <div
                key={point.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      point.status === "Online" ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-sm truncate">
                      {point.name}
                    </h4>
                    <p className="text-xs text-gray-600 truncate">
                      Last: {point.lastActivity}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={
                    point.status === "Online" ? "default" : "destructive"
                  }
                  className="text-xs flex-shrink-0"
                >
                  {point.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Access Cards Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Access Cards
          </CardTitle>
          <CardDescription>
            Manage member access cards and permissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input placeholder="Search cards..." className="flex-1" />
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              {accessCards.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarFallback className="text-sm font-medium">
                        {card.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium truncate">{card.user}</h4>
                      <p className="text-sm text-gray-600 truncate">
                        Card ID: {card.cardId} • Role: {card.role}
                      </p>
                      <p className="text-sm text-gray-600">
                        Expires: {card.expires}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge
                      variant={
                        card.status === "Active" ? "default" : "destructive"
                      }
                      className="self-start sm:self-end text-xs"
                    >
                      {card.status}
                    </Badge>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 sm:flex-none bg-transparent"
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant={
                          card.status === "Active" ? "destructive" : "default"
                        }
                        className="flex-1 sm:flex-none"
                      >
                        {card.status === "Active" ? "Suspend" : "Activate"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Access Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Access Logs</CardTitle>
          <CardDescription>
            Latest access attempts and security events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {accessLogs.map((log) => (
              <div
                key={log.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2 rounded-full ${
                      log.status === "Granted" ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    {log.status === "Granted" ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">{log.user}</h4>
                    <p className="text-sm text-gray-600">
                      {log.action} at {log.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      log.status === "Granted" ? "default" : "destructive"
                    }
                  >
                    {log.status}
                  </Badge>
                  <p className="text-sm text-gray-600 mt-1">{log.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
