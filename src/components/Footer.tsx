import { Leaf } from "lucide-react"
import { Facebook, Instagram, MapPin, Phone, Clock, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-agri-green text-white py-12 px-4 border-t border-green-600">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
        <img
								src="/log.jpg"
								alt="logo"
								className="h-12 "
							/>
              <span className="text-lg font-bold gravitas-one-regular">GlobalBridge Export</span>
            </div>
            <p className="text-gray-300 text-sm">
              Connecting global markets with Africa's finest agricultural products through sustainable and ethical trade
              practices.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 ">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white">
                  Export Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Premium Cocoa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Raw Cashew Nuts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Shea Butter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Palm Oil
                </a>
              </li>
            </ul>
          </div> */}
  {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-primary font-semibold text-lg"></h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300 hover:text-white">NO 25 Okezie Ugbaja Street, Victory Estate Off Ago, 
 <br></br>Lagos state, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300 hover:text-white">+2348165717097</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300 hover:text-white"> info@globalexportltd.com
</span>
              </div>
            </div>
          </div>
        
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center">
          <p className="text-white">
            © 2025 GlobalBridge Export. All rights reserved. | Privacy Policy | Terms of Service
          </p>
                 <p className="text-white">Developed and Designed by Suwebatu</p>
        </div>
      </div>
    </footer>
  )
}
