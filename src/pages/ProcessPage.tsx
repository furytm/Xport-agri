import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Truck, CreditCard } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-agri-cream">
      <Navbar />

      {/* Hero Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/agricultural-export-company-story-african-landscape.jpg')",
         
        }}
      >
        <div className="absolute inset-0 bg-agri-green/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Export Process</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            A transparent, step-by-step approach to ensure smooth, reliable, and compliant agricultural exports from
            Africa to your destination.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-agri-green mb-6">How We Export</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our proven 5-step export process ensures quality, compliance, and timely delivery. From initial sourcing
              to final delivery, we handle every aspect of the export chain with professionalism and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-agri-green">Sourcing & Quality Control</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We work directly with trusted farmers and cooperatives to source the highest quality products. Our
                    field teams conduct regular farm visits to ensure sustainable practices and quality standards.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Direct farmer partnerships</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">On-site quality inspection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Sustainable sourcing practices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Laboratory testing and certification</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Card className="border-agri-green border-2">
                  <CardHeader>
                    <CardTitle className="text-agri-green flex items-center gap-2">
                      <CheckCircle className="h-6 w-6" />
                      Quality Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Badge variant="outline" className="border-agri-green text-agri-green">
                        ISO 22000
                      </Badge>
                      <Badge variant="outline" className="border-agri-green text-agri-green">
                        HACCP
                      </Badge>
                      <Badge variant="outline" className="border-agri-green text-agri-green">
                        Organic Certified
                      </Badge>
                      <Badge variant="outline" className="border-agri-green text-agri-green">
                        Fairtrade
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-agri-green">Buyer Agreement</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We work with buyers to establish clear terms including pricing, Incoterms, minimum order quantities,
                    and delivery schedules. All agreements are documented and transparent.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Competitive pricing based on market rates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Flexible Incoterms (FOB, CIF, CFR)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Minimum order quantities from 20ft container</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Clear delivery timelines</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Card className="border-agri-green border-2">
                  <CardHeader>
                    <CardTitle className="text-agri-green flex items-center gap-2">
                      <FileText className="h-6 w-6" />
                      Agreement Terms
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Product specifications and quality parameters</li>
                      <li>• Pricing structure and payment terms</li>
                      <li>• Delivery schedules and logistics</li>
                      <li>• Insurance and risk management</li>
                      <li>• Force majeure and dispute resolution</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-agri-green">Documentation & Compliance</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We handle all export documentation and ensure compliance with both origin and destination country
                    regulations. Our experienced team manages licenses, certificates, and inspections.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Export licenses and permits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Phytosanitary certificates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">SGS inspection and certification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Certificate of origin</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Card className="border-agri-green border-2">
                  <CardHeader>
                    <CardTitle className="text-agri-green flex items-center gap-2">
                      <FileText className="h-6 w-6" />
                      Required Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Commercial invoice and packing list</li>
                      <li>• Bill of lading and shipping documents</li>
                      <li>• Quality certificates and lab reports</li>
                      <li>• Insurance certificates</li>
                      <li>• Customs declarations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-agri-green">Shipping & Logistics</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We coordinate with trusted shipping partners to ensure safe and timely delivery. Our logistics team
                    tracks shipments and provides regular updates throughout the journey.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Container loading supervision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Real-time shipment tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Insurance coverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Port handling and customs clearance</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Card className="border-agri-green border-2">
                  <CardHeader>
                    <CardTitle className="text-agri-green flex items-center gap-2">
                      <Truck className="h-6 w-6" />
                      Logistics Partners
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Major shipping lines (MSC, Maersk, CMA CGM)</li>
                      <li>• Trusted freight forwarders</li>
                      <li>• Port handling agents</li>
                      <li>• Customs brokers</li>
                      <li>• Insurance providers</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <h3 className="text-2xl font-bold text-agri-green">Payment & Delivery</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    We offer flexible payment terms and ensure secure transactions. Upon successful delivery, we provide
                    all necessary documentation and maintain ongoing support for future orders.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Letter of Credit (L/C) accepted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Bank transfer and wire payments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Flexible payment terms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Post-delivery support</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Card className="border-agri-green border-2">
                  <CardHeader>
                    <CardTitle className="text-agri-green flex items-center gap-2">
                      <CreditCard className="h-6 w-6" />
                      Payment Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Irrevocable Letter of Credit</li>
                      <li>• Documentary Collection (D/P, D/A)</li>
                      <li>• Bank wire transfer</li>
                      <li>• Advance payment (with discount)</li>
                      <li>• Trade finance solutions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-agri-green mb-12 text-center">Typical Export Timeline</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <div className="space-y-2">
                <div className="w-16 h-16 bg-agri-orange rounded-full mx-auto flex items-center justify-center text-white font-bold">
                  1-3
                </div>
                <h4 className="font-semibold text-agri-green">Days</h4>
                <p className="text-sm text-gray-600">Quotation & Agreement</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 bg-agri-orange rounded-full mx-auto flex items-center justify-center text-white font-bold">
                  7-14
                </div>
                <h4 className="font-semibold text-agri-green">Days</h4>
                <p className="text-sm text-gray-600">Sourcing & Quality Control</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 bg-agri-orange rounded-full mx-auto flex items-center justify-center text-white font-bold">
                  3-5
                </div>
                <h4 className="font-semibold text-agri-green">Days</h4>
                <p className="text-sm text-gray-600">Documentation & Inspection</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 bg-agri-orange rounded-full mx-auto flex items-center justify-center text-white font-bold">
                  2-3
                </div>
                <h4 className="font-semibold text-agri-green">Days</h4>
                <p className="text-sm text-gray-600">Container Loading</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 bg-agri-orange rounded-full mx-auto flex items-center justify-center text-white font-bold">
                  15-30
                </div>
                <h4 className="font-semibold text-agri-green">Days</h4>
                <p className="text-sm text-gray-600">Shipping & Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-agri-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Export Journey?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Contact our export team to discuss your requirements and begin the process. We'll guide you through every
            step to ensure a smooth and successful export experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-agri-orange hover:bg-orange-600 text-white">
              Start Export Inquiry
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-agri-green bg-transparent"
            >
              Download Process Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
