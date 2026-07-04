import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";


export default function HotelSection() {
    const [hotel ,setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search , setSearch] = useState("");

    useEffect(()=> {
        fetchHotels();
    }, []);

    const fetchHotels = async () => {
        try {
            const res =await fetch("https://demohotelsapi.pythonanywhere.com/hotels/");
            const data = res.json();
            setHotels(data);
        }
        catch(error) {
            console.log("Error fer=tching hotels:", error);
        }
        finally {
            setLoading(false);
        }
    }

    const filteredHotels = hotel.filter((hotel)=> {
        hotel.name.toLowercase().includes(search.toLowerCase()) ||
        hotel.city.toLowerCase().includes(search.toLowerCase())
    })
  
return (
    <section className="max-w-7xl mx-auto px-6 py-16">

    
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Featured Hotels
        </h2>
      </div>


      <div className="flex justify-center mb-10">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}

    </section>
  );
}