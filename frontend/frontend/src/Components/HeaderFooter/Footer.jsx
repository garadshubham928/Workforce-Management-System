import React from 'react'

function Footer() {
  return (
    <>
         {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                 
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">WorkForce</span>
                  <span className="text-sm text-gray-400">Management System</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Empowering businesses with comprehensive workforce management solutions. 
                Streamline operations, boost productivity, and manage your team with ease.
              </p>
              
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/About" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="/Help" className="text-gray-300 hover:text-white transition-colors">Help..?</a></li>
                <li><a href="/Contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
               
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                 
                  <span className="text-gray-300">info@workforce.com</span>
                </div>
                <div className="flex items-center space-x-2">
                 
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  
                  <span className="text-gray-300">123 Business Ave, Suite 100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 WorkForce Management System. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer