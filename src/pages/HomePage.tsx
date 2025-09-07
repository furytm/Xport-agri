import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, Shield, Truck, Award, Globe, Users } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/african-cocoa-farm-plantation-workers-harvesting.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance drop-shadow-lg">
            Exporting Premium Cocoa & Cashew Worldwide
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance drop-shadow-md">
            Certified quality. Seamless delivery. Connecting global markets with Africa's finest agricultural products.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
            Start Export Inquiry →
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About AgriExport Global</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              For over a decade, AgriExport Global has been Africa's trusted partner in premium agricultural exports. We
              specialize in sourcing, processing, and delivering the finest cocoa and cashew products to international
              markets, maintaining the highest standards of quality and sustainability throughout our supply chain.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-agri-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Sourcing</h3>
                <p className="text-gray-700">
                  Direct partnerships with local farmers ensuring fair trade and environmental responsibility.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-agri-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
                <p className="text-gray-700">
                  Rigorous testing and certification processes meeting international food safety standards.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-agri-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
                <p className="text-gray-700">
                  Established distribution networks across Europe, Asia, and the Americas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Products</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our carefully selected range of premium agricultural exports, sourced directly from the finest
              farms across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="flex-grow">
                <div
                  className="h-48 bg-cover bg-center rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('/premium-cocoa-pods-harvest.jpg')",
                  }}
                ></div>
                <CardTitle className="text-xl text-agri-green">Premium Cocoa</CardTitle>
                <p className="text-gray-700">
                  High-quality cocoa beans sourced from sustainable farms. Available in various grades including fine
                  flavor cocoa with rich, complex profiles perfect for premium chocolate production.
                </p>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full border-agri-green text-agri-green hover:bg-agri-green hover:text-white bg-transparent"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="flex-grow">
                <div
                  className="h-48 bg-cover bg-center rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('/raw-cashew-nuts-in-wooden-bowl.jpg')",
                  }}
                ></div>
                <CardTitle className="text-xl text-agri-green">Raw Cashew</CardTitle>
                <p className="text-gray-700">
                  Premium raw cashew nuts with excellent kernel recovery rates. Carefully processed and graded to meet
                  international standards for export to processing facilities worldwide.
                </p>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full border-agri-green text-agri-green hover:bg-agri-green hover:text-white bg-transparent"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="flex-grow">
                <div
                  className="h-48 bg-cover bg-center rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('/various-african-agricultural-products-spices-grain.jpg')",
                  }}
                ></div>
                <CardTitle className="text-xl text-agri-green">Other Exports</CardTitle>
                <p className="text-gray-700">
                  Diverse range of African agricultural products including spices, grains, and specialty crops. All
                  products meet strict quality standards and international certification requirements.
                </p>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button
                  variant="outline"
                  className="w-full border-agri-green text-agri-green hover:bg-agri-green hover:text-white bg-transparent"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-agri-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-agri-green mb-4">Our Export Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From farm to your facility, we ensure quality and reliability at every step of the export process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-agri-green text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-agri-green mb-2">Sourcing & Quality Control</h3>
                  <p className="text-gray-700">
                    Direct sourcing from certified farms with rigorous quality testing and grading processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-agri-green text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-agri-green mb-2">Agreement & Pricing</h3>
                  <p className="text-gray-700">
                    Transparent pricing with flexible Incoterms and minimum order quantities tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-agri-green text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-agri-green mb-2">Documentation & Compliance</h3>
                  <p className="text-gray-700">
                    Complete export documentation including certificates, licenses, and SGS inspection reports.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-agri-green text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-agri-green mb-2">Shipping & Logistics</h3>
                  <p className="text-gray-700">
                    Reliable shipping partners ensuring safe and timely delivery to your specified destination.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-agri-green text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-agri-green mb-2">Payment & Delivery</h3>
                  <p className="text-gray-700">
                    Secure payment processing with multiple options and full tracking until successful delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-agri-green mb-4">Why Choose AgriExport Global</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Your trusted partner for premium African agricultural exports with proven expertise and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="bg-agri-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-agri-green mb-3">Certified Quality</h3>
              <p className="text-gray-800">
                ISO certified processes and international quality standards ensure consistent premium products.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-agri-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-agri-green mb-3">Reliable Delivery</h3>
              <p className="text-gray-800">
                Worldwide delivery with trusted logistics partners and comprehensive tracking systems.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-agri-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-agri-green mb-3">Expert Support</h3>
              <p className="text-gray-800">
                Dedicated export specialists providing personalized service and market expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-agri-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-agri-green mb-4">Start Your Export Journey</h2>
              <p className="text-lg text-gray-700">
                Ready to source premium African agricultural products? Get in touch with our export specialists today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-agri-green mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-700">exports@agriglobal.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-700">+233 XX XXX XXXX</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office</h4>
                    <p className="text-gray-700">Accra, Ghana</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-agri-green mb-6">Send Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent">
                      <option>Product Interest</option>
                      <option>Premium Cocoa</option>
                      <option>Raw Cashew</option>
                      <option>Other Products</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agri-green focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-agri-green hover:bg-green-800 text-white">Send Inquiry</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
