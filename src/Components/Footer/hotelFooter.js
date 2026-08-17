import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">

      <div className="container py-5">

        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">🍴 FoodHouse</h4>

            <p className="text-secondary">
              Welcome to FoodHouse. Enjoy delicious food,
              excellent service, and a comfortable dining
              experience.
            </p>
          </div>


          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-secondary text-decoration-none">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a href="/about" className="text-secondary text-decoration-none">
                  About
                </a>
              </li>

              <li className="mb-2">
                <a href="/menu" className="text-secondary text-decoration-none">
                  Menu
                </a>
              </li>

              <li>
                <a href="/contact" className="text-secondary text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>


          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Our Services</h5>

            <ul className="list-unstyled text-secondary">
              <li className="mb-2">🍕 Restaurant</li>
              <li className="mb-2">🍔 Fast Food</li>
              <li className="mb-2">🚚 Home Delivery</li>
              <li>🎉 Party & Events</li>
            </ul>
          </div>


          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>

            <p className="text-secondary mb-2">
              📍 Mumbai, India
            </p>

            <p className="text-secondary mb-2">
              📞 +91 98765 43210
            </p>

            <p className="text-secondary">
              ✉️ info@foodhouse.com
            </p>
          </div>

        </div>

      </div>


      {/* Copyright */}
      <div className="border-top border-secondary">

        <div className="container py-3">

          <div className="row">

            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-secondary">
                © 2026 FoodHouse. All Rights Reserved.
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <span className="text-secondary">
                Follow us:
              </span>

              <a href="#" className="text-white ms-3">
                Facebook
              </a>

              <a href="#" className="text-white ms-3">
                Instagram
              </a>

              <a href="#" className="text-white ms-3">
                Twitter
              </a>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}