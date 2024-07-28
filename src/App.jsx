import { 
  Route,
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,  
} from 'react-router-dom';
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import EventsPage from './pages/EventsPage';
import NotFoundPage from './pages/NotFoundPage';
import EventPage, { eventLoader } from './pages/EventPage';
import AddEventPage from './pages/AddEventPage';
import EditEventPage from './pages/EditEventPage';

const App = () => {
  //add new events
  const addEvent = async (newEvent) => {
    const res = await fetch('/api/events',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEvent),
    });
    return;
  }
  //delete event
  const deleteEvent = async (id) => {
    console.log('delete',id)
    const res = await fetch(`/api/events/${id}`,{
      method: 'DELETE',
    });
    return;
  }
  
  //update event
  const updateEvent = async (event) => {
      const res = await fetch(`/api/events/${event.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event),
      });
      return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/add-event' element={<AddEventPage addEventSubmit={addEvent} />} />
          <Route path='/edit-event/:id' element={<EditEventPage updateEventSubmit={updateEvent} />} loader ={eventLoader}  />
          <Route path='/events/:id' element={<EventPage deleteEvent={deleteEvent} />} loader ={eventLoader}  />
          <Route path='*' element={<NotFoundPage />} />
    </Route>
  
    )
  )
  

  return <RouterProvider router={router} />
}

export default App