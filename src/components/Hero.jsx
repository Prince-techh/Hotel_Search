import heroImage from '../assets/images/hero.jpg';
import SearchBar from './SearchBar.jsx';

export default function Hero() {
    return ( 
        <>
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Find Your Perfect Stay
        </h1>

        <p className="text-xl mb-8 max-w-2xl">
          Discover comfortable, luxurious, and affordable hotels
          for your next unforgettable trip.
        </p>

        <SearchBar />
      </div>
    </section>


        </>
    )
}
