import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelInfo from "../components/HotelInfo";

export default function HotelDetail() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetchHotel();
  }, [id]);

  const fetchHotel = async () => {
    try {
      const res = await fetch(
        `https://demohotelsapi.pythonanywhere.com/hotels/${id}/`
      );

      const data = await res.json();

      setHotel(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!hotel) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <HotelInfo hotel={hotel} />
    </div>
  );
}