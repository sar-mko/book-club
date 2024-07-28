import {Link} from 'react-router-dom'
import Card from './Card'

const HomeCards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
            <h2 className="text-2xl font-bold">For Parents</h2>
          <p className="mt-2 mb-4">
            Browse our upcoming events and participate today
          </p>
          <Link
            to="/events"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Events
          </Link>
          </Card>
        <Card bg="bg-emerald-100 ">
        <h2 className="text-2xl font-bold">For Libraries</h2>
          <p className="mt-2 mb-4">
            List and update events at your location
          </p>
          <Link
            to="/add-event"
            className="inline-block bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-teal-600"
          >
            Add Event
          </Link>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default HomeCards