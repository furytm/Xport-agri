import { Leaf } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-agri-green text-white py-12 px-4 border-t border-green-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-lg font-bold">AgriExport Global</span>
            </div>
            <p className="text-gray-300 text-sm">
              Connecting global markets with Africa's finest agricultural products through sustainable and ethical trade
              practices.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
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

          <div>
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
          </div>

          <div>
            <h4 className="font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">ISO 9001:2015</li>
              <li className="text-gray-300">Fair Trade Certified</li>
              <li className="text-gray-300">Organic Certified</li>
              <li className="text-gray-300">HACCP Compliant</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 AgriExport Global. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
