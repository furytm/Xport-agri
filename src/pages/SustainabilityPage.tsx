import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, Heart, Award, TreePine, Droplets } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-agri-cream">
      <Navbar />

      {/* Hero Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/sustainable-cocoa-farming-agroforestry-community.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-agri-green/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Sustainable Agriculture</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Building a sustainable future through responsible sourcing, environmental stewardship, and community
            empowerment across Africa's agricultural landscape.
          </p>
        </div>
      </section>

      {/* Sustainability Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-agri-green mb-6">Our Commitment to Sustainability</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that sustainable agriculture is not just about environmental protection—it's about creating
              lasting value for farmers, communities, and the global food system. Our comprehensive approach addresses
              environmental, social, and economic sustainability at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Our Sustainability Pillars</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-agri-green border-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-agri-green">Environmental Stewardship</CardTitle>
                <CardDescription>Protecting ecosystems and biodiversity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We promote farming practices that preserve soil health, conserve water, and protect biodiversity while
                  maintaining productive agricultural systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Organic farming certification programs</li>
                  <li>• Soil conservation and regeneration</li>
                  <li>• Water management systems</li>
                  <li>• Biodiversity preservation initiatives</li>
                  <li>• Carbon footprint reduction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-agri-green border-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-agri-green">Social Responsibility</CardTitle>
                <CardDescription>Empowering communities and farmers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We invest in the social development of farming communities through education, healthcare, and
                  infrastructure improvements that create lasting positive impact.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Fair trade pricing and practices</li>
                  <li>• Farmer training and education</li>
                  <li>• Community health programs</li>
                  <li>• Women's empowerment initiatives</li>
                  <li>• Youth engagement in agriculture</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-agri-green border-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-agri-green">Economic Viability</CardTitle>
                <CardDescription>Creating sustainable livelihoods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We ensure that sustainable practices are economically viable for farmers, creating long-term
                  prosperity and resilience in agricultural communities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Premium pricing for quality products</li>
                  <li>• Long-term partnership agreements</li>
                  <li>• Access to international markets</li>
                  <li>• Financial literacy and support</li>
                  <li>• Crop diversification strategies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Practices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Eco-Friendly Farming Practices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <TreePine className="h-12 w-12 text-agri-green mx-auto mb-4" />
                <CardTitle className="text-agri-green">Agroforestry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Integrating trees with crops to improve soil fertility, provide shade, and create diverse ecosystems
                  that support both agriculture and wildlife.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Droplets className="h-12 w-12 text-agri-green mx-auto mb-4" />
                <CardTitle className="text-agri-green">Water Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Implementing efficient irrigation systems, rainwater harvesting, and drought-resistant crop varieties
                  to optimize water use and preserve this precious resource.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Leaf className="h-12 w-12 text-agri-green mx-auto mb-4" />
                <CardTitle className="text-agri-green">Organic Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Promoting natural pest control, composting, and organic fertilizers to maintain soil health while
                  producing chemical-free, premium quality products.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-agri-green mx-auto mb-4" />
                <CardTitle className="text-agri-green">Crop Rotation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Rotating different crops to maintain soil nutrients, reduce pest buildup, and improve overall farm
                  productivity and sustainability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-agri-green mx-auto mb-4" />
                <CardTitle className="text-agri-green">Integrated Pest Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Using biological controls, beneficial insects, and targeted interventions to manage pests while
                  minimizing environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-agri-green mx-auto mb-4" />
                <CardTitle className="text-agri-green">Soil Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Maintaining and improving soil structure through cover crops, minimal tillage, and organic matter
                  addition to ensure long-term productivity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farmer Support Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Farmer Support Programs</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-agri-green mb-6">Training & Education</h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-agri-green">Agricultural Best Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Regular workshops on sustainable farming techniques, crop management, and quality improvement to
                      help farmers increase yields and product quality.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-agri-green">Financial Literacy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Training programs on budgeting, savings, and investment to help farmers make informed financial
                      decisions and build long-term prosperity.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-agri-green">Technology Adoption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Introduction to modern farming tools, mobile technology for market access, and digital platforms
                      for better farm management.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-agri-green mb-6">Fair Pricing & Support</h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-agri-green">Premium Pricing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      We pay above-market prices for quality products, ensuring farmers receive fair compensation for
                      their efforts and sustainable practices.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-agri-green">Long-term Contracts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Multi-year agreements provide farmers with income security and enable them to invest in
                      sustainable farming improvements with confidence.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-agri-green">Input Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      Access to quality seeds, organic fertilizers, and farming tools at subsidized rates to support
                      sustainable production methods.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Community Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-agri-green border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-agri-green flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Education & Schools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We support local schools and educational programs to ensure children in farming communities have
                  access to quality education and opportunities for the future.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• School infrastructure development</li>
                  <li>• Scholarship programs for students</li>
                  <li>• Educational materials and supplies</li>
                  <li>• Teacher training and support</li>
                  <li>• Agricultural education programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-agri-green border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-agri-green flex items-center gap-2">
                  <Heart className="h-6 w-6" />
                  Healthcare & Wellness
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Healthcare initiatives ensure that farming families have access to essential medical services and
                  health education to maintain their well-being.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mobile health clinics</li>
                  <li>• Maternal and child health programs</li>
                  <li>• Health education and awareness</li>
                  <li>• Clean water and sanitation projects</li>
                  <li>• Nutrition improvement programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Our Impact Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-agri-orange mb-2">1,200+</div>
              <p className="text-gray-600">Farmers Trained</p>
              <p className="text-sm text-gray-500 mt-2">In sustainable practices</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-agri-orange mb-2">85%</div>
              <p className="text-gray-600">Organic Certified</p>
              <p className="text-sm text-gray-500 mt-2">Of our cocoa suppliers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-agri-orange mb-2">30%</div>
              <p className="text-gray-600">Yield Increase</p>
              <p className="text-sm text-gray-500 mt-2">Through better practices</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-agri-orange mb-2">15</div>
              <p className="text-gray-600">Schools Supported</p>
              <p className="text-sm text-gray-500 mt-2">In farming communities</p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-agri-green mb-8 text-center">Sustainability Standards</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-agri-green text-agri-green px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                Fairtrade Certified
              </Badge>
              <Badge variant="outline" className="border-agri-green text-agri-green px-4 py-2">
                <Leaf className="h-4 w-4 mr-2" />
                Organic Standards
              </Badge>
              <Badge variant="outline" className="border-agri-green text-agri-green px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Rainforest Alliance
              </Badge>
              <Badge variant="outline" className="border-agri-green text-agri-green px-4 py-2">
                <Heart className="h-4 w-4 mr-2" />
                UTZ Certified
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-agri-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Sustainability Journey</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Partner with us to support sustainable agriculture and make a positive impact on farming communities across
            Africa. Together, we can build a more sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-agri-orange hover:bg-orange-600 text-white">
              Learn About Our Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-agri-green bg-transparent"
            >
              Download Sustainability Report
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
