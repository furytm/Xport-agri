import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Shield, Globe, Users, Leaf, Phone, Mail, MessageCircle } from "lucide-react"
import Navbar from "@/src/components/Navbar"
import Footer from "@/src/components/Footer"

export default function AgriExportLanding() {
  return (
    <div className="min-h-screen bg-white"
    >
      <Navbar />

      <section id="home" className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url('/cocoa-farm-plantation-with-workers-harvesting-coco.jpg')",
          }}
        />
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg">

            Exporting Premium Cocoa & Cashew Worldwide
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto text-pretty drop-shadow-md">
            Certified quality. Seamless delivery. Connecting global markets with Africa's finest agricultural products.
          </p>
          <Button asChild size="lg" className="bg-agri-orange hover:bg-orange-600 text-white text-lg px-8 py-3">
            <Link href="/contact">
              Start Export Inquiry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="about" className="bg-agri-cream py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-green mb-6">About  GlobalBridge Export</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 text-pretty">
            GlobalBridge Export Ltd is a proudly African company dedicated to connecting the world with the finest agro products from the continent. We specialize in sourcing, packaging, and exporting high-quality African agricultural products to international markets.
          </p>
          <Button asChild
            variant="outline"
            className="border-agri-green text-agri-green hover:bg-agri-green hover:text-white bg-transparent"
          ><Link  href="/about">   Learn More About Us</Link>
         
          </Button>
        </div>
      </section>

      <section id="products" className="py-16 px-4 bg-white pt-32 mt-4 relative z-[60]">
        <div className="max-w-7xl mx-auto bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Premium Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="flex-grow">
                <div
                  className="relative h-48 bg-cover bg-center rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('/premium-cocoa-pods-harvest.jpg')",
                  }}
                ></div>
                <CardTitle className="text-agri-green">Premium Cocoa</CardTitle>
                <CardDescription>
                  High-quality cocoa beans sourced from certified organic farms across West Africa.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Organic Certified</Badge>
                  <Badge variant="secondary">Fair Trade</Badge>
                </div>
                <Button asChild className="w-full bg-agri-orange hover:bg-orange-600 text-white"><Link href="/products">View Details</Link></Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="flex-grow">
                <div
                  className="relative h-48 bg-cover bg-center rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('/raw-cashew-nuts-in-wooden-bowl.jpg')",
                  }}
                />
                <CardTitle className="text-agri-green">Raw Cashew Nuts</CardTitle>
                <CardDescription>
                  Premium grade cashew nuts with excellent kernel recovery rates and superior quality.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Grade A</Badge>
                  <Badge variant="secondary">Export Quality</Badge>
                </div>
                <Button  className="w-full bg-agri-orange hover:bg-orange-600 text-white">View Details</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="flex-grow">
                <div
                  className="relative h-48 bg-cover bg-center rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('/various-african-agricultural-products-spices-grain.jpg')",
                  }}
                />
                <CardTitle className="text-agri-green">Other Products</CardTitle>
                <CardDescription>
                  Shea butter, palm oil, sesame seeds, and other premium agricultural exports.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Diverse Range</Badge>
                  <Badge variant="secondary">Quality Assured</Badge>
                </div>
                <Button  className="w-full bg-agri-orange hover:bg-orange-600 text-white"> <Link href="/products">View Details</Link></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="relative bg-fixed bg-center bg-cover bg-no-repeat py-16 px-4"
        style={{
          backgroundImage: "url('/cocoaseeds.webp')",
        }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Export Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-agri-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
                🌱
              </div>
              <h3 className="font-semibold text-white mb-2">Sourcing</h3>
              <p className="text-sm text-white">Direct partnerships with certified farmers and cooperatives</p>
            </div>

            <div className="text-center">
              <div className="bg-agri-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
                🤝
              </div>
              <h3 className="font-semibold text-white mb-2">Agreement</h3>
              <p className="text-sm text-white">Transparent contracts with clear terms and pricing</p>
            </div>

            <div className="text-center">
              <div className="bg-agri-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
                📄
              </div>
              <h3 className="font-semibold text-white mb-2">Documentation</h3>
              <p className="text-sm text-white">Complete export documentation and certifications</p>
            </div>

            <div className="text-center">
              <div className="bg-agri-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
                🚢
              </div>
              <h3 className="font-semibold text-white mb-2">Shipping</h3>
              <p className="text-sm text-white">Secure packaging and reliable global logistics</p>
            </div>

            <div className="text-center">
              <div className="bg-agri-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
                💳
              </div>
              <h3 className="font-semibold text-white mb-2">Payment</h3>
              <p className="text-sm text-white">Flexible payment terms and secure transactions</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-agri-orange hover:bg-orange-600 text-white">
              <Link href="/contact"> 
              Start Export Inquiry
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-agri-cream py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-agri-green text-center mb-12">
            Why Choose GlobalBridge Export
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-agri-orange mx-auto mb-4" />
              <h3 className="font-semibold text-agri-green mb-2">Certified Quality</h3>
              <p className="text-gray-800">ISO certified processes and international quality standards</p>
            </div>

            <div className="text-center">
              <Globe className="h-12 w-12 text-agri-orange mx-auto mb-4" />
              <h3 className="font-semibold text-agri-green mb-2">Global Shipping</h3>
              <p className="text-gray-800">Worldwide delivery with trusted logistics partners</p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-agri-orange mx-auto mb-4" />
              <h3 className="font-semibold text-agri-green mb-2">Farmer Partnerships</h3>
              <p className="text-gray-800">Direct relationships ensuring fair prices and quality</p>
            </div>

            <div className="text-center">
              <Leaf className="h-12 w-12 text-agri-orange mx-auto mb-4" />
              <h3 className="font-semibold text-agri-green mb-2">Transparent Process</h3>
              <p className="text-gray-800">Full traceability from farm to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-agri-green text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Import? Let's Talk.</h2>
            <p className="text-xl text-gray-200">
              Get in touch for quotes, samples, or any questions about our products.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="bg-white text-gray-900" />
                  <Input type="email" placeholder="Email Address" className="bg-white text-gray-900" />
                </div>
                <Input placeholder="Product Interest (Cocoa, Cashew, etc.)" className="bg-white text-gray-900" />
                <Textarea placeholder="Your Message" rows={4} className="bg-white text-gray-900" />
                <Button className="w-full bg-agri-orange hover:bg-orange-600 text-white">Send Inquiry</Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-agri-orange" />
                  <span>+234 903 439 7834</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-agri-orange" />
                  <span>info@globalbridge.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-agri-orange" />
                  <span>WhatsApp: +234 903 439 7834</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-2">Office Address</h4>
                <p className="text-gray-200">
                  25 Okezie Ugbaja Street
                  <br />
                  Victory Estate Off Ago
                  <br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
