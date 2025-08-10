"use client"

import { CalendarDays, CreditCard, Shield, MapPin, Home, UserCheck, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "workspace-booking", label: "Workspace Booking", icon: MapPin },
    { id: "meeting-rooms", label: "Meeting Rooms", icon: CalendarDays },
    { id: "visitors", label: "Visitor Management", icon: UserCheck },
    { id: "access-control", label: "Access Control", icon: Shield },
    { id: "billing", label: "Billing", icon: CreditCard },
  ]

  const handleMenuClick = (itemId: string) => {
    setActiveTab(itemId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-3 sm:p-4 flex justify-between items-center sticky top-0 z-40">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">CoWork Pro</h2>
          <p className="text-xs sm:text-sm text-gray-600">Management System</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="h-9 w-9 p-0"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out",
          "lg:relative lg:translate-x-0 lg:w-64 lg:flex-shrink-0",
          "fixed inset-y-0 left-0 z-50 w-72 sm:w-80 transform shadow-xl lg:shadow-none",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="p-4 lg:p-6 h-full overflow-y-auto">
          {/* Desktop Header */}
          <div className="hidden lg:block mb-6 lg:mb-8">
            <h2 className="text-xl font-bold text-gray-900">CoWork Pro</h2>
            <p className="text-sm text-gray-600">Management System</p>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors",
                    activeTab === item.id
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "text-gray-700 hover:bg-gray-50 active:bg-gray-100",
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
