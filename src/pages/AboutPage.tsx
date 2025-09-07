import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Heart, Target, Handshake } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-agri-cream">
      <Navbar />

      {/* Hero Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/cocoa-farm-plantation-workers-harvesting-african-a.jpg')",
        
        
        }}
      >
        <div className="absolute inset-0 bg-agri-green/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Our Story</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Connecting Africa's finest agricultural products with global markets through trust, quality, and sustainable
            practices.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-agri-green mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              AgriExport Global is a leading agricultural export company specializing in premium cocoa, cashew nuts, and
              other high-quality African agricultural products. Founded with a vision to bridge the gap between African
              farmers and global markets, we have built a reputation for excellence, reliability, and sustainable
              business practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-agri-green mb-6">Our Origin Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2010 by a team of agricultural experts and international trade specialists, AgriExport
                  Global began as a small operation with a big vision: to create sustainable value chains that benefit
                  both African farmers and global consumers.
                </p>
                <p>
                  Starting with just a handful of cocoa farmers in Ghana, we have grown to work with over 1,200 farmers
                  across West Africa, maintaining our commitment to fair trade, quality excellence, and environmental
                  sustainability.
                </p>
                <p>
                  Today, we are proud to be one of Africa's most trusted agricultural export partners, serving clients
                  across Europe, Asia, and the Americas while continuing to support the communities that make our
                  success possible.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/company-founders-agricultural-field-ghana-sunrise.jpg"
                alt="Company founders in agricultural field"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-agri-green border-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-agri-green">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  To connect African farmers with global markets through sustainable, transparent, and mutually
                  beneficial trade relationships that create lasting value for all stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-agri-green border-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-agri-green">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  To be Africa's leading agricultural export company, recognized globally for quality, sustainability,
                  and positive impact on farming communities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-agri-green border-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-agri-green">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Quality Excellence</li>
                  <li>• Sustainable Practices</li>
                  <li>• Fair Trade Principles</li>
                  <li>• Community Empowerment</li>
                  <li>• Transparency & Trust</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team & Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-agri-green">Kwame Asante</CardTitle>
                <p className="text-gray-600">CEO & Founder</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm text-center">
                  20+ years in agricultural trade and sustainable farming practices. Passionate about empowering African
                  farmers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-agri-green">Sarah Osei</CardTitle>
                <p className="text-gray-600">Head of Quality Assurance</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm text-center">
                  Expert in international food safety standards and agricultural quality control with 15 years
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Handshake className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-agri-green">Michael Adjei</CardTitle>
                <p className="text-gray-600">Director of Operations</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm text-center">
                  Logistics and supply chain specialist ensuring efficient and reliable export operations worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-agri-orange mb-2">1,200+</div>
              <p className="text-gray-600">Partner Farmers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-agri-orange mb-2">25+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-agri-orange mb-2">10,000+</div>
              <p className="text-gray-600">Tons Exported Annually</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-agri-orange mb-2">95%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-agri-green mb-8">Certifications & Awards</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-agri-green text-agri-green px-4 py-2">
                ISO 22000 Certified
              </Badge>
              <Badge variant="outline" className="border-agri-green text-agri-green px-4 py-2">
                Fairtrade Partner
              </Badge>
              <Badge variant="outline" className="border-agri-green text-agri-green px-4 py-2">
                Organic Certified
              </Badge>
              <Badge variant="outline" className="border-agri-green text-agri-green px-4 py-2">
                Export Excellence Award 2023
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-agri-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join our network of satisfied clients and experience the AgriExport Global difference. Let's build a
            sustainable future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-agri-orange hover:bg-orange-600 text-white">
              Start Partnership
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-agri-green bg-transparent"
            >
              View Our Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
