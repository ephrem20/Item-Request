"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Keyboard, Menu } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"

export function SidebarToggleInfo() {
  const { state } = useSidebar()

  if (state === "collapsed") return null

  return (
    <Card className="mb-4 border-primary-200 bg-primary-50">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm text-primary-800 flex items-center gap-2">
          <Menu className="h-4 w-4" />
          Navigation Tips
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2 text-xs text-primary-700">
          <div className="flex items-center gap-2">
            <Keyboard className="h-3 w-3" />
            <span>
              Press <kbd className="px-1 py-0.5 bg-white rounded border">Ctrl + B</kbd> to toggle sidebar
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Menu className="h-3 w-3" />
            <span>Click the menu button in the top bar to collapse/expand</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
