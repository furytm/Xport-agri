import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import UmamiAnalytics from "../components/UmamiAnalytics";


export const metadata: Metadata = {
  title: "AgriExport Global - Premium African Agricultural Exports",
  description: "Premium cocoa and cashew exports from Africa to global markets",
    generator: 'v0.app',
      icons: {
    icon: "/log.jpg", 
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}   <UmamiAnalytics /></body>
       
    </html>
  )
}
