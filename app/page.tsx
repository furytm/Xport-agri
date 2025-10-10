"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeInUp, fadeInLeft, fadeInRight,staggerContainer, motionProps  } from "../src/animations/animations";

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

{/* HERO SECTION */}
<section
  id="home"
  className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-20 px-4"
>
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70"
    style={{
      backgroundImage:
        "url('/cocoa-farm-plantation-with-workers-harvesting-coco.jpg')",
    }}
  />
  <div className="relative max-w-7xl mx-auto text-center z-10">
    <motion.h1
      variants={fadeInUp}
      custom={0}
      animate="visible"
      initial="hidden"
      className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white drop-shadow-lg"
    >
      Exporting Premium Cocoa & Cashew Worldwide
    </motion.h1>

    <motion.p
      variants={fadeInUp}
      custom={1}
      animate="visible"
      initial="hidden"
      className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto text-pretty drop-shadow-md"
    >
      Certified quality. Seamless delivery. Connecting global markets with
      Africa&apos;s finest agricultural products.
    </motion.p>

    <motion.div variants={fadeInUp} custom={2} animate="visible" initial="hidden">
      <Button
        asChild
        size="lg"
        className="bg-agri-orange hover:bg-orange-600 text-white text-lg px-8 py-3"
      >
        <Link href="/contact">
          Start Export Inquiry
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </motion.div>
  </div>
</section>

{/* ABOUT SECTION */}
<section id="about" className="bg-agri-cream py-16 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <motion.h2
      variants={fadeInUp}
      custom={0}
      {...motionProps}
      className="text-3xl md:text-4xl font-bold text-agri-green mb-6"
    >
      About GlobalBridge Export
    </motion.h2>

    <motion.p
      variants={fadeInUp}
      custom={1}
      {...motionProps}
      className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 text-pretty"
    >
      GlobalBridge Export Ltd is a proudly African company dedicated to
      connecting the world with the finest agro products from the
      continent. We specialize in sourcing, packaging, and exporting
      high-quality African agricultural products to international markets.
    </motion.p>

    <motion.div variants={fadeInUp} custom={2} {...motionProps}>
      <Button
        asChild
        variant="outline"
        className="border-agri-green text-agri-green hover:bg-agri-green hover:text-white bg-transparent"
      >
        <Link href="/about">Learn More About Us</Link>
      </Button>
    </motion.div>
  </div>
</section>

{/* PRODUCTS SECTION */}
<section
  id="products"
  className="py-16 px-4 bg-white pt-32 mt-4 relative z-[60]"
>
  <div className="max-w-7xl mx-auto bg-white">
    <motion.h2
      variants={fadeInUp}
      custom={0}
      {...motionProps}
      className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
    >
      Our Premium Products
    </motion.h2>

    <motion.div
      variants={staggerContainer}
      {...motionProps}
      className="grid md:grid-cols-3 gap-8"
    >
      {[
        {
          title: "Premium Cocoa",
          desc: "High-quality cocoa beans sourced from certified organic farms across West Africa.",
          img: "/premium-cocoa-pods-harvest.jpg",
          tags: ["Organic Certified", "Fair Trade"],
        },
        {
          title: "Raw Cashew Nuts",
          desc: "Premium grade cashew nuts with excellent kernel recovery rates and superior quality.",
          img: "/raw-cashew-nuts-in-wooden-bowl.jpg",
          tags: ["Grade A", "Export Quality"],
        },
        {
          title: "Other Products",
          desc: "Shea butter, palm oil, sesame seeds, and other premium agricultural exports.",
          img: "/various-african-agricultural-products-spices-grain.jpg",
          tags: ["Diverse Range", "Quality Assured"],
        },
      ].map((product, index) => (
        <motion.div
          key={product.title}
          variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
          custom={index}
          {...motionProps}
        >
          <Card className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader className="flex-grow">
              <div
                className="relative h-48 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: `url('${product.img}')` }}
              />
              <CardTitle className="text-agri-green">
                {product.title}
              </CardTitle>
              <CardDescription>{product.desc}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button className="w-full bg-agri-orange hover:bg-orange-600 text-white">
                <Link href="/products">View Details</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
{/* PROCESS SECTION */}
<section
  id="process"
  className="relative bg-fixed bg-center bg-cover bg-no-repeat py-16 px-4"
  style={{ backgroundImage: "url('/cocoaseeds.webp')" }}
>
  <div className="max-w-7xl mx-auto">
    <motion.h2
      variants={fadeInUp}
      custom={0}
      {...motionProps}
      className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
    >
      Our Export Process
    </motion.h2>

    <motion.div
      variants={staggerContainer}
      {...motionProps}
      className="grid md:grid-cols-5 gap-8"
    >
      {[
        { icon: "🌱", title: "Sourcing", desc: "Direct partnerships with certified farmers and cooperatives" },
        { icon: "🤝", title: "Agreement", desc: "Transparent contracts with clear terms and pricing" },
        { icon: "📄", title: "Documentation", desc: "Complete export documentation and certifications" },
        { icon: "🚢", title: "Shipping", desc: "Secure packaging and reliable global logistics" },
        { icon: "💳", title: "Payment", desc: "Flexible payment terms and secure transactions" },
      ].map((step, index) => (
        <motion.div
          key={step.title}
          variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
          custom={index}
          {...motionProps}
          className="text-center"
        >
          <div className="bg-agri-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl">
            {step.icon}
          </div>
          <h3 className="font-semibold text-white mb-2">{step.title}</h3>
          <p className="text-sm text-white">{step.desc}</p>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      variants={fadeInUp}
      custom={6}
      {...motionProps}
      className="text-center mt-12"
    >
      <Button asChild size="lg" className="bg-agri-orange hover:bg-orange-600 text-white">
        <Link href="/contact">Start Export Inquiry</Link>
      </Button>
    </motion.div>
  </div>
</section>

{/* WHY CHOOSE US SECTION */}
<section className="bg-agri-cream py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <motion.h2
      variants={fadeInUp}
      custom={0}
      {...motionProps}
      className="text-3xl md:text-4xl font-bold text-agri-green text-center mb-12"
    >
      Why Choose GlobalBridge Export
    </motion.h2>

    <motion.div
      variants={staggerContainer}
      {...motionProps}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {[
        {
          icon: <Shield className="h-12 w-12 text-agri-orange mx-auto mb-4" />,
          title: "Certified Quality",
          desc: "ISO certified processes and international quality standards",
        },
        {
          icon: <Globe className="h-12 w-12 text-agri-orange mx-auto mb-4" />,
          title: "Global Shipping",
          desc: "Worldwide delivery with trusted logistics partners",
        },
        {
          icon: <Users className="h-12 w-12 text-agri-orange mx-auto mb-4" />,
          title: "Farmer Partnerships",
          desc: "Direct relationships ensuring fair prices and quality",
        },
        {
          icon: <Leaf className="h-12 w-12 text-agri-orange mx-auto mb-4" />,
          title: "Transparent Process",
          desc: "Full traceability from farm to your doorstep",
        },
      ].map((reason, index) => (
        <motion.div
          key={reason.title}
          variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
          custom={index}
          {...motionProps}
          className="text-center"
        >
          {reason.icon}
          <h3 className="font-semibold text-agri-green mb-2">{reason.title}</h3>
          <p className="text-gray-800">{reason.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* CONTACT SECTION */}
<section id="contact" className="bg-agri-green text-white py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <motion.h2
        variants={fadeInUp}
        custom={0}
        {...motionProps}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Ready to Import? Let&apos;s Talk.
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        custom={1}
        {...motionProps}
        className="text-xl text-gray-200"
      >
        Get in touch for quotes, samples, or any questions about our products.
      </motion.p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <motion.div variants={fadeInLeft} custom={2} {...motionProps}>
        <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Your Name" className="bg-white text-gray-900" />
            <Input type="email" placeholder="Email Address" className="bg-white text-gray-900" />
          </div>
          <Input placeholder="Product Interest (Cocoa, Cashew, etc.)" className="bg-white text-gray-900" />
          <Textarea placeholder="Your Message" rows={4} className="bg-white text-gray-900" />
          <Button className="w-full bg-agri-orange hover:bg-orange-600 text-white">
            Send Inquiry
          </Button>
        </form>
      </motion.div>

      {/* Contact Info */}
      <motion.div variants={fadeInRight} custom={3} {...motionProps}>
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-agri-orange" />
            <span>+234 903 439 7834</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-agri-orange" />
            <span>info@globalbridgeexportltd.com</span>
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
      </motion.div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  )
}
