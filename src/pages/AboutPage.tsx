"use client";
import { motion } from "framer-motion";
import {fadeInUp, fadeInLeft, fadeInRight,staggerContainer, motionProps  } from "../animations/animations";
import Link from "next/link"
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
    <motion.h1
      variants={fadeInUp}
      {...motionProps}
      custom={0}
      className="text-4xl md:text-6xl font-bold text-white mb-6"
    >
      About Our Story
    </motion.h1>
    <motion.p
      variants={fadeInUp}
      {...motionProps}
      custom={1}
      className="text-xl text-green-100 max-w-3xl mx-auto"
    >
      Connecting Africa's finest agricultural products with global markets through trust, quality, and
      sustainable practices.
    </motion.p>
  </div>
</section>

{/* Company Overview */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <motion.div
      variants={staggerContainer}
      {...motionProps}
      className="max-w-4xl mx-auto text-center mb-16"
    >
      <motion.h2
        variants={fadeInUp}
        custom={0}
        className="text-3xl font-bold text-agri-green mb-6"
      >
        Who We Are
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        custom={1}
        className="text-lg text-gray-700 leading-relaxed"
      >
        Our mission is to showcase the richness of Africa’s farmlands by delivering fresh, natural, and
        premium-grade products that meet global standards. With a strong commitment to quality,
        reliability, and sustainability, we ensure that our clients receive only the best Africa has to
        offer. At GlobalBridge Export Ltd, we are not just building trade links — we are bridging
        cultures and fostering lasting partnerships across the globe.
      </motion.p>
    </motion.div>
  </div>
</section>

{/* Our Story */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div variants={fadeInLeft} {...motionProps} custom={0}>
        <h2 className="text-3xl font-bold text-agri-green mb-6">Our Origin Story</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Founded in 2010 by a team of agricultural experts and international trade specialists,
            AgriExport Global began as a small operation with a big vision: to create sustainable
            value chains that benefit both African farmers and global consumers.
          </p>
          <p>
            Starting with just a handful of cocoa farmers in Ghana, we have grown to work with over
            1,200 farmers across West Africa, maintaining our commitment to fair trade, quality
            excellence, and environmental sustainability.
          </p>
          <p>
            Today, we are proud to be one of Africa's most trusted agricultural export partners,
            serving clients across Europe, Asia, and the Americas while continuing to support the
            communities that make our success possible.
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInRight} {...motionProps} custom={1}>
        <img
          src="/company-founders-agricultural-field-ghana-sunrise.jpg"
          alt="Company founders in agricultural field"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </motion.div>
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
<section
  className="relative bg-fixed bg-center bg-cover bg-no-repeat py-16 px-4"
  style={{ backgroundImage: "url('/cocoa2.webp')" }}
>
  <div className="container mx-auto px-4">
    <motion.h2
      variants={fadeInUp}
      {...motionProps}
      custom={0}
      className="text-3xl font-bold text-white mb-12 text-center"
    >
      Our Leadership Team
    </motion.h2>

    <motion.div
      variants={staggerContainer}
      {...motionProps}
      className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
    >
      {[
        {
          icon: <Users className="h-10 w-10 text-white" />,
          name: "Kwame Asante",
          role: "CEO & Founder",
          desc:
            "20+ years in agricultural trade and sustainable farming practices.  Empowering African farmers.",
        },
        {
          icon: <Award className="h-10 w-10 text-white" />,
          name: "Sarah Osei",
          role: "Head of Quality Assurance",
          desc:
            "Expert in international food safety standards and agricultural quality control with 15 years experience.",
        },
        {
          icon: <Handshake className="h-10 w-10 text-white" />,
          name: "Michael Adjei",
          role: "Director of Operations",
          desc:
            "Logistics and supply chain specialist ensuring efficient and reliable export operations worldwide.",
        },
      ].map((member, i) => (
        <motion.div
          key={member.name}
          variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
          custom={i}
          {...motionProps}
        >
          <Card>
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-agri-green rounded-full mx-auto mb-4 flex items-center justify-center">
                {member.icon}
              </div>
              <CardTitle className="text-agri-green">{member.name}</CardTitle>
              <p className="text-gray-600">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm text-center">{member.desc}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Achievements */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <motion.h2
      variants={fadeInUp}
      {...motionProps}
      custom={0}
      className="text-3xl font-bold text-agri-green mb-12 text-center"
    >
      Our Achievements
    </motion.h2>

    <motion.div
      variants={staggerContainer}
      {...motionProps}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
    >
      {[
        { value: "1,200+", label: "Partner Farmers" },
        { value: "25+", label: "Countries Served" },
        { value: "10,000+", label: "Tons Exported Annually" },
        { value: "95%", label: "Customer Satisfaction" },
      ].map((stat, idx) => (
        <motion.div key={stat.label} variants={fadeInUp} custom={idx} {...motionProps}>
          <div className="text-4xl font-bold text-agri-orange mb-2">{stat.value}</div>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      variants={fadeInUp}
      {...motionProps}
      custom={4}
      className="mt-8 text-center"
    >
      {/* <h3 className="text-2xl font-bold text-agri-green mb-8">Certifications & Awards</h3>

      <motion.div
        variants={staggerContainer}
        {...motionProps}
        className="flex flex-wrap justify-center gap-4"
      >
        {[
          "ISO 22000 Certified",
          "Fairtrade Partner",
          "Organic Certified",
          "Export Excellence Award 2023",
        ].map((cert, i) => (
          <motion.div key={cert} variants={fadeInUp} custom={i} {...motionProps}>
            <Badge variant="outline" className="border-agri-green text-agri-green px-4 py-2">
              {cert}
            </Badge>
          </motion.div>
        ))}
      </motion.div> */}
    </motion.div>
  </div>
</section>

{/* Call to Action */}
<section className="py-16 bg-agri-green">
  <div className="container mx-auto px-4 text-center">
    <motion.h2
      variants={fadeInUp}
      {...motionProps}
      custom={0}
      className="text-3xl font-bold text-white mb-6"
    >
      Ready to Partner with Us?
    </motion.h2>

    <motion.p
      variants={fadeInUp}
      {...motionProps}
      custom={1}
      className="text-green-100 mb-8 max-w-2xl mx-auto"
    >
      Join our network of satisfied clients and experience the AgriExport Global difference. Let's build a
      sustainable future together.
    </motion.p>

    <motion.div variants={staggerContainer} {...motionProps} className="flex flex-col sm:flex-row gap-4 justify-center">
      <motion.div variants={fadeInLeft} custom={0} {...motionProps}>
        <Button size="lg" className="bg-agri-orange hover:bg-orange-600 text-white">
          <Link href="/contact">  Start Partnership</Link>
        </Button>
       
      </motion.div>

      <motion.div variants={fadeInRight} custom={1} {...motionProps}>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-agri-green bg-transparent"
        >
            <Link href="/products">   View Our Products</Link>
       
        </Button>
      </motion.div>
    </motion.div>
  </div>
</section>

      <Footer />
    </div>
  )
}
