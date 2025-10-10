"use client";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  motionProps,
} from "../animations/animations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Package, Truck, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-agri-cream">
      <Navbar />

      {/* Hero Section */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/premium-cocoa-beans-in-burlap-sacks.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-agri-green/30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            variants={fadeInUp}
            {...motionProps}
            custom={0.2}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Premium Export Products
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            {...motionProps}
            custom={0.4}
            className="text-xl text-green-100 max-w-3xl mx-auto"
          >
            Discover our carefully selected range of high-quality African
            agricultural products, sourced directly from trusted farmers and
            processed to international standards.
          </motion.p>
        </div>
      </section>

      {/* Product Overview */}
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
              Our Product Range
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={0.4}
              className="text-lg text-gray-700 leading-relaxed"
            >
              We specialize in exporting premium cocoa, cashew nuts, and other
              agricultural products from West Africa. Each product undergoes
              rigorous quality control processes to ensure it meets
              international standards and exceeds customer expectations.
            </motion.p>
          </div>
        </motion.div>
      </section>

     
  
    
      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Premium Cocoa */}
            <Card className="border-agri-green border-2 overflow-hidden">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: "url('/premium-cocoa-pods-harvest.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-agri-green/30"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-agri-orange text-white">Premium Grade</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-agri-green">Premium Cocoa Beans</CardTitle>
                <CardDescription>Grade 1 fermented and dried cocoa beans</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-agri-green mb-2">Origin & Quality</h4>
                  <p className="text-sm text-gray-600">
                    Sourced from Ghana's Ashanti and Western regions, known for producing the world's finest cocoa. Our
                    beans are carefully fermented for 5-7 days and sun-dried to achieve optimal flavor profiles.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-agri-green mb-2">Quality Specifications</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Moisture content: 6-7%</li>
                    <li>• Bean count: 95-100 beans/100g</li>
                    <li>• Defective beans: less than 3%</li>
                    <li>• Aflatoxin: less than 5 ppb</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-agri-green mb-2">Packaging Options</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">65kg Jute Bags</Badge>
                    <Badge variant="outline">20ft Container</Badge>
                    <Badge variant="outline">40ft Container</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Raw Cashew */}
            <Card className="border-agri-green border-2 overflow-hidden">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: "url('/raw-cashew-nuts-in-wooden-bowl.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-agri-green/30"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-agri-orange text-white">Export Quality</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-agri-green">Raw Cashew Nuts</CardTitle>
                <CardDescription>Premium grade raw cashew nuts in shell</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-agri-green mb-2">Origin & Quality</h4>
                  <p className="text-sm text-gray-600">
                    Harvested from Côte d'Ivoire and Ghana, our cashew nuts are carefully selected for size, color, and
                    quality. Each batch is sorted and graded to ensure consistency.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-agri-green mb-2">Quality Specifications</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Moisture content: 8-10%</li>
                    <li>• Nut count: 180-200 nuts/kg</li>
                    <li>• Defective nuts: less than 5%</li>
                    <li>• Foreign matter: less than 1%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-agri-green mb-2">Packaging Options</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">50kg PP Bags</Badge>
                    <Badge variant="outline">Bulk Container</Badge>
                    <Badge variant="outline">Custom Packaging</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Products */}
            <Card className="border-agri-green border-2 overflow-hidden">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: "url('/various-african-agricultural-products-spices-grain.jpg')",
                }}
              >
                <div className="absolute inset-0  bg-opacity30"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-agri-orange text-white">Diverse Range</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-agri-green">Other Agricultural Products</CardTitle>
                <CardDescription>Shea butter, palm oil, spices, and more</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-agri-green mb-2">Product Range</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Raw Shea Butter & Nuts</li>
                    <li>• Palm Oil & Palm Kernel</li>
                    <li>• Dried Ginger & Turmeric</li>
                    <li>• Sesame Seeds</li>
                    <li>• Hibiscus Flowers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-agri-green mb-2">Quality Assurance</h4>
                  <p className="text-sm text-gray-600">
                    All products undergo strict quality control processes and are certified to meet international food
                    safety standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-agri-green mb-2">Custom Solutions</h4>
                  <p className="text-sm text-gray-600">
                    We offer custom sourcing and packaging solutions based on specific client requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Processing Methods */}
      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-16 px-4"
        style={{ backgroundImage: "url('/cocoa3.webp')" }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            {...motionProps}
            custom={0.1}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Processing Standards
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            {...motionProps}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeInLeft} custom={0.2}>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-agri-green">
                    Sorting & Grading
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Manual and mechanical sorting to remove defective products
                    and ensure uniform quality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInRight} custom={0.3}>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-agri-green">
                    Quality Testing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Laboratory testing for moisture, aflatoxin, and other
                    quality parameters.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInLeft} custom={0.4}>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-agri-green">Packaging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Food-grade packaging materials and methods to preserve
                    quality during transport.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInRight} custom={0.5}>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-agri-green">
                    Storage & Logistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Climate-controlled storage and efficient logistics to
                    maintain product integrity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Download Catalog */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            {...motionProps}
            custom={0.1}
            className="text-3xl font-bold text-agri-green mb-6"
          >
            Product Catalog & Specifications
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            {...motionProps}
            custom={0.2}
            className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Download our comprehensive product catalog with detailed
            specifications, pricing information, and export terms for all our
            agricultural products.
          </motion.p>
          <motion.div variants={fadeInUp} {...motionProps} custom={0.3}>
            <Button
              size="lg"
              className="bg-agri-orange hover:bg-orange-600 text-white"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Product Catalog
            </Button>
          </motion.div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 bg-agri-green">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            {...motionProps}
            custom={0.1}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Place an Order?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            {...motionProps}
            custom={0.2}
            className="text-green-100 mb-8 max-w-2xl mx-auto"
          >
            Contact our export team to discuss your requirements, get pricing
            information, and start your order process today.
          </motion.p>
          <motion.div
            variants={staggerContainer}
            {...motionProps}
            custom={0.3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div variants={fadeInLeft} custom={0.4}>
              <Button
                size="lg"
                className="bg-agri-orange hover:bg-orange-600 text-white"
              >
               <Link href="/contact">Start Export Inquiry</Link> 
              </Button>
            </motion.div>
            <motion.div variants={fadeInRight} custom={0.5}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-agri-green bg-transparent"
              >
               <Link href="/process">View Export Process</Link> 
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
