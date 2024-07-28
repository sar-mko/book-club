import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import EventListings from '../components/EventListings'
import ViewAllEvents from '../components/ViewAllEvents'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <EventListings isHome={true}/>
        <ViewAllEvents />
    </>
    
  )
}

export default HomePage