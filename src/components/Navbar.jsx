import { NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
    <nav className="shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
           StayEase
        </NavLink>

        <div className="flex items-center gap-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600 transition duration-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Hotels
          </NavLink>

          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            About
          </NavLink>

          <NavLink
            to="/"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
        </>
    )
}