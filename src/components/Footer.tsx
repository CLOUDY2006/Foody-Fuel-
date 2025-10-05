import logo from "./imagefoodyfuel/foodyfuellogo.jpg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white-600 rounded-full flex items-center justify-center">
               <img 
                 src= {logo}
                 alt="Logo" 
                 className="w-6 h-6 object-contain"
               />   
              </div>
              <span className="text-xl font-bold">Foody Fuel</span>
            </div>
            <p className="text-gray-400 mb-4">
              Bringing gourmet flavors to the streets, one delicious meal at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/foody.fuel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                📷
              </a>
              <a
                href="https://www.swiggy.com/city/delhi/foody-fuel-dwarka-rest1005772?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                🍴
              </a>
              <a
                href="https://www.swiggy.com/city/delhi/foody-fuel-dwarka-rest1005772?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
              >
                🍅
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 hello@foodyfuel.com</p>
              <p>📱 (+91 9871635771</p>
              <p>🕒 Mon-Sun: 5 PM - 10 PM</p>
              <p>📍 Sec-4 market Dwarka,New Delhi</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Our Journey</h3>
            <div className="space-y-2 text-gray-400">
              <p>Follow us on social media for:</p>
              <ul className="space-y-1 ml-4">
                <li>• Daily cart open/close updates</li>
                <li>• New menu items announcements</li>
                <li>• Event announcements</li>
                <li>• Behind-the-scenes content</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Foody Fuel. All rights reserved. Made with ❤️ for food lovers.</p>
        </div>
      </div>
    </footer>
  );
}