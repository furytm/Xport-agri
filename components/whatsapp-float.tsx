"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  const content = {
    tooltip: "Chat with us on WhatsApp",
    greeting: "Hello! How can we assist you today?",
    options: [
      {
        id: "products",
        text: "Inquire About Our Products",
        message:
          "Hello! I'm interested in your export products — cocoa, cashew nuts, and natural spices. Could you share more details about quality and specifications?",
      },
      {
        id: "pricing",
        text: "Request Product Pricing",
        message:
          "Hi! I'd like to get a price quote for your cocoa, cashew, or spice exports. Please provide your current export prices and available quantities.",
      },
      {
        id: "partnership",
        text: "Discuss Partnership or Bulk Orders",
        message:
          "Good day! I’m interested in discussing a potential export partnership or bulk purchase. Could we arrange a meeting to talk about supply terms?",
      },
      {
        id: "shipping",
        text: "Ask About Shipping & Delivery",
        message:
          "Hello! Can you tell me more about your international shipping process, timelines, and export documentation?",
      },
     
    ],
  }

  const handleOptionClick = (message: string) => {
    const whatsappUrl = `https://wa.me/2349034397834?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Options */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 animate-scale-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-black">{content.greeting}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {content.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.message)}
                className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-green-50 hover:text-green-700 transition-colors text-sm text-black"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-gold-glow"
        title={content.tooltip}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  )
}
