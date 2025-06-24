import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TopBar } from "@/components/top-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Item Request App",
  description: "Manage item requests and approvals",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider defaultOpen={true}>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col min-w-0">
              <TopBar />
              <main className="flex-1 p-6 bg-gray-50 overflow-auto">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
