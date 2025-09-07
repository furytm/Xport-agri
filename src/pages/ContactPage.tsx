import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-agri-cream">
      <Navbar />

      {/* Hero Section */}
      
      <section className="py-20 bg-gradient-to-r from-agri-green to-green-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Ready to start your export journey? Get in touch with our experienced team to discuss your requirements and
            discover how we can serve your business.
          </p>
        </div>
      </section>

      {/* Contact Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-agri-green mb-6">Let's Connect</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're looking to source premium agricultural products, need information about our export process,
              or want to discuss a partnership opportunity, our team is here to help. We respond to all inquiries within
              24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-agri-green border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-agri-green">Send Us an Inquiry</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-agri-green mb-2">Full Name *</label>
                      <Input placeholder="Your full name" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-agri-green mb-2">Email Address *</label>
                      <Input type="email" placeholder="your@email.com" className="border-gray-300" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-agri-green mb-2">Company Name</label>
                      <Input placeholder="Your company" className="border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-agri-green mb-2">Phone Number</label>
                      <Input placeholder="+1 (555) 123-4567" className="border-gray-300" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-agri-green mb-2">Product Interest *</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option value="">Select a product</option>
                      <option value="cocoa">Premium Cocoa Beans</option>
                      <option value="cashew">Raw Cashew Nuts</option>
                      <option value="shea">Shea Butter & Nuts</option>
                      <option value="palm">Palm Oil & Kernel</option>
                      <option value="spices">Spices & Herbs</option>
                      <option value="multiple">Multiple Products</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-agri-green mb-2">Message *</label>
                    <Textarea
                      placeholder="Please describe your requirements, including quantity, destination, and any specific quality requirements..."
                      className="border-gray-300 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-agri-orange hover:bg-orange-600 text-white">Send Inquiry</Button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-agri-green flex items-center gap-2">
                    <Phone className="h-6 w-6" />
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-agri-green" />
                    <div>
                      <p className="font-medium text-agri-green">Main Office</p>
                      <p className="text-gray-600">+233 (0) 302 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-agri-green" />
                    <div>
                      <p className="font-medium text-agri-green">Email</p>
                      <p className="text-gray-600">info@agriexports.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-agri-green" />
                    <div>
                      <p className="font-medium text-agri-green">WhatsApp</p>
                      <p className="text-gray-600">+233 (0) 244 567 890</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-agri-green flex items-center gap-2">
                    <MapPin className="h-6 w-6" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium text-agri-green">Head Office</p>
                    <p className="text-gray-600">
                      123 Export Drive
                      <br />
                      Tema Industrial Area
                      <br />
                      Tema, Ghana
                      <br />
                      West Africa
                    </p>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-agri-green" />
                      <span className="font-medium text-agri-green">Business Hours</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM (GMT)
                      <br />
                      Saturday: 9:00 AM - 2:00 PM (GMT)
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-agri-green flex items-center gap-2">
                    <Globe className="h-6 w-6" />
                    Regional Offices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-agri-green">Côte d'Ivoire Office</p>
                    <p className="text-sm text-gray-600">Abidjan, Côte d'Ivoire</p>
                    <p className="text-sm text-gray-600">+225 27 20 123 456</p>
                  </div>
                  <div>
                    <p className="font-medium text-agri-green">Nigeria Office</p>
                    <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                    <p className="text-sm text-gray-600">+234 1 234 5678</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Department Contacts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-agri-green">Export Sales</CardTitle>
                <CardDescription>Product inquiries and orders</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-gray-600">sales@agriexports.com</p>
                <p className="text-sm text-gray-600">+233 (0) 302 123 457</p>
                <Badge variant="outline" className="border-agri-green text-agri-green">
                  Primary Contact
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-agri-green">Quality Assurance</CardTitle>
                <CardDescription>Certifications and quality</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-gray-600">quality@agriexports.com</p>
                <p className="text-sm text-gray-600">+233 (0) 302 123 458</p>
                <Badge variant="outline" className="border-agri-green text-agri-green">
                  Technical Support
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-agri-green">Logistics</CardTitle>
                <CardDescription>Shipping and documentation</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <p className="text-sm text-gray-600">logistics@agriexports.com</p>
                <p className="text-sm text-gray-600">+233 (0) 302 123 459</p>
                <Badge variant="outline" className="border-agri-green text-agri-green">
                  Shipping Support
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Alternative Ways to Reach Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-agri-green border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-agri-green flex items-center gap-2">
                  <MessageCircle className="h-6 w-6" />
                  WhatsApp Business
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Get instant responses to your questions through our WhatsApp Business account. Perfect for quick
                  inquiries and real-time communication.
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
                <p className="text-sm text-gray-600 text-center">Available: Monday - Friday, 8:00 AM - 6:00 PM (GMT)</p>
              </CardContent>
            </Card>

            <Card className="border-agri-green border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-agri-green flex items-center gap-2">
                  <Globe className="h-6 w-6" />
                  Schedule a Call
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Book a consultation call with our export specialists to discuss your specific requirements and get
                  personalized recommendations.
                </p>
                <Button className="w-full bg-agri-orange hover:bg-orange-600 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
                <p className="text-sm text-gray-600 text-center">30-minute consultation calls available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Find Our Office</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-agri-green mx-auto mb-4" />
                    <p className="text-lg font-semibold text-agri-green">Interactive Map</p>
                    <p className="text-gray-600">
                      123 Export Drive, Tema Industrial Area
                      <br />
                      Tema, Ghana, West Africa
                    </p>
                    <Button className="mt-4 bg-agri-orange hover:bg-orange-600 text-white">Get Directions</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-agri-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Exporting?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Don't wait - reach out today to discuss your agricultural export needs. Our experienced team is ready to
            help you succeed in the global marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-agri-orange hover:bg-orange-600 text-white">
              Send Inquiry Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-agri-green bg-transparent"
            >
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
