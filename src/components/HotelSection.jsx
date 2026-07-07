import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import SearchBar from "./SearchBar";
import Loader from "./Loader";

export default function HotelSection() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const res = await fetch(
        "https://demohotelsapi.pythonanywhere.com/hotels/"
      );

      const data = await res.json();


      setHotels(data.data);



    } catch (error) {
      console.error("Error fetching hotels:", error);
      setError("Unable to load hotels. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filteredHotels = hotels.filter((hotel) => {
    return (
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase())
    );
  });

  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">


      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Featured Hotels
        </h2>
      </div>


      <div className="flex justify-center mb-10">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>


      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
              />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500 text-lg">
              No hotels found.
            </p>
          )}
        </div>
      )}

    </section>
  );
}