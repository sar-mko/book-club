import { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditEventPage = ({ updateEventSubmit }) => {
    const event = useLoaderData();

    const [title, setTitle] = useState(event.title);
    const [date, setDate] = useState(event.date);
    const [location, setLocation] = useState(event.location);
    const [description, setDescription] = useState(event.description);
    const [time, setTime] = useState(event.time);
    const [libraryName, setLibraryName] = useState(event.library.name);
    const [libraryAddress, setLibraryAddress] = useState(event.library.address);
    const [contactEmail, setContactEmail] = useState(event.library.contactEmail);
    const [contactPhone, setContactPhone] = useState(event.library.contactPhone);

    const navigate = useNavigate();
    const { id } = useParams();

    const submitForm = (e) => {
      e.preventDefault();

      const updatedEvent = {
          id,
          title,
          date,
          location,
          description,
          time,
          library: {
              name: libraryName,
              address: libraryAddress,
              contactEmail: contactEmail,
              contactPhone: contactPhone,
          },
      };
      updateEventSubmit(updatedEvent);

      toast.success('Event Updated Successfully');
  
      return navigate(`/events/${id}`);
    }; 

  return (
     <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Update Event</h2>

            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
               <input
                type="date"
                id="date"
                name="date"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder= "07/01/2000"
                required 
                value= {date}
                onChange={(e)=> setDate(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Event Name
                </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required 
                value= {title}
                onChange={(e)=> setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any expectations, requirements, etc"
                value= {description}
                onChange={(e)=> setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-700 font-bold mb-2"
                >Time</label>
              <input
                id="time"
                name="time"
                className="border rounded w-full py-2 px-3"
                required
                value= {time}
                type= "time"
                min="08:00" 
                max="19:00" 
                onChange={(e)=> setTime(e.target.value)}
                />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Library Location'
                required
                value= {location}
                onChange={(e)=> setLocation(e.target.value)}           
              />
            </div>

            <h3 className="text-2xl mb-5">Library Info</h3>

            <div className="mb-4">
              <label htmlFor="library" className="block text-gray-700 font-bold mb-2"
                >Library Name</label>
              <input
                type="text"
                id="library"
                name="library"
                className="border rounded w-full py-2 px-3"
                placeholder="Library Name"
                value= {libraryName}
                onChange={(e)=> setLibraryName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="library_address"
                className="block text-gray-700 font-bold mb-2"
                >Library Address</label>
              <textarea
                id="library_address"
                name="library_address"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What is the library's address?"
                value= {libraryAddress}
                onChange={(e)=> setLibraryAddress(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value= {contactEmail}
                onChange={(e)=> setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value= {contactPhone}
                onChange={(e)=> setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  )
}

export default EditEventPage