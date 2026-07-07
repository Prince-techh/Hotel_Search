import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid grid-cols-3 gap-10">


          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              StayEase
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Find the perfect hotel for your next vacation. We provide
              comfortable, luxurious, and affordable stays across India.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Hotels
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>📍 Noida, Uttar Pradesh</p>

              <p>📧 support@stayease.com</p>

              <p>📞 +91 98765 43210</p>

            </div>
          </div>

        </div>


        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

          <p>
            © 2026 StayEase. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}