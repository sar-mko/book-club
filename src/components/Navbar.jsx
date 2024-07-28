import { NavLink } from 'react-router-dom'
import { FaBookReader } from "react-icons/fa";



const Navbar = () => {
  const linkClass = ({ isActive }) => isActive ? 'bg-black text-white hover:bg-green-950 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-green-950 hover:text-white rounded-md px-3 py-2';

  return (
    <nav className="bg-teal-800  border-b border-teal-500 font-dynaPuff">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        <div
          className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          {/* <!-- Logo --> */}
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
           
            <FaBookReader
              color='#18A999'
              className="h-10 w-auto"
              alt="Library Events"
            />
            <span className="hidden md:block text-white text-2xl font-bold ml-2"
              >Library Events</span>
          </NavLink>
          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <NavLink
                to="/"
                className={linkClass}
                >Home
                
              </NavLink>
              <NavLink
                to="/events"
                className={linkClass}
                >Events </NavLink>
              <NavLink
                to="/add-event"
                className={linkClass}
                >Add Event</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar