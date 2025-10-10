
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Truck, CreditCard } from "lucide-react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  motionProps,
} from "../animations/animations";
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
    <motion.h1
      variants={fadeInUp}
      {...motionProps}
      className="text-4xl md:text-6xl font-bold text-white mb-6"
    >
      Our Export Process
    </motion.h1>
    <motion.p
      variants={fadeInUp}
      custom={0.2}
      {...motionProps}
      className="text-xl text-green-100 max-w-3xl mx-auto"
    >
      A transparent, step-by-step approach to ensure smooth, reliable, and compliant agricultural exports from
      Africa to your destination.
    </motion.p>
  </div>
</section>

{/* Process Overview */}
<section className="py-16">
  <motion.div
    className="container mx-auto px-4"
    variants={staggerContainer}
    {...motionProps}
  >
    <div className="max-w-4xl mx-auto text-center mb-16">
      <motion.h2
        variants={fadeInUp}
        custom={0.2}
        className="text-3xl font-bold text-agri-green mb-6"
      >
        How We Export
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        custom={0.4}
        className="text-lg text-gray-700 leading-relaxed"
      >
        Our proven 5-step export process ensures quality, compliance, and timely delivery. From initial sourcing
        to final delivery, we handle every aspect of the export chain with professionalism and transparency.
      </motion.p>
    </div>
  </motion.div>
</section>


{/* Process Steps */}
<section className="py-16 bg-white">
  <motion.div
    className="container mx-auto px-4"
    variants={staggerContainer}
    {...motionProps}
  >
    <div className="space-y-12">
      {/* Step 1 */}
      <motion.div
        variants={fadeInLeft}
        custom={0.2}
        className="flex flex-col lg:flex-row items-center gap-8"
      >
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-2xl font-bold text-agri-green">
              Sourcing & Quality Control
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We work directly with trusted farmers and cooperatives to source
              the highest quality products. Our field teams conduct regular farm
              visits to ensure sustainable practices and quality standards.
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
                <span className="text-sm">
                  Laboratory testing and certification
                </span>
              </div>
            </div>
          </div>
        </div>
        <Card className="lg:w-1/2 border-agri-green border-2">
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
      </motion.div>

      {/* Step 2 */}
      <motion.div
        variants={fadeInRight}
        custom={0.4}
        className="flex flex-col lg:flex-row-reverse items-center gap-8"
      >
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-2xl font-bold text-agri-green">
              Buyer Agreement
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We work with buyers to establish clear terms including pricing,
              Incoterms, minimum order quantities, and delivery schedules. All
              agreements are documented and transparent.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">
                  Competitive pricing based on market rates
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">
                  Flexible Incoterms (FOB, CIF, CFR)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">
                  Minimum order quantities from 20ft container
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">Clear delivery timelines</span>
              </div>
            </div>
          </div>
        </div>
        <Card className="lg:w-1/2 border-agri-green border-2">
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
      </motion.div>

      {/* Step 3 */}
      <motion.div
        variants={fadeInLeft}
        custom={0.6}
        className="flex flex-col lg:flex-row items-center gap-8"
      >
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-agri-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-2xl font-bold text-agri-green">
              Documentation & Compliance
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We handle all export documentation and ensure compliance with both
              origin and destination country regulations. Our experienced team
              manages licenses, certificates, and inspections.
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
        <Card className="lg:w-1/2 border-agri-green border-2">
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
      </motion.div>
    </div>
  </motion.div>
</section>

 
{/* Timeline */}
<section className="py-16">
  <motion.div
    className="container mx-auto px-4"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.h2
      className="text-3xl font-bold text-agri-green mb-12 text-center"
      variants={fadeInUp}
      {...motionProps}
    >
      Typical Export Timeline
    </motion.h2>

    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-5 gap-4 text-center">
        <motion.div className="space-y-2" variants={fadeInUp} {...motionProps}>
          <div className="w-16 h-16 bg-agri-orange rounded-full mx-auto flex items-center justify-center text-white font-bold">
            1-3
          </div>
          <h4 className="font-semibold text-agri-green">Days</h4>
          <p className="text-sm text-gray-600">Quotation & Agreement</p>
        </motion.div>

        <motion.div className="space-y-2" variants={fadeInUp} {...motionProps}>
          <div className="w-16 h-16 bg-agri-orange rounded-full mx-auto flex items-center justify-center text-white font-bold">
            7-14
          </div>
          <h4 className="font-semibold text-agri-green">Days</h4>
          <p className="text-sm text-gray-600">Sourcing & Quality Control</p>
        </motion.div>

        <motion.div className="space-y-2" variants={fadeInUp} {...motionProps}>
          <div className="w-16 h-16 bg-agri-orange rounded-full mx-auto flex items-center justify-center text-white font-bold">
            3-5
          </div>
          <h4 className="font-semibold text-agri-green">Days</h4>
          <p className="text-sm text-gray-600">Documentation & Inspection</p>
        </motion.div>

        <motion.div className="space-y-2" variants={fadeInUp} {...motionProps}>
          <div className="w-16 h-16 bg-agri-orange rounded-full mx-auto flex items-center justify-center text-white font-bold">
            2-3
          </div>
          <h4 className="font-semibold text-agri-green">Days</h4>
          <p className="text-sm text-gray-600">Container Loading</p>
        </motion.div>

        <motion.div className="space-y-2" variants={fadeInUp} {...motionProps}>
          <div className="w-16 h-16 bg-agri-orange rounded-full mx-auto flex items-center justify-center text-white font-bold">
            15-30
          </div>
          <h4 className="font-semibold text-agri-green">Days</h4>
          <p className="text-sm text-gray-600">Shipping & Delivery</p>
        </motion.div>
      </div>
    </div>
  </motion.div>
</section>

{/* Call to Action */}
<section className="py-16 bg-agri-green">
  <motion.div
    className="container mx-auto px-4 text-center"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <motion.h2
      className="text-3xl font-bold text-white mb-6"
      variants={fadeInUp}
      {...motionProps}
    >
      Ready to Start Your Export Journey?
    </motion.h2>
    <motion.p
      className="text-green-100 mb-8 max-w-2xl mx-auto"
      variants={fadeInUp}
      {...motionProps}
    >
      Contact our export team to discuss your requirements and begin the process.
      We'll guide you through every step to ensure a smooth and successful export experience.
    </motion.p>
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      variants={fadeInUp}
      {...motionProps}
    >
      <Button size="lg" className="bg-agri-orange hover:bg-orange-600 text-white">
        <Link href="/contact"> Contact US</Link>
      </Button>
       
     
    </motion.div>
  </motion.div>
</section>
      <Footer />
    </div>
  )
}
