"use client";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  motionProps,
} from "../animations/animations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, CheckCircle, Users, Globe, Star } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-agri-cream">
      <Navbar />

    {/* Hero Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('/company-founders-in-agricultural-field-during-sunr.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-agri-green/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            variants={fadeInUp}
            {...motionProps}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Certifications & Partners
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            {...motionProps}
            className="text-xl text-green-100 max-w-3xl mx-auto"
          >
            Our commitment to quality and sustainability is validated through
            internationally recognized certifications and partnerships with
            leading organizations worldwide.
          </motion.p>
        </div>
      </section>

      {/* Certifications Overview */}
      <section className="py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-4"
        >
          <motion.div
            variants={fadeInUp}
            {...motionProps}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-agri-green mb-6">
              Quality Assurance Through Certification
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We maintain the highest standards through rigorous certification
              processes that validate our commitment to quality, sustainability,
              and ethical business practices. Each certification represents our
              dedication to excellence and continuous improvement.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Certifications */}
      <section className="py-16 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">
            Our Certifications
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Fairtrade */}
            <motion.div variants={fadeInLeft} {...motionProps}>
              <Card className="border-agri-green border-2">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-agri-green rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-agri-green">
                        Fairtrade Certified
                      </CardTitle>
                      <CardDescription>
                        Ethical trade and farmer empowerment
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Our Fairtrade certification ensures that farmers receive
                    fair prices, work in safe conditions, and invest in
                    sustainable practices and community development.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-agri-green">
                      What This Means:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Fair minimum prices for farmers</li>
                      <li>• Premium payments for community projects</li>
                      <li>• Safe working conditions and labor rights</li>
                      <li>• Environmental protection standards</li>
                      <li>• Democratic organization of farmers</li>
                    </ul>
                  </div>
                  <Badge className="bg-agri-orange text-white">
                    Certified Since 2015
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Organic */}
            <motion.div variants={fadeInRight} {...motionProps}>
              <Card className="border-agri-green border-2">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-agri-green rounded-full flex items-center justify-center">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-agri-green">
                        Organic Certified
                      </CardTitle>
                      <CardDescription>
                        Chemical-free, natural production
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Our organic certification guarantees that our products are
                    grown without synthetic pesticides, herbicides, or
                    fertilizers, using methods that preserve soil health and
                    biodiversity.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-agri-green">
                      What This Means:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• No synthetic chemicals or GMOs</li>
                      <li>• Soil health and fertility maintenance</li>
                      <li>• Biodiversity conservation</li>
                      <li>• Natural pest and disease management</li>
                      <li>• Regular third-party inspections</li>
                    </ul>
                  </div>
                  <Badge className="bg-agri-orange text-white">
                    EU & USDA Organic
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* ISO 22000 */}
            <motion.div variants={fadeInLeft} {...motionProps}>
              <Card className="border-agri-green border-2">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-agri-green rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-agri-green">
                        ISO 22000
                      </CardTitle>
                      <CardDescription>
                        Food safety management system
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    ISO 22000 certification demonstrates our commitment to food
                    safety through systematic management of hazards and
                    continuous improvement.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-agri-green">
                      What This Means:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Comprehensive food safety management</li>
                      <li>• Hazard analysis and critical control points</li>
                      <li>• Traceability throughout the supply chain</li>
                      <li>• Regular monitoring and verification</li>
                      <li>• Continuous improvement processes</li>
                    </ul>
                  </div>
                  <Badge className="bg-agri-orange text-white">
                    Annually Audited
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* HACCP */}
            <motion.div variants={fadeInRight} {...motionProps}>
              <Card className="border-agri-green border-2">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-agri-green rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-agri-green">
                        HACCP Compliant
                      </CardTitle>
                      <CardDescription>
                        Hazard analysis and critical control
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    HACCP compliance ensures that we identify, evaluate, and
                    control hazards at every stage of production,
                    processing, and distribution.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-agri-green">
                      What This Means:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Systematic hazard identification</li>
                      <li>• Critical control point monitoring</li>
                      <li>• Preventive approach to food safety</li>
                      <li>• Documentation and record keeping</li>
                      <li>• Staff training and awareness</li>
                    </ul>
                  </div>
                  <Badge className="bg-agri-orange text-white">
                    Fully Implemented
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Additional Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">
            Additional Standards & Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-agri-green mx-auto mb-4" />
                <CardTitle className="text-agri-green">Rainforest Alliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">
                  Promoting sustainable agriculture that conserves biodiversity and provides sustainable livelihoods for
                  farmers and communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-agri-green mx-auto mb-4" />
                <CardTitle className="text-agri-green">UTZ Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">
                  Ensuring sustainable farming practices, better opportunities for farmers, and a better future for the
                  planet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-agri-green mx-auto mb-4" />
                <CardTitle className="text-agri-green">Global GAP</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm text-center">
                  Good Agricultural Practices certification ensuring food safety, environmental sustainability, and
                  worker welfare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners & Clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Our Partners & Clients</h2>

          {/* Partner Categories */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-agri-green mb-6">Global Trading Partners</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-agri-green rounded-full flex items-center justify-center">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-agri-green">European Chocolate Manufacturers</h4>
                        <p className="text-sm text-gray-600">Premium cocoa suppliers to leading European brands</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-agri-green rounded-full flex items-center justify-center">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-agri-green">Asian Food Processors</h4>
                        <p className="text-sm text-gray-600">Cashew and agricultural product suppliers to Asia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-agri-green rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-agri-green">North American Distributors</h4>
                        <p className="text-sm text-gray-600">Organic and specialty product distributors</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-agri-green mb-6">Certification Bodies</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-agri-green rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-agri-green">SGS International</h4>
                        <p className="text-sm text-gray-600">Quality inspection and certification services</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-agri-green rounded-full flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-agri-green">Bureau Veritas</h4>
                        <p className="text-sm text-gray-600">Testing, inspection, and certification</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-agri-green rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-agri-green">Control Union</h4>
                        <p className="text-sm text-gray-600">Sustainability and organic certification</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-agri-green mb-8 text-center">What Our Clients Say</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-agri-green border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-agri-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-4">
                        "Their commitment to quality and sustainability is exceptional. We've been partners for over 5
                        years and they consistently deliver premium products on time."
                      </p>
                      <div>
                        <p className="font-semibold text-agri-green">Sarah Johnson</p>
                        <p className="text-sm text-gray-600">Procurement Manager, European Chocolate Co.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-agri-green border-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-agri-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-700 italic mb-4">
                        "The transparency in their supply chain and their certifications give us confidence in the
                        quality and ethical sourcing of their products."
                      </p>
                      <div>
                        <p className="font-semibold text-agri-green">Michael Chen</p>
                        <p className="text-sm text-gray-600">Supply Chain Director, Asian Foods Ltd.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Our Certification Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2012
                </div>
                <div>
                  <h4 className="text-xl font-bold text-agri-green">HACCP Implementation</h4>
                  <p className="text-gray-600">Established comprehensive food safety management system</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2015
                </div>
                <div>
                  <h4 className="text-xl font-bold text-agri-green">Fairtrade Certification</h4>
                  <p className="text-gray-600">Achieved Fairtrade certification for ethical trading practices</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2017
                </div>
                <div>
                  <h4 className="text-xl font-bold text-agri-green">Organic Certification</h4>
                  <p className="text-gray-600">Obtained EU and USDA organic certification for premium products</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2020
                </div>
                <div>
                  <h4 className="text-xl font-bold text-agri-green">ISO 22000 Certification</h4>
                  <p className="text-gray-600">Implemented international food safety management standards</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  2023
                </div>
                <div>
                  <h4 className="text-xl font-bold text-agri-green">Rainforest Alliance</h4>
                  <p className="text-gray-600">Achieved sustainability certification for environmental protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-agri-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Trust in Our Quality Standards</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Our certifications and partnerships demonstrate our unwavering commitment to quality, sustainability, and
            ethical business practices. Partner with us for reliable, certified products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-agri-orange hover:bg-orange-600 text-white">
              View Our Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-agri-green bg-transparent"
            >
              Download Certificates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
