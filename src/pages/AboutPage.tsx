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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div variants={staggerContainer} {...motionProps} className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              custom={0}
              {...motionProps}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                {/* Image with animation */}
                <motion.div variants={fadeInLeft} custom={0} {...motionProps} className="flex justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative">
                    <img
                      src="/ceo.jpg"
                      alt="Gideon Idankpo"
                      className="rounded-lg shadow-lg w-full max-w-sm h-auto object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="absolute inset-0 rounded-lg bg-gradient-to-t from-agri-green/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"
                    />
                  </motion.div>
                </motion.div>

                {/* Text content with animation */}
                <motion.div variants={fadeInRight} custom={1} {...motionProps} className="space-y-6">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold text-agri-green mb-2"
                    >
                      Gideon Idankpo
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="text-agri-green font-semibold text-lg mb-2"
                    >
                      Entrepreneur
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-agri-green font-bold text-base flex items-center gap-2"
                    >
                      <span>📞</span>
                      +234 903 439 7834
                    </motion.p>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-gray-700 leading-relaxed text-base"
                  >
                    Gideon Idankpo is an ambitious entrepreneur with an academic background in Cybersecurity. He has
                    transitioned into business and agro-entrepreneurship, building a career focused on innovation,
                    sustainability, and growth in the agricultural sector. His blend of technical and business skills
                    positions him to drive modern solutions in agribusiness and enterprise development.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Button className="bg-agri-green hover:bg-agri-green/90 text-white">
                      <Link href="https://wa.me/2349034397834" target="_blank">
                        Contact Gideon
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
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
     GlobalBridge Export Ltd is a proudly African company dedicated to connecting the world with the finest agro products from the continent. We specialize in sourcing, packaging, and exporting high-quality African agricultural products to international markets.

Our mission is to showcase the richness of Africa’s farmlands by delivering fresh, natural, and premium-grade products that meet global standards. With a strong commitment to quality, reliability, and sustainability, we ensure that our clients receive only the best Africa has to offer.

At GlobalBridge Export Ltd, we are not just building trade links — we are bridging cultures and fostering lasting partnerships across the globe.
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
          Founded in 2023 by a team of agricultural experts and international trade specialists, GlobalBridge Exports Ltd began as a small operation with a big vision: to create sustainable value chains that benefit both African farmers and global consumers.

          </p>
          <p>
          
Starting with just a handful of farmers in Nigeria,, we have grown to work with over 500 farmers across West Africa, maintaining our commitment to fair trade, quality excellence, and environmental sustainability.

          </p>
          <p>
        Today, we are proud to be one of Africa's most trusted agricultural export partners, serving clients across Europe, Asia, and the Americas while continuing to support the communities that make our success possible.
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInRight} {...motionProps} custom={1}>
        <img
          src="/cocoa3.webp"
          alt="Company founders in agricultural field"
      className="rounded-lg shadow-lg w-full h-auto max-h-80 object-cover"
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
          name: "Ali Israel",
           number:"+234 810 360 8890",
          role: "Lab Technician",
          desc:
            "Ali Israel is a qualified laboratory scientist with a degree in Laboratory Science from the Federal University of Lafia. He has strong skills in diagnostic testing, microbiology, and laboratory safety, with a solid commitment to accuracy, research, and quality healthcare delivery.",
        },
        {
          icon: <Award className="h-10 w-10 text-white" />,
          name: "Mary Ali ", 
           number:"+234 813 198 9290",
          role: "Entrepreneur",
        
          desc:
            "Ali Mary is an entrepreneur and educator with a degree in Early Childhood Education from the College of Education. She runs a thriving business in agro and farm products, combining her passion for education and entrepreneurship to promote sustainable farming and quality agricultural produce.",
        },
        {
          icon: <Handshake className="h-10 w-10 text-white" />,
          name: "Gideon Idankpo ",
          number:"+234 903 439 7834",
          role: "Entrepreneur",
          desc:
            "Gideon Idankpo is an ambitious entrepreneur with an academic background in Cybersecurity. He has transitioned into business and agro-entrepreneurship, building a career focused on innovation, sustainability, and growth in the agricultural sector. His blend of technical and business skills positions him to drive modern solutions in agribusiness and enterprise development.",
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
                  <p className="text-agri-green font-bold  ">{member.number}</p>
              <p className="text-gray-600 font-bold ">{member.role}</p>
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
