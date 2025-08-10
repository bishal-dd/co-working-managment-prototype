"use client";

import { useState } from "react";
import {
  CreditCard,
  DollarSign,
  FileText,
  AlertCircle,
  Download,
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
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function BillingDashboard() {
  const [invoices] = useState([
    {
      id: "INV-001",
      member: "John Doe",
      amount: 450,
      dueDate: "2024-01-31",
      status: "Paid",
      items: ["Hot Desk (20 days)", "Meeting Room (5 hours)"],
      paidDate: "2024-01-28",
    },
    {
      id: "INV-002",
      member: "Sarah Wilson",
      amount: 680,
      dueDate: "2024-01-31",
      status: "Pending",
      items: ["Private Office (1 month)", "Parking Spot"],
      paidDate: null,
    },
    {
      id: "INV-003",
      member: "Mike Chen",
      amount: 320,
      dueDate: "2024-01-25",
      status: "Overdue",
      items: ["Dedicated Desk (1 month)"],
      paidDate: null,
    },
    {
      id: "INV-004",
      member: "Alex Thompson",
      amount: 150,
      dueDate: "2024-02-05",
      status: "Draft",
      items: ["Hot Desk (6 days)"],
      paidDate: null,
    },
  ]);

  const memberPlans = [
    {
      id: 1,
      member: "John Doe",
      plan: "Flexible",
      monthlyRate: 0,
      usage: { hotDesk: 20, meetingRoom: 5, printing: 50 },
      totalThisMonth: 450,
      status: "Active",
    },
    {
      id: 2,
      member: "Sarah Wilson",
      plan: "Private Office",
      monthlyRate: 600,
      usage: { parking: 1, printing: 25 },
      totalThisMonth: 680,
      status: "Active",
    },
    {
      id: 3,
      member: "Mike Chen",
      plan: "Dedicated Desk",
      monthlyRate: 300,
      usage: { printing: 30 },
      totalThisMonth: 320,
      status: "Active",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "default";
      case "Pending":
        return "secondary";
      case "Overdue":
        return "destructive";
      case "Draft":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Billing Dashboard</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Manage invoices, payments, and member billing
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button variant="outline" className="w-full sm:w-auto bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Create Invoice
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Invoice</DialogTitle>
                <DialogDescription>
                  Generate an invoice for a member
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
                      <SelectItem value="john">John Doe</SelectItem>
                      <SelectItem value="sarah">Sarah Wilson</SelectItem>
                      <SelectItem value="mike">Mike Chen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input type="number" placeholder="0.00" />
                  </div>
                  <div>
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input type="date" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea placeholder="Invoice description..." />
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Save as Draft
                  </Button>
                  <Button className="flex-1">Send Invoice</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">$24,580</p>
                <p className="text-sm text-gray-600">Monthly Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-gray-600">Invoices Sent</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">$2,340</p>
                <p className="text-sm text-gray-600">Outstanding</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-8 w-8 text-red-600" />
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-gray-600">Overdue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Member Plans Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Member Plans & Usage
          </CardTitle>
          <CardDescription>
            Current member subscriptions and usage tracking
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {memberPlans.map((member) => (
              <div
                key={member.id}
                className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Avatar className="h-12 w-12 flex-shrink-0">
                    <AvatarFallback className="text-sm font-medium">
                      {member.member
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium truncate">{member.member}</h4>
                    <p className="text-sm text-gray-600">{member.plan} Plan</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-1">
                      {Object.entries(member.usage).map(([key, value]) => (
                        <span
                          key={key}
                          className="bg-gray-100 px-2 py-1 rounded"
                        >
                          {key}: {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1">
                  <div className="text-2xl font-bold">
                    ${member.totalThisMonth}
                  </div>
                  <p className="text-sm text-gray-600">This month</p>
                  <Badge
                    variant="default"
                    className="self-start sm:self-end text-xs"
                  >
                    {member.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Invoices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Recent Invoices
          </CardTitle>
          <CardDescription>Manage and track invoice payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input placeholder="Search invoices..." className="flex-1" />
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="text-center flex-shrink-0 bg-gray-100 p-2 rounded">
                      <div className="font-mono text-sm font-medium">
                        {invoice.id}
                      </div>
                      <div className="text-xs text-gray-500">Invoice</div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium truncate">{invoice.member}</h4>
                      <p className="text-sm text-gray-600">
                        Due: {invoice.dueDate}
                      </p>
                      <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {invoice.items.join(", ")}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="text-xl font-bold">${invoice.amount}</div>
                    <Badge
                      variant={getStatusColor(invoice.status)}
                      className="self-start sm:self-end text-xs"
                    >
                      {invoice.status}
                    </Badge>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 sm:flex-none bg-transparent"
                      >
                        View
                      </Button>
                      {invoice.status === "Pending" && (
                        <Button size="sm" className="flex-1 sm:flex-none">
                          Mark Paid
                        </Button>
                      )}
                      {invoice.status === "Draft" && (
                        <Button size="sm" className="flex-1 sm:flex-none">
                          Send
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
